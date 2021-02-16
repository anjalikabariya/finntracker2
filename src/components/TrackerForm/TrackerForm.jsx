import React, { useState, useContext } from 'react';
import { Grid} from '@material-ui/core';
import { v4 as uid } from 'uuid';
import dateFormat from '../../utils/dateFormat';
import {TrackerContext} from '../../context/context';
import './styles.scss';

const initialState = {
  amount: '',
  stockName: '',
  type: '',
  date: dateFormat(new Date()),
};

const TrackerForm = () => {
//accept reducer functions into component
  const { addTransaction } = useContext(TrackerContext);
  const [formData, setFormData] = useState(initialState);

  const createTransaction = () => {
    if(!Number(formData.amount) || !formData.date.includes('-')) return;
    const transaction=  { ...formData, amount: Number(formData.amount), id: uid() }

    //call function from context 
    addTransaction(transaction);
    
    //reset form after adding transaction
    setFormData(initialState);
  };     
  return (
        <div className="flex--column  card--container">
            <div>
            <Grid className="grid" container spacing={4} justify="center">
                <Grid item xs={6} >
                    <select value={formData.type}  className="dropdown" onChange={(e) => setFormData({ ...formData, type: e.target.value })} >
                        <option selected="selected" >Transaction Type</option>
                        <option value="Purchase">Purchase</option>
                        <option value="Sale">Sale</option>
                    </select>
                </Grid>
                <Grid item xs={6} >
                    <input type="text" placeholder="Stock Name" value={formData.stockName} onChange={(e) => setFormData({ ...formData, stockName: e.target.value })} />
                </Grid>
                <Grid item xs={6}>
                    <input type="number" placeholder="Amount" value={formData.amount}  onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
                </Grid>
                <Grid item xs={6} >
                    <input placeholder="Date" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: dateFormat(e.target.value) })} />
                </Grid>
                <button className="button-blue" variant="outlined" onClick={createTransaction}>Create</button>
            </Grid>            
            </div>
        </div>
    )
}

export default TrackerForm
