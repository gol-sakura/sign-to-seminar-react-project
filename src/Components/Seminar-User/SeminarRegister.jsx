import React, { useState, useEffect } from "react";
import BookingDataService from '../../Services/BookingService';
import SeminarDataService from "../../Services/SeminarService";
import {Link} from 'react-router-dom'

import './SeminarRegister.css'

const SeminarRegister = (props) => {
    const initialBookingState = {
        id: null,
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        message: '',      
        published: false
    };
    const initialSeminarState = {
            id: null,
            title: '',
            speaker: '',
            description: ''

           
        };


    const [currentSeminar, setCurrentSeminar] = useState(initialSeminarState);

    const  [booking, setBooking] = useState(initialBookingState);
    const  [submitted, setSubmitted] = useState(false); 



    const getSeminar = id => {
        SeminarDataService.get(id)
        .then(response => {
            setCurrentSeminar(response.data);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };

    useEffect(() => {
        getSeminar(props.match.params.id);

    }, [props.match.params.id]);





    const handleInputChange = event => {
        const { name, value } = event.target;
        setBooking({...booking, [name]: value});
    };

    const saveBooking = () => {
        var data = {
            
            firstName: booking.firstName,
            lastName: booking.lastName,
            email: booking.email,
            mobile: booking.mobile,
            message: booking.message,

            seminarId: currentSeminar.id
        };

        BookingDataService.create(data)
        .then(response => {
            setBooking({
                id: response.data.id,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                email: response.data.email,
                mobile: response.data.mobile,
                message: response.data.message,
                
                published: response.data.published
            });

            setSubmitted(true);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };

    const newBooking = () => {
        setBooking(initialBookingState);
        setSubmitted(false);
    };

    return (
        <div className="main text-list jumbotron-book">
            <div className="submit-form text-list">
                {submitted ? (
                    <div className="text">
                        <h4>You Booked Successfully!</h4>
                        <br/>
                        <Link className="btn btn-success btn-lg infoModal text" onClick={newBooking}>Add</Link>
                        <Link to="/seminars/"
                                className="btn btn-warning btn-lg infoModal text">Back To Seminars</Link>
                    </div>
                ) : (
                    <div className="text">
                        <br/>
                         <p><strong>Seminar ID: </strong> {currentSeminar.id}</p>
                         <p><strong>Title: </strong>{currentSeminar.title}</p>
                         <p><strong> Speaker: </strong> {currentSeminar.speaker}</p>
                         <p><strong> Description: </strong>{currentSeminar.description}</p>
                         <br/>
                        <div className="form-group">
                            
                            <input type="text" 
                                   className="form-control form-control-lg" 
                                   id="firstName" 
                                   required 
                                   value={booking.firstName} 
                                   onChange={handleInputChange} 
                                   name="firstName"
                                   placeholder="First Name" />
                        </div>
                        <div className="form-group">
                            
                            <input type="text"
                                   className="form-control form-control-lg"
                                   id="lastName"
                                   required
                                   value={booking.lastName}
                                   onChange={handleInputChange}
                                   name="lastName"
                                   placeholder="Last Name" />
                        </div>
                        <div className="form-group">
                            
                            <input type="text"
                                   className="form-control form-control-lg"
                                   id="email"
                                   required
                                   value={booking.email}
                                   onChange={handleInputChange}
                                   name="email"
                                   placeholder="Email" />
                        </div>
                        <div className="form-group">
                            
                            <input type="text"
                                   className="form-control form-control-lg"
                                   id="mobile"
                                   required
                                   value={booking.mobile}
                                   onChange={handleInputChange}
                                   name="mobile"
                                   placeholder="Mobile" />
                        </div>
                        <div className="form-group">
                        
                            <textarea type="text"
                                   className="form-control form-control-lg"
                                   id="message"
                                   required
                                   value={booking.message}
                                   onChange={handleInputChange}
                                   name="message"
                                   placeholder="Message" />
                        </div>
                        
                   
                        <br/>
                        <Link onClick={saveBooking} className="btn btn-success btn-lg">Register</Link>
                        
                        <Link to="/seminars/" className="btn btn-warning btn-lg">Back To Seminars</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SeminarRegister;