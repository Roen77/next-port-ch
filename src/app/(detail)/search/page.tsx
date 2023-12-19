
import SearchHeader from "@/app/(home)/_sections/search/SearchHeader";
import Image from "next/image";
import React from "react";

function SearchPage() {
  return (
    <>
      <SearchHeader />
      <main className="max-w-[1000px] m-auto w-full h-screen">
        <section className="relative p-5 h-full max-w-[800px] flex justify-start">
          <div>
            <div className="text-lg">
              <p className="mb-4">
                <b className="bg-highlight font-normal">
                  주로 React와 React Native를 사용하여 웹과 앱 서비스를
                  개발/운영했습니다.
                </b>
              </p>
              <p className="mb-4">
                업무 효율을 높이기 위한 고민을 하며, 실제로 문제를 해결하기 위해
                적극적으로 행동합니다.
                <br />
                사내에 디버깅 툴 도입으로 기존 대비 개발 속도를 20% 증가시킨
                경험이 있고, 개발 프로세스의 병목 현상을 줄이고, 효율적인 운영을
                위해 커뮤니케이션하는 방식을 개선한 경험이 있습니다.
                <br />
                이러한 적극성을 인정받아 처음으로 개발자로 입사했던 회사에서
                프로젝트의 프론트 메인을 담당하여 전반적인 프론트 업무를
                책임졌던 경험이 있습니다.
              </p>
              <p>
                다양한 직군의 팀원들과 여러 프로젝트를 진행하며 협업하고,
                적극적으로 소통하며 함께 발전하는 것을 좋아합니다.
              </p>
            </div>
            {/* bottom */}
            <div className="bg-dot h-[1px] my-7 w-full"></div>
            {/* mark */}
            <div className="flex  items-center mb-3">
              <div className="w-[50px] h-[50px] bg-blue-300 rounded-full mr-3"></div>
              <p>동료에게 나는?</p>
            </div>
            {/* box */}
            <div className="pr-10">
              <h3 className="text-2xl text-content">
                사용자 경험을 생각하는 동료에요!
              </h3>
              <p className="py-3">
                사용자가 제일 먼저 접하는 화면을 개발하는 일이기 때문에 화면의
                UI 같은 디자인 요소뿐만 아니라 애플리케이션의 반응성을 고려하여,
                더 나은 사용자 경험을 제공하도록 고민합니다.
              </p>
            </div>
          </div>
          <div className="absolute right-[-310px] border-[1px] border-gray rounded-2xl ml-[20px] min-w-[300px]  py-5">
            <p className="px-5">이것을 찾으셨나요?</p>
            <ul>
              <li className="flex justify-between items-center border-b-[1px] px-5 py-3 border-gray">
                <div className="flex justify-center items-center">
                  <Image
                    src="/googlemic_clr_24px.svg"
                    alt="googlemic_clr icon"
                    width={26}
                    height={24}
                  />
                  <div>
                    <p>github</p>
                    <span>github 주소입니다.</span>
                  </div>
                </div>
              </li>
              <li className="flex justify-between items-center border-b-[1px] px-5 py-3 border-gray">
                <div className="flex justify-center items-center">
                  <Image
                    src="/googlemic_clr_24px.svg"
                    alt="googlemic_clr icon"
                    width={26}
                    height={24}
                  />
                  <div>
                    <p>github</p>
                    <span>github 주소입니다.</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default SearchPage;
