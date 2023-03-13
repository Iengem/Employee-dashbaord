import React from 'react'
import Sidenav from './sideBar'
import Navbar from './navBar'

const settings = () =>{
    return(
        <div className='App'>
            <Navbar/>
            <div className='page'>
                <Sidenav />
                <div className='content'>
                </div>
            </div>
        </div>
    )
}

export default settings