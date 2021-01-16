import React, { useState, useEffect } from 'react';

import {
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import './App.css';
import Home from './pages/home/Home';
import { Contact } from './pages/contact/Contact';
import Beds from './pages/CardsDetails/beds/Beds';
import Sofa from './pages/CardsDetails/sofa/Sofa';
import DinningTable from './pages/CardsDetails/dinningTable/DinningTable';
import Chairs from './pages/CardsDetails/chairs/Chairs';
import TvStand from './pages/CardsDetails/tvStand/TvStand';
import DressingTable from './pages/CardsDetails/dressingTable/DressingTable';
import DashBoard from './pages/Dashboard/DashBoard';
import Login from './pages/adminLogin/Login';
import Authenticated from './components/Authenticated';



function App() {

  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300)
    {
      setIsVisible(true);
    } else
    {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="App">
      <div id="scroll_top" onClick={scrollToTop}>
        {isVisible && <Link to="#top">
          <i class="fas fa-angle-up"></i>
        </Link>
        }
      </div>

      <Switch>
        <Route exact path="/dashboard">
          <Authenticated>
            <DashBoard />
          </Authenticated>
        </Route>

        <Route path="/adminlogin" exact >
          <Authenticated nonAuthenticated={true}>
            <Login />
          </Authenticated>
        </Route>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />


        <Route path='/beds' exact component={Beds} />
        <Route path='/sofa' exact component={Sofa} />
        <Route path="/dinningtable" exact component={DinningTable} />
        <Route path="/chairs" exact component={Chairs} />
        <Route path="/tvstand" exact component={TvStand} />
        <Route path="/dressingtable" exact component={DressingTable} />
        <Redirect to="/" />

      </Switch>



    </div>
  );
}

export default App;
