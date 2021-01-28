import React, { createContext, useContext, useState } from 'react'
import ReactDOM from 'react-dom'
import {Container, Button, Overlay, Inner, Close} from './styles/player'

export const PlayerContext = createContext();

export default function Player({children, ...restProps}) {
    const [showPlayer, setShowPlayer] = useState(false);
    return (
        <PlayerContext.Provider value={{showPlayer, setShowPlayer}}>
            <Container {...restProps}>{children}</Container>
        </PlayerContext.Provider>
    )
}

Player.Video = function PlayerVideo({children, ...restProps}) {
    const {showPlayer, setShowPlayer} = useContext(PlayerContext);

    return showPlayer 
        ? ReactDOM.createPortal(
            <Overlay onClick={() => setShowPlayer(false)}>
                <Inner>
                    <video id="netflix-player" controls>
                        <source src="/videos/bunny.mp4" type="video/mp4" />
                    </video>
                    <Close />
                </Inner>
            </Overlay>, document.body
        ) : null;
}

Player.Button = function PlayerButton({children, ...restProps}) {
    const {showPlayer, setShowPlayer} = useContext(PlayerContext);

    return <Button onClick={() => setShowPlayer(!showPlayer)} {...restProps}>Play</Button>
}