import React, { Component } from 'react'
import Cinema from './Cinema/Cinema'
import HomeCarousel from './HomeCarousel/HomeCarousel'
import HomeMenu from './HomeMenu/HomeMenu'

export default class Home extends Component {
    render() {
        return (
            <div>
                <HomeCarousel/>
                <HomeMenu/>
                <Cinema/>
            </div>
        )
    }
}
