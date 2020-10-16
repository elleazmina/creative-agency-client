import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../images/logos/logo.png'
import './Login.css'
import { UserContext } from '../../App';


const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
  
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }


    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(function (error) {
            // Handle error
          });
      }
    return (
        <div className="text-center my-5">
            <img src={logo} style={{height:'60px'}} alt=""/>
            <div className="login-info my-5">
                <h3 style={{fontFamily: 'Poppins', fontWeight:'600'}}>Login</h3>
                <button className="btn btn-outline-secondary my-3 p-3 googleBtn" onClick={handleGoogleSignIn}>Continue with Google</button>
                <p className="my-3">Don't have an account? <button onClick={handleGoogleSignIn} class="btn btn-link">Create an account</button> </p>
            </div>
        </div>
    );
};

export default Login;