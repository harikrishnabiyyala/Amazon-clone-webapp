
import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom"
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';
import { auth } from './firebase';
import { useEffect } from 'react';
import Payment from './components/Payment';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
     // console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    //BEM
    <div className="App">
      <Routes>
      <Route path="/payment" element={[<Header />,<Payment/>]} />
        <Route path="/checkout" element={[<Header />, <Checkout />]} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={[<Header />, <Home />]} />
      </Routes>
    </div>
  );
}

export default App;
