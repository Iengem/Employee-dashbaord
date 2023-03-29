import React from 'react';
import Navbar from './navBar';
import Sidenav from './sideBar';
import {Link} from 'react-router-dom';
import date from '../images/dateico.png';
import {HiEyeOff} from 'react-icons/hi'

const Login = () =>{
    return(
      <div className='App'>
      <Navbar/>
      <div className='page'>
          <Sidenav />
          <div className='content'>
            <div className='settingsTop'>
                <div className='settingsAdmin'>
                    <h2>AA</h2>
                    <div>
                      <h1>Aya and Co Ltd</h1>
                      <p>Adebisi Akin (Staff)</p>
                    </div>
                </div>
                <div className='settingsNav'>
                    <Link className='navItem' to='/settings'>Profile</Link>
                    <Link className='navItem selected' to='/Login'>Login & Security</Link>
                    <Link className='navItem' to='/Notifications'>Notifications</Link>
                </div>
              </div>
              <div className='settingsContent settingsthree'>
                    <div className='settingsContent-left'>
                        <h2>Login & security settings</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Purus odio porttitor dignissim orci non purus. Nunc nisi ut </p>
                    </div>
                    <form>
                      <h2 className='changePassword'>Change Password</h2>
                      <div className='twoCol-row settings-two'>
                          <p>Type your current password</p>
                          <div className='datePicker'>
                            <input placeholder='Current password'/>
                            <HiEyeOff className='eye'/>
                          </div>
                      </div>
                      <div className='twoCol-row settings-two'>
                          <p>Type your new password</p>
                          <div className='datePicker'>
                            <input placeholder='New password'/>
                            <HiEyeOff className='eye'/>
                          </div>
                      </div>
                      <div className='twoCol-row settings-two'>
                          <p>Confirm password</p>
                          <div className='datePicker'>
                            <input placeholder='Confirm password'/>
                            <HiEyeOff className='eye'/>
                          </div>
                      </div>
                      <div className='savePassword'>
                        <button>Save password</button>
                      </div>
                    </form>
                </div>
            </div>
      </div>
  </div>
    )
}

export default Login