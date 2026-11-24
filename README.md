# 2026년 제3차 경기도 환경교육 관계자 워크숍 — 만족도 조사

GitHub Pages(화면) + Firebase Firestore(응답 저장) 구성입니다.

| 파일 | 내용 |
|---|---|
| `index.html` | 참여자용 설문 페이지 (QR로 접속) |
| `admin.html` | 관리자용 결과 페이지 — 참여 인원, 문항별 평균·분포, 응답자 정보, 자유 의견, CSV 다운로드, 녹색 테두리 QR |
| `js/survey-data.js` | 문항 내용 (여기서 문구 수정) |
| `js/config.js` | Firebase 웹 설정값 입력 |
| `firestore.rules` | Firestore 보안 규칙 |

## 문항 구성
- 응답자 정보(선택): A. 소속
- 만족도 10문항(필수, 5점 척도): 전반 만족도, 일시·장소, 사전 안내·홍보, 진행, 성과공유회, 시상식, 체험 프로그램, 역량강화 강연, 교류·네트워크, 재참여 의향
- 서술형 1문항(선택): 좋았던 점·개선점·2027년에 바라는 점

## 1. Firebase 준비 (약 10분)
1. https://console.firebase.google.com → 프로젝트 만들기 (기존 프로젝트를 써도 됩니다)
2. **빌드 > Firestore Database** → 데이터베이스 만들기 → 위치 `asia-northeast3 (서울)` → 프로덕션 모드
3. **Firestore > 규칙** 탭에 `firestore.rules` 내용을 붙여넣고, `ADMIN_EMAIL@example.com` 을 관리자 이메일로 바꾼 뒤 **게시**
4. **빌드 > Authentication** → 시작하기 → 로그인 방법에서 **이메일/비밀번호** 사용 설정
   → **사용자** 탭에서 관리자 계정(위 이메일) 추가
5. **프로젝트 설정(톱니바퀴) > 일반 > 내 앱** → 웹 앱(</>) 추가 → 표시되는 `firebaseConfig` 값을 `js/config.js` 에 붙여넣기
6. **Authentication > 설정 > 승인된 도메인** 에 `아이디.github.io` 추가

## 2. GitHub Pages 배포
1. GitHub에서 새 저장소 생성 (예: `gg-env-workshop-survey`, Public)
2. 이 폴더 전체를 업로드 (VS Code 소스 제어 또는 웹에서 Add file → Upload files)
3. 저장소 **Settings > Pages** → Source: `Deploy from a branch`, Branch: `main` / `(root)` → Save
4. 1~2분 뒤 주소 확인
   - 설문: `https://아이디.github.io/gg-env-workshop-survey/`
   - 결과: `https://아이디.github.io/gg-env-workshop-survey/admin.html`

## 3. QR 코드
결과 페이지(admin.html) 하단에서 설문 주소로 만든 **녹색 테두리 QR**을 PNG로 내려받을 수 있습니다.
네이버 QR 등 다른 QR을 쓰셔도 설문 주소(index.html)만 연결하면 됩니다.

## 참고
- 한 기기에서 제출하면 "이미 제출" 화면이 나옵니다(브라우저 저장 기준, 중복 방지 보조 수단).
- CSV는 엑셀에서 바로 열립니다(한글 깨짐 방지 처리).
- 결과 페이지의 **인쇄 / PDF** 버튼으로 결과보고서 첨부용 PDF를 만들 수 있습니다.
