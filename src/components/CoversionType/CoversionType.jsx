import React, { Component } from 'react'
import './CoversionType.scss'

export default class CoversionType extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return (
            <button 
                type="button" 
                className={`conversion-box ${this.props.styleName}`} 
                onMouseEnter={this.props.enter} 
                onMouseLeave={this.props.exit} 
                onClick={this.props.click} 
                onClickAway={(event) => this.props.clickAway(event)} 
                active={this.props.active}>
                <img src={this.props.image}></img>
                <span>{this.props.children}</span>
            </button>
        )
    }
}
