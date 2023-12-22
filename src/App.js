import './App.css';
import LuasLingkaran from './komponen/lingkaran';
import LuasSegitiga from './komponen/segitiga';
import Persegi from './komponen/persegi';
import Home from './page/Home';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/lingkaran" element={<LuasLingkaran/>} />
          <Route path="/segitiga" element={<LuasSegitiga/>} />
          <Route path="/persegi" element={<Persegi />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
