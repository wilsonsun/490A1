function stringProduct(str){

  var product = str.split(",").reduce(function(prev, curr) {
  	return prev * curr;
  });

  return Number(product);
}

function stringInterpolate(){
  // get the arguments and turn it into an array
  var args = Array.prototype.slice.call(arguments);
  return '';
}