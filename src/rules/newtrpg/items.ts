import { EffectBonus, OwnedEntry } from './schema';
import { STAT_NAMES, StatName } from './constants';

export function parseEffectString(text = ''): EffectBonus {
  const bonus: EffectBonus = { stats: {} };
  for (const raw of text.split(/[,\n]/)) {
    const m = raw.trim().match(/^(힘|민첩|체력|지능|지혜|외모|물리공격력|정신공격력|마법공격력|피해감소|최대HP|판정난이도|난이도)\s*([+-])\s*(\d+)/);
    if (!m) continue;
    const v = (m[2] === '-' ? -1 : 1) * Number(m[3]);
    const k = m[1];
    if ((STAT_NAMES as readonly string[]).includes(k)) bonus.stats![k as StatName] = (bonus.stats![k as StatName] ?? 0) + v;
    else if (k === '물리공격력') bonus.physicalAttack = (bonus.physicalAttack ?? 0) + v;
    else if (k === '정신공격력') bonus.mentalAttack = (bonus.mentalAttack ?? 0) + v;
    else if (k === '마법공격력') bonus.magicAttack = (bonus.magicAttack ?? 0) + v;
    else if (k === '피해감소') bonus.damageReduction = (bonus.damageReduction ?? 0) + v;
    else if (k === '최대HP') bonus.maxHp = (bonus.maxHp ?? 0) + v;
    else bonus.difficulty = (bonus.difficulty ?? 0) + v;
  }
  return bonus;
}
export function parseRegistrationString(s: string, kind = '장비'): OwnedEntry {
  const [name = '', grade = '', price = '0', effect = ''] = s.split('|');
  return { id: crypto.randomUUID(), name: name.trim() || '이름 없음', kind, grade: grade.trim(), price: Number(price) || 0, effect: effect.trim(), bonus: parseEffectString(effect) };
}
export const DEFAULT_EQUIPMENT = ['철검|일반|3|힘 +1, 물리공격력 +2', '가죽 갑옷|일반|4|피해감소 +1, 최대HP +5'].map((s) => parseRegistrationString(s, '장비'));
