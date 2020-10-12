import React from 'react';
import { firebaseInstance, authService } from './fbInstance';

const Auth = () => {

const onSocialLogin = async(event) => {
    const {
        target: {name},
    } = event;
    let provider;

    if (name === 'github') {
        provider = new firebaseInstance.auth.GithubAuthProvider();
    } else if (name === 'google') {
        provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === 'facebook') {
        provider = new firebaseInstance.auth.FacebookAuthProvider();
    }

    await authService.signInWithPopup(provider);
} 

return (
    <div>
        <button onClick={onSocialLogin} name='facebook'>
            facebook으로 로그인
        </button>
        <button onClick={onSocialLogin} name='google'>
            Google로 로그인
        </button>
    </div>
) };

export default Auth;