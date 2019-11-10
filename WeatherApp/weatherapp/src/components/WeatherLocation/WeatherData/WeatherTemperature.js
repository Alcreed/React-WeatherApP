import React from 'react'
import WeatherIcons from 'react-weathericons'
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../../../constantes/weathers'
import PropTypes from 'prop-types'
import './styles.css'

const stateIconName = estadoClima => {
    switch(estadoClima){
        case CLOUD:
            return 'cloud'
        case CLOUDY:
            return 'cloudy'
        case SUN:
            return 'day-sunny'
        case RAIN:
            return 'rain'
        case SNOW:
            return 'snow'
        case WINDY:
            return 'windy'
        default:
            return 'day-sunny'
        }
    }

const getWeatherIcon = estadoClima => {
    return (<WeatherIcons className = 'wIcon' name={stateIconName(estadoClima)} size="2x" />)
}

const WeatherTemperature = ({temperatura, estadoClima}) => (
    <div className = 'weatherTemperature'>
        {getWeatherIcon(estadoClima)}
        <span className = 'temperatura'>{`${temperatura}°C`}</span>
    </div>
)

WeatherTemperature.propTypes = {
    temperatura: PropTypes.number.isRequired,
    estadoClima: PropTypes.string
}

export default WeatherTemperature