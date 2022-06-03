import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Doc from './pages/Doc';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/doc/:docId' element={<Doc/>}/>
      </Routes>
    </Router>
  );
}

export default App;
