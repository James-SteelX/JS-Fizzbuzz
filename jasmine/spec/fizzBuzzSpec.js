describe('Javabuzz', function() {

  var javabuzz;

  beforeEach(function(){
    javabuzz = new Javabuzz();
  });

  describe('Knows when a number is divisable by three', function() {
    it('3 is divisible by 3', function() {
       expect(javabuzz.isDivisibleByThree(3,3)).toBe(true);
    });
  });

   describe('knows when a number is Not divisable by three', function() {
     it('1 is not divisible by 3', function() {
       expect(javabuzz.isDivisibleByThree(1,3)).toBe(false);
     });
   });

   describe('Knows when a number is divisable by five', function() {
     it('5 is divisible by 5', function() {
        expect(javabuzz.isDivisibleByFive(5,5)).toBe(true);
     });
   });

    describe('knows when a number is Not divisable by five', function() {
      it('1 is not divisible by 5', function() {
        expect(javabuzz.isDivisibleByFive(1,5)).toBe(false);
      });
    });

    describe('Knows when a number is divisible by fifteen', function() {
      it('15 is divisible by 15', function() {
         expect(javabuzz.isDivisibleByFifteen(15,15)).toBe(true);
      });
    });

    describe('knows when a number is Not divisable by fifteen', function() {
      it('1 is not divisible by 15', function() {
         expect(javabuzz.isDivisibleByFifteen(1,15)).toBe(false);
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
