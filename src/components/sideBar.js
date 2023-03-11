import React from 'react';
import { sideBarData } from './SidebarData';
import {BsThreeDotsVertical} from 'react-icons/bs';

const Sidenav = () => {
    return(
        <div className='sidebar'>
            {sideBarData.map((item, key) =>{
                return(
                    <div className='sidebarItem'k id={window.location.pathname === item.path ? 'selected' : ''} onClick={() =>{
                        window.location.pathname = item.path
                    }}>
                        {item.icon}<h2>{item.title}</h2>
                    </div>
                )
            })}
            <div className='Admin'>
                <h2>AA</h2>
                <div className='admin-description'>
                    <p>Aya & Co. Ltd</p>
                    <h1>Admin</h1>
                </div>
                <BsThreeDotsVertical className='Dots'/>
            </div>
        </div>
    )
}

export default Sidenav