import React, { useContext, useState } from 'react'
import { Form } from '../components'
import HeaderContainer from '../containers/header'
import * as ROUTES from '../constants/routes'
import FooterContainer from '../containers/footer';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';

export default function Signup() {
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);
    const [firstName, setFirstName] = useState('');
    const [error, setError] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const isValid = firstName === '' || emailAddress === '' || password === '';

    const handleSingup = (e) => {
        e.preventDefault();

        firebase
        .auth()
        .createUserWithEmailAndPassword(emailAddress, password)
        .then((result) => {
            result.user
            .updateProfile({
                displayName: firstName,
                photoUrl: Math.floor(Math.random * 5) + 1,
            })
        .then(() => {
            setEmailAddress('');
            setPassword('');
            setError('');
            history.push(ROUTES.BROWSE)
            })
        }).catch((error) => setError(error.message))
    }

    return (
        <>
        <HeaderContainer>
            <Form>
            <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSingup} method="POST">
                    <Form.Input
                    placeholder="FirstName"
                    value={firstName}
                    onChange={({target}) => setFirstName(target.value)} 
                    />
                    <Form.Input
                    placeholder="Email Address"
                    value={emailAddress}
                    onChange={({target}) => setEmailAddress(target.value)} 
                    />
                    <Form.Input
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    value={password}
                    onChange={({target}) => setPassword(target.value)} 
                    />
                    <Form.Submit disabled={isValid} type="Submit" >
                        Sing Up
                    </Form.Submit>
                    <Form.Text>
                        Already have an account? &nbsp;
                        <Form.Link to={ROUTES.SIGN_IN}>Sign In.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA
                    </Form.TextSmall>
                </Form.Base>
            </Form>
        </HeaderContainer>
        <FooterContainer />
        </>
    )
}
