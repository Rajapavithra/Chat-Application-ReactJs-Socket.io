import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Join from './components/Join/Join';
import Cart from './components/Cart/Cart';

const App = () => {


    return(
    <Router>
        <Route  path='/' exact component={Join} />
        <Route  path='/Cart' component={Cart}  />
    </Router>
    )
};

export default App;