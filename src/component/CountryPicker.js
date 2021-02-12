import React, { useState, useEffect } from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';

import { getCountries } from '../Api';


const Countries = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await getCountries());
        };

        fetchAPI();
    }, []);

    return (
        <FormControl className='formControl'>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                // value={age}
                onChange={(e) => handleCountryChange(e.target.value)}
            >
                <MenuItem value="">Global</MenuItem>
                {countries.map((country, i) => (<MenuItem key={i} value={country}>{country}</MenuItem>))}
            </Select>
            {/* <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect> */}
        </FormControl>
    );
};

export default Countries;