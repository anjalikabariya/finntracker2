import {SearchForm} from '../../components';
import TradingViewWidget, {Themes} from 'react-tradingview-widget';
import React, { Component } from 'react'
import { CompanyProfile, Navigation} from '../../components';
import Axios from 'axios';

const API_URL = 'https://finnhub.io/api/v1/';
export class HomePage extends Component {
    state = {
        quote : "",
        themeToBeApplied: Themes.LIGHT
    }
    //render default data on component mount
    componentDidMount = () => {
        // this.getQuote("AAPL");
        this.getProfile("AAPL");
    }
    //api call to get candlestick data for chart
    // getQuote = async (symbol) => {
    //     const response = await Axios.get(API_URL+`/stock/candle?`, {params: {
    //         symbol: symbol,
    //         token: "c04d8tn48v6u76cjevm0",
    //         resolution: "D",
    //         from: Math.floor((new Date().setUTCFullYear(new Date().getUTCFullYear()-1)) / 1000),
    //         to: Math.floor((new Date().setUTCHours(new Date().getUTCHours()-1)) / 1000),
    //         }})
    //         try{
    //             this.setState({
    //                 quote:this.formatData(response.data)
    //             })
    //         }
    //         catch(error){
    //             console.log(error);
    //         } 
    // } 
    //function to format raw data received from api to enable proper mapping into chart
    //converts object to array of objects
    formatData = (data) => {
        const formattedData = []
        for(let i=0; i<Object.entries(data)[0][1].length;i++){
            formattedData[i] = {
                close:Object.entries(data)[0][1][i+1],
                high:Object.entries(data)[1][1][i+1],
                low:Object.entries(data)[2][1][i+1],
                open:Object.entries(data)[3][1][i+1],
                status:Object.entries(data)[4][1],
                date:Object.entries(data)[5][1][i+1],
                volume:Object.entries(data)[6][1][i+1]
            }
        }
        return formattedData;
    }

    //api call to get company profile information
    getProfile = async (symbol) => {
        const response = await Axios.get(API_URL+`/stock/profile2?`, {params: {
            symbol: symbol,
            token: "c04d8tn48v6u76cjevm0",
            }})
            try{
                this.setState({
                    companyData:(response.data)
                })
            }
            catch(error){
                console.log(error);
            }
    } 
    getSymbol = (symbol) => {
        this.setState(
            {quote: symbol}
        )
        
    }
    //function binding both api calls for chart and company profile
    //called when searched for company 
    getStock = (symbol) => {
        this.getProfile(symbol)
        this.getSymbol(symbol)
        // this.getQuote(symbol)
    }
    getTheme = (theme) => {
        
        if(theme === 'light'){
            this.setState({
                themeToBeApplied: Themes.DARK
            })
        }
        else{
            this.setState({
                themeToBeApplied: Themes.LIGHT
            })
        }
        console.log(this.state.themeToBeApplied)
    }
    render() {
        return (
            <div className="main">
                <Navigation themeHandler={this.getTheme} />
                <SearchForm submitHandler={this.getStock} />
                <div className="set--height">
                    <TradingViewWidget
                        autosize
                        symbol={this.state.quote}
                        theme={this.state.themeToBeApplied}
                        hide_side_toolbar="false"
                    />
                </div>
                {/* <Chart stockData={this.state.quote}/> */}
                <CompanyProfile companyData={this.state.companyData} />
            </div>
        )
    }
}

export default HomePage
