// Unit tests to cover the greet() function
// To run these tests, make sure you're in the folder containing this file
// run the command: npm install to setup the testing framework
// Then run the command: npm run test
// The tests should run successfully

import greet from './greetings';

describe('test greet()', function () {
  test('greet a name', function () {
    expect(greet('Elizabeth')).toEqual('Hello, Elizabeth');
  });
  test('accept and handle null value', function () {
    expect(greet()).toEqual('Hello there!');
  });
  test('accept shouting', function () {
    expect(greet('JOSE')).toEqual('HELLO JOSE!');
  });
  test('accept 2 names', function () {
    expect(greet(['Jose', 'Pep'])).toEqual('Hello, Jose, Pep');
  });
  test('accept an array of names', function () {
    expect(greet(['Alex', 'Arsene', 'Jose', 'Zidane'])).toEqual(
      'Hello, Alex, Arsene, Jose, Zidane'
    );
  });
});
