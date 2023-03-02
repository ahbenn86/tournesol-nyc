import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import FullMenu from './pages/FullMenu'
import './index.css'
import Credits from './pages/Credits'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
    <Route exact path="/" element={<App/>}></Route>
    <Route exact path="/full-menu" element={<FullMenu/>}></Route>
    <Route exact path="/credits" element={<Credits/>}></Route>
    </Routes> 
  </Router>
)
