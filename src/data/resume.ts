export type HighlightItem = {
  strong: string;
  text: string;
};

export type ExperienceItem = {
  company: string;
  companyKo?: string;
  team?: string;
  period: string;
  role: string;
  location?: string;
  highlights: HighlightItem[];
};

export type EducationItem = {
  school: string;
  schoolKo?: string;
  degree: string;
  period?: string;
  location: string;
  detail?: string;
};

export const experiences: ExperienceItem[] = [
  {
    company: "Addeep",
    companyKo: "애딥",
    team: "Product Planning Center",
    period: "2026.03 - 재직 중",
    role: "Project Leader · 서비스기획",
    location: "대한민국",
    highlights: [
      {
        strong: "PiMS Partners 커머스 Admin 기획 리드",
        text: "상품 CRUD, 카테고리, 노출 로직, 벤더·ERP·PG 연동 범위 정의",
      },
      {
        strong: "커머스 운영 모델 구조화",
        text: "직판·벤더·공동구매 모델을 거래·정산·검수 흐름으로 정리하고 정책 기준 수립",
      },
      {
        strong: "RBAC 기반 관리자 권한 체계 설계",
        text: "운영자·관리자별 접근 권한과 운영툴 IA 구조 정리",
      },
      {
        strong: "상품·광고·콘텐츠 데이터 흐름 정의",
        text: "커머스 운영 관점에서 정보 구조와 화면 흐름 설계",
      },
      {
        strong: "AX 업무 프로세스 도입",
        text: "Cursor·GPT를 활용해 와이어프레임·스토리보드 제작 리드타임 단축",
      },
      {
        strong: "개발 핸드오프 문서화",
        text: "화면정의서·정책 문서·예외 케이스 정리 및 이해관계자 리뷰 사이클 운영",
      },
    ],
  },
  {
    company: "Law Alliance",
    companyKo: "로얼라이언스",
    team: "기획팀",
    period: "2024.11 - 2025.11",
    role: "사원/팀원 · 서비스기획",
    location: "서울",
    highlights: [
      {
        strong: "부동산 거래 플랫폼 하우스딜 A-Z 기획",
        text: "사용자 정의부터 서비스 구조, 화면 흐름, 운영 정책까지 단독 설계",
      },
      {
        strong: "문제 정의 및 개선 방향 도출",
        text: "시장 조사, 5WHYs, AS-IS / TO-BE 분석 기반으로 서비스 개선안 정리",
      },
      {
        strong: "사용자 행동 중심 플로우 설계",
        text: "페르소나·유저저니·플로우차트 기반으로 매물 탐색, 거래 요청, 검증, 계약 흐름 구조화",
      },
      {
        strong: "백오피스 IA 및 화면 설계",
        text: "운영자가 거래 데이터와 검증 상태를 관리할 수 있는 구조 설계",
      },
      {
        strong: "운영 정책 수립",
        text: "거래·검증·예외 상황을 반영한 서비스 규칙 초안 작성",
      },
      {
        strong: "신규 서비스 기획 산출물 작성",
        text: "체크팀 소개서·매뉴얼 제작, 로팀 와이어프레임 역기획 수행",
      },
    ],
  },
  {
    company: "SilversLab",
    companyKo: "실버스랩",
    team: "AI Senior Concierge Service",
    period: "2024.08 - 2024.11",
    role: "사원/팀원 · 앱기획",
    location: "대한민국",
    highlights: [
      {
        strong: "시니어 컨시어지 AI 서비스 PM",
        text: "PM 1명 체계에서 기획, 커뮤니케이션, 프로젝트 매니지먼트 담당",
      },
      {
        strong: "시니어 사용자 여정 설계",
        text: "온보딩, 상담, 요청 접수, 응답 확인까지의 핵심 사용 흐름 정의",
      },
      {
        strong: "IA·화면 기획·화면 설계서 작성",
        text: "앱 서비스 구조와 개발 범위를 구체화",
      },
      {
        strong: "AI 챗봇 대화 흐름 기획",
        text: "사용자 입력 시나리오, 응답 구조, 서비스 정책 연결",
      },
      {
        strong: "백오피스 기획",
        text: "상담·사용자·콘텐츠 관리 흐름을 운영 관점에서 정리",
      },
      {
        strong: "외주 개발·디자인 협업 관리",
        text: "기획 QA, 디자인 QA, 일정 조율 및 산출물 품질 관리",
      },
      {
        strong: "서비스 방향성·운영 정책 수립",
        text: "시장 조사와 리서치 기반으로 가격 정책까지 정리",
      },
    ],
  },
  {
    company: "Comwithus",
    companyKo: "컴위더스",
    team: "개발팀",
    period: "2024.05 - 2024.07",
    role: "사원/팀원 · 개발PM",
    location: "서울",
    highlights: [
      {
        strong: "스타덤·K탑스타 앱 유지보수 및 신규 앱 A-Z 기획",
        text: "요구사항 정리부터 화면 설계, 일정 관리까지 수행",
      },
      {
        strong: "K-pop 투표 플랫폼 사용자 흐름 구조화",
        text: "투표 참여, 랭킹, 이벤트, 콘텐츠 소비 흐름을 행동 기준으로 정리",
      },
      {
        strong: "신규 기능 UX/UI 기획",
        text: "화면 설계서를 작성해 개발·디자인 협업 기준 마련",
      },
      {
        strong: "백오피스 기능 정의",
        text: "투표·콘텐츠·운영 데이터 관리 구조 설계",
      },
      {
        strong: "개발·디자인 일정 관리",
        text: "디자이너·개발자와 협업하며 커뮤니케이션 리드",
      },
      {
        strong: "외부 이해관계자 커뮤니케이션",
        text: "SPOTVnews·MK스포츠 진행 사항 팔로업 및 신규 앱 제안서 작성",
      },
      {
        strong: "리뉴얼 UX/UI 및 기능 정의",
        text: "기존 앱의 사용성과 운영 효율 개선 방향 제안",
      },
    ],
  },
  {
    company: "BSK Corporation",
    companyKo: "비에스케이코퍼레이션",
    team: "마케팅팀",
    period: "2022.09 - 2023.07",
    role: "사원/팀원 · 마케팅기획",
    location: "대한민국",
    highlights: [
      {
        strong: "화이트머스크 프로모션 프로젝트 리딩",
        text: "향수 카테고리 매출 18% 증가를 목표로 판매 전략 및 실행 계획 수립",
      },
      {
        strong: "카테고리 판매 흐름 분석",
        text: "향수·기프트·액세서리 판매 기획 및 유통기한 임박 제품 프로모션 기획",
      },
      {
        strong: "품절 리스크 관리",
        text: "연/분기별 오더 수량 관리 및 글로벌 배송 이슈 추적",
      },
      {
        strong: "SNS 콘텐츠 기획·운영",
        text: "광고 인게이지먼트 관리, 촬영 제품 셀렉 및 촬영 디렉션 수행",
      },
      {
        strong: "크로스펑셔널 협업",
        text: "온라인팀·영업팀·SCM팀·디자인팀 사이에서 일정, 재고, 메시지 조율",
      },
      {
        strong: "PM 관점의 기반 형성",
        text: "사용자 반응, 판매 지표, 운영 제약을 함께 고려하는 사고방식 확보",
      },
    ],
  },
];

export const education: EducationItem[] = [
  {
    school: "Dongguk University",
    schoolKo: "동국대학교 서울캠퍼스",
    degree: "영어통번역학과 · 학사 졸업",
    period: "2016.03 - 2020.08",
    location: "Seoul, Korea",
    detail:
      "영문 자료 리서치, 문서 독해, 커뮤니케이션 역량을 기반으로 다양한 도메인의 요구사항을 빠르게 이해하고 정리하는 강점을 갖췄습니다.",
  },
  {
    school: "Fast Campus PM Bootcamp",
    schoolKo: "패스트캠퍼스 PM 부트캠프",
    degree: "PM 부트캠프 수료 · 우수수료생",
    period: "2023.08 - 2024.01",
    location: "Product Management",
    detail:
      "문제 정의, 유저 플로우, 와이어프레임, 서비스 전략 기획을 실습했고, 멍냥제 우수사례 수상과 야놀자 프로젝트 참여를 통해 PM 사고방식을 훈련했습니다.",
  },
  {
    school: "Language & Certification",
    schoolKo: "어학 및 자격",
    degree: "TOEIC 875 · OPIC Advanced Low · GAIQ",
    period: "2024.03",
    location: "Certification",
    detail:
      "영어 실무 커뮤니케이션과 Google Analytics 기반 데이터 이해 역량을 바탕으로 리서치, 협업, 지표 해석에 강점을 갖추고 있습니다.",
  },
];