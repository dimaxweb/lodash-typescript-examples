// import {ObjectValidator} from "../../src/fp/composition/objectValidator"
// import {curry,partial,every,has,get} from 'lodash'
//
// const utils  = {
//   greaterThan : curry(function (lhs:any, rhs:any) { return lhs > rhs }),
//   lessThan    : curry(function (lhs:any, rhs:any) { return lhs < rhs })
// }
//
// const validator = function(error:object, fun:Function) {
//
// }
//
// const propertyIs = function(propertyPath :string,func:Function,data:object){
//   var proppertyOnPath = get(data,propertyPath);
//   return partial(func,proppertyOnPath);
// }
//
// const minPriceIsGreaterThan10   =  propertyIs(validator ({message : 'Need to be greater than 10'},utils.greaterThan(10)))
// const priceIsLessThan250 = propertyIs('price', validator({message : 'Need to be less than 250'}, utils.lessThan(250)));
//
// const hasKeys = function(KEYS : string []){
//   var fun:any = function(obj) {
//     return every(KEYS, function(k) {
//       return has(obj, k);
//     });
//   };
//
//   fun.message = "Must have values for keys:" + KEYS.join(" ");
//   return fun;
// }
//
//
// const objValidator  = new ObjectValidator([
//   priceIsLessThan250,
//   minPriceIsGreaterThan10,
//   hasKeys
//   ]
// );
//
//
//
//
//
//
//
//
//
//
