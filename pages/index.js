import Head from 'next/head'
import Table from '@/components/Table'
import { Raleway } from 'next/font/google'
import logo from '../public/logo.png'

import PolarAreaChart from '@/components/PolarAreaChart'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const raleway = Raleway({
  subsets: ['latin'],
});

export default function Home({ parameters, setParameters }) {
  const date = new Date();
  const [avg, setAvg] = useState(0);
  useEffect(() => {
    let Avg = 0;
    for (const key in parameters) {
      Avg += parameters[key];
    }
    Avg = Avg / 12;
    setAvg(Avg.toString().substring(0, 4));
  }, [parameters]);
  return (
    <>
      <Head>
        <title>
          Diagnostic Scorecard Metrics
        </title>
        <link rel="icon" href={logo.src} type="image/png" />
      </Head>
      <header>
        <nav className='p-7 flex gap-5 items-center'>
          <Link href="https://www.waysaheadglobal.com/" target='_blank'>
            <Image src={logo.src} alt={"WaysAhead Global"} width={100} height={100} />
          </Link>
          <h1 className={`${raleway.className} text-3xl font-bold`}>Diagnostic Scorecard Metrics</h1>
        </nav>
      </header>

      <main>
        <div className='p-4 grid' style={{ gridTemplateColumns: "57rem auto" }}>
          <div className='grid grid-rows-4 lg:grid-cols-2 lg:grid-rows-2' style={{ gridTemplateColumns: "28rem 28rem", gridTemplateRows: "21rem 21rem" }}>
            <Table heading={"Innovation & Intellectual Property"} params={["Originality - How unique is the technology", "IP Protection - Does the technology have strong IP position", "Global Patentability - What's the likelihood of full global patent application"]} color={'bg-yellow-400'} parameters={parameters} setParameters={setParameters} />

            <Table heading={"Design. Development & Technical"} params={["Concept - How well developed is the concept", "Development - How progressed is the R&D phase", "Production Feasibility - Is there a clear understanding of scale up roll out costs"]} color={'bg-green-400'} parameters={parameters} setParameters={setParameters} />

            <Table heading={"Business, Commercial & Finance"} params={["Financial - How well developed is the financial models", "Business - Is there a clear sustainable business model", "Money - What's the current fiscal health of the venture."]} color={'bg-blue-600'} parameters={parameters} setParameters={setParameters} />

            <Table heading={"Product, Market & Customer"} params={["Product - How well developed is the product Offer", "Market - Is there clearly defined market and market opportunity is well defined", "Customer - IS the target customer defined and needs clearly understood"]} color={'bg-violet-600'} parameters={parameters} setParameters={setParameters} />
          </div>
          <div className='flex flex-col justify-center items-center w-full relative top-[-2rem]'>
            <div className={`${raleway.className} relative left-[-12rem] top-[6rem] -rotate-45 font-semibold text-white p-1 bg-violet-600 border-2 border-black`}>
              <p>Product Market Customer</p>
            </div>
            <div className={`${raleway.className} relative left-[12rem] top-[4rem] rotate-45 font-semibold bg-yellow-400 p-1 w-[13rem] text-center border-2 border-black`}>
              <p>Inovation & IP</p>
            </div>
            <div className='w-[30rem] h-[30rem] rounded-full border-[5px] border-blue-600 p-[5px]'>
              <PolarAreaChart parameters={parameters} />
            </div>
            <div className={`${raleway.className} relative left-[12rem] top-[-4rem] -rotate-45 font-semibold p-1 bg-green-400 border-2 border-black `}>
              <p>Design Development Technical</p>
            </div>
            <div className={`${raleway.className} relative left-[-12rem] top-[-6rem] rotate-45 font-semibold text-white p-1 bg-blue-600 border-2 border-black`}>
              <p>Business Commercials Finances</p>
            </div>
            <button className='mt-8 bg-blue-500 py-3 px-5 rounded-md hover:ring-2 hover:ring-blue-400 focus:ring-2 focus:ring-blue-400 outline-none relative top-[5rem] left-[14rem]' onClick={() => {
              setParameters({
                Originality: Number(document.getElementById('Originality').value),
                IP_Protection: Number(document.getElementById('IP_Protection').value),
                Global_Patentability: Number(document.getElementById('Global_Patentability').value),
                Financial: Number(document.getElementById('Financial').value),
                Business: Number(document.getElementById('Business').value),
                Money: Number(document.getElementById('Money').value),
                Concept: Number(document.getElementById('Concept').value),
                Development: Number(document.getElementById('Development').value),
                Production_Feasibility: Number(document.getElementById('Production_Feasibility').value),
                Product: Number(document.getElementById('Product').value),
                Market: Number(document.getElementById('Market').value),
                Customer: Number(document.getElementById('Customer').value)
              })
              if (document.getElementById('pieLabels').classList.contains('hidden')) {
                document.getElementById('pieLabels').classList.remove('hidden');
              }
            }} >Submit</button>
          </div>
        </div >
        <div className={`flex flex-col gap-3 px-5 py-3 ${raleway.className} font-semibold text-xl mt-[-65px] mb-10`}>
          <p>Over All Score: {avg} / 10 </p>
          <p className='text-base'>Insight Current position is satisfactory with basic work underway, needs deeper & refined focus to become commercially viable & investable</p>
          <p className='-mb-4'>Scale Scoring: </p>
          <div className='flex flex-row justify-between text-base font-normal w-[20rem]'>
            <p>1 - 3 Low</p>
            <p>4 - 7 Average</p>
            <p>8 - 10 High</p>
          </div>
        </div>
      </main>

      <footer className={`bg-blue-600 ${raleway.className} font-semibold text-3xl p-10 text-white relative bottom-0 w-full`}>
        <p>&#169; {date.getFullYear()} Copyright WaysAhead Global</p>
      </footer>
    </>
  )
}