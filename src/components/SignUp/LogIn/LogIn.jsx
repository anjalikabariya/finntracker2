import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {firebaseAuth} from '../../../context/Auth';
import './styles.scss';
import logo from '../../Assets/logo.svg'


export default function LogIn() {
    const {handleSignin, inputs, setInputs, errors} = useContext(firebaseAuth);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit');
        handleSignin();
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(inputs);
        setInputs(prev => ({...prev, [name]: value}))
    }

    return (
        <div className="login flex--column">
            <div className="login__title flex--column">
                <img src={logo} alt="logo" />
                Hey Stocker!
            </div>
            <form className="form flex--column" onSubmit={handleSubmit}>
                <div className="form__group">
                    <input onChange={handleChange} placeholder="Username" className="input" name="email" id="email" type="email" value={inputs.email} required/>
                </div>

                <div className="form__group">
                    <input className="input" placeholder="Password" onChange={handleChange} name="password" id="password" type="password" value={inputs.password}  required/>
                </div>

                <div className="flex--row"> <button className="button-blue" type="submit">Login</button></div>
                {errors.length > 0 ? errors.map(error => <p>{error}</p>) : null}
            </form>

            <Link to="/signup" className="flex--row">
                <button type="submit" className="button-white">
                    Don't have an account? Sign Up
                </button>
            </Link>
    </div>
    )
}



