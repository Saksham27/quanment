import React from 'react'
import './TopBar.scss'
import history from './../../services/history'

function TopBar(props) {
    return (
        <div class='container'>
            <div class='quantment' onClick={() => history.push('./')}>Quantment</div>
            <div/>
            <div class="history" onClick={() => history.push('./History')}>History</div>
        </div>
    )
}


export default TopBar

