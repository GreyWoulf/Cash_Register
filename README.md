# Cash_Register

Implement a cash register function cashRegister that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The cashRegister function should always return an object with a status key and a change key.

Return {status: "INCORRECT_PAYMENT", change: []} if cash is less than the price.

Return {status: "INSUFFICIENT_FUNDS", change: []}

if cid (cash-in-drawer) is less than the change due, or

if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency types and amounts that may be in the cid array

Currency Unit

Amount

Penny

$0.01 (PENNY)

Nickel

$0.05 (NICKEL)

Dime

$0.1 (DIME)

Quarter

$0.25 (QUARTER)

Dollar

$1 (ONE)

Five Dollars

$5 (FIVE)

Ten Dollars

$10 (TEN)

Twenty Dollars

$20 (TWENTY)

One-hundred Dollars

$100 (ONE HUNDRED)



Example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]


Examples:

CASE 1 - cash is less than price

cashRegister(19.5, 18, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);
// => {status: "INCORRECT_PAYMENT", change: []}


CASE 2a - cid (cash-in-drawer) is less than the change due

cashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]);
// => {status: "INSUFFICIENT_FUNDS", change: []}


CASE 3 - cid is exactly equal to the change due.

cashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]);
/* 
{
  status: "CLOSED",
  change: [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]
}
*/

CASE 4a - all other cases: change due is less than the total cid, and exact change can be made

cashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);

// => {status: "OPEN", change: [["QUARTER", 0.5]]}
