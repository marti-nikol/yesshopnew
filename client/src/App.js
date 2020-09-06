import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Ochila from './components/ochila/Ochila';

import Product from './components/layout/products/product/Product';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import MyOrder from './components/layout/products/product/MyOrder/MyOrder';
import AboutUs from './components/about/AboutUs';
import Rulles from './components/about/Rulles';
import Delivery from './components/about/Delivery';
import Cookies from './components/about/Cookies';
import Gdpr from './components/about/Gdpr';
import ReturnProduct from './components/about/ReturnProduct';
import ContactUs from './components/about/ContactUs';

// redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    M.AutoInit();
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />

          <section>
            <Alert />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <Route exact path='/api/ochila/:id' component={Product} />
              <Route exact path='/myorder/:id' component={MyOrder} />
              <Route exact path='/za-nas' component={AboutUs} />
              <Route exact path='/pravila' component={Rulles} />
              <Route exact path='/dostavka' component={Delivery} />
              <Route exact path='/cookies' component={Cookies} />
              <Route exact path='/gdpr' component={Gdpr} />
              <Route exact path='/contact' component={ContactUs} />
              <Route
                exact
                path='/vrashtane-na-stoka'
                component={ReturnProduct}
              />
              <Route exact path='/api/ochila' component={Ochila} />
            </Switch>
          </section>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
