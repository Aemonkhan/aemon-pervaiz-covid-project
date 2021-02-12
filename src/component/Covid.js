import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import MediaCard from './MediaCard'
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';
import CountryPicker from './CountryPicker';
import { getAllData } from '../Api';
export default function Covid() {
    const [confirmed, setConfirmed] = useState(0)
    const [recovered, setRecovered] = useState(0)
    const [deaths, setDeaths] = useState(0)
    const [data, setData] = useState({})

    useEffect(() => {
        Axios.get('https://covid19.mathdro.id/api')
            .then(res => {
                console.log(res)
                setConfirmed(res.data.confirmed.value)
                setRecovered(res.data.recovered.value)
                setDeaths(res.data.deaths.value)
            })
    }, [])

    const handleCountryChange = async (country) => {
        const data = await getAllData(country);

        setData({ country: country });
        console.log(data);
        
    }


    return (
        <>
            <Grid>
                <CountryPicker handleCountryChange={handleCountryChange} />
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <MediaCard text='Confirmed Cases' value={confirmed} color='mediumPurple' />
                    <MediaCard text='Recovered Cases' value={recovered} color='green' />
                    <MediaCard text='Death Cases' value={deaths} color='red' />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Bar data={{
                        labels: ['conirmed', 'recovered', 'deaths'],
                        datasets: [{
                            label: 'people',
                            backgroundColor: ['mediumPurple', 'green', 'red'],
                            data: [confirmed, recovered, deaths]
                        }]
                    }}
                    />
                </Grid>

            </Grid>
        </>
    )
}
