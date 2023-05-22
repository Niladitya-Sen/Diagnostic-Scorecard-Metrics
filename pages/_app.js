import Head from 'next/head'
import logo from '../public/logo.png'
import Alert, { alertIcons } from '@/components/Alert';
import { AlertContext } from '@/context/Context';
import '@/styles/globals.css'
import { useState, useMemo } from 'react'

export default function App({ Component, pageProps }) {
  const [parameters, setParameters] = useState({
    Originality: 0,
    IP_Protection: 0,
    Global_Patentability: 0,
    Financial: 0,
    Business: 0,
    Money: 0,
    Concept: 0,
    Development: 0,
    Production_Feasibility: 0,
    Product: 0,
    Market: 0,
    Customer: 0
  });

  const [alert, setAlert] = useState({
    animation: alertIcons.sendingMsg,
    translate: "-translate-x-[30rem]",
    color: "bg-blue-500",
    message: "Sending Mail..."
  });

  const value = useMemo(() => ({ alert, setAlert }), [alert, setAlert]);

  return (
    <>
      <Head>
        <title>
          Diagnostic Scorecard Metrics
        </title>
        <link rel="icon" href={logo.src} type="image/png" />
      </Head>
      <AlertContext.Provider value={value}>
        <Alert />
        <Component parameters={parameters} setParameters={setParameters} {...pageProps} />
      </AlertContext.Provider>
    </>
  )
}