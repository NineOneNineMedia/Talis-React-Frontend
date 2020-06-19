import React from 'react'
import { Form, Col, InputGroup, FormControl } from 'react-bootstrap';
import { connectSearchBox } from 'react-instantsearch-dom';

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
    <Col md={5}>
        <InputGroup>
            <FormControl
                type="search"
                value={currentRefinement}
                onChange={event => refine(event.currentTarget.value)}
            />
        </InputGroup>
    </Col>
    // <form >
    //     <input
    //         type="search"
    //         value={currentRefinement}
    //         onChange={event => refine(event.currentTarget.value)}
    //     />
    //     <button onClick={() => refine('')}>Reset query</button>
    //     {isSearchStalled ? 'My search is stalled' : ''}
    // </form>
);

export const CustomSearchBox = connectSearchBox(SearchBox);