import React, { useState, useEffect } from "react";
import BookingDataService from "../../Services/BookingService";


const Booking = props => {
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
    
    const [currentBooking, setCurrentBooking] = useState(initialBookingState);
    const [message, setMessage] = useState("");

    const getBooking = id => {
        BookingDataService.get(id)
        .then(response => {
            setCurrentBooking(response.data);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };

    useEffect(() => {
        getBooking(props.match.params.id);

    }, [props.match.params.id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentBooking({...currentBooking, [name]: value});
    };

    const updatePublished = status => {
        var data = {
            id: currentBooking.id,
            firstName: currentBooking.firstName,
            lastName: currentBooking.lastName,
            email: currentBooking.email,
            mobile: currentBooking.mobile,
            message: currentBooking.message,
            seminarId: currentBooking.seminarId,
            published: status
        };

        BookingDataService.update(currentBooking.id, data)
        .then(response => {
            setCurrentBooking({ ...currentBooking, published: status });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };


    const updateBooking = () => {
        BookingDataService.update(currentBooking.id, currentBooking)
        .then(response => {
            console.log(response.data);
            setMessage("Booking updated successfully!");
        })

    .catch(e => {
        console.log(e);
    });
    };

    const deleteBooking = () => {
        BookingDataService.remove(currentBooking.id)
        .then(response => {
            console.log(response.data);
            props.history.push("/listofbookings");
        })
        .catch(e => {
            console.log(e);
        });
    };

    return (
        <div className="main jumbotron-book-admin text-list">
            <div>
                {currentBooking ? (
                    <div className="edit-form">
                        <br/>
                        <h4>Booking</h4>
                        <br/>
                        <form className=""> 
                            <div className="form-group row">
                                <label htmlFor="colFormLabelLg"  className="col-sm-2 col-form-label col-form-label-lg"><strong>First Name</strong></label>
                                <input 
                                    type="text"
                                    className="form-control form-control-lg col-sm-10"
                                    id="colFormLabelLg"
                                    name="firstName"
                                    value={currentBooking.firstName}
                                    onChange={handleInputChange}
                                     />
                            </div>
                            <div className="form-group row">
                                <label htmlFor="colFormLabelLg"  className="col-sm-2 col-form-label col-form-label-lg"><strong>Last Name</strong></label>
                                <input 
                                    type="text"
                                    className="form-control form-control-lg col-sm-10"
                                    id="colFormLabelLg"
                                    name="lastName"
                                    value={currentBooking.lastName}
                                    onChange={handleInputChange} />
                            </div>
                            <div className="form-group row">
                                <label htmlFor="colFormLabelLg"  className="col-sm-2 col-form-label col-form-label-lg"><strong>Email</strong></label>
                                <input 
                                    type="text"
                                    className="form-control form-control-lg col-sm-10"
                                    id="colFormLabelLg"
                                    name="email"
                                    value={currentBooking.email}
                                    onChange={handleInputChange} />
                            </div>
                            <div className="form-group row">
                                <label htmlFor="colFormLabelLg"  className="col-sm-2 col-form-label col-form-label-lg"><strong>Mobile</strong></label>
                                <input 
                                    type="text"
                                    className="form-control form-control-lg col-sm-10"
                                    id="colFormLabelLg"
                                    name="mobile"
                                    value={currentBooking.mobile}
                                    onChange={handleInputChange} />
                            </div>
                            <div className="form-group row">
                                <label htmlFor="colFormLabelLg"  className="col-sm-2 col-form-label col-form-label-lg"><strong>Message</strong></label>
                                <input 
                                    type="text"
                                    className="form-control form-control-lg col-sm-10"
                                    id="colFormLabelLg"
                                    name="message"
                                    value={currentBooking.message}
                                    onChange={handleInputChange} />
                            </div>
                            <div className="form-group row">
                                <label htmlFor="colFormLabelLg"  className="col-sm-2 col-form-label col-form-label-lg"><strong>Seminar ID</strong></label>
                                <input 
                                    type="text"
                                    className="form-control form-control-lg col-sm-10"
                                    id="colFormLabelLg"
                                    name="seminarId"
                                    value={currentBooking.seminarId}
                                    onChange={handleInputChange} />
                            </div>
                            <br/>
                            <br/>
                            <div className="form-group">
                                <label><strong>Status: </strong></label>
                                {currentBooking.published ? " Published" : " Pending"}
                            </div>
                        </form>

                        {currentBooking.published ? (
                            <button className="btn btn-success btn-lg mr-2"
                                    onClick={() => updatePublished(false)}>Unpublished</button>
                        ) : (
                            <button className="btn btn-success btn-lg  mr-2"
                                    onClick={() => updatePublished(true)}>Publish</button>
                        )}

                        <button className="btn btn-danger btn-lg  mr-2" 
                                onClick={deleteBooking}>Delete</button>

                        <button 
                            type="submit"
                            className="btn btn-warning btn-lg  mr-2"
                            onClick={updateBooking}>Update</button>
                        
                        <p>{message}</p>

                    </div>
                ) : (
                    <div>
                        <br/>
                        <p>Click a Booking for edit...</p>
                    </div>
                )}
            </div>
        </div>
    );

};



export default Booking;