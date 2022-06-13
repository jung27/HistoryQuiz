const humans = [];
const kings = [];
const countries = [];
const wars = [];
const ages = [];

const mainTypes = [kings, countries];
const questionTypes = ["subjective", "objective"];

class Human {
  constructor(name, ach, country) {
    this.name = name;
    this.ach = ach;
    this.country = country;

    humans.push(this);
  }
}

class King extends Human {
  constructor(name, ach, country) {
    super(name, ach, country);
    kings.push(this);
  }
}

class Country {
  constructor(name, info) {
    this.name = name;
    this.info = info;

    countries.push(this);
  }
}

class War{
  constructor(name, process, winner, loser){
    this.name = name;
    this,process = process;
    this.winner = winner;
    this,loser = loser;
    
    wars.push(this);
  }
}

class Age{
  constructor(name, period, feature){
    this.name = name;
    this.period = period;
    this.feature = feature;
    
    ages.push(this);
  }
}

new Age("구석기시대", "약 70만년 전", [
  "도구 사용: 돌과 나무, 동물 뼈 등을 이용, 땐석기 사용",
  "초기 도구: 찍개, 자르개, 주먹도끼",
  "후기 도구: 슴베찌르개, 돌화살촉 등 정교한 도구 사용, 흑요석(일본과 교류)",
  "사회: 빈부 차이나 계급이 없는 평등한 사회",
])

const goguryeo = new Country("고구려", [
  "졸본에서 건국 후 국내성으로 천도",
  "산악 지형(한과 경쟁, 정복 활동), 국가 운영(5부)",
  "왕 아래 상가, 고추가 등의 관직, 제가 회의",
  "제천 행사(동맹)",
  "혼인 풍습(서옥제)",
  "말타기와 활쏘기",
]);
const baekjae = new Country("백제", [
  "비류와 온조 등 부여·고구려의 유이민 세력이 한강 하류의 토착 세력과 연합하여 건국(기원전 18)",
  "마한의 소국으로 출발, 위례성에 도읍",
]);
const shilla = new Country("신라", [
  "박혁거세의 유이민 세력과 경주·울산 지역의 토착 세력이 결합하여 건국",
  "진한의 소국인 사로국에서 출발",
  "지리적 단점으로 주변 나라들보다 국가 발전이 늦음",
]);

const gaya = new Country("가야", [
  "금관국이 낙동강 하류(김해)의 변한 지역에 위치하여 연맹 형성",
]);

const buyeo = new Country("부여", [
  "만주 쏭화강 일대(평야 지대)에 위치",
  "마가, 우가, 저가, 구가 등의 관리",
  "제천 행사(영고), 농경과 목축 발달"
]);

const okjeo = new Country("옥저", ["혼인 풍습(민며느리제)", "가족 공동묘"]);

const dongye = new Country("동예", ["책화", "제천 행사(무천)", "특산물(단궁, 과하마, 반어피)"])

//고구려 왕
new King("태조왕", ["옥저를 정복하고, 요동 지방으로 진출을 꾀함"], goguryeo);

new King("미천왕", ["낙랑군을 점령하여 중국 군현 세력을 몰아냄."], goguryeo);

new King(
  "고국원왕",
  ["전연과 우호 관계", "한반도 남쪽으로 진출하여 백제 압박"],
  goguryeo
);

new King(
  "소수림왕",
  ["태학 설립", "율령 반포", "불교를 공인하여 중앙 집권 체제 강화"],
  goguryeo
);

new King(
  "광개토대왕",
  [
    "백제를 공격하여 한강 이북 지역을 확보",
    "신라에 침입한 왜군을 물리치고 금관가야를 공격",
    "후연 격파",
    "거란과 동부여를 굴복시킴",
    "'영락' 연호 사용",
  ],
  goguryeo
);

new King(
  "장수왕",
  [
    "평양 천도(427)",
    "남진 정책",
    "백제의 수도인 한성 함락",
    "고구려·유연·북위·남조가 공존하는 다원적 국제질서 형성",
  ],
  goguryeo
);

//백제왕
new King("고이왕", ["관직과 관등제 마련", "국가 체제 정비"], baekjae);

new King(
  "근초고왕",
  [
    "마한 복속",
    "가야 지역 진출",
    "중국 동진과 왜를 잇는 해상 교역 활발",
    "고구려 남하 저지(고국원왕 격퇴)",
  ],
  baekjae
);

new King(
  "동성왕",
  ["혼인으로 신라와 동맹 강화", "귀족 세력 견제, 왕권 강화"],
  baekjae
);

new King(
  "무령왕",
  [
    "농업 생산 독려",
    "지방의 22담로에 왕족을 파견하여 지방 통제 강화",
    "활발한 대외 무역 활동",
  ],
  baekjae
);

new King(
  "성왕",
  [
    "사비 천도",
    "중앙 관청과 지방 제도 재정비",
    "국호 '남부여'",
    "중국 남조와 교류",
    "불교와 유교 장려",
    "왜에 불교 전파",
    "왜에 오경박사 등 전문가 파견",
  ],
  baekjae
);

//신라왕
new King("내물왕", ["김씨의 왕위 세습", "'마립간'(대군장) 칭호 사용"], shilla);

new King(
  "지증왕",
  [
    "순장 금지",
    "우경 보급으로 농업 생산 기반 확충",
    "수도에 시장 개설",
    "국호 '신라' 확정",
    "'왕' 호칭 사용",
  ],
  shilla
);

new King(
  "법흥왕",
  [
    "병부 설치",
    "율령 반포",
    "공복 제도 실시",
    "불교 공인",
    "상대등 설치",
    "'태왕'을 칭하고 연호를 사용함으로서 중앙 집권 체제 확립",
  ],
  shilla
);

new King(
  "진흥왕",
  [
    "백제와 함께 고구려 공격",
    "나제 동맹을 깨고 한성 지역 점령",
    "백제 성왕이 관산성 전투에서 전사",
    "함흥평야 일대까지 진출",
    "4개의 순수비와 단양 신라 적성비 건립",
    "신라의 도약: 경제·군사적 요충지인 한강 유역 확보, 황해를 통해 중국과 직접 교역",
    "화랑도 재편: 세속 5계 실천, 인재 양성, 계급간 갈등 조절·완화",
    "불교 장려: 황룡사 건립, 국가의 정신적 통합 모색",
  ],
  shilla
);

kings.forEach((element) => {
  console.log(element.name);
});
