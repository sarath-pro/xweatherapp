import React from 'react'
import './Details.css'

function Card({ title, value }) {
    return (
        <div className='weather-card'>
            <h5>{title}</h5>
            <p>{value}{title === 'Temparature' && <span><span>&#176;</span>C</span>}
            </p>
        </div>
    )
}

function Details({ data }) {
    return (
        <div className='weather-cards'>
            <Card title={'Temparature'} value={data.current.temp_c} />
            <Card title={'Humidity'} value={data.current.humidity+'%'} />
            <Card title={'Condition'} value={data.current.condition.text} />
            <Card title={'Wind Speed'} value={data.current.wind_kph+' kph'} />
        </div>
    )
}

export default Details