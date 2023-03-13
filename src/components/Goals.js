import React from 'react'
import Sidenav from './sideBar'
import Navbar from './navBar'
import { BsArrowUp, BsArrowDown, BsChevronDown, BsCheckCircle } from 'react-icons/bs'

const goals = () =>{
    return(
        <div className='App'>
            <Navbar/>
            <div className='page'>
                <Sidenav />
                <div className='content'>
                    <div className='content-header-one'>
                        <div className='header-box first-box'>
                            <h1>24</h1>
                            <p>Goals in total</p>
                        </div>
                        <div className='header-box'>
                            <h2>Completed</h2>
                            <div className='progressbarCont'><p className='progressBar completed'></p></div>
                            <p>10/24 Completed (42%)</p>
                        </div>
                        <div className='header-box'>
                            <h2>Goals</h2>
                            <div className='progressbarCont'><p className='progressBar'></p></div>
                            <p>4/24 in progress(16%)</p>
                        </div>
                        <div className='header-box'>
                            <h2>Goals</h2>
                            <div className='progressbarCont'><p className='progressBar overdue'></p></div>
                            <p>10/24 Overdue (42%)</p>
                        </div>
                    </div>
                    <div className='classGrid'>
                        <div className='homepageGrid-header'>
                            <h2>Goals</h2>
                            <div className='homeselect'>
                                <h2>All <BsChevronDown  className='arrowDown' /></h2>
                                <p><BsArrowUp className='absolute'/><BsArrowDown/>Sort</p>
                                <button> + Add Goal</button>
                            </div>
                        </div>
                        <div className='goalsGrid'>
                            <div className='goals-grid-header'>
                                <h2>Goal Title</h2>
                                <h2>Category</h2>
                                <h2>Start Date</h2>
                                <h2>End Date</h2>
                                <h2>Reviewer</h2>
                            </div>
                            <div className='goals-grid-content'>
                                <div className='goalTitle'>
                                    <p><BsCheckCircle /> Foster and grow a new or existing relationship</p>
                                    <p><BsCheckCircle /> Foster and grow a new or existing relationship</p>
                                    <p><BsCheckCircle /> Foster and grow a new or existing relationship</p>
                                    <p><BsCheckCircle /> Foster and grow a new or existing relationship</p>
                                    <p><BsCheckCircle /> Foster and grow a new or existing relationship</p>
                                    <p><BsCheckCircle /> Foster and grow a new or existing relationship</p>
                                    <p><BsCheckCircle /> Foster and grow a new or existing relationship</p>
                                    <p><BsCheckCircle /> Foster and grow a new or existing relationship</p>
                                </div>
                                <div className='goalTitle'>
                                    <p>Access Management</p>
                                    <p>App Integration</p>
                                    <p>App Testing</p>
                                    <p>Business Process Management</p>
                                    <p>Case Management</p>
                                    <p>Case Management</p>
                                    <p>Case Management</p>
                                    <p>Case Management</p>
                                </div>
                                <div className='goalTitle'>
                                    <p>03 Aug 2020</p>
                                    <p>06 Jun 2020</p>
                                    <p>14 Sep 2020</p>
                                    <p>02 Nov 2020</p>
                                    <p>14 Sep 2020</p>
                                    <p>14 Sep 2020</p>
                                    <p>14 Sep 2020</p>
                                    <p>14 Sep 2020</p>
                                </div>
                                <div className='goalTitle'>
                                    <p>1 Jan 2022</p>
                                    <p>4 Apr 2022</p>
                                    <p>11 Nov 2022</p>
                                    <p>3 Mar 2022</p>
                                    <p>3 Mar 2022</p>
                                    <p>3 Mar 2022</p>
                                    <p>1 Jan 2022</p>
                                    <p>1 Jan 2022</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default goals