import React from 'react';
import { Feature, OptForm } from '../components';
import FaqsContainer from '../containers/faqs';
import FooterContainer from '../containers/footer';
import HeaderContainer from '../containers/header';
import JumbotronContainer from '../containers/jumbotron';

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited Films, TV programmes and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere, cancel anytime</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email Address" />
                        <OptForm.Button>Try it now!</OptForm.Button>
                        <OptForm.Text>Ready to watch ? Enter our email to create or restart your membership</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}

