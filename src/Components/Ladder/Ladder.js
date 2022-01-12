import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useParams } from "react-router-dom";
// import classes from './Ladder.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Ladder = () => {
    const { handel } = useParams();
    const navigate = useNavigate();
    const handleSubmit = (id) => {
        navigate(`/${handel}/${id}`)
    };
    console.log(handel);
    return (
        <section >

            <div className='backgroung'>
                <div className="itemladder">
                    <div className="container">
                        <div className="text-secondary">
                            <h2 className="pt-5 pb-2"> hey {handel} </h2>
                            <p className="fs-3">Try some Ladder </p>
                        </div>
                        <div class='item'>
                            <a className="btn btn-dark fs-2" onClick={() => navigate(`/${handel}/${1}`)}>First Ladder</a>
                        </div>
                        <div class='item'>
                            <a className="btn btn-dark fs-2" onClick={() => navigate(`/${handel}/${2}`)}>Second Ladder</a>
                        </div>
                        <div class='item'>
                            <a className="btn btn-dark fs-2" onClick={() => navigate(`/${handel}/${3}`)}>Third Ladder</a>
                        </div>
                    </div>

                </div>
            </div >

        </section >
    )
}

export default Ladder;