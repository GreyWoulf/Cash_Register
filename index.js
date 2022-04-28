// Define a function

function cashRegister (price, cash, cid){
    // let's start by immediately returning the function if price is greater than the cash received
    if(price > cash) {
        // if it is then we are going to return an object with the status insufficient funds
        return {status: "INSUFFICIENT FUNDS", change: [];}
    }
    // next we are going to create an object with the unit amounts
    // let obj = {
    //     "PENNY": .01,
    //     "NICKEL": .05,
    //     "DIME": .10,
    //     "QUARTER": .25,
    //     "ONE": 1.00,
    //     "FIVE": 5.00,
    //     "TEN": 10.00,
    //     "TWENTY": 20.00,
    //     "ONE HUNDRED": 100.00
    // }
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
    else {
        // let's start by reversing the array because we want to return the amount due from biggest to smallest forms of currency
        cid = cid.reverse();
        
    }
}
