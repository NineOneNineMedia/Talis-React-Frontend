import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { connectNumericMenu } from 'react-instantsearch-dom';

const NumericMenu = ({ items, refine, createURL }) => (
    <DropdownButton drop="bottom" className="mx-1" title="Max Price">
        {items.map((item) => (
            <Dropdown.Item key={item.value}>
                <a
                    href={createURL(item.value)}
                    style={{ fontWeight: item.isRefined ? 'bold' : '' }}
                    onClick={event => {
                        event.preventDefault();
                        refine(item.value);
                    }}
                >
                    {item.label}
                </a>
            </Dropdown.Item>
        ))}
    </DropdownButton>
    // <ul>
    //     {items.map(item => (
    //         <li key={item.value}>
    //             <a
    //                 href={createURL(item.value)}
    //                 style={{ fontWeight: item.isRefined ? 'bold' : '' }}
    //                 onClick={event => {
    //                     event.preventDefault();
    //                     refine(item.value);
    //                 }}
    //             >
    //                 {item.label}
    //             </a>
    //         </li>
    //     ))}
    // </ul>
);

export const PriceNumericMenu = connectNumericMenu(NumericMenu);