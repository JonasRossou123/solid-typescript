"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NoDiscount_1 = require("./classes/NoDiscount");
var VariableDiscount_1 = require("./classes/VariableDiscount");
var FixedDiscount_1 = require("./classes/FixedDiscount");
var Product_1 = require("./classes/Product");
var ShoppingBasket_1 = require("./classes/ShoppingBasket");
//This is called a Union, the discountType can only contain the following 2 values:
var cart = new ShoppingBasket_1.ShoppingBasket();
cart.addProduct(new Product_1.Product('Chair', 25, new FixedDiscount_1.FixedDiscount(10)));
// cart.addProduct(new Product('Chair', 25, new FixedDiscount( -10)));
cart.addProduct(new Product_1.Product('Table', 50, new VariableDiscount_1.VariableDiscount(25)));
cart.addProduct(new Product_1.Product('Bed', 100, new NoDiscount_1.NoDiscount()));
var tableElement = document.querySelector('#cart tbody');
cart.products.forEach(function (product) {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.innerText = product.name;
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerText = product.originalPrice.toFixed(2) + " €";
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerText = product.calculatePrice().toFixed(2) + " €";
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerText = product.showCalculation();
    tr.appendChild(td);
    tableElement.appendChild(tr);
});
