import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/home/home.page';
import TopHeadline from './pages/top-headlines/top-headlines.page';
import Technology from './pages/technology/technology.page';
import NotFound from './pages/404/404.page';

import './App.css';

function App() {
  return (
    <div className='app'>
    <BrowserRouter >
      <Navbar />
      <div className='section'>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/technology' element={<Technology />} />
          <Route exact path='/top-headline' element={<TopHeadline />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;