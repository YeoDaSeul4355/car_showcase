"use client";

import { useRouter } from "next/navigation";

import { CustomButton } from "@/components";
import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    // 페이지 번호와 다음/이전 페이지 여부에 따라 새로운 limit 값을 계산하고 URL의 검색 매개변수를 업데이트한 후 새로운 경로로 이동한다.
    const newLimit = (pageNumber + 1) * 10;
    const newPathname = updateSearchParams("limit", `${newLimit}`);

    // url 이동 후 스크롤 상단으로 가지않게 막아주는 옵션 추가
    router.push(newPathname, { scroll: false });
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
