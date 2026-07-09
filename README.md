# baanbok-page

[baanbok](https://github.com/BaeJinSeop) — 운동·식단 체크 앱의 소개/다운로드 랜딩 페이지.

모바일 우선(최대 440px 단일 컬럼) 정적 페이지. 빌드 단계 없이 순수 HTML/CSS/JS로 구현되어 GitHub Pages에 그대로 배포됩니다.

## 구조

| 파일 | 역할 |
|------|------|
| `index.html` | 랜딩 본체 — 히어로(오늘 목업에 흐름 스트립 포함), 핵심 기능 4개, **흐름 쇼케이스**(스트립·알림·휴식 타이머 카드 목업), 추세 다크 쇼케이스, **미니 기능 그리드 6개**(운동 사전 105종·펄스·물 마시기·공유 코드·오프라인·게스트), 철학 인용, 다운로드 CTA, 푸터. 폰/카드 목업은 전부 정적 HTML로 재현 |
| `privacy.html` | 개인정보처리방침 — 앱의 개인정보 처리방침과 동일 내용. 랜딩 테마 토큰·토글 재사용 |
| `terms.html` | 이용약관 — baanbok 서비스 이용 조건. 랜딩 테마 토큰·토글 재사용 |
| `delete-account.html` | 계정 삭제 요청 — 앱 내 직접 탈퇴 경로 안내 + 앱 접근 불가 시 이메일 요청 대안. 스토어 심사 요건 충족용 |
| `favicon.svg` | 파비콘 — 앱 아이콘과 동일한 녹색 배경(#14B87A) + 로고 SVG. 모든 페이지에 적용 |
| `styles.css` | 리셋, 라이트/다크 테마 토큰, 임베드 화면 전용 고정 팔레트, 스토어 배지 |
| `app.js` | 테마 토글 + 시스템 추종 (`localStorage['baanbok-theme']`, 앱 화면들과 공유하는 키) |
| `lang.js` | 언어 전환 엔진 + 사전 5종(ko·en·ja·zh·es — 앱 언어팩과 용어 통일, `localStorage['baanbok-lang']`, 브라우저 언어 자동 감지·미지원=en). `data-i18n`/`data-i18n-html`로 텍스트 교체, `data-lang-block`은 법률 본문 ko/en 원문만 존재 — ja/zh/es에선 en 블록 폴백 |
| `.nojekyll` | GitHub Pages가 파일을 그대로 서빙하도록 |

## 테마

- 우상단 버튼으로 라이트 ↔ 다크 토글, 선택값은 `localStorage['baanbok-theme']`에 저장.
- 저장값이 없으면 OS 설정(`prefers-color-scheme`)을 따르고, OS 모드 변경 시 즉시 반영.
- 첫 페인트 전 인라인 스크립트로 테마를 적용해 깜빡임(FOUC) 방지.
- 히어로/쇼케이스에 박힌 두 폰 화면은 **테마와 무관하게 고정**(오늘=라이트, 추세=다크) — 디자인 의도.

## 로컬 미리보기

정적 파일이라 그냥 열어도 되지만, `localStorage`/폰트를 위해 간단한 서버 권장:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## 배포 (GitHub Pages)

저장소 Settings → Pages → Source: `Deploy from a branch` → `main` / `/ (root)`.
배포 URL: `https://baejinseop.github.io/baanbok-page/`

## TODO

- ~~스토어 배지의 `href="#"`를 실제 App Store / Google Play URL로 교체.~~ ✅ 양대 스토어 실링크 연결 완료(2026-07-09, Android 첫 출시 반영).
- 폰 목업을 실제 스크린샷 PNG로 교체 가능(현재는 충실히 재현한 정적 HTML).
- ~~랜딩 전체 ja/zh/es 현지화~~ ✅ 완료(2026-07-09) — 사전 5종 97키 동수. 법률 본문(privacy/terms/delete)의 ja/zh/es 원문 번역은 남음(현재 en 폴백).

---

디자인 핸드오프(`design_handoff_landing`)의 hi-fi 목업을 대상 토큰/스펙에 맞춰 재현했습니다.
