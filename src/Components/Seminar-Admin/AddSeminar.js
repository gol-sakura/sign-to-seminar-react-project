import React, { useState } from "react";
import SeminarDataService from '../../Services/SeminarService';
import {Link} from 'react-router-dom'
import './AddSeminar.css'

const AddSeminar = () => {
    const initialSeminarState = {
        id: null,
        titel: '',
        description: '',
        speaker: '',
        seminarDateTime: '',
        seats: '',
        published: false
    };
 
    const  [seminar, setSeminar] = useState(initialSeminarState);
    const  [submitted, setSubmitted] = useState(false); 

    const handleInputChange = event => {
        const { name, value } = event.target;
        setSeminar({...seminar, [name]: value});
    };

    const saveSeminar = () => {
        var data = {
            title: seminar.title,
            description: seminar.description,
            speaker: seminar.speaker,
            seminarDateTime: seminar.seminarDateTime,
            seats: seminar.seats
        };

        SeminarDataService.create(data)
        .then(response => {
            setSeminar({
                id: response.data.id,
                title: response.data.title,
                description: response.data.description,
                speaker: response.data.speaker,
                seminarDateTime: response.data.seminarDateTime,
                seats: response.data.seats,
                published: response.data.published
            });

            setSubmitted(true);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };

    const newSeminar = () => {
        setSeminar(initialSeminarState);
        setSubmitted(false);
    };

    return (
        <div className="main">
            <div className="submit-form">
                {submitted ? (
                    <div className="jumbotron jumbotron-book-admin">
                        <br/>
                        <h4>You Submitted Successfully!</h4>
                        <br/>
                        <button className="btn btn-success btn-lg button-design"  onClick={newSeminar}>Add Seminar</button>
                        
                        <Link 
                            className="btn btn-warning btn-lg  mr-2 button-design"
                            to='/listofseminars' >Back To Seminars</Link>
                    </div>
                ) : (
                    <div className="jumbotron jumbotron-book-admin">
                        <div className="form-group">                            
                            <input type="text" 
                                   className="form-control form-control-lg" 
                                   id="title" 
                                   required 
                                   value={seminar.title} 
                                   onChange={handleInputChange} 
                                   name="title"
                                   placeholder="Title"/>
                        </div>
                        <div className="form-group">                           
                            <textarea type="text"
                                   className="form-control form-control-lg"
                                   id="description"
                                   required
                                   value={seminar.description}
                                   onChange={handleInputChange}
                                   name="description"
                                   placeholder="Description" />
                        </div>
                        <div className="form-group">
                            
                            <input type="text"
                                   className="form-control form-control-lg"
                                   id="speaker"
                                   required
                                   value={seminar.speaker}
                                   onChange={handleInputChange}
                                   name="speaker"
                                   placeholder="Speaker" />
                        </div>
                        <div className="form-group">
                            
                            <input type="text"
                                   className="form-control form-control-lg"
                                   id="seminarDateTime"
                                   required
                                   value={seminar.seminarDateTime}
                                   onChange={handleInputChange}
                                   name="seminarDateTime"
                                   placeholder="seminar Date & Time" />
                        </div>
                        <div className="form-group">
                        
                            <input type="text"
                                   className="form-control form-control-lg"
                                   id="seats"
                                   required
                                   value={seminar.seats}
                                   onChange={handleInputChange}
                                   name="seats"
                                   placeholder="Seats" />
                        </div>
                        <br/>
                        <br/>
                        <button onClick={saveSeminar} className="btn btn-warning btn-lg text-list">Add Seminar</button>
                        
                    </div>
                )}
            </div>
        </div>
    );
}

export default AddSeminar;