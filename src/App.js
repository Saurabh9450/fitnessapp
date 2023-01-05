import './App.css';
import {Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material'

import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ExerciseDetails from './pages/ExerciseDetails';
import Exercises from './components/Exercises';

const App = () => {
  return (
    <Box width ="400px" sx={{width: {x1: '1488px'}}} m="auto">
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/exercise' element = {<Exercises />}/>
        <Route path='/exercise/:id' element = {<ExerciseDetails />}/>
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
