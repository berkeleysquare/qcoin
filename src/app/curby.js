import {DIRNGClient} from '@buff-beacon-project/curby-client'

export const createClient = () => {
    return DIRNGClient.create();
};

const makeArray = length => {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(i % 2);
    }
    return arr;
};

// Make an array of maxShuffle Length with 0s and 1s
// Shuffle, then use half of the array
// to preserve random distribution of 1s and 0s
export const flipCoin = async client => {
    const randomness = await client.randomness();
    const arrayLength = Math.floor(randomness.maxShuffleLength / 2);
    const myArray = makeArray(arrayLength * 2);
    const shuffledArray = randomness.shuffled(myArray).slice(0, arrayLength);
    return {
        randomness: randomness.timestamp,
        shuffledArray,
        arrayLength,
    };
};
