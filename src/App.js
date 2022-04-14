import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/home/home.page';
import Science from './pages/science/science.page';
import Technology from './pages/technology/technology.page';
import NotFound from './pages/404/404.page';
import SearchQuery from './pages/search-query/search-query.page';
import './App.css';
// import Footer from './components/footer/footer.component';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchField: null
    }
  }

  handleChange = (e) => {
    this.setState({ 
      searchField: e.target.value },
      // () => console.log('state in appjs of event handler', this.state)
    )
  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter >
          <Navbar handleChange={this.handleChange} searchField={this.state.searchField} />
          <div className='container'>
            <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route exact path='/search-query' element={<SearchQuery handleChange={this.handleChange} searchField={this.state.searchField} />} />
              <Route exact path='/technology' element={<Technology />} />
              <Route exact path='/science' element={<Science />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;