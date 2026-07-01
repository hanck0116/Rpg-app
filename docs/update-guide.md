# NewTRPG PWA 업데이트 가이드

## 룰/계산 수정 위치

- 능력치, HP, 공격력, 피해감소, 난이도: `src/rules/newtrpg/calculation.ts`
- 일반/상대 판정: `src/rules/newtrpg/judgement.ts`
- 커스텀 다이스: `src/rules/newtrpg/dice.ts`
- 장비/아이템 효과 문자열: `src/rules/newtrpg/items.ts`
- 경험치/등급: `src/rules/newtrpg/experience.ts`
- 시트 스키마와 버전 필드: `src/rules/newtrpg/schema.ts`, `src/rules/newtrpg/constants.ts`

## 저장 구조 변경

기존 IndexedDB 구조를 무작정 교체하지 않는다. 필드 추가는 `src/storage/migrations.ts`의 `migrateCharacter`에서 기본값을 보정한다. 호환되지 않는 변경이 필요하면 `STORAGE_VERSION`을 올리고 마이그레이션을 먼저 작성한다.

## PWA/GitHub Pages 점검

- `vite.config.ts`의 `base`는 `/Rpg-app/`이어야 한다.
- manifest 이름/아이콘은 `public/manifest.webmanifest`와 VitePWA manifest 설정을 함께 확인한다.
- 새로고침 404 방지를 위해 Workbox `navigateFallback`은 `/Rpg-app/index.html`을 유지한다.
- 앱 업데이트 안내 문구는 설정 탭에 표시된다.

## 릴리스 전 확인

```bash
npm install
npm run build
npm test
```

프록시나 레지스트리 정책으로 의존성 설치가 막히면 환경 이슈로 기록하고, 의존성이 설치된 CI 또는 로컬 환경에서 같은 명령을 재실행한다.
