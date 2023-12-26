import Highlight from '@/app/_ui/highlight/Highlight'
import React from 'react'
import ContentWithIcon from '../aboutMe/_sections/content/ContentWithImage'
import ContentBox from '../aboutMe/_sections/content/ContentBox'
import TimLineInfo from './_sections/timeline/_component/TimeLineInfo'
import Badge from '@/app/_ui/badge/Badge'
import UlList from './_sections/timeline/_component/UlList'
import SubUlList from './_sections/timeline/_component/SubUlList'
import TypingSearch from '../_components/typing-search/TypingSearch'
import ShortCutInfo from '@/app/(home)/_sections/short-cut/_components/ShortCutInfo'
import LinkText from '@/app/_ui/text/LinkText'
import AboutMeRightMenu from '../aboutMe/_sections/right-menu/RightMenu'

function WorkExperience() {
  return (
    <>

      <div>
        <TypingSearch typing='Work Experience' />
        {/* keyword */}
        <div className='flex items-center pt-3 pb-6 max-[464px]:flex-col max-[464px]:items-start'>
          <p className='font-bold text-lg mr-2'>
            연관 검색어
          </p>
          <div className='flex flex-wrap'>
            <Badge title='React' type='default' />
            <Badge title='React Native' type='default' />
            <Badge title='FrontEnd' type='default' />
          </div>
        </div>
        <div className="text-lg max-[464px]:text-base">
          <p className="mb-4">
            <Highlight content='업무 경력을 소개합니다.' />
          </p>
          <p className="mb-4">
            웹과 앱의 다양한 플랫폼 개발을 진행하고 있습니다.
          </p>
          <a href="https://disco-grease-c85.notion.site/777a17500bbb49c3b0b6f6129a59c57e?pvs=4"
            target="_blank"
            rel="noopener noreferrer" className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2 relative z-[600]">
            경력 기술서 바로가기
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
          <div className="bg-dot h-[1px] my-7 w-full"></div>
          {/* mark */}
          <ContentWithIcon title='무슨 일을 했나요?' icon={<ShortCutInfo.InnerIcon width={20} height={20} icon='workExperience' />} />
          <div className='relative'>
            <p className='absolute max-[560px]:relative max-[560px]:pb-2 right-1 top-7 font-bold'>2021.12.27 ~ 2023.8(1년 9개월)</p>
            <ContentBox title={<LinkText link='https://www.statnco.com/' title='스탯앤코' />} renderContent="볼링, 야구 등 생활 스포츠 서비스를 제공하고 있습니다." />

          </div>
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-6">
              <TimLineInfo.Dot icon='' />
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                <TimLineInfo.Header date='2022.12 ~ 2023.8' title='야구 플랫폼 개발' />
                <TimLineInfo.InnerBox>
                  <TimLineInfo.Title title='역할' />
                  <div className='flex flex-row max-[510px]:flex-col'>
                    <p className='mr-2'>개발팀/사원</p>
                    <Badge title='프론트엔드 개발' type='Indigo' />
                    <Badge title='프로젝트 기여도 70%' type='red' />
                  </div>
                </TimLineInfo.InnerBox>
                <div className='py-5'>
                  <TimLineInfo.InnerBox>
                    <TimLineInfo.Title title='개발 인원' />
                    <div className='flex flex-wrap'>
                      <Badge title='기획자 2명' type='gray' size='base' />
                      <Badge title='디자이너 1명' type='gray' size='base' />
                      <Badge title='백엔드 개발자 2명' type='gray' size='base' />
                      <Badge title='프론트엔드 개발자 2명' type='gray' size='base' />
                    </div>
                  </TimLineInfo.InnerBox>
                </div>
                <div className='pb-5'>
                  <TimLineInfo.InnerBox>
                    <TimLineInfo.Title title='기술 스택&협업 툴' />
                    <div className='flex flex-wrap'>
                      <Badge title='Typescript' type='gray' size='base' />
                      <Badge title='React Native' type='gray' size='base' />
                      <Badge title='React Query' type='gray' size='base' />
                      <Badge title='Redux Toolkit' type='gray' size='base' />
                      <Badge title='Emotion' type='gray' size='base' />
                      <Badge title='Figma' type='gray' size='base' />
                      <Badge title='Bitbuckit' type='gray' size='base' />
                    </div>
                  </TimLineInfo.InnerBox>
                </div>
                <TimLineInfo.InnerBox>
                  <TimLineInfo.Title title='설명' />
                  <UlList.Wrapper>
                    <UlList.LiWidthIcon content={<p>
                      <LinkText link='https://play.google.com/store/apps/details?id=kr.gameone.gameonemobile&hl=ko-KR' title='기존 웹앱 서비스' />를 사용자에게 더 나은 UI와 기능을 제공해주기 위해 React Native로 리뉴얼하는 작업
                    </p>} />
                    <UlList.LiWidthIcon content='React Native Application Architecture 설계' />
                    <UlList.LiWidthIcon content='다양한 디바이스에서 반응형 인터페이스를 제공하도록 설계' />
                    <UlList.LiWidthIcon content=' 프론트엔드 개발/배포 및 업무 프로세스 관리 등 전반적인 프론트 리드' />
                  </UlList.Wrapper>
                </TimLineInfo.InnerBox>
                <div className='py-5'>
                  <TimLineInfo.InnerBox>
                    <TimLineInfo.Title title='성과' />
                    <UlList.Wrapper>
                      <UlList.LiWidthIcon content='프로세스 개선' >
                        <SubUlList.Wrapper>
                          <SubUlList.LiWidthDot content='원활한 협업을 위해 업무 요청 프로세스 개선 작업' />
                        </SubUlList.Wrapper>
                      </UlList.LiWidthIcon>
                      <UlList.LiWidthIcon content='성능 개선' >
                        <SubUlList.Wrapper>
                          <SubUlList.LiWidthDot content={<span><LinkText link='https://roen77.github.io/posts/memoris-react-native-1/' title='무한 스크롤 성능 개선' />(기존 대비 랜더링 속도 70% 개선)</span>} />
                          <SubUlList.LiWidthDot content='서버의 부하를 줄이기 위한 이미지 전송 프로세스 개선(이미지 용량 33% 감축 및 기존 대비 2배 이상 이미지 업로드 가능)' />
                        </SubUlList.Wrapper>
                      </UlList.LiWidthIcon>
                      <UlList.LiWidthIcon content='사용자 경험 개선' >
                        <SubUlList.Wrapper>
                          <SubUlList.LiWidthDot content='Optimistic Update(낙관적 업데이트)를 적용하여 사용자에게 빠른 피드백을 제공하도록 구현' />
                        </SubUlList.Wrapper>
                      </UlList.LiWidthIcon>
                    </UlList.Wrapper>
                  </TimLineInfo.InnerBox>
                </div>
              </div>
            </li>
            <li className="mb-10 ms-6">
              <TimLineInfo.Dot icon='' />
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                <TimLineInfo.Header date='2022.3 ~ 2022.11' title='배드민턴 플랫폼 개발' />
                <TimLineInfo.InnerBox>
                  <TimLineInfo.Title title='역할' />
                  <div className='flex flex-row max-[510px]:flex-col'>
                    <p className='mr-2'>개발팀/사원</p>
                    <Badge title='프론트엔드 개발' type='Indigo' />
                    <Badge title='프로젝트 기여도 60%' type='red' />
                  </div>
                </TimLineInfo.InnerBox>
                <div className='py-5'>
                  <TimLineInfo.InnerBox>
                    <TimLineInfo.Title title='개발 인원' />
                    <div className='flex flex-wrap'>
                      <Badge title='기획자 2명' type='gray' size='base' />
                      <Badge title='디자이너 1명' type='gray' size='base' />
                      <Badge title='백엔드 개발자 2명' type='gray' size='base' />
                      <Badge title='프론트엔드 개발자 2명' type='gray' size='base' />
                    </div>
                  </TimLineInfo.InnerBox>
                </div>
                <div className='pb-5'>
                  <TimLineInfo.InnerBox>
                    <TimLineInfo.Title title='기술 스택&협업 툴' />
                    <div className='flex flex-wrap'>
                      <Badge title='Typescript' type='gray' size='base' />
                      <Badge title='React' type='gray' size='base' />
                      <Badge title='React Native' type='gray' size='base' />
                      <Badge title='React Query' type='gray' size='base' />
                      <Badge title='Redux Toolkit' type='gray' size='base' />
                      <Badge title='Emotion' type='gray' size='base' />
                      <Badge title='Styled-Components' type='gray' size='base' />
                      <Badge title='Figma' type='gray' size='base' />
                      <Badge title='Zeplin' type='gray' size='base' />
                      <Badge title='Bitbuckit' type='gray' size='base' />
                    </div>
                  </TimLineInfo.InnerBox>
                </div>
                <TimLineInfo.InnerBox>
                  <TimLineInfo.Title title='설명' />
                  <UlList.Wrapper>
                    <UlList.LiWidthIcon content='React를 사용하여 어드민 웹 사이트 개발' />
                    <UlList.LiWidthIcon content='React Native Application 기본 구조 설계 및 프론트엔드 개발/배포/스토어 심사' />
                    <UlList.LiWidthIcon content='FCM (Firebase Cloud Messaging) 푸시 알림 통합 솔루션 구축' />
                    <UlList.LiWidthIcon content='커스텀 훅 패턴으로 비즈니스 로직 추상화' />
                    <UlList.LiWidthIcon content='QA 기능 테스트 진행' />
                  </UlList.Wrapper>
                </TimLineInfo.InnerBox>
                <div className='py-5'>
                  <TimLineInfo.InnerBox>
                    <TimLineInfo.Title title='성과' />
                    <UlList.Wrapper>
                      <UlList.LiWidthIcon content='상태 관리 개선' >
                        <SubUlList.Wrapper>
                          <SubUlList.LiWidthDot content={<span><LinkText link='https://roen77.github.io/posts/memoirs-react-query/' title='처음 사내에 React Query 도입' />으로 Boiler Plate 코드 30% 제거</span>} />
                          <SubUlList.LiWidthDot content='클라이언트 상태와 서버 상태 로직의 관심사를 분리하여 Store 상태 관리 개선' />
                        </SubUlList.Wrapper>
                      </UlList.LiWidthIcon>
                      <UlList.LiWidthIcon content='개발자 경험 개선' >
                        <SubUlList.Wrapper>
                          <SubUlList.LiWidthDot content='Headless UI 라이브러리로 스타일 정의에 대한 유연성 향상' />
                          <SubUlList.LiWidthDot content='webview로 앱 개발 프로세스를 간소화하고, 사용자에게 일관된 UI 경험 제공' />
                        </SubUlList.Wrapper>
                      </UlList.LiWidthIcon>
                    </UlList.Wrapper>
                  </TimLineInfo.InnerBox>
                </div>
              </div>
            </li>
            <li className="mb-10 ms-6">
              <TimLineInfo.Dot icon='' />
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                <TimLineInfo.Header date='2021.12 ~ 2022.2' title='볼링 플랫폼 개발' />
                <TimLineInfo.InnerBox>
                  <TimLineInfo.Title title='역할' />
                  <div className='flex flex-row max-[510px]:flex-col'>
                    <p className='mr-2'>개발팀/사원</p>
                    <Badge title='프론트엔드 개발' type='Indigo' />
                    <Badge title='프로젝트 기여도 50%' type='red' />
                  </div>
                </TimLineInfo.InnerBox>
                <div className='py-5'>
                  <TimLineInfo.InnerBox>
                    <TimLineInfo.Title title='개발 인원' />
                    <div className='flex flex-wrap'>
                      <Badge title='기획자 1명' type='gray' size='base' />
                      <Badge title='퍼블리셔 1명' type='gray' size='base' />
                      <Badge title='백엔드 개발자 1명' type='gray' size='base' />
                      <Badge title='프론트엔드 개발자 1명' type='gray' size='base' />
                    </div>
                  </TimLineInfo.InnerBox>
                </div>
                <div className='pb-5'>
                  <TimLineInfo.InnerBox>
                    <TimLineInfo.Title title='기술 스택&협업 툴' />
                    <div className='flex flex-wrap'>
                      <Badge title='Javascript' type='gray' size='base' />
                      <Badge title='Typescript' type='gray' size='base' />
                      <Badge title='Jquery' type='gray' size='base' />
                      <Badge title='React Native' type='gray' size='base' />
                      <Badge title='Redux Saga' type='gray' size='base' />
                      <Badge title='Figma' type='gray' size='base' />
                      <Badge title='Bitbuckit' type='gray' size='base' />
                    </div>
                  </TimLineInfo.InnerBox>
                </div>
                <TimLineInfo.InnerBox>
                  <TimLineInfo.Title title='설명' />
                  <UlList.Wrapper>
                    <UlList.LiWidthIcon content={<p><LinkText link='https://www.chilten.com/' title='디자인 공모전 서비스' /> 개발/배포/운영(Javascript, Jquery)</p>} />
                    <UlList.LiWidthIcon content={<p><LinkText link='https://play.google.com/store/search?q=%EC%B9%A0%ED%85%90&c=apps&hl=ko-KR' title='볼링 앱' /> 유지보수 및 신규 회원 가입 이벤트 서비스 프론트엔드 개발(React Native)</p>} />
                  </UlList.Wrapper>
                </TimLineInfo.InnerBox>
                <div className='py-5'>
                  <TimLineInfo.InnerBox>
                    <TimLineInfo.Title title='성과' />
                    <UlList.Wrapper>
                      <UlList.LiWidthIcon content='공모전 웹 사이트 크로스 브라우징으로 높은 접근성과 일관된 사용자 경험 제공' >
                      </UlList.LiWidthIcon>
                      <UlList.LiWidthIcon content='유저 기반 사용성을 고려하여, 관련 문제를 조기에 발견해 테스트 시간 감축' >
                      </UlList.LiWidthIcon>
                      <UlList.LiWidthIcon content='앱의 딥링크 설정으로 사용자 유입을 유도하여 신규 회원률 4% 증가' >
                      </UlList.LiWidthIcon>
                      <UlList.LiWidthIcon content='효율적인 디버깅 시스템 구축하여 업무 속도 개선(기존 대비 업무 속도 20% 증가)' >
                      </UlList.LiWidthIcon>
                    </UlList.Wrapper>
                  </TimLineInfo.InnerBox>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <AboutMeRightMenu />
    </>
  )
}

export default WorkExperience