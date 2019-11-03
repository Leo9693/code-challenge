import React from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import Heading from "./Heading";
import Airports from "../Airports";
import { AnimatedAlert } from "./style";
function index(props) {
    const message = props.alert.message;

    return (
        <Container>
            <Heading />
            {message && <AnimatedAlert variant={"danger"}>{message}</AnimatedAlert>}
            <Airports />
        </Container>
    );
}

export default connect(
    state => ({ alert: state.alertReducer }),
    null
)(index);
