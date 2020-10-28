import React, { useState, useEffect } from "react";
import SeminarDataService from "../../Services/SeminarService";
import './Seminar.css'
import {Link} from 'react-router-dom'

const Seminar = props => {
    const initialSeminarState = {
        id: null,
        title: '',
        description: '',
        speaker: '',
        seats: '',
        seminarDateTime: '',
        published: false
    };
    
    const [currentSeminar, setCurrentSeminar] = useState(initialSeminarState);
    const [message, setMessage] = useState("");

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
        setCurrentSeminar({ ...currentSeminar, [name]: value});
    };

    const updatePublished = status => {
        var data = {
            id: currentSeminar.id,
            title: currentSeminar.title,
            description: currentSeminar.description,
            speaker: currentSeminar.speaker,
            seats: currentSeminar.seats,
            seminarDateTime: currentSeminar.seminarDateTime,
            published: status
        };

        SeminarDataService.update(currentSeminar.id, data)
        .then(response => {
            setCurrentSeminar({ ...currentSeminar, published: status });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };


    const updateSeminar = () => {
        SeminarDataService.update(currentSeminar.id, currentSeminar)
        .then(response => {
            console.log(response.data);
            setMessage("Seminar updated successfully!");
        })

    .catch(e => {
        console.log(e);
    });
    };

    const deleteSeminar = () => {
        SeminarDataService.remove(currentSeminar.id)
        .then(response => {
            console.log(response.data);
            props.history.push("/listofseminars");
        })
        .catch(e => {
            console.log(e);
        });
    };

    return (
        <div className="jumbotron jumbo-color main text-list">
            <div>
                {currentSeminar ? (
                    <div className="edit-form">
                        <h4>Seminar</h4>
                        <br/>
                        <form> 
                            <div className="form-group row">
                                <label htmlFor="colFormLabelLg"  className="col-sm-2 col-form-label col-form-label-lg"><strong>Title</strong></label>
                                <input 
                                    type="text"
                                    className="form-control form-control-lg col-sm-10"
                                    id="colFormLabelLg"
                                    name="title"
                                    value={currentSeminar.title}
                                    onChange={handleInputChange}
                                     />
                            </div>
                            <div className="form-group row">
                                <label htmlFor="colFormLabelLg"  className="col-sm-2 col-form-label col-form-label-lg"><strong>Description</strong></label>
                                <input 
                                    type="text"
                                    className="form-control form-control-lg col-sm-10"
                                    id="colFormLabelLg"
                                    name="description"
                                    value={currentSeminar.description}
                                    onChange={handleInputChange} />
                            </div>
                            <div className="form-group row">
                                <label htmlFor="colFormLabelLg"  className="col-sm-2 col-form-label col-form-label-lg"><strong>Speaker</strong></label>
                                <input 
                                    type="text"
                                    className="form-control form-control-lg col-sm-10"
                                    id="colFormLabelLg"
                                    name="speaker"
                                    value={currentSeminar.speaker}
                                    onChange={handleInputChange} />
                            </div>
                            <div className="form-group row">
                                <label htmlFor="colFormLabelLg"  className="col-sm-2 col-form-label col-form-label-lg"><strong>Seats</strong></label>
                                <input 
                                    type="text"
                                    className="form-control form-control-lg col-sm-10"
                                    id="colFormLabelLg"
                                    name="seats"
                                    value={currentSeminar.seats}
                                    onChange={handleInputChange} />
                            </div>
                            <div className="form-group row">
                                <label htmlFor="colFormLabelLg"  className="col-sm-2 col-form-label col-form-label-lg"><strong>Date&Time</strong></label>
                                <input 
                                    type="text"
                                    className="form-control form-control-lg col-sm-10"
                                    id="colFormLabelLg"
                                    name="seminarDateTime"
                                    value={currentSeminar.seminarDateTime}
                                    onChange={handleInputChange} />
                            </div>
                            <br/>
                            <br/>
                            <div className="form-group">
                                <label><strong>Status: </strong></label>
                                {currentSeminar.published ? " Published" : " Pending"}
                            </div>
                        </form>

                        {currentSeminar.published ? (
                            <button className="btn btn-success btn-lg mr-2"
                                    onClick={() => updatePublished(false)}>Unpublished</button>
                        ) : (
                            <button className="btn btn-success btn-lg  mr-2"
                                    onClick={() => updatePublished(true)}>Publish</button>
                        )}

                        <button className="btn btn-danger btn-lg  mr-2" 
                                onClick={deleteSeminar}>Delete</button>

                        <button 
                            type="submit"
                            className="btn btn-warning btn-lg  mr-2"
                            onClick={updateSeminar}>Update</button>
                        
                        <p>{message}</p>
                        <Link 
                            className="btn btn-info btn-lg  mr-2"
                            to='/listofseminars' >Back To Seminars</Link>
                    </div>
                ) : (
                    <div>
                        <br/>
                        <p>Click a seminar...</p>
                    </div>
                )}
            </div>
        </div>
    );

};



export default Seminar;