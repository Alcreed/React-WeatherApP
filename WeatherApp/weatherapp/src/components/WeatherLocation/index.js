import React, {Component} from 'react'
import Location from './Location'
import WeatherData from './WeatherData'
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../../constantes/weathers'
import './styles.css'

const data = {
    temperatura: 20,
    estadoClima: SUN,
    humedad: 80,
    viento: '10 m/s'
}

const data2 = {
    temperatura: 10,
    estadoClima: WINDY,
    humedad: 5,
    viento: '20 m/s'
}

class WeatherLocation extends Component {

    constructor() {
        super()
        this.state = {
            city: 'Colombia',
            data: data
        }
    }

    handleUpdateClick = () => {
        this.setState({
            data: data2 
        })
        console.log('Actualizado')
    }

    render = () => {
        const {city, data} = this.state
        return (
            <div className = 'weatherLocation'>
                <Location city = {city} />
                <WeatherData data = {data} />
                <button onClick = {this.handleUpdateClick}>Actualizar</button>
            </div>
        )
    }

}

export default WeatherLocation