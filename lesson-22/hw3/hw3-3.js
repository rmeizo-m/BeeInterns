//Каррирование

function carriedSum(f){
  return function(a){
    return function(b){
      return f(a, b);
    }
  }
}

function curry(a, b){
  return a + b;
}

let sum = carriedSum(curry)

console.log(sum(1)(2));
