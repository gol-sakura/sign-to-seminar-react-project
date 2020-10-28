import React, { useState, useEffect } from "react";
import SeminarDataService from "../../Services/SeminarService";
import { Link } from "react-router-dom";
import imgSem04 from './imgSem04.jpg';
import './SeminarList.css';
import Search from '../Search/Search'




const SeminarList = () => {

    const [seminars, setSeminars] = useState([]);

    
    useEffect(() => {
        retrieveSeminars();
    }, []);



    const retrieveSeminars = () => {
        SeminarDataService.getAll()
            .then(response => {
                setSeminars(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };


    
    return (
        <div>
            <br/>
            <div className="col-md-12 text-list">
               <Search  />
            </div>
            <div className="text-list">
                <h2 className="text-list">UPCOMING SEMINARS</h2>
            </div>
            <br />
            <div className="container text-list ">
                    <div className="row row-cols-3">
                    {seminars && seminars.map((seminar) => (
                        <div className="row  align-item-start" key={seminar.id}>
                            <div className="col">
                                <img src={imgSem04} alt={imgSem04} className="img-circle" />
                                <div className="col-md-12">
                                    
                                    <p><strong>{seminar.title}</strong></p>
                                    <p>{seminar.speaker}</p>
                                    <p>{seminar.seminarDateTime}</p>
                                </div>
                                <div className="sem-footer">
                                    <Link to={["/seminarregister/"] + seminar.id}
                                className="btn btn-warning btn-lg button-design">Register
                            </Link>
                            <Link to={["/seminarinfo/"] + seminar.id}
                                className="btn btn-warning btn-lg button-design">Details
                            </Link>
                                    
                                    
                                </div>
                            </div>
                        </div>
))}
                    </div>
            </div>
        </div>
    )
}
export default SeminarList;