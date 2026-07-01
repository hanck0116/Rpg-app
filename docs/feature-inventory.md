# NewTRPG 기능 구현 현황

상태값은 `완료`, `부분 구현`, `미구현`, `보류`로 통일한다.

| 기능명 | 앱 구현 파일 | 구현 상태 | 비고 |
|---|---|---|---|
| 플레이어 시트 생성/수정/자동 저장 | `src/main.tsx`, `src/storage/indexedDb.ts` | 완료 | 생성 즉시 IndexedDB 저장, 입력 변경 저장, 저장 결과 표시 |
| 필수 버전/시간 메타데이터 | `src/rules/newtrpg/schema.ts` | 완료 | id, createdAt, updatedAt, app/rules/storage/sheet version |
| 캐릭터 선택/복제/삭제 | `src/main.tsx` | 완료 | 마지막 선택 캐릭터 localStorage 유지, 삭제 확인창 |
| 전체 데이터 초기화 경고 | `src/main.tsx` | 완료 | 2단계 확인창 |
| 모바일 탭 UI | `src/main.tsx`, `src/style.css` | 완료 | 권장 10개 탭, 좁은 화면 대응 |
| 대시보드 HP/능력치/최근 결과 | `src/main.tsx` | 완료 | HP 큰 표시, 6대 능력치 카드 |
| 온라인/오프라인 표시 | `src/main.tsx`, `src/pwa/update.ts` | 완료 | navigator online 이벤트 |
| 일반 판정 | `src/rules/newtrpg/judgement.ts`, `src/main.tsx` | 완료 | 자동성공/대성공/대실패/상세 표시 |
| 상대 판정 | `src/rules/newtrpg/judgement.ts`, `src/main.tsx` | 완료 | NPC와 다른 플레이어 캐릭터 대상, 동률 처리 |
| 커스텀 다이스 | `src/rules/newtrpg/dice.ts`, `src/main.tsx` | 완료 | 복합식, +/- 다이스, 오류 안내 |
| 효과 문자열 파싱 | `src/rules/newtrpg/items.ts` | 완료 | 쉼표/세미콜론/줄바꿈 복수 효과 |
| 장비/아이템 추가/제거/효과 편집 | `src/main.tsx` | 완료 | 효과 편집 시 보너스 재계산 |
| 전투 수치 계산 | `src/rules/newtrpg/calculation.ts` | 완료 | 물리/정신/마법/피해감소/최대HP |
| NPC 전투시트 | `src/main.tsx`, `src/rules/newtrpg/schema.ts` | 부분 구현 | 생성/수정/삭제/피해/회복 완료, 상세 장비 UI는 플레이어 탭 중심 |
| 피해/회복/전체 회복 | `src/main.tsx` | 완료 | 피해감소 계산 상세 메시지 |
| 경험치와 성장 | `src/rules/newtrpg/experience.ts`, `src/main.tsx` | 완료 | 직접 경험치, 임무 위험도, 레벨업/다운, 등급 표시 |
| 전체/캐릭터 백업과 복구 | `src/storage/indexedDb.ts`, `src/main.tsx` | 완료 | JSON 내보내기/붙여넣기 가져오기, 오류 처리 |
| Obsidian Markdown 가져오기 | `src/main.tsx` | 부분 구현 | frontmatter 일부 필드만 안전 파싱 |
| PWA 오프라인 캐시 | `vite.config.ts`, `public/manifest.webmanifest` | 완료 | `/Rpg-app/` base, navigate fallback, Workbox 캐시 |
| 업데이트 안내 | `src/main.tsx`, `src/pwa/update.ts` | 완료 | 설정 탭 새 버전 안내 |
| 계산 로직 테스트 | `src/rules/newtrpg/rules.test.ts` | 완료 | Vitest 대상 확대 |
