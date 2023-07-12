describe('Create an addition operation for the special calculator - ', function () {
  it('Defines specialAddition', function () {
    expect(typeof specialAddition).toBe('function');
  });

  it('Adding two numbers using special addition method', function () {
    let expectedResult = 5;

    let actualResult = specialAddition(10, 5);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Negative numbers not allowed' when a negative number is passed as first argument ", function () {
    let expectedResult = 'Negative numbers are not allowed';

    let actualResult = specialAddition(-1, 2);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Negative numbers not allowed' when a negative number is passed as second argument ", function () {
    let expectedResult = 'Negative numbers are not allowed';

    let actualResult = specialAddition(1, -2);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Negative numbers not allowed' when a negative numbers are passed as arguments ", function () {
    let expectedResult = 'Negative numbers are not allowed';

    let actualResult = specialAddition(-1, -2);

    expect(actualResult).toEqual(expectedResult);
  });
});

describe('Create a division operation for the special calculator - ', function () {
  it('Defines simpleDivision', function () {
    expect(typeof simpleDivision).toBe('function');
  });

  it('Dividing two numbers', function () {
    let expectedResult = 2;

    let actualResult = simpleDivision(10, 5);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Cannot divide a smaller number from a larger number ' when numberTwo>numberOne", function () {
    let expectedResult = 'Cannot divide a smaller number from a larger number';

    let actualResult = simpleDivision(5, 10);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Negative numbers not allowed' when a negative number is passed as second argument ", function () {
    let expectedResult = 'Negative numbers are not allowed';

    let actualResult = simpleDivision(10, -5);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Negative numbers not allowed' when a negative numbers are passed as arguments ", function () {
    let expectedResult = 'Negative numbers are not allowed';

    let actualResult = simpleDivision(-5, -5);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Not a number' when numberTwo==0", function () {
    let expectedResult = 'Not a number';

    let actualResult = simpleDivision(5, 0);

    expect(actualResult).toEqual(expectedResult);
  });
});

describe('Create a division operation for the special calculator - ', function () {
  it('Defines specialCalculator', function () {
    expect(typeof specialCalculator).toBe('function');
  });

  it('Adding two valid numbers using special calculator', function () {
    let expectedResult = 5;

    let actualResult = specialCalculator(10, 5, specialAddition);

    expect(actualResult).toEqual(expectedResult);
  });

  it('Dividing two valid numbers using special calculator', function () {
    let expectedResult = 2;

    let actualResult = specialCalculator(10, 5, simpleDivision);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Cannot divide a smaller number from a larger number ' when numberTwo>numberOne", function () {
    let expectedResult = 'Cannot divide a smaller number from a larger number';

    let actualResult = specialCalculator(5, 10, simpleDivision);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Negative numbers not allowed' when a negative number is passed as second argument ", function () {
    let expectedResult = 'Negative numbers are not allowed';

    let actualResult = specialCalculator(10, -5, simpleDivision);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Negative numbers not allowed' when a negative numbers are passed as arguments ", function () {
    let expectedResult = 'Negative numbers are not allowed';

    let actualResult = specialCalculator(-5, -5, simpleDivision);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Not a number' when numberTwo==0", function () {
    let expectedResult = 'Not a number';

    let actualResult = specialCalculator(5, 0, simpleDivision);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Negative numbers not allowed' when a negative number is passed as first argument ", function () {
    let expectedResult = 'Negative numbers are not allowed';

    let actualResult = specialCalculator(-1, 2, specialAddition);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Negative numbers not allowed' when a negative number is passed as second argument ", function () {
    let expectedResult = 'Negative numbers are not allowed';

    let actualResult = specialCalculator(1, -2, specialAddition);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Negative numbers not allowed' when a negative numbers are passed as arguments ", function () {
    let expectedResult = 'Negative numbers are not allowed';

    let actualResult = specialCalculator(-1, -2, specialAddition);

    expect(actualResult).toEqual(expectedResult);
  });
});
