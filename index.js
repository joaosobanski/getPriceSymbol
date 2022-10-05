const axios = require('axios')

const pairs = 'https://data.gateapi.io/api2/1/pairs';
const get = 'https://data.gateapi.io/api2/1/ticker/'
const usd_endpoint = 'https://economia.awesomeapi.com.br/last/USD-BRL'
let usd = 0;

const getUsd = async () => {
    const value = await axios.get(usd_endpoint)
    const { bid } = value.data.USDBRL
    return bid
}

const getPair = async (pair) => {
    const value = await axios.get(get + pair)
    const { last } = value.data;
    return last
}

const main = async () => {
    usd = await getUsd()
    console.log(await getPair('BTC_USDT') * usd)
    console.log(await getPair('CWEB_USDT') * usd)
    console.log(await getPair('CAKE_USDT') * usd)
    console.log(await getPair('LINK_USDT') * usd)
    console.log(await getPair('DOT_USDT') * usd)
    console.log(await getPair('ADA_USDT') * usd)
}






main()