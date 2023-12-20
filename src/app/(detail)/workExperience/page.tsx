import Highlight from '@/app/_ui/highlight/Highlight'
import React from 'react'
import ContentWithIcon from '../aboutMe/_sections/content/ContentWithImage'
import RoundedIcon from '@/app/_ui/icon/RoundedIcon'
import ContentBox from '../aboutMe/_sections/content/ContentBox'
import TimLineInfo from './_sections/timeline/_component/TimeLineInfo'
import Badge from '@/app/_ui/badge/Badge'
import UlList from './_sections/timeline/_component/UlList'
import SubUlList from './_sections/timeline/_component/SubUlList'

function WorkExperience() {
  return (
    <>
      <div className="text-lg">
        <p className="mb-4">
          <Highlight content='업무 경력을 소개합니다.' />
        </p>
        <p className="mb-4">
          웹과 앱의 다양한 플랫폼 개발을 진행하고 있습니다.
        </p>
        <button type="button" className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2">
          <svg className="w-5 h-5 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
          경력 기술서 바로가기
        </button>
        <div className="bg-dot h-[1px] my-7 w-full"></div>
        {/* mark */}
        <ContentWithIcon title='무슨 일을 했나요?' icon={<div>ICON</div>} />
        <div className='relative'>
          <p className='absolute right-5 top-7 font-bold'>2021.12.27 ~ 2023.8</p>
          <ContentBox title='스탯앤코' renderContent="볼링, 야구 등 생활 스포츠 서비스를 제공하고 있습니다." />
        </div>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-6">
            <TimLineInfo.Dot icon='i' />
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
              <TimLineInfo.Header date='2022.12 ~ 2023.8' title='야구 플랫폼 개발' />
              <TimLineInfo.InnerBox>
                <TimLineInfo.Title title='Role' />
                <Badge title='개발팀/사원' />
              </TimLineInfo.InnerBox>
              <div className='py-5'>
                <TimLineInfo.InnerBox>
                  <TimLineInfo.Title title='Tech Stack' />
                  <Badge title='개발팀/사원' />
                  <Badge title='개발팀/사원' />
                  <Badge title='개발팀/사원' />
                  <Badge title='개발팀/사원' />
                </TimLineInfo.InnerBox>
              </div>
              <TimLineInfo.InnerBox>
                <TimLineInfo.Title title='DESCRIPTION' />
                <UlList.Wrapper>
                  <UlList.LiWidthIcon content='기존 웹앱 서비스를 사용자에게 더 나은 UI와 기능을 제공해주기 위해 React Native로 리뉴얼하는 작업' />
                  <UlList.LiWidthIcon content='React Native Application Architecture 설계' />
                  <UlList.LiWidthIcon content='다양한 디바이스에서 반응형 인터페이스를 제공하도록 설계' />
                  <UlList.LiWidthIcon content=' 프론트엔드 개발/배포 및 업무 프로세스 관리 등 전반적인 프론트 리드' />
                </UlList.Wrapper>
              </TimLineInfo.InnerBox>
              <div className='py-5'>
                <TimLineInfo.InnerBox>
                  <TimLineInfo.Title title='PERFORMANCE' />
                  <UlList.Wrapper>
                    <UlList.LiWidthIcon content='프로세스 개선' >
                      <SubUlList.Wrapper>
                        <SubUlList.LiWidthDot content='원활한 협업을 위해 업무 요청 프로세스 개선 작업' />
                      </SubUlList.Wrapper>
                    </UlList.LiWidthIcon>
                    <UlList.LiWidthIcon content='성능 개선' >
                      <SubUlList.Wrapper>
                        <SubUlList.LiWidthDot content='무한 스크롤 성능 개선(기존 대비 랜더링 속도 70% 개선)' />
                        <SubUlList.LiWidthDot content='서버의 부하를 줄이기 위한 이미지 전송 프로세스 개선' />
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
            <TimLineInfo.Dot icon='i' />
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
              <TimLineInfo.Header date='2022.3 ~ 2022.11' title='배드민턴 플랫폼 개발' />
              <TimLineInfo.InnerBox>
                <TimLineInfo.Title title='Role' />
                <Badge title='개발팀/사원' />
              </TimLineInfo.InnerBox>
              <div className='py-5'>
                <TimLineInfo.InnerBox>
                  <TimLineInfo.Title title='Tech Stack' />
                  <Badge title='개발팀/사원' />
                  <Badge title='개발팀/사원' />
                  <Badge title='개발팀/사원' />
                  <Badge title='개발팀/사원' />
                </TimLineInfo.InnerBox>
              </div>
              <TimLineInfo.InnerBox>
                <TimLineInfo.Title title='DESCRIPTION' />
                <UlList.Wrapper>
                  <UlList.LiWidthIcon content='React를 사용하여 어드민 웹 사이트 개발' />
                  <UlList.LiWidthIcon content='React Native Application 기본 구조 설계 및 프론트엔드 개발/배포/스토어 심사' />
                  <UlList.LiWidthIcon content='FCM (Firebase Cloud Messaging) 푸시 알림 통합 솔루션 구축' />
                  <UlList.LiWidthIcon content='커스텀 훅 패턴으로 비즈니스 로직 추상화' />
                </UlList.Wrapper>
              </TimLineInfo.InnerBox>
              <div className='py-5'>
                <TimLineInfo.InnerBox>
                  <TimLineInfo.Title title='PERFORMANCE' />
                  <UlList.Wrapper>
                    <UlList.LiWidthIcon content='상태 관리 개선' >
                      <SubUlList.Wrapper>
                        <SubUlList.LiWidthDot content='처음 사내에 React Query 도입으로 Boiler Plate 코드 30% 제거' />
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
            <TimLineInfo.Dot icon='i' />
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
              <TimLineInfo.Header date='2021.12 ~ 2022.2' title='볼링 플랫폼 개발' />
              <TimLineInfo.InnerBox>
                <TimLineInfo.Title title='Role' />
                <Badge title='개발팀/사원' />
              </TimLineInfo.InnerBox>
              <div className='py-5'>
                <TimLineInfo.InnerBox>
                  <TimLineInfo.Title title='Tech Stack' />
                  <Badge title='개발팀/사원' />
                  <Badge title='개발팀/사원' />
                  <Badge title='개발팀/사원' />
                  <Badge title='개발팀/사원' />
                </TimLineInfo.InnerBox>
              </div>
              <TimLineInfo.InnerBox>
                <TimLineInfo.Title title='DESCRIPTION' />
                <UlList.Wrapper>
                  <UlList.LiWidthIcon content='디자인 공모전 서비스 개발/배포/운영(Javascript, Jquery)' />
                  <UlList.LiWidthIcon content='볼링 앱 유지보수 및 신규 회원 가입 이벤트 서비스 프론트엔드 개발(React Native)' />
                </UlList.Wrapper>
              </TimLineInfo.InnerBox>
              <div className='py-5'>
                <TimLineInfo.InnerBox>
                  <TimLineInfo.Title title='PERFORMANCE' />
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
        {/* mark */}
        <ContentWithIcon title='무슨 일을 했나요?' icon={<div>ICON</div>} />
      </div>

    </>
  )
}

export default WorkExperience