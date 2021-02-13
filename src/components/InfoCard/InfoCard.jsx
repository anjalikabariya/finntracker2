import React from 'react'
import './styles.scss';

function InfoCard({title, value}) {
    const titles = ["Name", "Ticker", "Country", "Currency", "Exchange", "Finnhub Industry", "Market Capitalization", "Share Outstanding", "IPO", "Web URL", "Phone" ]
    return (
        <div className="card--container flex--column" >
            <div className="card--content">
            {titles.map(e => { return (e.toLowerCase().replace(/\s+/g, '') === title.toLowerCase()) ? 
                <div>
                    <p>{e} : {value}</p>
                </div> : <p/>
            })}
</div>
            {/* <p className={titles.includes(e => {e.trim().toLowerCase() === title}) ? `card__title` : `display__none`}>
                
            </p>
            <p className={title !== "logo" ? `card__value` : `display__none`}>
                {value}    
            </p> */}
            {/* <div className={title === "logo" ? `card__image` : `display__none`}>
                <img src={value} alt="" />
            </div> */}
        </div>
    )
}

export default InfoCard
