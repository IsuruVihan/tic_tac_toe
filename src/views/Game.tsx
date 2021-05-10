import React, {FC} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import Header from "../components/Header/Header";
import Board from "../components/Board/Board";
import History from "../components/History/History";
import '../assets/styles/partials/Game.scss';

const Game: FC = () => {
    return(
        <Container className="main">
            <Row>
                <Col xs={12} className="header">
                    <Header />
                </Col>
                <Col xs={9} className="board">
                    <Board />
                </Col>
                <Col xs={3} className="history">
                    <History />
                </Col>
            </Row>
        </Container>
    );
}

export default Game;