import React from 'react'
import InfoCard from '../InfoCard/InfoCard';
import {v4 as uid} from 'uuid';
import './styles.scss';

//maps company data into InfoCard component
const CompanyProfile = ({companyData}) => {
    const titles = ["Name", "Ticker", "Country", "Currency", "Exchange", "Finnhub Industry", "Market Capitalization", "Share Outstanding", "IPO", "Web URL", "Phone" ]
    const data = Object.entries({companyData})
    return (
        <div className="flex--column">
            {companyData && Object.entries(companyData).map(([title, value]) => {    
                return <InfoCard key={uid()} title={title} value={value} />
            })}
        </div>
    )
}

export default CompanyProfile
