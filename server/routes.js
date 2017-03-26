const router = require('express').Router();
const rp = require('request-promise');

const ROOT_URL = 'http://fedora-nyc1.laulabs.net:3000';

// router.get('/barTypes/:location', (req, res) => {
router.get('/barTypes', (req, res) => {
  rp.get(`${ROOT_URL}/get_bar_types`)
  .catch(err => console.error(err))
  .then(data => res.send(data));
});

router.post('/barTypeConsumption', (req, res) => {
  const { bar_type } = req.body;
  const config = {
    uri: `${ROOT_URL}/get_beer_consumption`,
    body: { bar_type },
    json: true
  };
  rp.post(config)
  .catch(err => console.error(err))
  .then((data) => {
    const parsed = {};
    parsed.data = data;
    parsed.barType = bar_type;
    res.send(parsed);
  });
});

router.post('/foodToBeers', (req, res) => {
  const bod = {
    product: req.body.food,
    category: "beer"
  }
  const config = {
    uri: `${ROOT_URL}/get_product_qty`,
    body: bod,
    json: true
  }
  console.log('foodToBeers');
  rp.post(config)
  .catch(err => console.error(err))
  .then((data) => {
    console.log('data from food query:', data);
    res.send(data)
  });
});

router.post('/beerToFoods', (req, res) => {
  const bod = {
    product: req.body.beer,
    category: "food"
  }
  const config = {
    uri: `${ROOT_URL}/get_product_qty`,
    body: bod,
    json: true
  }
  console.log('beerToFoods');
  rp.post(config)
  .catch(err => console.error(err))
  .then(data => res.send(data));
});


module.exports = router;
