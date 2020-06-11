import React, { useState, useEffect } from 'react'
import TopBar from '../TopBar/TopBar'
import './Home.scss'
import ConversionType from './../CoversionType/CoversionType'
import hot from './../../assests/hot.svg'
import hotInactive from './../../assests/hot_inactive.svg'
import beaker from './../../assests/beaker.svg'
import beakerInactive from './../../assests/beaker_inactive.svg'
import scale from './../../assests/scale.svg'
import scaleInactive from './../../assests/scale_inactive.svg'
import { ConversionForm } from '../Conversionform/ConversionForm'

const lengthOption = ['Inch', 'Feet', 'Yard'];
const tempOption = ['C', 'F'];
const volumeOption = ['Ml', 'Litre'];

const Home = props => {

    let [optionsVal, setOptions] = useState(lengthOption)
    const [lengthBackground, setLengthBackground] = useState(scale)
    const [lengthClicked, setLengthclicked] = useState(true)
    const [lengthStyle, setLengthStyle] = useState('length-active')
    const [tempBackground, setTempBackground] = useState(hotInactive)
    const [tempClicked, setTempclicked] = useState(false)
    const [tempStyle, setTempStyle] = useState('temp')
    const [volumeBackground, setVolumeBackground] = useState(beakerInactive)
    const [volumeClicked, setVolumeclicked] = useState(false)
    const [volumeStyle, setVolumeStyle] = useState('volume')
    let [formStyle, setFormStyle] = useState('lengthUnits')



    // methods for length button
    const hoverLengthEnter = () => {
        setLengthBackground(scale);
    }
    const hoverLengthExit = () => {
        if (lengthClicked === false) {
            setLengthBackground(scaleInactive)
        }
    }
    const clickLength = () => {
        setLengthBackground(scale);
        setTempBackground(hotInactive);
        setVolumeBackground(beakerInactive);

        setLengthclicked(true);
        setTempclicked(false);
        setVolumeclicked(false);

        setLengthStyle('length-active');
        setVolumeStyle('volume');
        setTempStyle('temp');

        setFormStyle('lengthUnits');
       
    };

    
    

    // method for temp button

    const hoverTempEnter = () => {
        setTempBackground(hot);
    }
    const hoverTempExit = () => {
        if (tempClicked === false) {
            setTempBackground(hotInactive)
        }
    }
    const clickTemp = () => {
        setLengthBackground(scaleInactive);
        setTempBackground(hot);
        setVolumeBackground(beakerInactive);

        setLengthclicked(false);
        setTempclicked(true);
        setVolumeclicked(false);

        setLengthStyle('length');
        setTempStyle('temp-active');
        setVolumeStyle('volume');
        
        setFormStyle('tempUnits');
        
    }

    // method for volume button

    const hoverVolumeEnter = () => {
        setVolumeBackground(beaker);
    }
    const hoverVolumeExit = () => {
        if (volumeClicked === false) {
            setVolumeBackground(beakerInactive)
        }
    }
    const clickVolume = () => {
        setLengthBackground(scaleInactive);
        setTempBackground(hotInactive);
        setVolumeBackground(beaker);

        setLengthclicked(false);
        setTempclicked(false);
        setVolumeclicked(true);

        setVolumeStyle('volume-active');
        setLengthStyle('length');
        setTempStyle('temp');
        
        setFormStyle('volumeUnits');
        
    }

    let passOption = () => {
        if (lengthClicked === true) {       
            setOptions(lengthOption);
        }
        if (tempClicked === true) {       
            setOptions(tempOption);
        }
        if (volumeClicked === true) { 
            setOptions(volumeOption);
        }
    }

   
    return (
        <div class="home">
            <TopBar class="home-topbar" />
            <div class="home-header">
                <span class="home-header-text">Welcome To Quantity Measurement</span>
            </div>
            <div class="home-main">
                <div class="home-main--chooseType">
                    <span>Choose Type</span>
                </div>
                <div class="home-main--conversionType">
                    <ConversionType
                        styleName={lengthStyle}
                        image={lengthBackground}
                        enter={hoverLengthEnter}
                        click={clickLength}
                        exit={hoverLengthExit}
                        active={true}>
                        Length
                    </ConversionType>

                    <ConversionType
                        styleName={tempStyle}
                        image={tempBackground}
                        enter={hoverTempEnter}
                        click={clickTemp}
                        exit={hoverTempExit}
                        active={false}>
                        Temperature
                    </ConversionType>

                    <ConversionType
                        styleName={volumeStyle}
                        image={volumeBackground}
                        enter={hoverVolumeEnter}
                        click={clickVolume}
                        exit={hoverVolumeExit}
                        active={false}>
                        Volume
                    </ConversionType>

                </div>
                <div class="home-main--conversion">
                   {useEffect(passOption)}
                    <ConversionForm style={formStyle} options={optionsVal}></ConversionForm>
                </div>
            </div>
        </div>
    )
}


export default Home
