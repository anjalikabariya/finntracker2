import React from 'react';
import './styles.scss';
import {v4 as uid} from 'uuid';

const Info = ({e, value}) => {
    return(
        <div>
            <p>{e} : {value}</p>
        </div> 
    )
}

function InfoCard({title, value}) {
    const titles = ["Name", "Ticker", "Country", "Currency", "Exchange", "Finnhub Industry", "Market Capitalization", "Share Outstanding", "IPO", "Web URL", "Phone" ]
    if(title) {
        return (
        <div className="card--container flex--column" >
            <div className="card--content">
                {titles.map(e => { 
                    if(e.toLowerCase().replace(/\s+/g, '') === title.toLowerCase() && title.toLowerCase()!=="logo" ) {
                        return (
                            <Info e={e} value={value} key={uid()} />
                        )
                    } else {return <></>}
                })}
            </div>
        </div>
    )}
    else{
        return <></>
    }
}

export default InfoCard
