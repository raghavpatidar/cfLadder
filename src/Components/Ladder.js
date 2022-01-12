import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useParams } from "react-router-dom";
const Ladder = () => {
    const { handel } = useParams();
    const navigate = useNavigate();
    const handleSubmit = (id) => {
        navigate(`/${handel}/${id}`)
    };
    console.log(handel);
    return (
        <section >
            <div className="container">
                <h1>Ladders :-</h1>
                <div class='item'>
                    <button onClick={() => navigate(`/${handel}/${1}`)}>First Ladder</button>
                </div>
                <div class='item'>
                    <button onClick={() => navigate(`/${handel}/${2}`)}>Second Ladder</button>
                </div>
                <div class='item'>
                    <button onClick={() => navigate(`/${handel}/${3}`)}>Third Ladder</button>
                </div>
            </div>

        </section>
    )
}

export default Ladder;