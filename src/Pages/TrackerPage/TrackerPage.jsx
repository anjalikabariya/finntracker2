import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';
import {TrackerDetails, TrackerMain, Navigation} from '../../components'
import {Provider} from '../../context/context';
import './styles.scss';

export class TrackerPage extends Component {
    render() {
        return (
            // initialized context 
            <Provider>
                <Navigation />
                <div className="flex--column">
                    {/* main tracker component to add and display transactions */}
                    <div className="main"><TrackerMain /></div>
                    <div>
                        <Grid className="grid" container spacing={4} justify="center">
                            {/* chart components for analyzing  portfolio */}
                            <Grid item xs={12} sm={6}>
                                <TrackerDetails title="Purchase" />
                            </Grid>
                            <Grid item xs={12} sm={6} >
                                <TrackerDetails title="Sale" />
                            </Grid>
                        </Grid>  
                    </div>
                </div>
            </Provider>
        )
    }
}

export default withWidth()(TrackerPage);
