import React from 'react'
import history from './../../services/history'

// css import
import './TopBar.scss'

function TopBar(props) {
    return (
        <div className='container'>
            <div className='quantment' onClick={() => history.push('./quanment')}>Quantment</div>
            <div />
            <div className="history" onClick={() => history.push('./History')}>History</div>
        </div>
    )
}

export default TopBar

