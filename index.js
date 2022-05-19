var customerName = 'bob';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

var bestCustomer = undefined;

function setBestCustomer(){
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = undefined;

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'cannot be change bro!'
}

// console.log(upperCaseCustomerName(customerName));