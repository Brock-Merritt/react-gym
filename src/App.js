import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import ExcDetail from './pages/ExcDetail';
import Home from './pages/Home';
import navbar from './components/navbar';
import footer from './components/footer';

const App = () => {
  return (
    <Box width="400px">
        NavBar
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/excercise/:id" element={<ExcDetail/>} />

            
        </Routes>
    </Box>
  )
}

export default App