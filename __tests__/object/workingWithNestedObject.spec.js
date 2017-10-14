"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var workingWithNestedObject_1 = require("../../src/object/workingWithNestedObject");
var workingWithNestedObjectExample = new workingWithNestedObject_1.WorkingWithNestedObjectExample();
var complexObject = {
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
test('get nested property', function () {
    var firstAdressCity = workingWithNestedObjectExample.get(complexObject, 'addresses[0].city');
    var notExistingProp = workingWithNestedObjectExample.get(complexObject, 'addresses[28].city', 'default');
    expect(firstAdressCity).toEqual('Chicago');
    expect(notExistingProp).toEqual('default');
});
test('pick multiple nested properies - preserving object structure', function () {
    var adresses = workingWithNestedObjectExample.pick(complexObject, ['addresses[0].city', 'addresses[1].city']);
    expect(adresses).toEqual({ "addresses": [{ "city": "Chicago" }, { "city": "Melbourn" }] });
});
test('omit properties', function () {
    var adresses = workingWithNestedObjectExample.omit(complexObject, ['addresses[0].city', 'addresses[1].city']);
    var withoutCityAdress = {
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
    expect(adresses).toEqual(withoutCityAdress);
});
