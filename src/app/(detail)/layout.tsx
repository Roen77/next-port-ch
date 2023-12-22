"use client"
import React from 'react'
import Header from './_components/header/Header'


function Layout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Header />
      <div className="max-w-[1000px] min-w-[360px] m-auto w-full min-h-screen ">
        <section className="relative  py-5 pr-5 h-full max-w-[790px] flex justify-start max-[1340px]:max-w-full max-[1340px]:px-10  max-[570px]:px-4">
          {children}
        </section>
      </div>
    </>
  )
}

export default Layout