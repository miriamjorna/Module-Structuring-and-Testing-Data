function largestNum(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }

  console.assert(largestNum(5, 3, 7) === 7, 'largest number in third position')
  console.assert(largestNum(2, 9, 3) === 9, 'largest number in second position')
  console.assert(largestNum(10, 4, 6) === 10, 'largest number in first position')
  console.assert(largestNum(1.3, 2.7, 3.1) === 3.1, 'largest number from decimal numbers')
  console.assert(largestNum(-5, -2, -8) === -2, 'largest number from negative numbers')
  console.assert(largestNum(4, 4, 4) === 4, 'all numbers are the same')
}

test("define largest number", () => {
  expect(largestNum(5, 3, 7)).toEqual(7);
  expect(largestNum(2, 9, 3)).toEqual(9);
  expect(largestNum(10, 4, 6)).toEqual(10);
    expect(largestNum(1.3, 2.7, 3.1)).toEqual(3.1);
    expect(largestNum(-5, -2, -8)).toEqual(-2);
    expect(largestNum(4, 4, 4)).toEqual(4);

});