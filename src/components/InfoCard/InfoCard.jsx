import React from 'react'
import './styles.scss';

function InfoCard({title, value}) {
    const titles = ["Name", "Ticker", "Country", "Currency", "Exchange", "Finnhub Industry", "Market Capitalization", "Share Outstanding", "IPO", "Web URL", "Phone" ]
    if(title) {
        return (
        <div className="card--container flex--column" >
            <div className="card--content">
                {titles.map(e => { 
                    if(e.toLowerCase().replace(/\s+/g, '') === title.toLowerCase() && title.toLowerCase()!=="logo" ) {
                        return (
                            <div>
                                <p>{e} : {value}</p>
                            </div> 
                        )
                    }
                })}
            </div>
        </div>
    )}
    else{
        return <></>
    }
}

export default InfoCard
