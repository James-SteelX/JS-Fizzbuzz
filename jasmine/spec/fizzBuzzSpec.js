describe('Javabuzz', function() {

  var javabuzz;

  beforeEach(function(){
    javabuzz = new Javabuzz();
  });

  describe('Knows when a number is', function() {
    it('divisible by 3', function() {
       expect(javabuzz.isDivisibleByThree(3,3)).toBe(true);
    });
  });

   describe('knows when a number is Not', function() {
     it('divisible be 3', function() {
       expect(javabuzz.isDivisibleByThree(1,3)).toBe(false);
     });
   });

   describe('when playing says', function() {
    it('"Fizz" when number is divisable by Three', function() {
      expect(javabuzz.says(3)).toEqual("Fizz");
    });
  });

  describe('when playing says', function() {
   it('"Buzz" when number is divisable by Five', function() {
     expect(javabuzz.says(5)).toEqual("Buzz");
   });
 });

 describe('when playing says', function() {
   it('"FizzBuzz" when number is divisable by Fifteen', function() {
    expect(javabuzz.says(15)).toEqual("FizzBuzz");
  });
});

describe('when playing says', function() {
  it('returns number when number is not divisable by 3/5/15', function() {
   expect(javabuzz.says(11)).toEqual(11);
 });
});

});
