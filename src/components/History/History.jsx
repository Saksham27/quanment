import React, { Component } from 'react'
import TopBar from '../TopBar/TopBar'



export default class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            History: []
        }
    }
 
    

    render() {
        return (
            <div class="home">
                <TopBar class="home-topbar" />
                <div class="home-header">
                    <span class="home-header-text">Conversion History</span>
                </div>
                <div class="home-main">
                    <table>
                        <tr>
                            <th>Value</th>
                            <th>Operation Type</th>
                            <th>Result</th>
                            <th>Check To Delete</th>
                        </tr>
                        {/* {
                            this.state.History.map((d, index) => {
                                retur
                            <tr>
                                <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>Germany</td>
                                <td>
                                    <input type="checkbox"></input>
                                </td>
                            }
                         </tr> */}
                            
                    </table>
                </div>

            </div>
        )
    }
}

