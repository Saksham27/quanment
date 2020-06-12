import React from 'react'
import './TopBar.scss'
import history from './../../services/history'

function TopBar(props) {
    return (
        <div className='container'>
            <div className='quantment' onClick={() => history.push('./')}>Quantment</div>
            <div />
            <div className="history" onClick={() => history.push('./History')}>History</div>
        </div>
    )
}


export default TopBar

