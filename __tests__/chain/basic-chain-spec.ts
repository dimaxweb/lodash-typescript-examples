import {ChainExample}  from '../../src/fp/chain/basic-chain';


const complexObject = {
  firstName: 'Bob',
  lastName: 'Smith',
  addresses: [
    { address1: '123 Main St',
      city: 'Chicago',
      state: 'IL',
      zip: '60614'
    },
    { address1: '123 Elm St',
      city: 'Melbourn',
      state: 'IL',
      zip: '60614'
    }

  ],
};

var chainExampleIstamce = new ChainExample(complexObject);


test('chain with pick and reject  with thru intercetor',()=>{
  let result = chainExampleIstamce.getPropertyAndRemoveValues(['addresses'],(adress) => {
    return adress.city  === 'Chicago';
  });
  expect(result).toBeTruthy();
  expect(result.city).toEqual('Melbourn');

})






