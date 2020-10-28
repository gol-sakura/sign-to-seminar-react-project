import React, { useState, useEffect } from "react";
import BookingDataService from "../../Services/BookingService";
import { Link } from "react-router-dom";


const ListOfBooking = () => {
    const [bookings, setBookings] = useState([]);
    const [currentBooking, setCurrentBooking] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    


    useEffect(() => {
        retrieveBookings();
    }, []);

    

    const retrieveBookings = () => {
        BookingDataService.getAll()
        .then(response => {
            setBookings(response.data);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };

    const refreshList = () => {
        retrieveBookings();
        setCurrentBooking(null);
        setCurrentIndex(-1);
    };


    const setActiveBooking = (booking, index) => {
        setCurrentBooking(booking);
        setCurrentIndex(index);
    };


    const removeAllBookings = () => {
        BookingDataService.removeAll()
        .then(response => {
            console.log(response.data);
            refreshList();
        })
        .catch(e => {
            console.log(e);
        });
    };


    

    return (
        <div className="container">
            <br/>
            <Link to="/" type="button" className="btn btn-warning btn-lg text "> Home</Link>
        <div className="list row main text-list">
            <div className="col-md-12">
                
            </div >
            <div className=" jumbotron my-4 col-md-6">
                <h4>Booking List</h4>
                <br/>
                <br/>
                <ul className="list-group">
                    {bookings && bookings.map((booking, index) => (
                        <li className={"list-group-item     " + (index === currentIndex ? "active" : " ")
                    }
                    onClick={() => setActiveBooking(booking, index)}
                key={index}><h5 className=" w-100"><strong>{booking.firstName} {booking.lastName}</strong></h5> 
                <div className=" mb-1"><strong>Email:</strong> {booking.email}</div>  
                <div className="  mb-1"><strong>Mobile:</strong> {booking.mobile}</div>
                <div className="  mb-1"><strong>Message:</strong> {booking.message}</div>
                <div className="  mb-1"><strong>Seminar ID:</strong> {booking.seminarId}</div></li>
                    ))}
                </ul>
                <br/>
                <br/>
                <button className= " m-3 btn  btn-danger btn-lg button"  onClick={removeAllBookings}>Remove All</button>
            </div>
            <div className="col-md-6">
                {currentBooking ? (
                    <div className="jumbotron  my-4">
                        <h4 className=""><strong>Booked By</strong></h4>
                        <br/>
                        <div>
                            <label><strong>First Name:  </strong></label>{" "}
                            {currentBooking.firstName}
                        </div>
                        <br/>
                        <div>
                            <label><strong>Last Name: </strong></label>{" "}
                            {currentBooking.lastName}
                        </div>
                        <br/>
                        <div>
                            <label><strong>Email: </strong></label>{" "}
                            {currentBooking.email}
                        </div>
                        <br/>
                        <div>
                            <label><strong>Mobile: </strong></label>{" "}
                            {currentBooking.mobile}
                        </div>
                        <br/>
                        <div>
                            <label><strong>message: </strong></label>{" "}
                            {currentBooking.message}
                        </div>
                        <br/>
                        <div>
                            <label><strong>Status: </strong></label>{" "}
                            {currentBooking.published ? "Published" : "Pending"}
                        </div>
                        <br/>
                        
                        <div>
                            <label><strong>Seminar ID:  </strong></label>{" "}
                            {currentBooking.seminarId}
                        </div>
                        <br/>
                        <Link to={["/bookcomp/"] + currentBooking.id} 
                                className="btn btn-warning btn-lg text">
                                    Edit
                                </Link>
                    </div>
                    
                ): (
                    
                    <div>
                        <br/>
                        <p>Please Click a Booking ..... </p>
                    </div>
                )}
            </div>
            
        </div>
       
        </div>
    );
};



export default ListOfBooking;