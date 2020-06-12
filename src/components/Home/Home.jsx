import React, { useState, useEffect } from 'react'

// Componenet imports
import TopBar from '../TopBar/TopBar'
import ConversionType from './../CoversionType/CoversionType'
import ConversionForm from '../Conversionform/ConversionForm'

// Css and assets import
import './Home.scss'
import hot from './../../assests/hot.svg'
import hotInactive from './../../assests/hot_inactive.svg'
import beaker from './../../assests/beaker.svg'
import beakerInactive from './../../assests/beaker_inactive.svg'
import scale from './../../assests/scale.svg'
import scaleInactive from './../../assests/scale_inactive.svg'

// Constant arrayes for Setting conversion options
const lengthOption = ['Inch', 'Feet', 'Yard'];
const tempOption = ['C', 'F'];
const volumeOption = ['Ml', 'Litre'];

// Fucntional componeent * Home *
const Home = props => {

    // setting inital states -----------------------------

    // state for converison units
    let [optionsVal, setOptions] = useState(lengthOption)

    // state for Length conversion type - Background Image, clicked state, applied style based on state
    const [lengthBackground, setLengthBackground] = useState(scale)
    const [lengthClicked, setLengthclicked] = useState(true)
    const [lengthStyle, setLengthStyle] = useState('length-active')

    // state for Temperature conversion type - Background Image, clicked state, applied style based on state
    const [tempBackground, setTempBackground] = useState(hotInactive)
    const [tempClicked, setTempclicked] = useState(false)
    const [tempStyle, setTempStyle] = useState('temp')

    // state for Volume conversion type - Background Image, clicked state, applied style based on state
    const [volumeBackground, setVolumeBackground] = useState(beakerInactive)
    const [volumeClicked, setVolumeclicked] = useState(false)
    const [volumeStyle, setVolumeStyle] = useState('volume')
    let [formStyle, setFormStyle] = useState('lengthUnits')

    // Method to change background image state of Length button when mouse enters
    const hoverLengthEnter = () => {
        setLengthBackground(scale);
    }

    // Method to change background image state of Length button when mouse exits
    const hoverLengthExit = () => {
        if (lengthClicked === false) {
            setLengthBackground(scaleInactive)
        }
    }

    // Method to manipulates diffrent states of Length, Temperature, Volume button when clicked on Length button
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

    // Method to change background image state of Temperature button when mouse enters
    const hoverTempEnter = () => {
        setTempBackground(hot);
    }

    // Method to change background image state of Temperature button when mouse exits
    const hoverTempExit = () => {
        if (tempClicked === false) {
            setTempBackground(hotInactive)
        }
    }

    // Method to manipulates diffrent states of Length, Temperature, Volume button when clicked on Temperature button
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

    // Method to change background image state of Volume button when mouse enters
    const hoverVolumeEnter = () => {
        setVolumeBackground(beaker);
    }

    // Method to change background image state of Volume button when mouse exits
    const hoverVolumeExit = () => {
        if (volumeClicked === false) {
            setVolumeBackground(beakerInactive)
        }
    }

    // Method to manipulates diffrent states of Length, Temperature, Volume button when clicked on Volume button
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

    // Method to change state of conversion unit array based on clicked state of specific button
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
        <div className="home">
            <TopBar className="home-topbar" />
            <div className="home-header">
                <span className="home-header-text">Welcome To Quantity Measurement</span>
            </div>
            <div className="home-main">
                <div className="home-main--chooseType">
                    <span>Choose Type</span>
                </div>
                <div className="home-main--conversionType">
                    <ConversionType
                        styleName={lengthStyle}
                        image={lengthBackground}
                        enter={hoverLengthEnter}
                        click={clickLength}
                        exit={hoverLengthExit}
                    >
                        Length
                    </ConversionType>

                    <ConversionType
                        styleName={tempStyle}
                        image={tempBackground}
                        enter={hoverTempEnter}
                        click={clickTemp}
                        exit={hoverTempExit}
                    >
                        Temperature
                    </ConversionType>

                    <ConversionType
                        styleName={volumeStyle}
                        image={volumeBackground}
                        enter={hoverVolumeEnter}
                        click={clickVolume}
                        exit={hoverVolumeExit}
                    >
                        Volume
                    </ConversionType>

                </div>
                <div className="home-main--conversion">
                    {useEffect(passOption)}
                    <ConversionForm style={formStyle} options={optionsVal}></ConversionForm>
                </div>
            </div>
        </div>
    )
}

export default Home
