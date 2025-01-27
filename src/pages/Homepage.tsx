import React from 'react'
import Header from './Header/Header'
import Home from '../components/Home'
import HomeComponent from '../components/HomeComponent'

export default function Homepage() {
  return (
    <div>
        <Header/>
        {/* <img src="https://raw.githubusercontent.com/liveblocks/liveblocks/main/.github/assets/header-dark.svg" alt='hey' /> */}
        <HomeComponent/>
    </div>
  )
}
