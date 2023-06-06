import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Page components
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Resipe from './pages/resipe/Recipe'
import Navbar from './componants/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="search" element={<Search />} />
          <Route path="resipes/:id" element={<Resipe />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
