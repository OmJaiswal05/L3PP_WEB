let totalAmount = 0;
let totalPurchaseAmount = 0;
let totalRentalAmount = 0;
let purchaseCount = 0;
let rentalCount = 0;
let purchaseDiscount = 0;
let rentalDiscount = 0;
let bookSelection = {
    Fiction: {
        "The Alchemist": { buy: 500, rent: 150 },
        "To Kill a Mockingbird": { buy: 600, rent: 200 },
        "1984": { buy: 450, rent: 120 },
        "The Harry Potter Series": { buy: 2800, rent: 1500 },
        "It Ends With Us": { buy: 400, rent: 120 },
    },
    NonFiction: {
        "Sapiens": { buy: 700, rent: 250 },
        "Educated": { buy: 650, rent: 175 },
        "Atomic Habits": { buy: 400, rent: 100 },
        "Think Like a Monk": { buy: 500, rent: 150 },
        "The Art of War": { buy: 800, rent: 200 },
    },
    Science: {
        "A Brief History of Time": { buy: 550, rent: 175 },
        "The Selfish Gene": { buy: 600, rent: 150 },
        "The Origin of Species": { buy: 700, rent: 200 },
        "The Unseen Hand": { buy: 500, rent: 125 },
        "The Influence of Genetics on Human Behavior": { buy: 650, rent: 175 },
    },
};

let invoice = {};
for (let category in bookSelection) {
    for (let book in bookSelection[category]) {
        invoice[book] = { buy: 0, rent: 0 };
    }
}

let isShopping = true;
let categories = Object.keys(bookSelection);

function getQuantity(book) {
    let quantity = parseInt(prompt("How many copies of '" + book + "' would you like to purchase?"));
    return isNaN(quantity) || quantity < 0 ? quantity : quantity;
}

function applyDiscounts() {
    if (purchaseCount >= 5) {
        purchaseDiscount = 0.1 * totalPurchaseAmount;
        totalAmount -= purchaseDiscount;
    }
    if (rentalCount >= 3) {
        rentalDiscount = 0.2 * totalRentalAmount;
        totalAmount -= rentalDiscount;
    }
}

function printInvoice(invoice) {
    applyDiscounts();

    let displayInvoice = "Invoice - THE KITABKHANA\n\n";
    for (const book in invoice) {
      if (invoice[book].buy > 0) {
        displayInvoice += `${book} - Purchased: ₹${invoice[book].buy}\n`;
      }
      if (invoice[book].rent > 0) {
        displayInvoice += `${book} - Rented: ₹${invoice[book].rent}\n`;
      }
    }
    if (purchaseDiscount > 0) {
      displayInvoice += `\nPurchase Discount: -₹${purchaseDiscount}`;
    }
    if (rentalDiscount > 0) {
      displayInvoice += `\nRental Discount: -₹${rentalDiscount}`;
    }
    displayInvoice += `\nTotal Amount = ₹${totalAmount}`;
    confirm(displayInvoice);
}

alert("Welcome to THE KITABKHANA!\nSpecial Offers:\n- Get 10% off on purchases of 5 or more books.\n- Get 20% off on rentals of 3 or more books.");

while (isShopping) {
    let categoryChoice = parseInt(
      prompt(
        `Select a category:\n${categories
          .map((cat, index) => `${index + 1}. ${cat}`)
          .join("\n")}\n${categories.length + 1}. Checkout\n${categories.length + 2}. Exit`
      )
    );
  
    if (categoryChoice > 0 && categoryChoice <= categories.length) {
      let category = categories[categoryChoice - 1];
      let books = Object.keys(bookSelection[category]);
  
      let bookChoice = parseInt(
        prompt(
          `Choose a book from ${category}:\n` +
          books.map((book, index) => `${index + 1}. ${book}`).join("\n") +
          `\n${books.length + 1}. Go Back`
        )
      );
  
      if (bookChoice > 0 && bookChoice <= books.length) {
        let bookName = books[bookChoice - 1];
        let rentalOption = parseInt(prompt(`Do you want to:\n1. Buy (${bookSelection[category][bookName].buy} INR)\n2. Rent (${bookSelection[category][bookName].rent} INR)`));
  
        if (rentalOption === 1 || rentalOption === 2) {
          let quantity = getQuantity(bookName);
          let cost;
  
          if (rentalOption === 1) {
            cost = quantity * bookSelection[category][bookName].buy;
            totalAmount += cost;
            totalPurchaseAmount += cost;
            invoice[bookName].buy += cost;
            purchaseCount += quantity;
          } else if (rentalOption === 2) {
            cost = quantity * bookSelection[category][bookName].rent;
            totalAmount += cost;
            totalRentalAmount += cost;
            invoice[bookName].rent += cost;
            rentalCount += quantity;
          }
        }
      }
    } else if (categoryChoice === categories.length + 1) {
      if (totalAmount === 0) {
        alert("Thank you for visiting! You haven't selected any books yet.");
      } else {
        isShopping = false;
        printInvoice(invoice);
      }
    } else if (categoryChoice === categories.length + 2) {
      if (totalAmount === 0) {
        alert("Thank you for visiting THE KITABKHANA! Have a great day!");
        isShopping = false;
      } else {
        isShopping = false;
        printInvoice(invoice);
      }
    } else {
      alert("Invalid choice, please select a valid option.");
    }
  }
  