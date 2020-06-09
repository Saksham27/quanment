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
            <div className={`conversion-box ${ this.props.styleName }`}>
                {this.props.children}
            </div>
        )
    }
}
