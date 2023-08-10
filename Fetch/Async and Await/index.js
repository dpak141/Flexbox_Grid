let stocks = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts", "kaju"],
};

let order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected`);
    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("Production has started.");
    setTimeout(() => {
      console.log("Food has been chopped.");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
        setTimeout(() => {
          console.log("machine was started");
          setTimeout(() => {
            console.log(`icecream was placed on ${stocks.holder[0]}`);
            setTimeout(() => {
              console.log(`${stocks.toppings[0]} was added`);
              setTimeout(() => {
                console.log("Serve Ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};

order(1, production);
