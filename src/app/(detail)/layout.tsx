import React from 'react'
import Header from './_components/header/Header'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="max-w-[1000px] m-auto w-full min-h-screen">
        <section className="relative py-5 pr-5 h-full max-w-[790px] flex justify-start">
          {children}
        </section>
      </main>
    </>
  )
}

export default Layout