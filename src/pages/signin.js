import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Form } from '../components'
import FooterContainer from '../containers/footer';
import HeaderContainer from '../containers/header'
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes'

export default function Signin() {
    const {firebase} = useContext(FirebaseContext);
    const history = useHistory();
    const [error, setError] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const isValid = emailAddress === '' | password === '';

    const handleSingin = (e) => {
        e.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password) 
            .then(() => {
                history.push(ROUTES.BROWSE);
            })
            .catch((error) => {
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            })
    }
    return (
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSingin} method="POST">
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
                        Sing In
                    </Form.Submit>
                    <Form.Text>
                        New to netflix? &nbsp;
                        <Form.Link to="/signup">Sign up now.</Form.Link>
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
