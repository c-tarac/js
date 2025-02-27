const accountId = 1233334
let accountEmail = "tc@iitg.com"
var accountPassword = "12345"
accountCity = "Jaipur"


// accountId =2 Not allowed

accountEmail = "hc@hc.com"
accountPassword = "2121211221"
accountCity = "Bengaluru"  // not recommended
let accountState
console.log(accountId)
/*
Prefer not to use var because of issue in block scope and functional scope.
*/
console.log([accountId, accountEmail, accountPassword, accountCity, accountState])