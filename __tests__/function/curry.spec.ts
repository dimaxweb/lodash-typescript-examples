import {curry} from 'lodash'

const add  = function(x,y,z){
  return x + y;
}

const curried = curry(add);
const add5  = curried(5);

test('check curry working',()=>{
  var result = add5(15);
  expect(result).toEqual(20);
});
