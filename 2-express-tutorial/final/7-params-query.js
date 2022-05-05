const express = require('express');
const app = express();
const { products } = require('./data')

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image};
    });
    res.json(newProducts);
});

app.get('/api/products/:productID', (req, res) => {
    const {productID} = req.params

    const singleProduct = products.find(
        (product) => product.id === Number(productID)
    );

    if(!singleProduct){
        return res.status(404).send('Product Does Not Exist');
    }

    res.json(singleProduct);
});

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send('hello world');
});


app.get('/api/v1/query', (req, res) => {
    const {search, limit} = req.query;
    let sortedPrdoucts = [...products];

    if(search){
        sortedPrdoucts = sortedPrdoucts.filter((product) =>{
            return product.name.startsWith(search);
        });
    }

    if(limit){
        sortedPrdoucts = sortedPrdoucts.slice(0, Number(limit));
    }

    if (sortedPrdoucts.length < 1) {
        // res.status(200).send('no products matched your search');
        return res.status(200).json({ success: true, data: [] })
    }
    res.status(200).json(sortedPrdoucts)
});

app.listen(5000, () => {
    console.log('server is listening in port 5000.....');
});