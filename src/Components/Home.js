import React from "react";
import { Link } from 'react-router-dom'
import '../App.css'
import { useNavigate } from "react-router";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';



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
        <>
            <center style={{ padding: '20%' }}>
                <form className='form form-control  ' onSubmit={handleSubmit}>
                    <h1 className="pb-5 text-primary" >Enter Your Codeforces Handel</h1>
                    <div className='form'>
                        <label htmlFor='handel'>Handel   . </label>
                        <input
                            type='text'
                            id='handel'
                            name='handel'
                            value={handel}
                            onChange={(e) => sethandel(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-outline-dark mt-5" type='submit'>Start Ladder</button>
                </form>
            </center>
        </>
    );
};

export default ControlledInputs;
