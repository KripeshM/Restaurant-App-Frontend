
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css';
import Allrestaurants from './components/Allrestaurants/Allrestaurants';
import ViewRestaurant from './components/ViewRestaurant';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <section>
        <Routes>
          <Route path='/' element={<Allrestaurants/>}/>
          <Route path='/view/:id' element={<ViewRestaurant/>}/>
        </Routes>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
