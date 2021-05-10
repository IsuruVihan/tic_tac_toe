import React, {FC} from 'react';
import './assets/styles/App.scss';
import {Container} from "react-bootstrap";
import Game from "./views/Game";

const App: FC = () => {
    return(
        <Container>
            <Game />
        </Container>
    );
}

export default App;