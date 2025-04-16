import { Suspense } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import PricingData from './components/pricing/PricingData'

const pricingPromise = fetch('public/pricingOption.json')
                       .then(res => res.json())
                      
function App() {
 

  return (
    <>
     <header>
      <Navbar></Navbar>
     </header>
     <main>
     <Suspense fallback={<span className="loading loading-spinner loading-xl "></span>}>
      <PricingData pricingPromise={pricingPromise}></PricingData>
     </Suspense>
     </main>
     <footer>

     </footer>
    </>
  )
}

export default App
