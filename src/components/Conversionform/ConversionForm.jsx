import React, { Component } from 'react'
import './ConversionForm.scss'
import AxiosService from './../../services/axios_service'
import config from './../../config/config'

const axios = new AxiosService();

export class ConversionForm extends Component {

    constructor(props) {
        super(props)


        this.state = {
            numberValue: 1,
            resultValue: 0.08,
            firstSelectValue: this.props.options[0],
            secondSelectValue: this.props.options[1]
        }


    }

    onChangeFirst = (e) => {
        this.setState({ firstSelectValue: e.target.value }, () => this.convert())

    }
    onChangeSecond = (e) => {
        this.setState({ secondSelectValue: e.target.value }, () => this.convert());

    }

    onChangeInput = (e) => {
        this.setState({ numberValue: e.target.value }, () => this.convert());
    }


    convert = async () => {

        let unitVal = `${String(this.state.firstSelectValue)}To${String(this.state.secondSelectValue)}`;

        let inputValue = {
            Value: this.state.numberValue,
            OperationType: unitVal
        }

        try {
            const json = await axios.post(config.url, inputValue);
            // console.log();
            if (json.data.data[0]) {
                console.log('convertion success');

                this.setState({ resultValue: json.data.data[0].result });
            } else {
                this.setState({ resultValue: 0 });
            }

        }
        catch (err) {
            console.log(err);
        }

    }

    componentDidUpdate(prevProps) {
        if (prevProps.options !== this.props.options) {
            console.log("changed");

            this.setState({
                firstSelectValue: this.props.options[0],
                secondSelectValue: this.props.options[1],
            });

            if (this.props.options[0] === 'Inch') {
                this.setState({
                    numberValue: 1,
                    resultValue: 0.08
                })
            }
            if (this.props.options[0] === 'C') {
                this.setState({
                    numberValue: 0,
                    resultValue: 32
                })
            }
            if (this.props.options[0] === 'Ml') {
                this.setState({
                    numberValue: 1,
                    resultValue: 0.001
                })
            }
        }
    }
    render() {

        const value = this.props.options;


        return (
            <div>
                <form className='conversionForm-container'>
                    <div className='conversionForm-container--from'>
                        <label htmlFor="from">From</label>
                        <input type="number" id="from_input" name="form_input" onChange={(event) => this.onChangeInput(event)} value={this.state.numberValue} required></input>
                        <select id="from" name="from" onChange={(event) => this.onChangeFirst(event)} className={this.props.style} value={this.state.firstSelectValue}>
                            {
                                value.map((option, index) => {

                                    return <option key={index.toString()} value={option}>{option}</option>
                                })
                            }

                        </select>
                    </div>
                    <div className='conversionForm-container--to'>
                        <label htmlFor="to">To</label>
                        <input type="number" id="from_input" name="form_input" value={this.state.resultValue} readOnly className={this.props.style}></input>
                        <select id="to" name="to" onChange={this.onChangeSecond} className={this.props.style} value={this.state.secondSelectValue}>
                            {
                                value.map((option, index) => {
                                    return <option key={index.toString()} value={option} >{option}</option>
                                })
                            }
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}

export default ConversionForm
