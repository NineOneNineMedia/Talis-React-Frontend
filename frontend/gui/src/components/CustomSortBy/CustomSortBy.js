import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { connectSortBy } from 'react-instantsearch-dom';

const SortBy = ({ items, refine, createURL }) => (
    <DropdownButton drop="right" className="sort mx-1" title="Sort">
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

export const CustomSortBy = connectSortBy(SortBy);