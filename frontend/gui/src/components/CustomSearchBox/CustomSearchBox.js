import React from 'react'
// import { Form, Col, InputGroup, FormControl } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


import { connectSearchBox } from 'react-instantsearch-dom';

const useStyles = makeStyles((theme) => ({
    search: {
        marginLeft: theme.spacing(2),
    },
}));

function SearchBox({ currentRefinement, isSearchStalled, refine }) {
    const classes = useStyles();

    return (
        <Grid item md={4} className={classes.search}>
            <FormControl variant="outlined" size="small" fullWidth >
                <InputLabel htmlFor="component-outlined">Search</InputLabel>
                <OutlinedInput id="component-outlined"
                    label="Search"
                    type="search"
                    value={currentRefinement}
                    onChange={event => refine(event.currentTarget.value)} />
            </FormControl>
        </Grid>
    )

    //     {/* <InputGroup>
    //         <FormControl
    //             type="search"
    //             value={currentRefinement}
    //             onChange={event => refine(event.currentTarget.value)}
    //         />
    //     </InputGroup> */}
    // </Grid>
    // <form >
    //     <input
    //         type="search"
    //         value={currentRefinement}
    //         onChange={event => refine(event.currentTarget.value)}
    //     />
    //     <button onClick={() => refine('')}>Reset query</button>
    //     {isSearchStalled ? 'My search is stalled' : ''}
    // </form>
}

export const CustomSearchBox = connectSearchBox(SearchBox);