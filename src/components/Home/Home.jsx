import React from 'react'
import TopBar from '../TopBar/TopBar'
import './Home.scss'
import ConversionType from './../CoversionType/CoversionType'
import  beaker from './../../assests/beaker.svg'
import  hot from './../../assests/'

const Home = props => {
    return (
        <div class="home">
            <TopBar class="home-topbar"/>
             <div class="home-header">
                 <span class="home-header-text">Welcome To Quantity Measurement</span>
             </div>
             <div class="home-main">
                <ConversionType>Length</ConversionType>
                <ConversionType>Temperature</ConversionType>
                <ConversionType>Volume</ConversionType>
             </div>
        </div>
    )
}


export default Home
