import {ArrayExtrasExample }  from '../../src/safeFunctionCalls/arrayExtras';

const safeInstance  = new ArrayExtrasExample();

test('Array filter - calling methods on null',()=>{
    const arrTest  = null;
    expect(()=>{
      safeInstance.filterWithoutLodash(arrTest,function(item){
        return item;
      })
    }).toThrow();

   expect(()=>{
    safeInstance.filterWithLodash(arrTest,function(item){
      return item;
    })
   }).not.toThrow();

})

test('Map filter - calling methods on null',()=>{
  const arrTest  = null;
  expect(()=>{
    safeInstance.mapWithoutLodash(arrTest,function(item){
      return item;
    })
  }).toThrow();

  expect(()=>{
    safeInstance.mapWithLodash(arrTest,function(item){
      return item;
    })
  }).not.toThrow();

})
