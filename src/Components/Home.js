import React from "react";
import { Link } from 'react-router-dom'
import '../App.css'
import { useNavigate } from "react-router";
import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';



const ControlledInputs = () => {
    const [handel, sethandel] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (handel) {
            navigate(`/${handel}`)
        } else {
            console.log('empty values');
        }
    };
    return (
        <section>
            <div className="container">
                <form className='form' onSubmit={handleSubmit}>
                    <div className="item">
                        <h3 className=" text-info fw-bolder " >Enter Your Codeforces Handel</h3>
                    </div>
                    <div className="item">
                        <label className="fw-bold font-monospace" htmlFor='handel'>Handel   . </label>
                        <input
                            type='text'
                            id='handel'
                            name='handel'
                            value={handel}
                            style={{ outline: "none" }}
                            onChange={(e) => sethandel(e.target.value)}
                            placeholder="Codeforces Handel"
                        />
                        <br />
                    </div>
                    <div className="item">
                        <button className="btn btn-outline-dark mt-5" type='submit'>Start Ladder</button>
                    </div>
                </form>
            </div>
        </section>

    );
};

export default ControlledInputs;
