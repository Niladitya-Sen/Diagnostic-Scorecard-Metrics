import '@/styles/globals.css'
import { useState } from 'react'

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
  
  return <Component parameters={parameters} setParameters={setParameters} {...pageProps} />
}