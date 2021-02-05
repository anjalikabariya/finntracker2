import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {firebaseAuth} from '../../context/Auth';

export default function LogIn(props) {
    const {handleSignin, inputs, setInputs, errors} = useContext(firebaseAuth);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit');
        handleSignin();
        props.history.push('/');
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(inputs);
        setInputs(prev => ({...prev, [name]: value}))
    }

    return (
        <div className="login">
        <div className="login__title">Log In</div>
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__group">
                <label htmlFor="email">Email</label>
                <input onChange={handleChange} name="email" id="email" type="email" value={inputs.email} required/>
            </div>

            <div className="form__group">
                <label htmlFor="password">Password</label>
                <input onChange={handleChange} name="password" id="password" type="password" value={inputs.password}  required/>
            </div>

            <button type="submit">Log In</button>
            {errors.length > 0 ? errors.map(error => <p>{error}</p>) : null}
        </form>

        <Link to="/signup">Don't have an account? Sign Up</Link>
    </div>
    )
}



