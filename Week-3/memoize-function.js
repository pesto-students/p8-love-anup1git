
//Given reducer method:
const add = function add(a,b){
  return a+b
}

// Declaration of a memoize function that takes in a function
const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    let cacheKey = args.map(n => n.toString() + '+').join('');
    if (cacheKey in cache) {
      console.log("Fetched from cache : result " + cache[cacheKey])
      return cache[cacheKey];
    }else {
      let result = args.reduce((acc, curr) => fn(acc, curr), 0);
      cache[cacheKey] = result;
      console.log("Calculated : result " + result)
      return result;
    }
  }
}

//Exercise 3.1: Create a method called memoize such that:
const memoizeAdd=memoize(add);//then calling...
console.log(memoizeAdd(100,100));//returns 200
console.log(memoizeAdd(100));//returns 100
console.log(memoizeAdd(100,200))//returns 300
console.log(memoizeAdd(100,100))//returns 200 without computing
