import React, {FC} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import '../../assets/styles/partials/Result.scss';

const Result: FC = () => {
    return(
        <Container className="main-container">
            <Row>
                <Col>
                    <h3>Result</h3>
                </Col>
            </Row>
        </Container>
    );
}

export default Result;