import React from 'react'
import AboutMeRightMenu from './_sections/right-menu/RightMenu'
import ContentBox from './_sections/content/ContentBox'
import ContentWithIcon from './_sections/content/ContentWithImage'
import Highlight from '@/app/_ui/highlight/Highlight'
import TypingSearch from '../_components/typing-search/TypingSearch'
import ShortCutInfo from '@/app/(home)/_sections/short-cut/_components/ShortCutInfo'
import Badge from '@/app/_ui/badge/Badge'





function AboutMe() {
  return (
    <>
      <div>
        <TypingSearch typing='About Me' />
        {/* keyword */}
        <div className='flex items-center pt-3 pb-6 max-[464px]:flex-col max-[464px]:items-start'>
          <p className='font-bold text-lg mr-2 flex-shrink-0'>
            연관 검색어
          </p>
          <div className='flex flex-wrap'>
            <Badge title='적극성' type='default' />
            <Badge title='성실성' type='default' />
            <Badge title='책임감' type='default' />
            <Badge title='커뮤니케이션 능력' type='default' />
            <Badge title='열린 마음' type='default' />
            <Badge title='존중' type='default' />
          </div>
        </div>
        <div className="text-lg max-[464px]:text-base">
          <p className="mb-4">
            <Highlight content=' 주로 React와 React Native를 사용하여 웹과 앱 서비스를 개발/운영했습니다.' />
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
        <ContentWithIcon title='동료에게 나는?' icon={
          <ShortCutInfo.InnerIcon width={24} height={24} icon='aboutMe' />} />
        {/* box */}
        <ContentBox title='사용자 경험을 생각하는 동료에요!' renderContent="사용자가 제일 먼저 접하는 화면을 개발하는 일이기 때문에 화면의 UI 같은 디자인 요소뿐만 아니라 애플리케이션의 반응성을 고려하여,
        더 나은 사용자 경험을 제공하도록 고민합니다."/>
        <ContentBox title='클라이언트에서 서버의 상태를 생각하는 동료에요!' renderContent=" 클라이언트에서 API 통신을 통해 데이터를 다루는 일이 많은
                    만큼 서버의 부하를 줄이고, 불필요한 네트워크 비용을 줄이기
                    위해 고민합니다."/>
        <ContentBox title=' 팀 시너지 효과를 발휘하도록 소통하는 것을 좋아하는
                      동료에요!' renderContent="다양한 직군의 팀원들과 협업하며 비즈니스 성장을 위한 시너지 효과를 최대치로 발휘할 수 있도록 고민합니다." />
      </div>
      <AboutMeRightMenu />
    </>
  )
}

export default AboutMe