import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Post from './components/Posts/Post'
import { Actions, Family, Fantasy, Mystery, Originals, TopRated } from './urls/url'

const App=()=> {
  return (
   <div>
    <Navbar/>
    <Banner/>
    <Post genre={Originals} />
    <Post genre={TopRated} title="Top Rated" />
    <Post genre={Actions} title='Actions' />
    <Post genre={Fantasy} title='Fantasy' />
    <Post genre={Mystery} title='Mystery' />
    <Post genre={Family} title='Family' />   
   
   </div>
  )
}

export default App