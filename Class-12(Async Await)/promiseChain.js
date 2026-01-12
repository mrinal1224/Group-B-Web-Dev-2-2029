function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    if (drink === "coffee") {
      resolve("Order taken for coffee");
    } else {
      reject("Cannot take the Order");
    }
  });
}

function processOrder(orderPlaced) {
  return new Promise(function (resolve) {
    resolve(`${orderPlaced} and Served.`);
  });
}

function generateBill() {
  return new Promise(function (resolve) {
    resolve(`Bill Generated`);
  });
}

//   promise chaining

placeOrder("coffee")
  .then(function (order) {
    console.log(order); // Order taken for coffee
    return order;
  }).then(function (placedOrder) {
    let orderData = processOrder(placedOrder);
    return orderData;
  })
  .then(function (orderData) {
    let billdata = generateBill(orderData);
    return billdata;
  });
