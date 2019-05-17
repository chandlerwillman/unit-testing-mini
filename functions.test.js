const functions = require('./functions');

test("returnTwo() should return 2.", () => {
    expect( functions.returnTwo() ).toEqual(2);
});

test("greeting() should return the dynamic greeting based on name.", () => {
    expect( functions.greeting('James') ).toEqual('Hello, James.');
    expect( functions.greeting('Jill') ).toEqual('Hello, Jill.');
});

describe("Math functions:", () => {
    test("add() should return a dynamic sum based on two number parameters.", () => {
        expect( functions.add(1,2) ).toEqual(3);
        expect( functions.add(5,9) ).toEqual(14);
    });
    
    test("subtract() should return a dynamic subtraction based on two number parameters.", () => {
        expect( functions.subtract(10,2) ).toEqual(8);
        expect( functions.subtract(19,9) ).toEqual(10);
    });
    
    test("multiply() should return a dynamic multiplication based on two number parameters.", () => {
        expect( functions.multiply(1,2) ).toEqual(2);
        expect( functions.multiply(5,9) ).toEqual(45);
    });
    
    test("divide() should return a dynamic division based on two number parameters.", () => {
        expect( functions.divide(10,2) ).toEqual(5);
        expect( functions.divide(6,3) ).toEqual(2);
    });
});