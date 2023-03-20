

import './App.css';
import Catalogue from './pages/catalogue/catalogue';
import About from './pages/about/about'
import SignInForm from './pages/sign-in/SignInForm';
import NoMatch from './pages/NoMatch';
import LogInForm from './pages/sign-in/LogInForm';
import ArtistPage from './pages/artist-page/ArtistPage';
// import Home from './pages/home';
import React, {lazy} from 'react'
import {Routes, Route} from 'react-router-dom'
const Home = lazy(() => import('./pages/home/home'))

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalogue' element={<Catalogue/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sign-in' element={<SignInForm/>}/>
        <Route path='/log-in' element={<LogInForm/>}/>
        <Route path='/artist-page' element={<ArtistPage/>}/>
        <Route path ='*' element={<NoMatch/>}/>
      </Routes>
      
  </>
  );
}

export default App;
