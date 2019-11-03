import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../Spinner";
import { getAirportInfo, loadMoreAirports, loadExistedAirports } from "../../action/actionCreator";
import { ListGroup, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FlexBox, Icon, AnimatedBox, AnimatedButton, Small } from "./style";
class index extends Component {
    componentDidMount() {
        const { getAirportInfo, loadExistedAirports } = this.props;
        // check if the data has been stored before or not
        const airports = JSON.parse(localStorage.getItem("airports"));
        if (!airports) getAirportInfo();
        else loadExistedAirports(airports);
    }

    render() {
        const { isFetched, airports, visibleAirportsNumber } = this.props.airports;
        if (!isFetched) return <Spinner />;
        else {
            const visibleAirports = airports.slice(0, visibleAirportsNumber);
            return (
                <Container>
                    <ListGroup>
                        <AnimatedBox>
                            {visibleAirports.map((airport, index) => (
                                <ListGroup.Item key={index}>
                                    <FlexBox>
                                        <Link to={`/airport/${index}`}>
                                            <h4>{airport.airportName}</h4>
                                        </Link>
                                        <Small>{airport.country.countryName}</Small>
                                        <Link to={`/airport/${index}`}>
                                            <Icon className="fas fa-arrow-right" />
                                        </Link>
                                    </FlexBox>
                                </ListGroup.Item>
                            ))}
                        </AnimatedBox>
                    </ListGroup>
                    <AnimatedButton onClick={this.props.loadMoreAirports} block>
                        Load more
                    </AnimatedButton>
                </Container>
            );
        }
    }
}
const mapStateToProps = state => ({ airports: state.airportsReducer });

const mapDispatchToProps = {
    getAirportInfo,
    loadMoreAirports,
    loadExistedAirports
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(index);
