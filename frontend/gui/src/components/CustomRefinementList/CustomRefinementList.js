import React from 'react';
import { Dropdown, DropdownButton, DropdownItem, Form } from 'react-bootstrap';
import { Highlight, connectRefinementList } from 'react-instantsearch-dom';

export const StaticRefinementList = connectRefinementList(
    ({ values, currentRefinement, items, refine }) => (
        <Dropdown>
            <Dropdown.Toggle variant="primary">
                Type
            </Dropdown.Toggle>

            <Dropdown.Menu className="ais-RefinementList-list">
                {values.map(staticItem => {
                    const { isRefined } = items.find(
                        item => item.label === staticItem.label
                    ) || {
                        isRefined: false,
                    };

                    return (
                        <Dropdown.Item key={staticItem.value}>
                            <label>
                                <input
                                    type="checkbox"
                                    value={staticItem.value}
                                    checked={isRefined}
                                    onClick={event => {
                                        event.preventDefault();
                                        refine(staticItem.value);
                                    }}
                                />
                                {staticItem.label}
                            </label>
                        </Dropdown.Item>
                    );
                })}
            </Dropdown.Menu>
        </Dropdown>
    )
);