import React from "react";
import { Link } from 'react-router-dom'
import '../App.css'
import { useNavigate } from "react-router";
import { useState } from "react";



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
            <article>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <label htmlFor='handel'>Name : </label>
                        <input
                            type='text'
                            id='handel'
                            name='handel'
                            value={handel}
                            onChange={(e) => sethandel(e.target.value)}
                        />
                    </div>
                    <button type='submit'>add person</button>
                </form>
            </article>
        </>
    );
};

export default ControlledInputs;
