import {partial,get,curry,curryRight} from 'lodash'

function greet(greeting, name) {
  return greeting + ' ' + name;
}


test('Partial function',()=>{
  const sayHelloTo = partial(greet, 'hello');
  var greeting  = sayHelloTo('fred');
  expect(greeting).toEqual('hello fred')

});

function propertyValidate(func :Function,path : string,data : any){
  var property = get(data,path);
  return func(property);
}

const utils  = {
  greaterThan : curryRight(function (lhs:any, rhs:any) { return lhs > rhs }),
  lessThan    : curryRight(function (lhs:any, rhs:any) { return lhs < rhs })
}

var priceLessThan10  = partial(propertyValidate,utils.lessThan(10),'info.price');

test('price is less than 10',()=>{
  var data  = {
    info :{
     name  : 'Phone',
     price : 8,
    }
  };

  expect(priceLessThan10(data)).toBeTruthy();

})


var maxPriceGreaterThan  = partial(propertyValidate,utils.greaterThan(250),'info.maxPrice');
test('max price is greate than 250',()=>{
  var data  = {
    info :{
      name  : 'Phone',
      price : 8,
      maxPrice : 360
    }
  };
  expect(maxPriceGreaterThan(data)).toBeTruthy();
});




