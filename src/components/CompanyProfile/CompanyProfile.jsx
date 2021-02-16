import React from 'react'
import InfoCard from '../InfoCard/InfoCard';
import {v4 as uid} from 'uuid';
import './styles.scss';

//maps company data into InfoCard component
const CompanyProfile = ({companyData}) => {
    const data = companyData ? Object.entries(companyData) : []
    console.log(data);
    return (
        <div className="flex--row">
            <div className="flex--column">    
                {data && data.map(([title, value]) => {    
                    return <InfoCard key={uid()} title={title!=='logo' ? title : ''} value={value} />
                })}
            </div>
        </div>
    )
}

export default CompanyProfile
