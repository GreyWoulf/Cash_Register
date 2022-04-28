// Define a function

function cashRegister (price, cash, cid){
    // let's start by immediately returning the function if price is greater than the cash received
    // next we are going to create an object with the unit amounts, this will allow us to set a standard amount for each form of currency
    // so if we have 101 pennies we will have $1.01 but we want to take one unit amount from each form until we reach the amount due goal
    let obj = {
        "PENNY": .01,
        "NICKEL": .05,
        "DIME": .10,
        "QUARTER": .25,
        "ONE": 1.00,
        "FIVE": 5.00,
        "TEN": 10.00,
        "TWENTY": 20.00,
        "ONE HUNDRED": 100.00
    }
    // now we are going to create a variable that gives the total amount of cash in the drawer
    let totalCID = 0;
    // next we are going to loop through the multidimensional array using a for of loop
    // we are going to use a element of to get each element of the array or each array within the array
    for (let element of cid){
        // now we are going to take the 1st index or the second value of the array which is the cash amount and add it to our total 
        totalCID += element[1];
    }
    // I noticed that the totalCID variable contains multiple decimal points so we need to round it up to two
    totalCID = totalCID.toFixed(2);
    // next we are going to create a new variable that will be the amount due
    let amtDue = cash - price;
    // next we are going to round up the amount due to two decimals so we can elminate having too many like before
    amtDue = amtDue.toFixed(2);
    // next we are going to create an empty array where we can push our currency values into for our change
    let due = [];
    // now are going to create our if statements
    // to begin we are going to start with our if statements that is if cash is greater than the price and passed our very first if statement
    if(cash < price){
        return {status: "INCORRECT_PAYMENT", change: due}
    }

    // if the amount due is greater than the total change inide of the drawer
    if(amtDue > totalCID) {
        // then we are going to return an object with the status insufficient funds and the empty due array
        return {status: "INSUFFICIENT FUNDS", change: due}
    }
    // if amount due is equal to CID
    else if (amtDue === totalCID){
        // then we are going to return an object with the status insufficient funds and the cid array
        return {status: "CLOSED", change: cid}
    }
    // now if we do have change then we can work on creating returning those values
    // if amount due is less than the total change in the drawer
    else if (amtDue < totalCID) {
        // let's start by reversing the array because we want to return the amount due from biggest to smallest forms of currency
        cid = cid.reverse();
        // now we are going to create a for loop in iterate through the values
        for(let i = 0; i < cid.length; i++){
            // now we are going to create a variable and get the name of the coins
            let cashName = cid[i][0];
            // next we are going to create a variable where we get the currency amounts
            let cashTotal = cid[i][1];
            // now we need to get the cash value or currency value
            let cashValue = obj[cashName];
            // here we will get the coin amount which is the cashTotal divided by the cashValue
            let cashAmt = (cashTotal / cashValue).toFixed(2);
            // now we need to create a variable that allows us to return number of each currency that we will return for the change
            let cashRtrn = 0;
            // a while loop that continues while we still need change for the amtDue and while the cashAmt is greater than 0
            while(amtDue >= cashValue && cashAmt > 0){
                // then we are take the cashValue and subtract it from the amtDue
                amtDue -= cashValue;
                // we are going to take the cash amount and subtract from it
                cashAmt --;
                // for every iteration in the while loop add 1 of each currency value
                cashRtrn ++;
            }
            // create an if statement if cashRtrn is greater than 0
            if(cashRtrn > 0) {
                due.push([cashName, cashRtrn * cashValue])
            }
        }
         

    }
    if(amtDue > 0){
           return {status: "INSUFFICIENT_FUNDS", change: []};
    } 
    return {status: "OPEN", change: due}
}
