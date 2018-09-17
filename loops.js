function forLoop(array) {
<<<<<<< HEAD

  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    } else { array.push("I am " + i + " strange loops.")
    }}
    return array 
  }
function whileLoop(number) {
  while (number > 0) 
  console.log(--number);
  return "done"
}
function doWhileLoop(array) {
  var i = 0
  function incrementVariable() {
    i = i + 1; }
    do {
      array.pop();
      incrementVariable(); }
      while (incrementVariable() > array.length);
      return array 
}

=======
  for (var i = 1; i < 25; i++) {
    
    
    if (i === 1) {
      array.push(`I am ${i} strange loop.`)
    }
    else { 
  array.push(`I am ${i} strange loops.`)
  }
  return array 
}}
>>>>>>> 489ea5701b36dc3315f1a88bff1abe4104a91aeb
