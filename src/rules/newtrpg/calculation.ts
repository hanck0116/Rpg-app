import { Character, EffectBonus, StatBlock } from './schema';
import { STAT_NAMES, StatName } from './constants';

const sum = (xs: Array<number | undefined>): number => xs.reduce<number>((a, b) => a + (b ?? 0), 0);

export function collectBonuses(c: Character): EffectBonus[] {
  return [...c.equipment, ...c.items].map((x) => x.bonus).concat(c.effects.map((e) => e.bonus));
}

export function calculateStats(c: Character): StatBlock {
  const bonuses = collectBonuses(c);
  const out = structuredClone(c.stats) as StatBlock;
  for (const s of STAT_NAMES) {
    const current = out[s];
    const item = sum(bonuses.map((b) => b.stats?.[s]));
    const effect = sum(c.effects.map((e) => e.bonus.stats?.[s]));
    const dragon = s === '민첩' && c.dragonScaleActive ? -5 : 0;
    const slime = c.race.includes('슬라임') && s === '외모' ? -current.base : 0;
    out[s] = {
      ...current,
      item,
      effect,
      final: Math.max(0, current.base + current.race + current.job + item + current.skill + current.temporary + effect + dragon + slime),
    };
  }
  return out;
}

export function maxHp(c: Character): number {
  const st = calculateStats(c);
  return Math.max(1, st['체력'].final * 10 + c.maxHpBonus + sum(collectBonuses(c).map((b) => b.maxHp)));
}

export function physicalAttack(c: Character): number {
  const st = calculateStats(c);
  const berserk = c.job.includes('광전사') ? Math.floor((maxHp(c) - c.currentHp) / 10) : 0;
  return Math.floor((st['힘'].final + st['체력'].final) / 2) + c.physicalAttackBonus + berserk + sum(collectBonuses(c).map((b) => b.physicalAttack));
}

export function mentalAttack(c: Character): number {
  const st = calculateStats(c);
  return Math.floor((st['지능'].final + st['지혜'].final) / 2) + c.mentalAttackBonus + sum(collectBonuses(c).map((b) => b.mentalAttack));
}

export function difficulty(c: Character, base: number): number {
  const human = c.race === '인간' ? -5 : 0;
  return Math.max(1, base + c.difficultyBonus + human + sum(collectBonuses(c).map((b) => b.difficulty)));
}

export const effectiveStat = (c: Character, s: StatName): number => calculateStats(c)[s].final;
