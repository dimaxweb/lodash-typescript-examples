import {attempt,method} from 'lodash'

test('try to parse invalid json',()=>{
  expect(()=>{
    attempt(JSON.parse, '1')
  }).not.toThrow();
});


