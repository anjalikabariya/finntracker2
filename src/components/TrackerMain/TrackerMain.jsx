import React, {useContext} from 'react'
import { CardHeader, Typography, Grid } from '@material-ui/core';
import {TrackerForm, TrackerList} from '../'
import './styles.scss';
import { TrackerContext } from '../../context/context';

const TrackerMain = () => {
    const {balance} = useContext(TrackerContext)
    return (
        <div className="flex--column">
            <CardHeader title="Stock Tracker" subheader="Keep track of stock purchase/sales" />
            <Typography align="center" variant="h5" >Total balance ${balance}</Typography>
            <Grid className="grid card--height" container spacing={4} justify="center">
                <Grid item xs={12} sm={6}>
                    <div className="card--height"><TrackerForm /></div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className="card--height"><TrackerList /></div>
                </Grid>
            </Grid>
        </div>
    )
}

export default TrackerMain
