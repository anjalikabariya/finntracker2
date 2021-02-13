import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {firebaseAuth} from '../../context/Auth';
import logo from '../../Assets/logo.svg';

export default function SignUp() {
    const {handleSignup, inputs, setInputs, errors} = useContext(firebaseAuth);

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
        <div className="login flex--column">
            <div className="login__title flex--column">
                <img src={logo} />
                Hey Stocker!
            </div>
            <form className="form flex--column" onSubmit={handleSubmit}>
                <div className="form__group">
                    <input onChange={handleChange} placeholder="Username" className="input" name="email" id="email" type="email" value={inputs.email} required/>
                </div>

                <div className="form__group">
                    <input className="input" placeholder="Password" onChange={handleChange} name="password" id="password" type="password" value={inputs.password}  required/>
                </div>

                <button className="button-blue" type="submit">Sign Up</button>
                {errors.length > 0 ? errors.map(error => <p>{error}</p>) : null}
            </form>

            <Link to="/login">
                <button type="submit" className="button-white">
                    Already have an account? Login
                </button>
        </Link>
    </div>
    )
}
