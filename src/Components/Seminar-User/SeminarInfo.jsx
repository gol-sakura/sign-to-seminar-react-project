import React, { useState, useEffect } from "react";
import SeminarDataService from "../../Services/SeminarService";
import { Link } from "react-router-dom";
import imgCarousel01 from './imgCarousel01.jpg';
import './SeminarInfo.css';





const SeminarInfo = props => {
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


    return (
        <div className=" text-list jumbo-flex">
            <div className="text-center">
                <br/>
                <h2 className="text">Seminar Details</h2>
                <br/>
                <img src={imgCarousel01} alt={imgCarousel01} className="img-circle img-border" />
            </div>
            <br />
            <div className="col-md-12">
                <h4 className="text-justify-center">{currentSeminar.title}</h4>
            </div>
            <br />
            <div className="col-md-12">
                <h5 className="text-justify-center"><strong>Speaker: </strong>{currentSeminar.speaker}</h5>
                <h6 className="text-justify-center"><strong>Date & Time: </strong>{currentSeminar.seminarDateTime}</h6>
            </div>
            <div className="col-md-12">
                <p className="text-justify-center">{currentSeminar.description}</p>
            </div>
            <Link to="/seminars/" className="btn btn-warning btn-lg button-design">Back To Seminars</Link>
               
            <Link to={["/seminarregister/"] + currentSeminar.id } className="btn btn-lg button-design">Register For Seminar</Link>
        </div>
    )
}


export default SeminarInfo;