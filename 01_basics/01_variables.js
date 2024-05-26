const accountID = 12345
let accountEmail = "rishabh@google.com"
var accountPassword = "12345"
accountCity = "Rajasthan"

let accountState;

/*
accountID = 2 -> Not Allowed
*/


/*
Prefer not to use var because of issue in block scope and functional scope.
*/

console.log(accountID);

console.table([accountEmail,accountID,accountPassword,accountCity,accountState])
