export const compareNumbers = (guess, correctNumber) => {
    if (guess < 1 || guess > 20 || typeof guess !== 'number') {
        let invalidInputError = new Error('Invalid input. Input must be a number between 1 and 20');
        console.log(invalidInputError);
        return invalidInputError;
    }
    if (guess < correctNumber){
        return -1;
    } else if (guess === correctNumber) {
        return 0;
    } else if (guess > correctNumber) {
        return 1;
    }
};