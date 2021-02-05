import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {firebaseAuth} from '../../context/Auth';

export default function SignUp() {
    const {handleSignup, inputs, setInputs, errors} = useContext(firebaseAuth);
    // console.log(handleSignup);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit');
        handleSignup();
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(inputs);
        setInputs(prev => ({...prev, [name]: value}))
    }

    return (
        <div className="signup">
            <div className="signup__title">Sign Up</div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__group">
                    <label htmlFor="email">Email</label>
                    <input onChange={handleChange} name="email" id="email" type="email" value={inputs.email} required/>
                </div>

                <div className="form__group">
                    <label htmlFor="password">Password</label>
                    <input onChange={handleChange} name="password" id="password" type="password" value={inputs.password} required/>
                </div>
                
                <button type="submit">Sign Up</button>
                {/* todo: filter duplicate error messages */}
                {errors.length > 0 ? errors.map(error => <p>{error}</p>) : null}
            </form>
            <Link to="/login">Already have an account? Log in</Link>
        </div>
    )
}
