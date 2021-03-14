exports.min = function min (array) {
  if(array == undefined || array === null || array.length == 0){
    return 0;
  }
    return Math.min.apply(null, array);
}

exports.max = function max (array) {
  if(array == undefined || array === null || array.length == 0){
    return 0;
  }
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  let sum = 0;
//if (!array.length){
  if(array == undefined || array === null || array.length == 0){
   return 0;
 }
 //return array.reduce(a+b / array.length)
  for(var i = 0; i <array.length; i++){
   sum += array[i];
 }
 return sum / array.length;
}
