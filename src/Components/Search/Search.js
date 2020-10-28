import React, { useState, useEffect } from "react";

import SeminarDataService from "../../Services/SeminarService";
import SeminarList from '../Seminar-User/SeminarLists'

import './Search.css'


const Search = () => {

    const [seminars, setSeminars] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {


        getByTitle();

        const results = seminars.filter(sem =>
            sem.title.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );

        setSearchResults(results);



    }, [searchTerm]);


    const handleChange = e => {
        setSearchTerm(e.target.value);
    };



    const getByTitle = () => {
        SeminarDataService.getAll(searchTerm)
            .then(response => {
                setSeminars(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };


    return (

        <div className="container inline">

            <div className="col-md-12">
                <div className="input-group mb-3 inline container">
                    <input type="text"
                        className="form-control form-control-lg mr-sm-2 "
                        placeholder="search by title"
                        value={searchTerm}
                        onChange={handleChange} />
                    <div className="input-group-append">
                        <button className="btn btn-warning btn-lg"
                            type="button"
                            onClick={getByTitle}>Search</button>
                    </div>
                </div>
                {<ul className="list-group">
                    {searchTerm ?
                        searchResults.map(item => (
                            <div key={item.id}>
                                <div >
                                    <br />
                                    <a className="list-group" href={["/seminarinfo/"] + item.id}>{item.title}</a>
                                </div>
                            </div>
                        )) : null}
                </ul>}
            </div>
            <br />
            
        </div>

    )
}

export default Search;