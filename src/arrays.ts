/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    if (numbers.length === 1) {
        numbers = [...numbers, ...numbers];
        return numbers;
    } else {
        numbers = [numbers[0], numbers[numbers.length - 1]];
    }
    return numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const conversion = numbers.map((num: string): number => {
        if (isNaN(parseInt(num))) {
            return 0;
        } else {
            return parseInt(num);
        }
    });
    return conversion;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const convert = amounts.map(
        (num: string): number => parseInt(num.replace("$", "")) || 0
    );
    return convert;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const words = messages.filter(
        (message: string): boolean => !message.endsWith("?")
    );
    return words.map((message: string): string =>
        message.endsWith("!") ? message.toUpperCase() : message
    );
};
/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const CSW = words.filter((word: string): boolean => word.length < 4);
    return CSW.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.(
 */
export function allRGB(colors: string[]): boolean {
    const RGB = colors.filter(
        (color: string) =>
            color !== "red" && color !== "blue" && color !== "green"
    );
    if (RGB.length === 0) {
        return true;
    } else {
        return false;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    } else {
        const sum = addends.reduce(
            (total: number, num: number) => total + num,
            0
        );
        const solution = addends.join("+");
        return sum.toString() + "=" + solution;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const newArray = [...values];
    const first_Neg = values.findIndex((nums: number): boolean => nums < 0);
    const ind = first_Neg + 1;
    if (first_Neg === -1) {
        const sum = newArray.reduce(
            (Total: number, num: number) => Total + num,
            0
        );
        newArray.splice(newArray.length, 0, sum);
        return newArray;
    } else {
        const sum = newArray
            .slice(0, first_Neg)
            .reduce((total: number, num: number) => total + num, 0);
        newArray.splice(ind, 0, sum);
        return newArray;
    }
}
