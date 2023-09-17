import './App.css';

import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home/home';
import { Main } from './components/main/main';
import { Header } from './components/header/header';
import { Favorit } from './components/favorites/favorites';
function App() {
  return (
    <div className="App">
      <Header></Header>
<Routes>
<Route path="/"element={<Main/>}></Route>   
<Route path="/catalog"element={<Home/>}></Route>  
<Route path="/favorites"element={<Favorit/>}></Route> 
      </Routes>
    </div>
  );
}

export default App;
