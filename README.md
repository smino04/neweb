# NEWEB 성수 · 남성 전문 헤어살롱 원페이지

미니멀 · 블랙 앤 화이트 · 에디토리얼 톤의 정적 원페이지 웹사이트입니다.
정적 HTML/CSS/JS로만 구성되어 있어 별도 빌드 없이 바로 배포할 수 있습니다.

## 실행

`index.html` 파일을 브라우저에서 열면 됩니다. 로컬 서버로 확인하려면:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## 구성

- **Hero** — NEWEB 성수 로고
- **Portfolio** — 포트폴리오 갤러리 (사진 계속 추가 예정)
- **Reservation** — 네이버 예약 버튼 (포트폴리오 바로 다음)
- **Team** — 강단 원장 소개 + 스탭 소개 (상단 내비게이션 "Team"으로만 진입)
- **Reviews** — 고객 후기

## 내 콘텐츠로 교체하기

폰트: Pretendard(한글) + Cormorant Garamond(세리프 포인트) — CDN 로드.
로고: 업로드된 로고 이미지를 벡터(`assets/logo-mark.svg`)로 변환해 사용 중 (어떤 크기에서도 선명).

| 항목 | 위치 | 방법 |
| --- | --- | --- |
| **포트폴리오 사진** | `assets/work-01.jpg` ~ `work-09.jpg` | **파일명만 맞춰서 GitHub의 assets 폴더에 업로드하면 자동으로 반영됩니다.** (없으면 "PORTFOLIO" 텍스트로 자동 대체) 9장보다 더 올리고 싶으면 `index.html`의 `.gallery` 안 `<figure>` 블록을 복사해서 `work-10`, `work-11`... 로 이어가면 됩니다. |
| 원장 프로필 사진 | `assets/director.png` | 이 경로에 사진 파일을 넣으세요. (없으면 자동으로 텍스트 대체 표시) |
| **스탭(디자이너) 사진** | `assets/staff-01.jpg`, `staff-02.jpg`, `staff-03.jpg` | 파일명만 맞춰서 업로드하면 자동 반영됩니다. (없으면 "STAFF" 텍스트로 자동 대체) 이름·직책을 바꾸려면 `index.html`의 `.team__card` 부분을 수정하세요. |
| 고객 후기 | `index.html` `.reviews__grid` | 텍스트 콘텐츠라 자동 반영은 안 되고, 후기 문구를 직접 수정하거나 Claude에게 요청해서 반영하세요. |
| 네이버 예약 링크 | `index.html` `.cta--naver`의 `href` | 링크만 바꿔주면 됩니다. |
| 주소 · 영업시간 | `index.html` `.contact__info` | 실제 정보로 수정하세요. |

## 특징

- 반응형 · 모바일 우선
- 스크롤 등장 애니메이션 (`prefers-reduced-motion` 대응)
- 이미지 흑백 처리, 호버 시 컬러 전환
