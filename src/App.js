import React, { useEffect } from 'react'
import './App.css'
import Header from './Header'
import Home from './Home'
import Payment from './Payment'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Checkout'
import Login from './Login'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import Orders from './Orders'
import Footer from './Footer'
import Particles from 'react-particles-js'
import './particlesjs-config.json'

const promise = loadStripe('pk_test_51HvSJ6DdAkwevPceVRfoJucfCTBz1innC6NDwzY3mnJs2DLgWTAAm6KXJSopvWrhkSDb0uSSGT0gCd69lcIkwc0t00ooRqUcPe') // public key for payment processing

function App () {
  const [{}, dispatch] = useStateValue()
  useEffect(() => {
    // will run only once when the app component loads
    auth.onAuthStateChanged(authUser => {
      // console.log('THE USER IS >>> ', authUser)
      if (authUser) {
        // the user just logged out the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  const particlesOption = {
    particles: {
      number: {
        value: 327,
        density: {
          enable: true,
          value_area: 800
        }
      }
    },
    line_linked: {
      enable_auto: true,
      distance: 150,
      // color: #ffffff,
      opacity: 0.23,
      width: 0.9
    }
  }
  return (
    // BEM
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/login'>
            <Particles className='particles' params={particlesOption}/>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path='/orders'>
            <Header />
            <Orders />
            <Footer />
          </Route>
          <Route path='/emptybasket'>
            <Header />
            <Orders />
            <Footer />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
