import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Pool from './pages/Pool';
import Dashboard from './pages/Dashboard';
import Swap from './pages/Swap';
import Header from './components/Header';
// import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Dashboard />}></Route>
          <Route exact path='/pool' element={<Pool />}></Route>
          <Route exact path='/swap' element={<Swap />}></Route>
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
