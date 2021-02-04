import React, {useContext, useState, useEffect} from 'react';
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import {TrackerContext} from '../../context/context';
import firebase from '../../firebase'
import './styles.scss';

const useItems = () => {
    const [items, setItems] = useState([]) 
    useEffect(() => {
      //added variable unsubscribe
      const unsubscribe = firebase
        .firestore() 
        .collection("transactions") 
        .onSnapshot(snapshot => {
          const listItems = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }))
          setItems(listItems)
        })
        //called the unsubscribe--closing connection to Firestore.
      return () => unsubscribe()
    }, [])
    return items
  };

const TrackerList = () => {
    let {transactions} = useContext(TrackerContext)
    transactions = useItems();
    let{deleteTransaction} = useContext(TrackerContext)
    return (
        <div>
            <MUIList dense={false} className="list">
                {transactions && transactions.map((transaction) => (
                  // animation on list when transaction added or removed
                    <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar style={transaction.type==="Sale" ? {backgroundColor:'green'} : {backgroundColor:'red'}}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.stockName} secondary={`$${transaction.amount} - ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    </Slide>
                ))}
                </MUIList>            
        </div>
    )
}

export default TrackerList
