import React, { useState } from "react";
import BookingDataService from '../../Services/BookingService';
import './AddBooking.css'


const AddBooking = () => {
    const initialBookingState = {
        id: null,
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        message: '',
        seminarId: null,
        published: false
    };
 
    const  [booking, setBooking] = useState(initialBookingState);
    const  [submitted, setSubmitted] = useState(false); 

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
           seminarId: booking.seminarId
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
                seminarId: response.data.seminarId,
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
        <div className="main text-list">
            <div className="submit-form text-list">
                {submitted ? (
                    <div className="jumbotron text-list">
                        <h4>You Booked Successfully!</h4>
                        <br/>
                        <button className="btn btn-success btn-lg" onClick={newBooking}>Add</button>
                    </div>
                ) : (
                    <div className="jumbotron jumbotron-book-book text-list">
                        <div className="form-group text-list">
                            
                            <input type="text" 
                                   className="form-control form-control-lg" 
                                   id="firstName" 
                                   required 
                                   value={booking.firstName} 
                                   onChange={handleInputChange} 
                                   name="firstName"
                                   placeholder="First Name" />
                        </div>
                        <div className="form-group text-list">
                            
                            <input type="text"
                                   className="form-control form-control-lg"
                                   id="lastName"
                                   required
                                   value={booking.lastName}
                                   onChange={handleInputChange}
                                   name="lastName"
                                   placeholder="Last Name" />
                        </div>
                        <div className="form-group text-list">
                            
                            <input type="text"
                                   className="form-control form-control-lg"
                                   id="email"
                                   required
                                   value={booking.email}
                                   onChange={handleInputChange}
                                   name="email"
                                   placeholder="Email" />
                        </div>
                        <div className="form-group text-list">
                            
                            <input type="text"
                                   className="form-control form-control-lg"
                                   id="mobile"
                                   required
                                   value={booking.mobile}
                                   onChange={handleInputChange}
                                   name="mobile"
                                   placeholder="Mobile" />
                        </div>
                        <div className="form-group text-list">
                        
                            <textarea type="text"
                                   className="form-control form-control-lg"
                                   id="message"
                                   required
                                   value={booking.message}
                                   onChange={handleInputChange}
                                   name="message"
                                   placeholder="Message" />
                        </div>
                        <div className="form-group text-list">
                            
                            <input type="text"
                                   className="form-control form-control-lg"
                                   id="mobile"
                                   required
                                   value={booking.sesminarId}
                                   onChange={handleInputChange}
                                   name="seminarId"
                                   placeholder="Seminar ID" />
                        </div>
                        <br/>
                        <br/>
                        <button onClick={saveBooking} className="btn btn-warning btn-lg text-list">Add New Booking</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AddBooking;