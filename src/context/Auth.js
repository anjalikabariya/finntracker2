import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {authMethods} from '../authMethods';

export const firebaseAuth = React.createContext();

function Auth(props) {
    const [inputs, setInputs] = useState({email: '', password: ''});
    const [errors, setErrors] = useState([]);
    const [token, setToken] = useState(window.localStorage.token);
    const history = useHistory();
    //function to handle signup 
    const handleSignup = () => {
        authMethods.signup(inputs.email, inputs.password, setErrors, setToken);
    }
    //function to input signin
    const handleSignin = () => {
        authMethods.signin(inputs.email, inputs.password, setErrors, setToken);
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