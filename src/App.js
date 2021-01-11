import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Title from './components/Title';


import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.css';
import Home from './pages/home/Home';
import Gallery from './pages/Gallery/Gallery';
import Beds from './pages/CardsDetails/beds/Beds';
import Sofa from './pages/CardsDetails/sofa/Sofa';
import DinningTable from './pages/CardsDetails/dinningTable/DinningTable';
import Chairs from './pages/CardsDetails/chairs/Chairs';
import TvStand from './pages/CardsDetails/tvStand/TvStand';
import DressingTable from './pages/CardsDetails/dressingTable/DressingTable';
import AuthProvider from './contexts/AuthContext';
import DashBoard from './pages/Dashboard/DashBoard';
import PrivateRoute from './components/PrivateRouter';
import Footer from './components/footer/Footer';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Title 
        title = "Bhole Shankar Furniture"
       />
      
    <AuthProvider >
      <Switch>
        <PrivateRoute exact path = "/dashboard" component = {DashBoard} /> 
        <Route path="/" exact component={Home} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path='/beds' exact component={Beds} />
        <Route path='/sofa' exact component={Sofa} />
        <Route path="/dinningtable" exact component={DinningTable} />
        <Route path="/chairs" exact component={Chairs} />
        <Route path="/tvstand" exact component={TvStand} />
        <Route path="/dressingtable" exact component={DressingTable} />
        <Redirect to="/" />
        
      </Switch>
    </AuthProvider>
      
      

    </div>
  );
}

export default App;
