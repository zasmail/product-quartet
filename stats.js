const data                = require('./data.json'),
      math                = require('mathjs');

const quartet = function(mean, sd, val){
  // determine which quartet the value falls in.
  // this can easily be translated to octets, by dividing the sd by 2 and adding a few more ifs
  if ((mean - (sd * 2)) > val){
    return 0;
  }
  else if ((mean - (sd)) > val){
    return 1;
  }
  else if ((mean + (sd)) > val){
    return 2;
  }
  else if ((mean + (sd * 2)) > val){
    return 3;
  }
  else {
    return 4;
  }
}
const prices = data.map(function(product){
  //just using price here as an example, but use whatever you'd like
  return product.price;
});

// [http://mathjs.org/] is kind enough to supply a mean and a standard deviation function
// I probably didn't need to, but overwrote the ennumerable class in ruby to do the same.
const mean = math.mean(prices);
const sd = math.std(prices);

const updatedProducts = data.map(product => {
  //update the products with the quartet that their price falls into
  product.priceQuartet= quartet(mean, sd, product.price);
  return product;
});
