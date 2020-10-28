import React, { useState, useEffect } from "react";
import SeminarDataService from "../../Services/SeminarService";
import { Link } from "react-router-dom";
import './ListOfSeminar.css';
import Search from '../Search/Search'

const ListOfSeminar = () => {
    
    const [seminars, setSeminars] = useState([]);
    const [currentSeminar, setCurrentSeminar] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
 
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

    const refreshList = () => {
        retrieveSeminars();
        setCurrentSeminar(null);
        setCurrentIndex(-1);
    };


    const setActiveSeminar = (seminar, index) => {
        setCurrentSeminar(seminar);
        setCurrentIndex(index);
    };


    const removeAllSeminars = () => {
        SeminarDataService.removeAll()
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
        <div className="row list main text-list">
            <br/>
         <div className="col-md-12">
                <Search/> 
                
            </div> 
            <br/>
            <div className="col-md-6  jumbotron-search">
            <br/>
                <h4>Seminar List</h4>
                <br/>
                <br/>
                <ul className="list-group">
                    {seminars && seminars.map((seminar, index) => (
                        <li className={"list-group-item " + (index === currentIndex ? "active" : " ")
                    }
                    onClick={() => setActiveSeminar(seminar, index)}
                key={index}>{seminar.title}</li>
                    ))}
                </ul>
                <br/>
                <br/>
                <button className= " m-3 btn  btn-danger btn-lg button"  onClick={removeAllSeminars}>Remove All</button>
            </div>
            <div className="col-md-6">
                {currentSeminar ? (
                    <div className="jumbotron jumbotron-search">
                        <h4>Seminar</h4>
                        <br/>
                        <div>
                            <label><strong>Title: </strong></label>{" "}
                            {currentSeminar.title}
                        </div>
                        <br/>
                        <div>
                            <label><strong>Description: </strong></label>{" "}
                            {currentSeminar.description}
                        </div>
                        <br/>
                        <div>
                            <label><strong>Speaker: </strong></label>{" "}
                            {currentSeminar.speaker}
                        </div>
                        <br/>
                        <div>
                            <label><strong>Seats: </strong></label>{" "}
                            {currentSeminar.seats}
                        </div>
                        <br/>
                        <div>
                            <label><strong>Status: </strong></label>{" "}
                            {currentSeminar.published ? "Published" : "Pending"}
                        </div>
                        <br/>
                        <Link to={["/semcomp/"] + currentSeminar.id} 
                                className="btn btn-warning btn-lg">
                                    Edit
                                </Link>
                    </div>
                    
                ): (
                    
                    <div>
                        <br/>
                        <p>Please Click a Smeinar ..... </p>
                    </div>
                )}
            </div>
        </div>
        </div>
    );
};



export default ListOfSeminar;