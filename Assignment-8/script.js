let totalAmount = 0;
let menuItems = {
  Pizza: {
    "Cheese Delight Pizza": 520,
    "Veggie Special": 350,
    "Paneer Supreme": 430,
    "Classic Margarita": 390,
  },
  Coffee: {
    "Americano": 120,
    "Cappuccino": 280,
    "Espresso": 220,
  },
  Burger: {
    "Veggie Crunch": 280,
    "Spicy Blast": 320,
    "Paneer Burger": 430,
  },
  Tea: {
    "Herbal Tea": 50,
    "Ginger Honey": 60,
    "Masala Chai": 35,
  },
  Samosa: {
    "Spicy Indian Samosa": 30,
    "Classic Samosa": 25,
    "Chinese Samosa": 40,
  },
  Pasta: {
    "Creamy Alfredo": 400,
    "Spicy Arrabiata": 430,
    "Veg Penne": 460,
  },
  "Cold Drink": {
    "Lemon Fizz": 60,
    "Ginger Ale": 70,
    "Tropical Burst": 75,
  },
  Dessert: {
    "Chocolate Lava Cake": 150,
    "Walnut Brownie": 120,
    "Vanilla Sundae": 90,
  },
};

let invoice = {
  "Cheese Delight Pizza": 0,
  "Veggie Special": 0,
  "Paneer Supreme": 0,
  "Classic Margarita": 0,
  "Americano": 0,
  "Cappuccino": 0,
  "Espresso": 0,
  "Veggie Crunch": 0,
  "Spicy Blast": 0,
  "Paneer Burger": 0,
  "Herbal Tea": 0,
  "Ginger Honey": 0,
  "Masala Chai": 0,
  "Spicy Indian Samosa": 0,
  "Classic Samosa": 0,
  "Chinese Samosa": 0,
  "Creamy Alfredo": 0,
  "Spicy Arrabiata": 0,
  "Veg Penne": 0,
  "Lemon Fizz": 0,
  "Ginger Ale": 0,
  "Tropical Burst": 0,
  "Chocolate Lava Cake": 0,
  "Walnut Brownie": 0,
  "Vanilla Sundae": 0,
};

let isActive = true;

function getQuantity(item) {
  let quantity = parseInt(prompt("How many " + item + "s would you like?"));
  return isNaN(quantity) ? 0 : quantity;
}

function generateInvoice(invoice) {
  if (totalAmount === 0) {
    alert("It seems you haven't ordered anything yet. If you'd like to explore our menu, we're here to help!");
  } else {
    let displayInvoice = "";
    for (const item in invoice) {
      if (invoice[item] > 0) {
        displayInvoice += item + " -> " + invoice[item] + "\n";
      }
    }
    displayInvoice += "Total = " + totalAmount;
    confirm(displayInvoice);
  }
}

while (isActive) {
  let selection = parseInt(
    prompt(
      "Welcome to The Flavor Factory! What would you like?\n1.Pizza\n2.Coffee\n3.Tea\n4.Burger\n5.Samosa\n6.Pasta\n7.Cold Drink\n8.Dessert\n9.Generate Invoice\n0.Exit"
    )
  );

  if (selection === 9) {
    generateInvoice(invoice);
  } else if (selection === 0) {
    if (totalAmount === 0) {
      alert("Uh Oh! Seems like you didn't like our menu, looking forward to serving you in the future, Have a Great Day ahead ;-)");
    } else {
      alert("Thank you for your order! We look forward to serving you again.");
    }
    isActive = false;
  } else if (selection === 1) {
    let pizzaChoice = parseInt(
      prompt("1. Cheese Delight Pizza: 520\n2. Veggie Special: 350\n3. Paneer Supreme: 430\n4. Classic Margarita: 390\n5. Go Back")
    );
    if (pizzaChoice === 1) {
      let quantity = getQuantity("Cheese Delight Pizza");
      totalAmount += quantity * menuItems["Pizza"]["Cheese Delight Pizza"];
      invoice["Cheese Delight Pizza"] += quantity * menuItems["Pizza"]["Cheese Delight Pizza"];
    } else if (pizzaChoice === 2) {
      let quantity = getQuantity("Veggie Special");
      totalAmount += quantity * menuItems["Pizza"]["Veggie Special"];
      invoice["Veggie Special"] += quantity * menuItems["Pizza"]["Veggie Special"];
    } else if (pizzaChoice === 3) {
      let quantity = getQuantity("Paneer Supreme");
      totalAmount += quantity * menuItems["Pizza"]["Paneer Supreme"];
      invoice["Paneer Supreme"] += quantity * menuItems["Pizza"]["Paneer Supreme"];
    } else if (pizzaChoice === 4) {
      let quantity = getQuantity("Classic Margarita");
      totalAmount += quantity * menuItems["Pizza"]["Classic Margarita"];
      invoice["Classic Margarita"] += quantity * menuItems["Pizza"]["Classic Margarita"];
    }
  } else if (selection === 2) {
    let coffeeChoice = parseInt(
      prompt("1. Americano: 120\n2. Cappuccino: 280\n3. Espresso: 220\n4. Go Back")
    );
    if (coffeeChoice === 1) {
      let quantity = getQuantity("Americano");
      totalAmount += quantity * menuItems["Coffee"]["Americano"];
      invoice["Americano"] += quantity * menuItems["Coffee"]["Americano"];
    } else if (coffeeChoice === 2) {
      let quantity = getQuantity("Cappuccino");
      totalAmount += quantity * menuItems["Coffee"]["Cappuccino"];
      invoice["Cappuccino"] += quantity * menuItems["Coffee"]["Cappuccino"];
    } else if (coffeeChoice === 3) {
      let quantity = getQuantity("Espresso");
      totalAmount += quantity * menuItems["Coffee"]["Espresso"];
      invoice["Espresso"] += quantity * menuItems["Coffee"]["Espresso"];
    }
  } else if (selection === 3) {
    let teaChoice = parseInt(
      prompt("1. Herbal Tea: 50\n2. Ginger Honey: 60\n3. Masala Chai: 35\n4. Go Back")
    );
    if (teaChoice === 1) {
      let quantity = getQuantity("Herbal Tea");
      totalAmount += quantity * menuItems["Tea"]["Herbal Tea"];
      invoice["Herbal Tea"] += quantity * menuItems["Tea"]["Herbal Tea"];
    } else if (teaChoice === 2) {
      let quantity = getQuantity("Ginger Honey");
      totalAmount += quantity * menuItems["Tea"]["Ginger Honey"];
      invoice["Ginger Honey"] += quantity * menuItems["Tea"]["Ginger Honey"];
    } else if (teaChoice === 3) {
      let quantity = getQuantity("Masala Chai");
      totalAmount += quantity * menuItems["Tea"]["Masala Chai"];
      invoice["Masala Chai"] += quantity * menuItems["Tea"]["Masala Chai"];
    }
  } else if (selection === 4) {
    let burgerChoice = parseInt(
      prompt("1. Veggie Crunch: 280\n2. Spicy Blast: 320\n3. Paneer Burger: 430\n4. Go Back")
    );
    if (burgerChoice === 1) {
      let quantity = getQuantity("Veggie Crunch");
      totalAmount += quantity * menuItems["Burger"]["Veggie Crunch"];
      invoice["Veggie Crunch"] += quantity * menuItems["Burger"]["Veggie Crunch"];
    } else if (burgerChoice === 2) {
      let quantity = getQuantity("Spicy Blast");
      totalAmount += quantity * menuItems["Burger"]["Spicy Blast"];
      invoice["Spicy Blast"] += quantity * menuItems["Burger"]["Spicy Blast"];
    } else if (burgerChoice === 3) {
      let quantity = getQuantity("Paneer Burger");
      totalAmount += quantity * menuItems["Burger"]["Paneer Burger"];
      invoice["Paneer Burger"] += quantity * menuItems["Burger"]["Paneer Burger"];
    }
  } else if (selection === 5) {
    let samosaChoice = parseInt(
      prompt("1. Spicy Indian Samosa: 30\n2. Classic Samosa: 25\n3. Chinese Samosa: 40\n4. Go Back")
    );
    if (samosaChoice === 1) {
      let quantity = getQuantity("Spicy Indian Samosa");
      totalAmount += quantity * menuItems["Samosa"]["Spicy Indian Samosa"];
      invoice["Spicy Indian Samosa"] += quantity * menuItems["Samosa"]["Spicy Indian Samosa"];
    } else if (samosaChoice === 2) {
      let quantity = getQuantity("Classic Samosa");
      totalAmount += quantity * menuItems["Samosa"]["Classic Samosa"];
      invoice["Classic Samosa"] += quantity * menuItems["Samosa"]["Classic Samosa"];
    } else if (samosaChoice === 3) {
      let quantity = getQuantity("Chinese Samosa");
      totalAmount += quantity * menuItems["Samosa"]["Chinese Samosa"];
      invoice["Chinese Samosa"] += quantity * menuItems["Samosa"]["Chinese Samosa"];
    }
  } else if (selection === 6) {
    let pastaChoice = parseInt(
      prompt("1. Creamy Alfredo: 400\n2. Spicy Arrabiata: 430\n3. Veg Penne: 460\n4. Go Back")
    );
    if (pastaChoice === 1) {
      let quantity = getQuantity("Creamy Alfredo");
      totalAmount += quantity * menuItems["Pasta"]["Creamy Alfredo"];
      invoice["Creamy Alfredo"] += quantity * menuItems["Pasta"]["Creamy Alfredo"];
    } else if (pastaChoice === 2) {
      let quantity = getQuantity("Spicy Arrabiata");
      totalAmount += quantity * menuItems["Pasta"]["Spicy Arrabiata"];
      invoice["Spicy Arrabiata"] += quantity * menuItems["Pasta"]["Spicy Arrabiata"];
    } else if (pastaChoice === 3) {
      let quantity = getQuantity("Veg Penne");
      totalAmount += quantity * menuItems["Pasta"]["Veg Penne"];
      invoice["Veg Penne"] += quantity * menuItems["Pasta"]["Veg Penne"];
    }
  } else if (selection === 7) {
    let drinkChoice = parseInt(
      prompt("1. Lemon Fizz: 60\n2. Ginger Ale: 70\n3. Tropical Burst: 75\n4. Go Back")
    );
    if (drinkChoice === 1) {
      let quantity = getQuantity("Lemon Fizz");
      totalAmount += quantity * menuItems["Cold Drink"]["Lemon Fizz"];
      invoice["Lemon Fizz"] += quantity * menuItems["Cold Drink"]["Lemon Fizz"];
    } else if (drinkChoice === 2) {
      let quantity = getQuantity("Ginger Ale");
      totalAmount += quantity * menuItems["Cold Drink"]["Ginger Ale"];
      invoice["Ginger Ale"] += quantity * menuItems["Cold Drink"]["Ginger Ale"];
    } else if (drinkChoice === 3) {
      let quantity = getQuantity("Tropical Burst");
      totalAmount += quantity * menuItems["Cold Drink"]["Tropical Burst"];
      invoice["Tropical Burst"] += quantity * menuItems["Cold Drink"]["Tropical Burst"];
    }
  } else if (selection === 8) {
    let dessertChoice = parseInt(
      prompt("1. Chocolate Lava Cake: 150\n2. Walnut Brownie: 120\n3. Vanilla Sundae: 90\n4. Go Back")
    );
    if (dessertChoice === 1) {
      let quantity = getQuantity("Chocolate Lava Cake");
      totalAmount += quantity * menuItems["Dessert"]["Chocolate Lava Cake"];
      invoice["Chocolate Lava Cake"] += quantity * menuItems["Dessert"]["Chocolate Lava Cake"];
    } else if (dessertChoice === 2) {
      let quantity = getQuantity("Walnut Brownie");
      totalAmount += quantity * menuItems["Dessert"]["Walnut Brownie"];
      invoice["Walnut Brownie"] += quantity * menuItems["Dessert"]["Walnut Brownie"];
    } else if (dessertChoice === 3) {
      let quantity = getQuantity("Vanilla Sundae");
      totalAmount += quantity * menuItems["Dessert"]["Vanilla Sundae"];
      invoice["Vanilla Sundae"] += quantity * menuItems["Dessert"]["Vanilla Sundae"];
    }
  }
}