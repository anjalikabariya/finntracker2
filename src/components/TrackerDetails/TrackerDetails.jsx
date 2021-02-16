import React from 'react';
import { CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import './styles.scss';
import useTransactions from '../../useTransactions';


const TrackerDetails = ({ title, subheader }) => {
  //use custom hook to fetch and display total amount in each component
  const { total, chartData } = useTransactions(title);
  return (
    <div className="card--container">
      {/*conditional class name to give styled border at bottom of component */}
      <div className={title === 'Purchase' ? `purchase` : `sale`} >
        <CardHeader title={title} subheader={subheader} />
        <CardContent>
          <Typography variant="h5">${total}</Typography>
          <Doughnut data={chartData} />
        </CardContent>
      </div>
    </div>
  );
};

export default TrackerDetails;