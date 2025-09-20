
import { use } from "react"
import Country from "./Countries/Country"


const Countries = ({countriesPromise}) => {

    const countries = use(countriesPromise)
    const countriesData = countries.countries

  return (
    <div style={{display:"flex", flexWrap: "wrap" , justifyContent: "space-between", gap: "20px"}}>
        {
            countriesData.map(country => <Country country={country}></Country>)
        }
    </div>
  )
}

export default Countries