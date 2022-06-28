import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Photos from './components/Photos';
import Studies from './components/Studies';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Studies' element={<Studies/>} />
      <Route path='/Photos' element={<Photos/>} />
      </Route>
    </Routes>

    </>
  );
}

export default App;
