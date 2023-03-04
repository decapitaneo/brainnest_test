const {Calculator} = require('../src/calculator');

describe('Sum Test', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(Calculator.sum(1, 2)).toBe(3);
  })
  
  test('Sum Test 0', () =>{
    expect(Calculator.sum(0,0)).toBe(0);
  })

  test('Sum Test null', () =>{
      expect(Calculator.sum(null,null)).toBe(0);
  })
  
  test('Test of text', () =>{
      expect(Calculator.sum('a','b')).toBe('ab');
  })
});

describe('Sub Test',() =>{
  test('Two numbers sub', () =>{
    expect(Calculator.sub(-5,5)).toBe(-10);
  })
  
  test('0 sub', () =>{
    expect(Calculator.sub(0,0)).toBe(0);
  })

  test('Null sub', () =>{
      expect(Calculator.sub(null,null)).toBe(0);
  })
  
  test('Sub with text', () =>{
      expect(Calculator.sub('a','b')).toBe(NaN);
  })
});

describe('Multiplication Test', () => {
    
  test('2 numbers mult', () =>{
      expect(Calculator.multiply(1,2)).toBe(2);
  })
  
  test('Mult with 0', () =>{
      expect(Calculator.multiply(0,0)).toBe(0);
  })

  test('Mult null', () =>{
      expect(Calculator.multiply(null,null)).toBe(0);
  })

  test('Mult with text', () =>{
      expect(Calculator.multiply('a','b')).toBe(NaN);
  })

});

describe('Division Test', () => {
    
  test('2 numbers division', () =>{
      expect(Calculator.division(10,2)).toBe(5);
  })
  
  test('0 division', () =>{
      expect(Calculator.division(0,0)).toBe(NaN);
  })

  test('null division', () =>{
      expect(Calculator.division(null,null)).toBe(NaN);
  })

  test('Division with text', () =>{
      expect(Calculator.division('a','b')).toBe(NaN);
  })

});


