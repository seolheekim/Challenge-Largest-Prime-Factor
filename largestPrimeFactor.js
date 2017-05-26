exports.largestPrimeFactor = function(n){
  var primeNumber = 2;

    while(primeNumber < n){
      //when n is divided by even number
      if(n % primeNumber === 0){
        //divide the primeNumber with n
        n /= primeNumber;
      }else{
        primeNumber++;
      }
    }


  return primeNumber;
};