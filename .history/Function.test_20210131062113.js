const myFunc = require('./Function');

test('Add 2 + 2 to Equal 4', ()=>{
    expect(myFunc.add(2, 2)).toBe(4);
});