import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import NativeSelect from '@material-ui/core/NativeSelect';
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { connectNumericMenu } from 'react-instantsearch-dom';

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
        marginLeft: theme.spacing(1),
    },
}));



function NumericMenu({ items, refine, createURL }) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        price: '',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (
        <Grid item>
            <FormControl variant="outlined" size="small" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Max Price</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={state.price}
                    onChange={handleChange}
                    label="Max Price"
                    inputProps={{
                        name: 'price',
                    }}
                    MenuProps={{
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left"
                        },
                        transformOrigin: {
                            vertical: "top",
                            horizontal: "left"
                        },
                        getContentAnchorEl: null
                    }}
                >
                    {items.map((item) => (
                        <MenuItem key={item.label} value={item.label}>
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
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            {/* <FormControl variant="outlined" size='small' fullWidth className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Max Price</InputLabel>
                <Select
                    native
                    value={state.price}
                    onChange={handleChange}
                    label="Max Price"
                    inputProps={{
                        name: 'price',
                    }}
                >
                    <option aria-label="None" value="" />
                    {items.map((item) => (
                        <option key={item.label} value={item.value}>
                            <a
                                href={createURL(item.value)}
                                style={{ fontWeight: item.isRefined ? 'bold' : '' }}
                                onClick={event => {
                                    event.preventDefault();
                                    refine(item.value);
                                }}
                            >
                                {item.value}
                            </a>
                        </option>
                    ))}
                </Select>
            </FormControl> */}
        </Grid>
    )
    // <DropdownButton drop="bottom" className="mx-1" title="Max Price">
    //     {items.map((item) => (
    //         <Dropdown.Item >
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
    //         </Dropdown.Item>
    //     ))}
    // </DropdownButton>
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
}

export const PriceNumericMenu = connectNumericMenu(NumericMenu);