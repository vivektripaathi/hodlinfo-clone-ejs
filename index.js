const express = require('express');
const app = express();
const ejs = require('ejs');
const axios = require('axios');
const db = require('./config/db')

//middleware
app.use(express.static('public'));
app.set('view engine', 'ejs');

const getTicker = async () => {
    // getting data from `https://api.wazirx.com/api/v2/tickers`
    try{
        const { data } = await axios.get('https://api.wazirx.com/api/v2/tickers');
        const top10Tickers = Object.values(data).slice(0, 10);
        return top10Tickers;
    }
    catch(err){
        console.error(err);
    }
}

const postDataToDB = async (tickers) =>{
    // posting data to postgresql database
    try{
        await db.query('DELETE FROM stocks'); // deleting data such db have only top 10 stock's data
        tickers.forEach( async (ticker) => {
            const { name, last, buy, sell, volume, base_unit} = ticker;
            const newData = await db.query('INSERT INTO stocks (name, last, buy, sell, volume, base_unit) VALUES ($1, $2, $3, $4, $5, $6)', [name, last, buy, sell, volume, base_unit]);
        })
    }
    catch(err){
        console.log(err);
    }
}

const fetchAndStore = async () => {
    const tickers = await getTicker();
    await postDataToDB(tickers);
}
// fetchAndStore();

const getStocksfromDB = async () =>{
    try{
        const {rows } = await db.query('SELECT * FROM stocks');
        return rows;
}
    catch(err){
        console.log(err);
    }
}


//routes
app.get("/", async (req, res)=>{
    const stocks = await getStocksfromDB();
    await fetchAndStore();
    res.render("home", {stocks});
});

app.listen(3000, ()=>{
    console.log("PORT : 3000")
});