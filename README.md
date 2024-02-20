# 🚗 자동차 API를 활용한 사이트 : Car Showcase

![car_main](https://github.com/YeoDaSeul4355/car_showcase/assets/125419623/f04bdcf0-2009-40f7-9b0d-cd31c693e941)


RapidAPI에서 제공하는 자동차 API를 활용하여 카탈로그 형식으로 제작한 사이트입니다.
> View Demo : <a href="https://car-showcase-jjul.netlify.app/" target=_blank>https://car-showcase-jjul.netlify.app/</a>

![car_sub](https://github.com/YeoDaSeul4355/car_showcase/assets/125419623/5ccee91d-88a0-466f-8a9a-692f40892deb)

**자동차 이미지 API key 만료로 인해 세부 이미지는 동일한 이미지로 대체하였습니다.**

## 👋 소개
* 자동차 카탈로그: 이 프로젝트에는 사용자가 다양한 자동차 모델을 살펴볼 수 있는 포괄적인 자동차 카탈로그가 포함되어 있습니다. 카탈로그를 통해 사용자는 제조사, 모델, 연료 유형 및 연도를 포함한 다양한 기준에 따라 자동차를 필터링할 수 있습니다.
* 필터링 기능: 사용자는 제조업체, 모델, 연료 유형 및 연도에 대한 특정 옵션을 선택하여 편리하게 자동차 카탈로그를 필터링할 수 있습니다.
* 차량 세부 정보: 카탈로그에서 차량 카드를 클릭하면 선택한 차량에 대한 자세한 정보가 사용자에게 제공됩니다. 사용자는 제조업체의 세부 정보를 탐색하고 다양한 각도에서 차량의 사진을 볼 수 있어 차량의 디자인과 특징을 포괄적으로 이해할 수 있습니다.

## 🔧 사용 스택 
* React
* Next.js
* TypeScript
* TailwindCSS
* PostCSS

## ✍️ 구현 내역
* Next.js 13 앱 라우터 및 서버 측 렌더링 사용
* 고급 검색 기능 구현
* 필터링 기능 생성
* 메타데이터 및 SEO 최적화
* 사용자 정의 필터, 콤보 상자 및 모달 요소 만들기

## ⚙️ 개발 환경 프로젝트 실행 방법

<b>Step 1: </b><br>
레포지토리 클론

```c
git clone https://github.com/YeoDaSeul4355/cars_showcase.git
```

<b>Step 2: </b><br>
종속성 설치

```c
npm install
```

<b>Step 3: </b><br>
환경 변수 세팅

```c
NEXT_PUBLIC_RAPID_API_KEY
```
( <a href="https://api-ninjas.com/api/cars">API-Ninjas</a> 에서 API Key 발급 필요)

<b>Step 4: </b><br>
프로젝트 시작

```c
npm run dev
```
