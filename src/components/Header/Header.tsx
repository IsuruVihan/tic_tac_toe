import React, {FC} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import '../../assets/styles/partials/Header.scss';
import Turn from './Turn';
import Result from './Result';

const Header: FC = () => {
    return(
        <Container className="main-container" fluid={true}>
            <Row className="text-center">
                <Col xs={12}>
                    <h1>Tic Tac Toe</h1>
                </Col>
                <Col xs={6}>
                    <Turn />
                </Col>
                <Col xs={6}>
                    <Result />
                </Col>
            </Row>
        </Container>
    );
}

export default Header;