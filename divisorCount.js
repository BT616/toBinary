function getDivisorsCnt(n){
    let count = 0;
    for (let i = 1; i <= n; i++) if (!(n % i)) count++;
    return count;
  }

  //Count the number of divisors of a positive integer n.

//Random tests go up to n = 500000.
// 4 --> 3 // we have 3 divisors - 1, 2 and 4