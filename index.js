// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName(name) {
  customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = 'not bob'
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'jaw'
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'ben'
}
changeLeastFavoriteCustomer()