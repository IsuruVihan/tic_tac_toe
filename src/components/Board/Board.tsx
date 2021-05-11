import React, {FC} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Cell from "./Cell";
import '../../assets/styles/partials/Board.scss';

const Board: FC = () => {
    return(
        <Container className="Board" fluid>
            <Row>
                <Col xs={4}><Cell /></Col>
                <Col xs={4}><Cell /></Col>
                <Col xs={4}><Cell /></Col>
                <Col xs={4}><Cell /></Col>
                <Col xs={4}><Cell /></Col>
                <Col xs={4}><Cell /></Col>
                <Col xs={4}><Cell /></Col>
                <Col xs={4}><Cell /></Col>
                <Col xs={4}><Cell /></Col>
            </Row>
        </Container>
    );
}

export default Board;