
import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries'



const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())




function App() {


  return (
    <>
      <Suspense fallback={<h2>Waiting for Countries</h2>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
