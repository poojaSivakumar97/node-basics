function placeOrder(drink) {
  return new Promise((resolve, reject) => {
    if (drink == "coffee") {
      resolve(`order for coffee is placed`);
    } else {
      reject("No other orders");
    }
  });
}

function processOrder(order) {
  return new Promise((resolve) => {
    console.log(`Your order is getting processed....`);

    resolve(`${order} and is ready to be served !`);
  });
}

// placeOrder("coffee")
//   .then((res) => {
//     console.log(res);
//     let orderIsProcessed = processOrder(res);
//     return orderIsProcessed;
//   })
//   .then((processedOrder) => {
//     console.log(processedOrder);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Async Await

async function serveOrder() {
  try {
    let orderPlaced = await placeOrder("coffee");
    console.log(orderPlaced);
    let processedOrder = await processOrder(orderPlaced);
    console.log(processedOrder);
  } catch (e) {
    console.log(e);
  }
}

serveOrder();
