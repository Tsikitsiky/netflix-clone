import React, { createContext, useContext, useState } from 'react';
import { Container, Inner, Title, Header, Body, Item, Frame } from './styles/accordion';

const ToogleContext = createContext();

export default function Accordion({children, ...restProps}) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}


Accordion.Item = function AccordionItem({children, ...restProps}) {
    const [toggleShow, setToggleShow] = useState(false);
    return (
    <ToogleContext.Provider value={{toggleShow, setToggleShow}}>
        <Item {...restProps}>{children}</Item>
    </ToogleContext.Provider>
    )
}

Accordion.Title = function AccordionTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}
Accordion.Frame = function AccordionFrame({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>
}

Accordion.Header = function AccordionHeader({children, ...restProps}) {
    const {toggleShow, setToggleShow} = useContext(ToogleContext)
    return <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
        {children}
        {toggleShow ?
         (<img src="/images/icons/close-slim.png" alt="close" />)
        :
        (<img src="/images/icons/add.png" alt="open" />)
        }
        </Header>
}

Accordion.Body = function AccordionBody({children, ...restProps}) {
    const {toggleShow, setToggleShow} = useContext(ToogleContext)
    return toggleShow ? <Body {...restProps}>{children}</Body> : null;
}
