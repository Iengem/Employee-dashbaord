import React from 'react';
import Navbar from './navBar';
import Sidenav from './sideBar';
import {Link} from 'react-router-dom';
import {IoToggleSharp} from 'react-icons/io5';

const notifications = () =>{
    return(
      <div className='App'>
      <Navbar/>
      <div className='page'>
          <Sidenav />
          <div className='content'>
            <div className='settingsTop'>
                    <div className='settingsAdmin notification-header'>
                    <h2>AA</h2>
                    <div>  
                      <h1>Aya and Co Ltd</h1>
                      <p>Adebisi Akin (Staff)</p>
                    </div>
                </div>
                <div className='settingsNav'>
                    <Link className='navItem' to='/settings'>Profile</Link>
                    <Link className='navItem' to='/Login'>Login & Security</Link>
                    <Link className='navItem selected' to='/Notifications'>Notifications</Link>
                </div>
              </div>
              <div className='settingsContent settingsthree email'>
                    <div className='settingsContent-left'>
                        <h2>Email notifications</h2>
                        <p>Get email notifications about what is going on when you are offline</p>
                    </div>
                    <form>
                      <div className='notifications'>
                        <IoToggleSharp className='toggle'/>
                        <div className='notificationText'>
                          <h2>News and Updates</h2>
                          <p>Get emails to find out what is going on when you are offline</p>
                        </div>
                      </div>
                      <div className='notifications'>
                        <IoToggleSharp className='toggle'/>
                        <div className='notificationText'>
                          <h2>Comments</h2>
                          <p>Feedback on your wall by supervisors</p>
                        </div>
                      </div>
                      <div className='notifications'>
                        <IoToggleSharp className='toggle'/>
                        <div className='notificationText'>
                          <h2>Reminders</h2>
                          <p>Reminders on your goals deadline</p>
                        </div>
                      </div>
                    </form>
                </div>
                <div className='settingsContent settingsthree Push'>
                    <div className='settingsContent-left'>
                        <h2>Push notifications</h2>
                        <p>Get email notifications about what is going on when you are offline</p>
                    </div>
                    <form>
                      <div className='notifications'>
                        <IoToggleSharp className='toggle'/>
                        <div className='notificationText'>
                          <h2>Comments</h2>
                          <p>Feedback on your wall by supervisors</p>
                        </div>
                      </div>
                      <div className='notifications'>
                        <IoToggleSharp className='toggle'/>
                        <div className='notificationText'>
                          <h2>Reminders</h2>
                          <p>Reminders on your goals deadline</p>
                        </div>
                      </div>
                    </form>
                </div>
                
            </div>
      </div>
  </div>
    )
}

export default notifications