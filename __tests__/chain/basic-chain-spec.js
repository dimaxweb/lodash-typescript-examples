"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var basic_chain_1 = require("../../src/fp/chain/basic-chain");
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
var chainExampleIstamce = new basic_chain_1.ChainExample(complexObject);
test('chain with pick and reject  with thru intercetor', function () {
    var result = chainExampleIstamce.getPropertyAndRemoveValues(['addresses'], function (adress) {
        return adress.city === 'Chicago';
    });
    expect(result).toBeTruthy();
    expect(result.city).toEqual('Melbourn');
});
