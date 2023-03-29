import React from 'react';
import Navbar from './navBar';
import Sidenav from './sideBar';
import {Link} from 'react-router-dom';
import date from '../images/dateico.png';

const settings = () =>{
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
                    <Link className='navItem selected'>Profile</Link>
                    <Link className='navItem' to='/Login'>Login & Security</Link>
                    <Link className='navItem' to='/Notifications'>Notifications</Link>
                </div>
              </div>
              <div className='settingsContent settingsContent-mod'>
                    <div className='settingsContent-left'>
                        <h2>Profile details</h2>
                        <p>Reset and Update your name, username, email, and phone number</p>
                    </div>
                    <form>
                      <div className='twoCol-row settings-two'>
                          <p>Address</p>
                        <div>
                          <div className='longbar'>
                              <div>
                                <label>Number</label>
                                <label>Street</label>
                              </div>
                              <div>
                                <label>City</label>
                                <label>State</label>
                                <label>Country</label>
                              </div>
                          </div>
                          <input placeholder='Please enter your current address'/>
                        </div>
                      </div>
                      <div>
                        <p className='row-header'>Contact</p>
                        <div className='threeCol-row'>
                          <div>
                            <label>Work phone</label>
                            <select>
                              <option selected>+234</option>
                            </select>
                          </div>
                          <div>
                            <label>Mobile phone</label>
                            <select>
                              <option selected>+234</option>
                            </select>
                          </div>
                          <div>
                            <label>Home phone</label>
                            <select>
                              <option selected>+234</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className='threeCol-row'>
                        <div>
                          <label>Gender</label>
                          <select>
                            <option selected>Male</option>
                          </select>
                        </div>
                        <div>
                          <label>Marital Status</label>
                          <select>
                            <option selected>Single</option>
                          </select>
                        </div>
                      </div>
                      <div className='column-container'>
                        <p className='row-header'>Date</p>
                        <div className='threeCol-row'>
                          <div>
                            <label>dd/mm/yy</label>
                            <div className='datePicker1'>
                              <p>Pick your date</p>
                              <img src={date}/>
                            </div>
                          </div>
                        </div>
                        <div className='lastRow'>
                          <p>Update</p>
                          <h2>Reset</h2>
                        </div>
                      </div>
                    </form>
                </div>
            </div>
      </div>
  </div>
    )
}

export default settings