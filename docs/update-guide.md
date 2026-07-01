# 업데이트 가이드

- 룰 상수/난이도: `src/rules/newtrpg/constants.ts`
- 다이스 파서: `src/rules/newtrpg/dice.ts`
- 상태/지속효과: `src/rules/newtrpg/effects.ts`
- 능력치/HP/공격/난이도 계산: `src/rules/newtrpg/calculation.ts`
- 판정: `src/rules/newtrpg/judgement.ts`
- 아이템/장비 효과 파서: `src/rules/newtrpg/items.ts`
- 스킬 호환: `src/rules/newtrpg/skills.ts`
- 경험치/레벨/등급: `src/rules/newtrpg/experience.ts`
- 데이터 스키마: `src/rules/newtrpg/schema.ts`
- IndexedDB: `src/storage/indexedDb.ts`
- 마이그레이션: `src/storage/migrations.ts`
- PWA 업데이트 확인: `src/pwa/update.ts`

`main` 브랜치에 push하면 GitHub Actions의 `Deploy GitHub Pages` 워크플로가 `npm install`, `npm run build`, Pages artifact 업로드, 배포를 차례대로 수행한다. Vite `base`는 `/Rpg-app/`이다.
