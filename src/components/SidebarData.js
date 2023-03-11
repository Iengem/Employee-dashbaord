import React from 'react'
import { BsBarChartLine, BsThreeDotsVertical, BsPeople } from 'react-icons/bs';
import { SlTrophy } from 'react-icons/sl';
import { IoSettingsOutline } from 'react-icons/io5';
import { TbWallet } from 'react-icons/tb';
import { RiHome5Line } from 'react-icons/ri'

export const sideBarData = [
    {
        icon: <RiHome5Line className='home'/>,
        title: 'Home',
        path: '/'
    },
    {
        icon: <SlTrophy className='home'/>,
        title: 'Goals',
        path: '/Goals.js'
    },
    {
        icon: <BsBarChartLine className='home'/>,
        title: 'Performance',
        path: '/performance.js'
    },
    {
        icon: <IoSettingsOutline className='home'/>,
        title: 'Settings',
        path: '/settings.js'
    },
    {
        icon: <TbWallet className='home'/>,
        title: 'Wallet',
        path: '/wallet.js'
    }
]