import React, {FC} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import '../../assets/styles/partials/Turn.scss';

const Turn: FC = () => {
    return(
        <Container className="Turn">
            <Row>
                <Col>
                    <h3>Turn</h3>
                </Col>
            </Row>
        </Container>
    );
}

export default Turn;