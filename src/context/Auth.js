import React, {useState} from 'react';
import {authMethods} from '../authMethods';

export const firebaseAuth = React.createContext();

function Auth(props) {
    const [inputs, setInputs] = useState({email: '', password: ''});
    const [errors, setErrors] = useState([]);
    const [token, setToken] = useState(window.localStorage.token);

    //function to handle signup 
    const handleSignup = () => {
        console.log('handleSignup');
        authMethods.signup(inputs.email, inputs.password, setErrors, setToken);
        console.log(errors, token);
    }
    //function to input signin
    const handleSignin = () => {
        console.log('handleSignin');
        authMethods.signin(inputs.email, inputs.password, setErrors, setToken);
        console.log(errors, token);
    }

    const handleSignout = () => {
        authMethods.signout(setErrors, setToken);
    }

    return (
        <firebaseAuth.Provider
            value={{
                handleSignup,
                handleSignin,
                token,
                inputs, 
                setInputs,
                errors,
                handleSignout,
            }}
        >
            {props.children}
        </firebaseAuth.Provider>
    )
}

export default Auth;