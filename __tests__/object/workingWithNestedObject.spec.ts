import {WorkingWithNestedObjectExample} from "../../src/object/workingWithNestedObject"
const workingWithNestedObjectExample = new WorkingWithNestedObjectExample();
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

test('get nested property',()=>{
  const firstAdressCity = workingWithNestedObjectExample.get(complexObject,'addresses[0].city');
  const notExistingProp = workingWithNestedObjectExample.get(complexObject, 'addresses[28].city','default');
  expect(firstAdressCity).toEqual('Chicago');
  expect(notExistingProp).toEqual('default');

})

test('pick multiple nested properies - preserving object structure',()=>{
  const adresses = workingWithNestedObjectExample.pick(complexObject,['addresses[0].city','addresses[1].city']);
  expect(adresses).toEqual( {"addresses": [{"city": "Chicago"}, {"city": "Melbourn"}]});

});

test('omit properties',()=>{
  const adresses = workingWithNestedObjectExample.omit(complexObject,['addresses[0].city','addresses[1].city']);

  const withoutCityAdress = {
    firstName: 'Bob',
    lastName: 'Smith',
    addresses: [
      { address1: '123 Main St',
        state: 'IL',
        zip: '60614'
      },
      { address1: '123 Elm St',
        state: 'IL',
        zip: '60614'
      }

    ],
  };

  expect(adresses).toEqual( withoutCityAdress);

});
