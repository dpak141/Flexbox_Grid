let stocks = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts", "kaju"],
};

let is_shop_open = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Sorry!, Our shop is closed."));
    }
  });
};

order(2000, () => console.log(`${stocks.Fruits[0]} was selected.`))
  .then(() => {
    return order(0, () => console.log("Production has started."));
  })

  .then(() => {
    return order(2000, () => console.log("The fruit was chopped."));
  })

  .then(() => {
    return order(1000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added.`)
    );
  })

  .then(() => {
    return order(1000, () => console.log("Start the machine"));
  })

  .then(() => {
    return order(2000, () =>
      console.log(`icecrem ${stocks.holder[0]} was placed`)
    );
  })

  .then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} was spinkled`));
  })

  .then(() => {
    return order(1000, () => console.log("Icream was served."));
  })

  .catch(() => {
    console.log("Customer Left");
  })
  .finally(() => {
    console.log("Day ended shop is closed");
  });
