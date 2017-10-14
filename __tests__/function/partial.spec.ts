import {partial} from 'lodash'

function greet(greeting, name) {
  return greeting + ' ' + name;
}

test('Partial function',()=>{
  const sayHelloTo = partial(greet, 'hello');
  var greeting  = sayHelloTo('fred');
  expect(greeting).toEqual('hello fred')

})



