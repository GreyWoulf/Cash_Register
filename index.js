// Define a function

function cashRegister (price, cash, cid){
    // Add up all the cash in the cid
    // start by declaring a new variable and setting it to 0
    let totalCID = 0;
    // loop through the cid array
    // make an array into an object maybe
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
}
