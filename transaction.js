// Define the Transaction class
class Transaction {
  constructor(description, amount) {
    this.description = description;
    this.amount = amount;
  }
}

// Define the Account class
class Account {
  constructor(name, initialBalance = 0) {
    this.name = name;
    this.balance = initialBalance;
    this.transactions = [];
  }

  deposit(description, amount) {
    const transaction = new Transaction(description, amount);
    this.transactions.push(transaction);
    this.balance += amount;
  }

  withdraw(description, amount) {
    const transaction = new Transaction(description, -amount);
    this.transactions.push(transaction);
    this.balance -= amount;
  }

  getStatement() {
    let statement = `Account Statement for ${this.name}\n`;
    statement += '----------------------------------\n';
    statement += 'Description\t\tAmount\n';
    statement += '----------------------------------\n';

    for (const transaction of this.transactions) {
      const sign = transaction.amount >= 0 ? '+' : '-';
      statement += `${transaction.description}\t\t${sign}${Math.abs(transaction.amount)}\n`;
    }

    statement += '----------------------------------\n';
    statement += `Current Balance: ${this.balance}\n`;
    statement += '----------------------------------\n';

    return statement;
  }

}

// Usage example
const myAccount = new Account('AVINASH REDDY K');
myAccount.deposit('Salary', 20000);
myAccount.withdraw('Rent', 1000);
myAccount.deposit('Bonus', 1000);

console.log(myAccount.getStatement());


// Function to generate a random OTP of specified length
function generateOTP(length) {
  var charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var otp = '';

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    otp += charset.charAt(randomIndex);
  }

  return otp;
}

// Generate a 4-digit OTP
var otp = generateOTP(4);
console.log("OTP Send To your MObile..! \n\n")

var usermobile = 9703104087;

var mobileno = 9703104087;

function getState(){

  let statement = `Account Statement for ${this.name}\n`;
  statement += '----------------------------------\n';
  statement += 'Description\t\tAmount\n';
  statement += '----------------------------------\n';

  for (const transaction of this.transactions) {
    const sign = transaction.amount >= 0 ? '+' : '-';
    statement += `${transaction.description}\t\t${sign}${Math.abs(transaction.amount)}\n`;
  }

  statement += '----------------------------------\n';
  statement += `Current Balance: ${this.balance}\n`;
  statement += '----------------------------------\n';

    return statement;
}
function displayMobile() {


  console.log('Generated OTP:', otp);

  if (usermobile == mobileno) {

    console.log('Your Total Amount balance is:'+myAccount.getStatement());
  }
}
console.log("***********************************************");

displayMobile();

