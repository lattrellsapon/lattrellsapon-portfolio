import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import { LandingPage } from './components/pages/LandingPage';
import { Projects } from './components/pages/Projects';
import { Career } from './components/pages/Career';
import { Skills } from './components/pages/Skills';
import { Contact } from './components/pages/Contact';

import { GlobalProvider } from './context/GlobalState';
import { GlobalContext } from './context/GlobalState';

function App() {
  const { isLandingPageClose } = useContext(GlobalContext);
  console.log(isLandingPageClose);
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <div className='App'>
            <Navbar />
            <Route exact path='/' component={LandingPage} />
            <div className='container'>
              <Route exact path='/career' component={Career} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/skills' component={Skills} />
              <Route exact path='/contact' component={Contact} />
            </div>
            <Footer />
          </div>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}
export default App;
