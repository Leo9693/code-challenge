import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { StyledBox, AnimatedStrong, AnimatedCard } from "./style";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AirportTypes from "./AirportTypes";
import Location from "./Location";
import City from "./City";
import Country from "./Country";
import Region from "./Region";
import AirportSummary from "./AirportSummary";
import { resetAirports } from "../../action/actionCreator";
function index(props) {
    const { id } = props.match.params;
    if (props.airports) {
        const airport = props.airports[id];
        const {
            airportCode,
            internationalAirport,
            domesticAirport,
            regionalAirport,
            onlineIndicator,
            eticketableAirport,
            location,
            airportName,
            city,
            country,
            region
        } = airport;
        const summary = { airportName, airportCode, city };
        const types = {
            internationalAirport,
            domesticAirport,
            regionalAirport,
            onlineIndicator,
            eticketableAirport
        };
        return (
            <Container>
                <AnimatedCard>
                    <Card.Header className="text-primary">
                        Welcome to check the info of <AnimatedStrong>{airportName} </AnimatedStrong>{" "}
                        airport
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col sm={12} md={6} lg={4}>
                                <StyledBox>
                                    <AirportSummary summary={summary} />
                                </StyledBox>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <StyledBox>
                                    <AirportTypes types={types} />
                                </StyledBox>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <StyledBox>
                                    <Location location={location} />
                                </StyledBox>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <StyledBox>
                                    <City city={city} />
                                </StyledBox>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <StyledBox>
                                    <Country country={country} />
                                </StyledBox>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <StyledBox>
                                    <Region region={region} />
                                </StyledBox>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                        <Link to="/">
                            <Button onClick={props.resetAirports}>Back to Home page</Button>
                        </Link>
                    </Card.Footer>
                </AnimatedCard>
            </Container>
        );
    } else {
        return <Link to="/">Go back to home page</Link>;
    }
}
const mapStateToProps = state => ({
    airports: state.airportsReducer.airports
});

const mapDispatchToProps = {
    resetAirports
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(index);
