import React, { useRef, useState } from 'react'
import Details from './Details'
import './Weather.css'

function Weather() {
    const city = useRef('')
    const [weather, setWeather] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async () => {
        setIsLoading(true)
        try {
            let url = 'https://api.weatherapi.com/v1/current.json'
            const data = {
                key: 'bfeec7b033424a37b4a131625242904',
                q: city.current
            }
            url = url+'?key='+data.key+'&q='+data.q+'&'+'aqi=no'
            console.log('data:: ', data)
            const response = await fetch(url)
            let wdata = await response.json()
            console.log(wdata)
            setWeather(wdata)
        } catch(error) {
            console.log(error)
            alert('Failed to fetch weather data')
        }
        
        setIsLoading(false)
    }

  return (
    <div>
        <div className='container'>
            <form>
                <input type='text' placeholder='Enter city name' id='city' name='city' required onChange={(event)=>{
                    // console.log()
                    city.current = event.target.value
                }}/>
                <button onClick={(event)=>{
                    event.preventDefault()
                    handleSubmit()
                }}>Search</button>
            </form>
        </div>
        {
            isLoading && (
                <p>Loading data...</p>
            )
        }
        {
            weather!=='' && (
                <Details data={weather} />
            )
        }

    </div>
  )
}

export default Weather