import React, { Component } from 'react';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'


import  AddSeminar from './Components/Seminar-Admin/AddSeminar'
import  ListOfSeminars from './Components/Seminar-Admin/ListOfSeminars'
import  Seminar from './Components/Seminar-Admin/Seminar'
import AddBooking from './Components/Booking-Admin/AddBooking';
import ListOfBookings from './Components/Booking-Admin/ListOfBookings'
import Booking from './Components/Booking-Admin/Booking'
import SeminarLists from './Components/Seminar-User/SeminarLists'
import SeminarRegister from './Components/Seminar-User/SeminarRegister';
import SeminarInfo from './Components/Seminar-User/SeminarInfo';



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router className="App">
          <Navbar />
          <Switch>

            <Route exact path='/' component={Home} />
            <Route  path='/add' component={AddSeminar} />
            <Route  path={['/listofseminars']} component={ListOfSeminars} />
            <Route  path={['/listofbookings']} component={ListOfBookings} />
            <Route  path='/semcomp/:id' component={Seminar} />
            <Route  path='/bookcomp/:id' component={Booking} />
            <Route  path='/addbooking' component={AddBooking} />
            <Route  path='/seminarregister/:id' component={SeminarRegister} />
            <Route  path='/seminarinfo/:id' component={SeminarInfo} />
            <Route exact  path='/seminars' component={SeminarLists} />            
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
           
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
