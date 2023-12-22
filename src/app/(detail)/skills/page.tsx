
import React from 'react'
import ContentBox from '../aboutMe/_sections/content/ContentBox'
import ContentWithIcon from '../aboutMe/_sections/content/ContentWithImage'
import Badge from '@/app/_ui/badge/Badge'
import TypingSearch from '../_components/typing-search/TypingSearch'
import Highlight from '@/app/_ui/highlight/Highlight'
import ShortCutInfo from '@/app/(home)/_sections/short-cut/_components/ShortCutInfo'
import Star from '@/app/_ui/icon/star/Star'
import AboutMeRightMenu from '../aboutMe/_sections/right-menu/RightMenu'


function Skills() {
  return (
    <>

      <div>
        <TypingSearch typing='Skills' />
        {/* keyword */}
        <div className='flex items-center pt-3 pb-6'>
          <p className='font-bold text-lg mr-2'>
            연관 검색어
          </p>
          <div className='flex flex-wrap'>
            <Badge title='React' type='default' />
            <Badge title='React Native' type='default' />
            <Badge title='FrontEnd' type='default' />
            <Badge title='BackEnd' type='default' />
          </div>
        </div>
        <div>
          <p className="mb-4">
            <Highlight content='실무에서 자주 사용한 스킬과 평소 관심 있는 스킬들을 정리했습니다.' />
          </p>
          <div className='flex  items-center'>
            <div className="flex items-center justify-center">
              <Star />
              <Star />
              <Star />
            </div>
            <p className='pl-5'>해당 기술을 실무에서 자주 사용했어요.</p>
          </div>
          <div className='flex  items-center py-5'>
            <div className="flex items-center justify-center">
              <Star />
              <Star />
              <Star color='gray' />
            </div>
            <p className='pl-5'>해당 기술을 통해 프로젝트를 개발/배포해본 경험이 있어요.</p>
          </div>
        </div>
        {/* bottom */}
        <div className="bg-dot h-[1px] my-7 w-full"></div>
        {/* mark */}
        <ContentWithIcon title='어떤 스킬을 사용하나요?' icon={<ShortCutInfo.InnerIcon width={24} height={24} icon='skills' />} />
        {/* box */}
        <ContentBox title='Front-End' renderContent="사용자가 제일 먼저 접하는 화면을 개발하는 일이기 때문에 화면의 UI 같은 디자인 요소뿐만 아니라 애플리케이션의 반응성을 고려하여,
      더 나은 사용자 경험을 제공하도록 고민합니다."/>
        <div className="relative w-full">
          <table className="text-sm text-left w-full rtl:text-right text-gray-500 dark:text-gray-400">
            <colgroup>
              <col className='w-[200px] max-[530px]:w-[70px]' />
              <col className='w-[200px] max-[530px]:w-[70px]' />
              <col className='w-[200px] max-[530px]:w-[70px]' />
            </colgroup>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 max-[530px]:px-1 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 max-[530px]:px-1 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 max-[530px]:px-1 py-3">
                  Rate
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 max-[530px]:px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  JavaScript
                </th>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <Badge title='lan' />
                </td>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <div className="flex items-center">
                    <Star size='sm' />
                    <Star size='sm' />
                    <Star size='sm' />
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 max-[530px]:px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  TypeScript
                </th>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <Badge title='lan' />
                </td>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <div className="flex items-center">
                    <Star size='sm' />
                    <Star size='sm' />
                    <Star size='sm' />
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 max-[530px]:px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  React
                </th>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <Badge title='lib' type='red' />
                </td>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <div className="flex items-center">
                    <Star size='sm' />
                    <Star size='sm' />
                    <Star size='sm' />
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 max-[530px]:px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  React Native
                </th>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <Badge title='lib' type='red' />
                </td>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <div className="flex items-center">
                    <Star size='sm' />
                    <Star size='sm' />
                    <Star size='sm' />
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 max-[530px]:px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Next.js
                </th>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <Badge title='lib' type='red' />
                </td>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <div className="flex items-center">
                    <Star size='sm' />
                    <Star size='sm' />
                    <Star size='sm' color='gray' />
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 max-[530px]:px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Vue.js
                </th>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <Badge title='lib' type='red' />
                </td>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <div className="flex items-center">
                    <Star size='sm' />
                    <Star size='sm' />
                    <Star size='sm' color='gray' />
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 max-[530px]:px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Nuxt.js
                </th>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <Badge title='lib' type='red' />
                </td>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <div className="flex items-center">
                    <Star size='sm' />
                    <Star size='sm' />
                    <Star size='sm' color='gray' />
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 max-[530px]:px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Emotion
                  <br />Styled-Components
                </th>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <Badge title='style' type='green' />
                </td>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <div className="flex items-center">
                    <Star size='sm' />
                    <Star size='sm' />
                    <Star size='sm' />
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 max-[530px]:px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  TaliwindCSS
                </th>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <Badge title='style' type='green' />
                </td>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <div className="flex items-center">
                    <Star size='sm' />
                    <Star size='sm' />
                    <Star size='sm' />
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 max-[530px]:px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Redux
                </th>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <Badge title='state' type='Indigo' />
                </td>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <div className="flex items-center">
                    <Star size='sm' />
                    <Star size='sm' />
                    <Star size='sm' />
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 max-[530px]:px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  React Query
                </th>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <Badge title='state' type='Indigo' />
                </td>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <div className="flex items-center">
                    <Star size='sm' />
                    <Star size='sm' />
                    <Star size='sm' />
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 max-[530px]:px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  recoil
                </th>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <Badge title='state' type='Indigo' />
                </td>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <div className="flex items-center">
                    <Star size='sm' />
                    <Star size='sm' />
                    <Star size='sm' color='gray' />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ContentBox title='Back-End' renderContent=" 클라이언트에서 API 통신을 통해 데이터를 다루는 일이 많은
                  만큼 서버의 부하를 줄이고, 불필요한 네트워크 비용을 줄이기
                  위해 고민합니다."/>
        <div className="relative">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <colgroup>
              <col className='w-[200px] max-[530px]:w-[70px]' />
              <col className='w-[200px] max-[530px]:w-[70px]' />
              <col className='w-[200px] max-[530px]:w-[70px]' />
            </colgroup>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 max-[530px]:px-1 py-3 w-[120px]">
                  Name
                </th>
                <th scope="col" className="px-6 max-[530px]:px-1 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 max-[530px]:px-1 py-3">
                  Rate
                </th>

              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 max-[530px]:px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Express.js
                </th>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <Badge title='lib' type='red' />
                </td>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <div className="flex items-center">
                    <Star size='sm' />
                    <Star size='sm' />
                    <Star size='sm' color='gray' />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ContentBox title='Data' renderContent="다양한 직군의 팀원들과 협업하며 비즈니스 성장을 위한 시너지 효과를 최대치로 발휘할 수 있도록 고민합니다." />
        <div className="relative ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <colgroup>
              <col className='w-[200px] max-[530px]:w-[70px]' />
              <col className='w-[200px] max-[530px]:w-[70px]' />
              <col className='w-[200px] max-[530px]:w-[70px]' />
            </colgroup>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 max-[530px]:px-1 py-3 w-[120px]">
                  Name
                </th>
                <th scope="col" className="px-6 max-[530px]:px-1 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 max-[530px]:px-1 py-3">
                  Rate
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 max-[530px]:px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Google Analytics
                </th>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <Badge title='lib' type='red' />
                </td>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <div className="flex items-center">
                    <Star size='sm' />
                    <Star size='sm' />
                    <Star size='sm' color='gray' />
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 max-[530px]:px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  GTM
                </th>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <Badge title='lib' type='red' />
                </td>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <div className="flex items-center">
                    <Star size='sm' />
                    <Star size='sm' />
                    <Star size='sm' color='gray' />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ContentBox title='Etc' renderContent="파이썬의 간편한 기능에 놀라며 1초에 1억번" />
        <div className="relative ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <colgroup>
              <col className='w-[200px] max-[530px]:w-[70px]' />
              <col className='w-[200px] max-[530px]:w-[70px]' />
              <col className='w-[200px] max-[530px]:w-[70px]' />
            </colgroup>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 max-[530px]:px-1 py-3 w-[120px]">
                  Name
                </th>
                <th scope="col" className="px-6 max-[530px]:px-1 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 max-[530px]:px-1 py-3">
                  Rate
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 max-[530px]:px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  python
                </th>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <Badge title='lib' type='red' />
                </td>
                <td className="px-6 max-[530px]:px-1 py-4">
                  <div className="flex items-center">
                    <Star size='sm' />
                    <Star size='sm' color='gray' />
                    <Star size='sm' color='gray' />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <AboutMeRightMenu />
    </>
  )
}

export default Skills