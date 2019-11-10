import React from 'react'
import PropTypes from 'prop-types'
import WeatherTemperature from './WeatherTemperature'
import WeatherExtraInfo from './WeatherExtraInfo'
import './styles.css'

const WeatherData = ({ data }) => {
    const { temperatura, estadoClima, humedad, viento} = data
    return (
    <div className = 'weatherDataCont'>
        <WeatherTemperature temperatura = {temperatura} estadoClima = {estadoClima} />
        <WeatherExtraInfo humedad = {humedad} viento = {viento} />
    </div>)
}

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperatura: PropTypes.number.isRequired,
        estadoClima: PropTypes.string.isRequired,
        humedad: PropTypes.number.isRequired,
        viento: PropTypes.string.isRequired
    })
}

export default WeatherData