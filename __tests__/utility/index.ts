import {attempt,method,flow,flowRight,map,filter,curryRight,get,curry} from 'lodash'

test('try to parse invalid json',()=>{
  expect(()=>{
    attempt(JSON.parse, '1')
  }).not.toThrow();
});

test('flow simple test',()=>{
  const  data  = { info  : [{a:1,b:20},{a:10,b:35},{a:4,b:6}] };
  let aGreaterThan2:any = curryRight(filter)((item)=>{return item.a > 2});
  let filterFlow = flow((item)=>{return get(item,'info')},aGreaterThan2);
  let result :any = filterFlow(data);
  expect(result).toBeTruthy();
  expect(result.length).toEqual(2);

});






