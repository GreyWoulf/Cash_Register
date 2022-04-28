// Define a function

function cashRegister (price, cash, cid){
    // make the cid array into an object maybe
//     [
//         ["PENNY", 1.01],
//         ["NICKEL", 2.05],
//         ["DIME", 3.1],
//         ["QUARTER", 4.25]
//         ["ONE", 90],
//         ["FIVE", 55],
//         ["TEN", 20],
//         ["TWENTY", 60],
//         ["ONE HUNDRED", 100]
//       ]
    // Flatten the array
    cid = cid.flat();
    // we will create a new empty object
    let obj = {};
    // we will now loop through the now flattened array
    for(let i = 0; i < cid.length; i++){
        // if the ith variable is even
        if(i % 2 === 0){
            // then we are going to convert the even number to values and odd numbers in keys
            let key = cid[i];
            let value = cid[i + 1];

            // we are going to assign the key and value to the obj variable
            obj[key] = value;

            // now we have an object that we can now use that looks like this
            // {
            //     PENNY: 1.01,
            //     NICKEL: 2.05,
            //     DIME: 3.1,
            //     QUARTER: 4.25,
            //     ONE: 90,
            //     FIVE: 55,
            //     TEN: 20,
            //     TWENTY: 60,
            //     'ONE HUNDRED': 100
            //   } 
        }
    }
    // now we can find the totals for totals for the cash in the drawer
        // Add up all the cash in the cid
    // start by declaring a new variable and setting it to 0
    let totalCID = 0;
    // now we are going to loop through the object
    for (let key in obj){
        // we are going to add each key value to the totalCID variable
        totalCID += obj[key];
        // noticed totalCID has long decimal, so we need to round it to 2 decimals
    }
    // rounding totalCID to 2 decimals
    totalCID = totalCID.toFixed(2);
    // now we are going to create a variable amtDue variable that let's us know the change we need to give
    let amtDue = cash - price;
    // first we are going to check if they gave us cash to cover the price
    if (cash < price){
        // then we are going to return an object that says status is insufficient funds
        return {status: "INCORRECT_PAYMENT", change: []}
    }
    else {
        continue;
    }
    // now we are going to check to see if the cash is equal to the total we have in the register
    if (cash === totalCID){
        // if it is then we are going to return an object that says status is closed
        return {status: "CLOSED", change: []};
    }
    // now we are going to check if cash is less than the totalCID
    if (cash < totalCID){
        // then we are going to loop through the object to give them their change
        // we actually we need to loop backwards so we can have go through the big bills first and then the change
        for(let key in obj){
            // while amount due is greater than  

        }
    }
}
