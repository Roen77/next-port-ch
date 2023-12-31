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
          <a href="https://disco-grease-c85.notion.site/27fccc393f5d42f7b7f0fc228426ba8d"
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
            <p className='absolute max-[560px]:relative max-[560px]:pb-2 right-1 top-7 font-bold'>2021.12 ~ 2023.8(1년 9개월)</p>
            <ContentBox title={<LinkText link='https://www.statnco.com/' title='스탯앤코' />} renderContent="볼링, 야구 등 생활 스포츠 서비스를 제공하고 있습니다." />

          </div>
          <ol className="relative border-s border-gray-200 dark:border-gray-700 text-[#000]">
            <li className="mb-10 ms-6">
              <TimLineInfo.Dot icon='' />
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                <TimLineInfo.Header date='2022.12 ~ 2023.8' title='야구 및 볼링 등 각종 스포츠 관련 서비스 개발' />
                <TimLineInfo.InnerBox>
                  <TimLineInfo.Title title='역할' />
                  <div className='flex flex-row items-center max-[510px]:flex-col'>
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
                    <TimLineInfo.Title title='기술 스택 & 협업 툴' />
                    <div className='flex flex-wrap'>
                      <Badge title='Typescript' type='gray' size='base' />
                      <Badge title='React Native' type='gray' size='base' />
                      <Badge title='React Query' type='gray' size='base' />
                      <Badge title='Redux Toolkit' type='gray' size='base' />
                      <Badge title='Emotion' type='gray' size='base' />
                      <Badge title='Figma' type='gray' size='base' />
                      <Badge title='Zeplin' type='gray' size='base' />
                      <Badge title='Bitbucket' type='gray' size='base' />
                    </div>
                  </TimLineInfo.InnerBox>
                </div>
                <TimLineInfo.InnerBox>
                  <TimLineInfo.Title title='목표' />
                  <UlList.Wrapper>
                    <UlList.LiWidthIcon content="업무 일정을 효율적으로 관리하기 위해 무엇을 해야 하는가" />
                    <UlList.LiWidthIcon content="기존에 부족한 이미지 업로드 성능과 스크롤 애니메이션 성능을 어떻게 개선해야 하는가" />
                  </UlList.Wrapper>
                </TimLineInfo.InnerBox>
                <div className="pt-5">
                  <TimLineInfo.InnerBox>
                    <TimLineInfo.Title title='링크' />
                    <UlList.Wrapper>
                      <UlList.LiWidthIcon content={<LinkText title="게임원" link="https://play.google.com/store/apps/details?id=kr.gameone.gameonemobile&hl=ko&gl=US" />} />
                      <UlList.LiWidthIcon content={<LinkText title="칠텐" link="https://play.google.com/store/apps/details?id=com.gameone.bowling710&hl=ko-KR" />} />
                    </UlList.Wrapper>
                  </TimLineInfo.InnerBox>
                </div>
                <div className="pt-5">
                  <TimLineInfo.InnerBox>
                    <TimLineInfo.Title title='주요 작업 내용' />
                    <UlList.Wrapper>
                      <UlList.LiWidthIcon content="메인 프론트엔드 개발자로 프로젝트 설계 및 다수 컴포넌트 개발" />
                      <UlList.LiWidthIcon content='다양한 디바이스에서 반응형 인터페이스를 제공하도록 설계' />
                      <UlList.LiWidthIcon content='프론트엔드 퍼블리싱 / 개발 / 배포 및 업무 프로세스 관리' />
                    </UlList.Wrapper>
                  </TimLineInfo.InnerBox>
                </div>
                <div className='py-5'>
                  <TimLineInfo.InnerBox>
                    <TimLineInfo.Title title='성과' />
                    <UlList.Wrapper>
                      <UlList.LiWidthIcon content='프로세스 개선' >
                        <SubUlList.Wrapper>
                          <SubUlList.LiWidthDot content='원활한 협업을 위한 업무 요청 시스템 개선' />
                          <SubUlList.LiWidthDot content={<span>효율적인 디버깅 시스템 구축하여 업무 속도 개선<b>(기존 대비 업무 속도 20% 증가)</b></span>} />
                        </SubUlList.Wrapper>
                      </UlList.LiWidthIcon>
                      <UlList.LiWidthIcon content='성능 개선' >
                        <SubUlList.Wrapper>
                          <SubUlList.LiWidthDot content={<span><LinkText link='https://roen77.github.io/posts/memoris-react-native-1/' title='무한 스크롤 성능 개선' /><b>(기존 대비 랜더링 속도 70% 개선)</b></span>} />
                          <SubUlList.LiWidthDot content={<span>이미지 업로드 성능 최적화 <b>(기존 대비 2배 이상 많은 이미지 대응 가능 및 이미지 용량 최대 33% 감축으로 서버 부하 개선)</b></span>} />
                        </SubUlList.Wrapper>
                      </UlList.LiWidthIcon>
                    </UlList.Wrapper>
                  </TimLineInfo.InnerBox>
                </div>
                <div>
                  <TimLineInfo.InnerBox>
                    <TimLineInfo.Title title='목표 달성' />
                    <UlList.Wrapper>
                      <UlList.LiWidthIcon content='업무 일정을 효율적으로 관리하기 위해 무엇을 했는가' >
                        <SubUlList.Wrapper>
                          <SubUlList.LiWidthDot content='업무 흐름을 파악하기 위해 업무 프로세스 문서 양식을 만들어 공유했다.' />
                          <SubUlList.LiWidthDot content='빠른 실무 투입을 위해 기존에 사용하던 협업 툴의 기능을 최대한 활용하도록 제안하고, 사용했다.' />
                        </SubUlList.Wrapper>
                      </UlList.LiWidthIcon>
                      <UlList.LiWidthIcon content='기존에 부족한 이미지 업로드 성능과 스크롤 애니메이션 성능을 어떻게 개선했나' >
                        <SubUlList.Wrapper>
                          <SubUlList.LiWidthDot content="대용량 이미지 리사이징으로 이미지 업로드 속도 증가 및 용량 감소로 서버 부하를 줄였다." />
                          <SubUlList.LiWidthDot content="JS 스레드 대신 UI 스레드에서 애니메이션을 실행하는 라이브러리를 사용해 성능을 최적화했다." />
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
                <TimLineInfo.Header date='2022.3 ~ 2022.11' title='어드민 웹사이트 개발' />
                <TimLineInfo.InnerBox>
                  <TimLineInfo.Title title='역할' />
                  <div className='flex flex-row  items-center max-[510px]:flex-col'>
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
                    <TimLineInfo.Title title='기술 스택 & 협업 툴' />
                    <div className='flex flex-wrap'>
                      <Badge title='Typescript' type='gray' size='base' />
                      <Badge title='React' type='gray' size='base' />
                      <Badge title='React Query' type='gray' size='base' />
                      <Badge title='Redux Toolkit' type='gray' size='base' />
                      <Badge title='Emotion' type='gray' size='base' />
                      <Badge title='Styled-Components' type='gray' size='base' />
                      <Badge title='Figma' type='gray' size='base' />
                      <Badge title='Zeplin' type='gray' size='base' />
                      <Badge title='Bitbucket' type='gray' size='base' />
                    </div>
                  </TimLineInfo.InnerBox>
                </div>
                <div className='pb-5'>
                  <TimLineInfo.InnerBox>
                    <TimLineInfo.Title title='목표' />
                    <UlList.Wrapper>
                      <UlList.LiWidthIcon content="스타일링의 유연성을 높이고, 좋은 컴포넌트를 설계하기 위해 무엇을 해야 하는가" />
                      <UlList.LiWidthIcon content="점점 방대해지는 상태를 어떻게 관리할 것인가" />
                    </UlList.Wrapper>
                  </TimLineInfo.InnerBox>
                </div>
                <TimLineInfo.InnerBox>
                  <TimLineInfo.Title title='주요 작업 내용' />
                  <UlList.Wrapper>
                    <UlList.LiWidthIcon content={<span><LinkText title="처음 사내에 React Query 도입" link="https://roen77.github.io/posts/memoirs-react-query/" />으로 기존 대비 Boiler Plate 코드 30% 제거</span>} />
                    <UlList.LiWidthIcon content='Headless UI 컴포넌트 도입' />
                    <UlList.LiWidthIcon content='webview로 개발 프로세스를 간소화하고, 사용자에게 일관된 UI 경험 제공' />
                  </UlList.Wrapper>
                </TimLineInfo.InnerBox>
                <div className='py-5'>
                  <TimLineInfo.InnerBox>
                    <TimLineInfo.Title title='성과' />
                    <UlList.Wrapper>
                      <UlList.LiWidthIcon content='애플리케이션 안정성 개선에 기여(QA 역할을 수행하여 기능 테스트 진행)' >
                      </UlList.LiWidthIcon>
                    </UlList.Wrapper>
                  </TimLineInfo.InnerBox>
                </div>
                <div>
                  <TimLineInfo.InnerBox>
                    <TimLineInfo.Title title='목표 달성' />
                    <UlList.Wrapper>
                      <UlList.LiWidthIcon content='비슷한 형태의 디자인이 많은 경우, 어떻게 컴포넌트를 재사용했나' >
                        <SubUlList.Wrapper>
                          <SubUlList.LiWidthDot content='스타일 정의에 대한 역할을 위임받아 직접 기획 의도대로 디자인할 수 있도록 Haedless UI 컴포넌트를 적용했다.' />
                          <SubUlList.LiWidthDot content='작은 기능들은 아토믹 디자인을 채용하여 나누고, 합성하는 방식으로 컴포넌트의 재사용성을 높였다.' />
                          <SubUlList.LiWidthDot content='자주 사용되는 비즈니스 로직은 커스텀 훅으로 추상화하여 사용했다.' />
                        </SubUlList.Wrapper>
                      </UlList.LiWidthIcon>
                      <UlList.LiWidthIcon content='점점 방대해지는 상태를 어떻게 관리했나' >
                        <SubUlList.Wrapper>
                          <SubUlList.LiWidthDot content="Redux에서는 클라이언트단에서만 관리되는 로직을 관리하고, React Query는 서버 상태를 관리하여 상태를 파악하기 쉽도록 했다." />
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
                <TimLineInfo.Header date='2021.12 ~ 2022.2' title='디자인 공모전 및 신규 회원 가입 이벤트 서비스 개발' />
                <TimLineInfo.InnerBox>
                  <TimLineInfo.Title title='역할' />
                  <div className='flex flex-row items-center max-[510px]:flex-col'>
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
                    <TimLineInfo.Title title='기술 스택 & 협업 툴' />
                    <div className='flex flex-wrap'>
                      <Badge title='Javascript' type='gray' size='base' />
                      <Badge title='Typescript' type='gray' size='base' />
                      <Badge title='Jquery' type='gray' size='base' />
                      <Badge title='Redux' type='gray' size='base' />
                      <Badge title='Redux Saga' type='gray' size='base' />
                      <Badge title='Figma' type='gray' size='base' />
                      <Badge title='Bitbucket' type='gray' size='base' />
                    </div>
                  </TimLineInfo.InnerBox>
                </div>
                <div className='pb-5'>
                  <TimLineInfo.InnerBox>
                    <TimLineInfo.Title title='목표' />
                    <UlList.Wrapper>
                      <UlList.LiWidthIcon content="최대한 많은 사용자가 불편함 없도록 어떻게 서비스를 제공할 것인가" />
                    </UlList.Wrapper>
                  </TimLineInfo.InnerBox>
                </div>
                <div className="pb-5">
                  <TimLineInfo.InnerBox>
                    <TimLineInfo.Title title='링크' />
                    <UlList.Wrapper>
                      <UlList.LiWidthIcon content={<LinkText title="https://www.chilten.com" link="https://www.chilten.com/" />} />
                    </UlList.Wrapper>
                  </TimLineInfo.InnerBox>
                </div>
                <TimLineInfo.InnerBox>
                  <TimLineInfo.Title title='주요 작업 내용' />
                  <UlList.Wrapper>
                    <UlList.LiWidthIcon content='디자인 공모전 서비스 개발 / 배포 / 운영' />
                    <UlList.LiWidthIcon content='신규 회원 가입 이벤트 기능 개발' />
                  </UlList.Wrapper>
                </TimLineInfo.InnerBox>
                <div className='py-5'>
                  <TimLineInfo.InnerBox>
                    <TimLineInfo.Title title='성과' />
                    <UlList.Wrapper>
                      <UlList.LiWidthIcon content='크로스 브라우징으로 높은 접근성과 일관된 사용자 경험 제공' >
                      </UlList.LiWidthIcon>
                      <UlList.LiWidthIcon content={<span>user side 관점으로 사용성을 고려하여, 관련 문제를 조기에 발견해 <b>테스트 시간을 감축하고, 안정적인 운영으로 목표치 달성</b></span>} >
                      </UlList.LiWidthIcon>
                      <UlList.LiWidthIcon content={<span>앱과 웹을 연결하는 딥링크 설정으로 사용자 유입을 유도하여 <b>신규 회원가입률 5%</b> 증가</span>} >
                      </UlList.LiWidthIcon>
                    </UlList.Wrapper>
                  </TimLineInfo.InnerBox>
                </div>
                <div>
                  <TimLineInfo.InnerBox>
                    <TimLineInfo.Title title='목표 달성' />
                    <UlList.Wrapper>
                      <UlList.LiWidthIcon content='최대한 많은 사용자가 불편함 없도록 어떻게 서비스를 제공했나' >
                        <SubUlList.Wrapper>
                          <SubUlList.LiWidthDot content="서비스의 목적에 맞춰 타깃이 되는 브라우저를 테스트하고, 동일한 동작에 대해 동일한 기능을 제공하도록 브라우저의 호환성을 보장하고 사용자 접근성을 개선했다." />
                        </SubUlList.Wrapper>
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