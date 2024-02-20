import { CarProps, FilterProps } from "@/types";

// 자동차 불러오는 api
export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // HeadersInit은 TypeScript에서 Fetch API를 사용할 때 헤더를 지정하는 데 사용되는 타입!
  const headers: HeadersInit = {
    "X-RapidAPI-Key": "c7b681a2ecmsh3e47b0a565a44a5p10ca7ajsnbe92358a2f12",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  // api 요청하는 부분
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  const result = await response.json();
  // console.log(JSON.stringify(result));
  return result;
}

// 자동차 렌탈비 계산
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // 하루 대여 기본 요금으로 50달러를 설정
  const mileageFactor = 0.1; // 주행한 마일당 추가 요금을 나타내는 요소로, 0.1로 설정
  const ageFactor = 0.05; // 자동차 나이에 따른 추가 요금을 나타내는 요소로, 0.05로 설정

  // 주행한 마일에 기반한 추가 요금을 계산. city_mpg에 mileageFactor를 곱한 값을 사용
  const mileageRate = city_mpg * mileageFactor;
  // 자동차 나이에 기반한 추가 요금을 계산. 현재 연도에서 year를 뺀 후, ageFactor를 곱한 값을 사용
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // 기본 요금과 추가 마일리지, 나이에 대한 요금을 합산하여 하루 대여료를 계산
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  // toFixed를 사용해 최종 대여료를 반올림하여 소수점 이하를 제거하고 문자열로 반환
  return rentalRatePerDay.toFixed(0);
};

// 자동차 이미지 가져오기(API키 무료 제공 안 해줘서 무쓸모..ㅇㅇ)
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append("customer", "yds43557340" || "");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${
    window.location.pathname
  }?${newSearchParams.toString()}`;

  return newPathname;
};
