function stringProduct(str){

  var product = str.split(",").reduce(function(prev, curr) {
  	return prev * curr;
  });

  return Number(product);
}

function stringInterpolate(){
  // get the arguments and turn it into an array
  var args = Array.prototype.slice.call(arguments);
  
  var template = args[0].split(' ');

  i = 1;
  res = '';
  var patt = /%s/;

  for (x = 0; x < template.length; x++) {
  	if (patt.test(template[x])) {
  		template[x] = template[x].replace('%s', args[i]);
  		i++;
  	}
  	res = res + template[x] + ' ';
  }

  res = res.replace(/^\s+|\s+$/gm,'');
  return res;
}