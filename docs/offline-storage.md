# 오프라인 저장과 백업

## 저장 원칙

- 서버 DB 없이 브라우저 IndexedDB만 사용한다.
- DB 이름은 `newtrpg-sheet-manager`이다.
- 저장소는 `characters`, `npcs`, `items`, `scenarios`, `settings`, `backups`, `rules`를 유지한다.
- 플레이어 캐릭터와 NPC는 기존 구조를 유지하면서 `createdAt`, `updatedAt`, `appVersion`, `rulesVersion`, `storageVersion`, `sheetVersion` 메타데이터를 포함한다.

## 자동 저장

- 새 플레이어 시트는 생성 즉시 `characters` 저장소에 저장된다.
- 입력값 변경 시 `saveCharacter` 또는 `saveNpc`가 호출되고 `updatedAt`/`lastSavedAt`이 갱신된다.
- 화면에는 마지막 저장 시간과 저장 성공/실패 메시지가 표시된다.
- IndexedDB 오류는 사용자 메시지로 표시한다.

## 마지막 캐릭터 유지

마지막 선택 캐릭터 id는 `localStorage`의 `newtrpg-last-character`에 저장한다. 앱을 닫았다 다시 열면 IndexedDB에서 캐릭터 목록을 읽고 마지막 캐릭터를 다시 선택한다.

## 백업/복구

- 전체 백업 파일명은 `newtrpg-backup-YYYY-MM-DD-HH-mm-ss.json` 형식이다.
- 캐릭터 백업 파일명은 `newtrpg-character-캐릭터이름-YYYY-MM-DD-HH-mm-ss.json` 형식이다.
- 전체 가져오기는 실행 전 확인창을 표시한다.
- 잘못된 JSON은 앱을 중단하지 않고 오류 메시지로 안내한다.
- 복구 성공 후 캐릭터/NPC 목록을 다시 읽는다.

## 데이터 초기화

전체 데이터 초기화는 복구 불가능하므로 두 번 확인한다. 초기화 전 JSON 백업을 권장한다.
