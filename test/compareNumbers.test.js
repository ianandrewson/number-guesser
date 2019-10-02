// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { compareNumbers } from '../compare-numbers.js';

const test = QUnit.test;

test('should return 0 if numbers are identical', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 10;
    const correctNumber = 10; 
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 0);
});

test('should return -1 if number guessed number is too low', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 8;
    const correctNumber = 10 ;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, -1);
});

test('should return 1 if guess is too high', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 12;
    const correctNumber = 3;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 1);
});

