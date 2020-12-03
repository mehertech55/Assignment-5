var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET Customer List. */
router.get('/', function(req, res, next) {
  console.log(__basedir + "/database/" + "customers.json");
  fs.readFile( __basedir + "/database/" + "customers.json", 'utf8', function (err, data) {
    res.render('index', { customers: JSON.parse(data) });
  });
});

router.get('/customers/:id', function(req, res, next) {
  fs.readFile( __basedir + "/database/" + "customers.json", 'utf8', function (err, data) {
    var customers = JSON.parse( data );
    let customer = null;

    for (var i=0; i < customers.length; i++) {
      if (customers[i].id == req.params.id){
        customer = customers[i];
      }
    }
    res.render('customer-detail', { customer: customer });
  });
});

router.get('/customers/:id/orders', function(req, res, next) {
  fs.readFile( __basedir + "/database/" + "customers.json", 'utf8', function (err, data) {
    var customers = JSON.parse( data );
    let customer = null;

    for (var i=0; i < customers.length; i++) {
      if (customers[i].id == req.params.id){
        customer = customers[i];
      }
    }
    res.render('customer-orders', { customer: customer });
  });
});

router.get('/customers/:id/orders/:number', function(req, res, next) {
  fs.readFile( __basedir + "/database/" + "customers.json", 'utf8', function (err, data) {
    var customers = JSON.parse( data );
    let customer = null;
    let orderDetail = null;

    for (var i=0; i < customers.length; i++) {
      if (customers[i].id == req.params.id){
        customer = customers[i];
        for(var j=0; j < customer.orders.length; j++) {
          if (customer.orders[j].number == req.params.number){
            orderDetail = customer.orders[j];
          }
        }
      }
    }
    console.log(orderDetail);
    res.render('customer-order-detail', { customer: customer, order_detail: orderDetail });
  });
});

module.exports = router;

