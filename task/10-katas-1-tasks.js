'use strict';

/**
 * Returns the array of 32 compass points and heading.
 * See details here:
 * https://en.wikipedia.org/wiki/Points_of_the_compass#32_cardinal_points
 *
 * @return {array}
 *
 * Example of return :
 *  [
 *     { abbreviation : 'N',     azimuth : 0.00 ,
 *     { abbreviation : 'NbE',   azimuth : 11.25 },
 *     { abbreviation : 'NNE',   azimuth : 22.50 },
 *       ...
 *     { abbreviation : 'NbW',   azimuth : 348.75 }
 *  ]
 */
function createCompassPoints() {
    let sides = ['N', 'E', 'S', 'W'];  // use array of cardinal directions only!
    let result = [];
    let copy=sides;
    let grads = 0.00;
    let pointer = 0;

    function insertItemsBetweenExistedElements(i) {
        return (i % 2 === 0) ? ((sides[pointer + 1]) ? (sides[pointer] + sides[pointer + 1]) : (sides[pointer] + sides[0]))
            : ((sides[pointer + 1]) ? (sides[pointer + 1] + sides[pointer]) : (sides[0] + sides[pointer]));

    }
    for (let i = 0; i < 4; i++) {
        sides.splice(pointer + 1, 0, insertItemsBetweenExistedElements(i))
        pointer += 2;
    }
    pointer = 0;

    for (let i = 0; i < 8; i++) {
        sides.splice(pointer + 1, 0, insertItemsBetweenExistedElements(i));
        pointer += 2;
    }

    sides.splice(1, 0, 'NbE');
    sides.splice(3, 0, 'NEbN');
    sides.splice(5, 0, 'NEbE');
    sides.splice(7, 0, 'EbN');
    sides.splice(9, 0, 'EbS');
    sides.splice(11, 0, 'SEbE');
    sides.splice(13, 0, 'SEbS');
    sides.splice(15, 0, 'SbE');
    sides.splice(17, 0, 'SbW');
    sides.splice(19, 0, 'SWbS');
    sides.splice(21, 0, 'SWbW');
    sides.splice(23, 0, 'WbS');
    sides.splice(25, 0, 'WbN');
    sides.splice(27, 0, 'NWbW');
    sides.splice(29, 0, 'NWbN');
    sides.splice(31, 0, 'NbW');

    for (let i = 0; i < 32; i++) {
        result.push({ abbreviation: sides[i], azimuth: grads });
        grads += 11.25;
    }

    return result;
}

// console.log(createCompassPoints());

/**
 * Expand the braces of the specified string.
 * See https://en.wikipedia.org/wiki/Bash_(Unix_shell)#Brace_expansion
 *
 * In the input string, balanced pairs of braces containing comma-separated substrings
 * represent alternations that specify multiple alternatives which are to appear at that position in the output.
 *
 * @param {string} str
 * @return {Iterable.<string>}
 *
 * NOTE: The order of output string does not matter.
 *
 * Example:
 *   '~/{Downloads,Pictures}/*.{jpg,gif,png}'  => '~/Downloads/*.jpg',
 *                                                '~/Downloads/*.gif'
 *                                                '~/Downloads/*.png',
 *                                                '~/Pictures/*.jpg',
 *                                                '~/Pictures/*.gif',
 *                                                '~/Pictures/*.png'
 *
 *   'It{{em,alic}iz,erat}e{d,}, please.'  => 'Itemized, please.',
 *                                            'Itemize, please.',
 *                                            'Italicized, please.',
 *                                            'Italicize, please.',
 *                                            'Iterated, please.',
 *                                            'Iterate, please.'
 *
 *   'thumbnail.{png,jp{e,}g}'  => 'thumbnail.png'
 *                                 'thumbnail.jpeg'
 *                                 'thumbnail.jpg'
 *
 *   'nothing to do' => 'nothing to do'
 */
function* expandBraces(str) {
    throw new Error('Not implemented');
}


/**
 * Returns the ZigZag matrix
 *
 * The fundamental idea in the JPEG compression algorithm is to sort coefficient of given image by zigzag path and encode it.
 * In this task you are asked to implement a simple method to create a zigzag square matrix.
 * See details at https://en.wikipedia.org/wiki/JPEG#Entropy_coding
 * and zigzag path here: https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/JPEG_ZigZag.svg/220px-JPEG_ZigZag.svg.png
 *
 * @param {number} n - matrix dimension
 * @return {array}  n x n array of zigzag path
 *
 * @example
 *   1  => [[0]]
 *
 *   2  => [[ 0, 1 ],
 *          [ 2, 3 ]]
 *
 *         [[ 0, 1, 5 ],
 *   3  =>  [ 2, 4, 6 ],
 *          [ 3, 7, 8 ]]
 *
 *         [[ 0, 1, 5, 6 ],
 *   4 =>   [ 2, 4, 7,12 ],
 *          [ 3, 8,11,13 ],
 *          [ 9,10,14,15 ]]
 *
 */
function getZigZagMatrix(n) {
    throw new Error('Not implemented');
}


/**
 * Returns true if specified subset of dominoes can be placed in a row accroding to the game rules.
 * Dominoes details see at: https://en.wikipedia.org/wiki/Dominoes
 *
 * Each domino tile presented as an array [x,y] of tile value.
 * For example, the subset [1, 1], [2, 2], [1, 2] can be arranged in a row (as [1, 1] followed by [1, 2] followed by [2, 2]),
 * while the subset [1, 1], [0, 3], [1, 4] can not be arranged in one row.
 * NOTE that as in usual dominoes playing any pair [i, j] can also be treated as [j, i].
 *
 * @params {array} dominoes
 * @return {bool}
 *
 * @example
 *
 * [[0,1],  [1,1]] => true
 * [[1,1], [2,2], [1,5], [5,6], [6,3]] => false
 * [[1,3], [2,3], [1,4], [2,4], [1,5], [2,5]]  => true
 * [[0,0], [0,1], [1,1], [0,2], [1,2], [2,2], [0,3], [1,3], [2,3], [3,3]] => false
 *
 */
function canDominoesMakeRow(dominoes) {
    throw new Error('Not implemented');
}


/**
 * Returns the string expression of the specified ordered list of integers.
 *
 * A format for expressing an ordered list of integers is to use a comma separated list of either:
 *   - individual integers
 *   - or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'.
 *     (The range includes all integers in the interval including both endpoints)
 *     The range syntax is to be used only for, and for every range that expands to more than two values.
 *
 * @params {array} nums
 * @return {bool}
 *
 * @example
 *
 * [ 0, 1, 2, 3, 4, 5 ]   => '0-5'
 * [ 1, 4, 5 ]            => '1,4,5'
 * [ 0, 1, 2, 5, 7, 8, 9] => '0-2,5,7-9'
 * [ 1, 2, 4, 5]          => '1,2,4,5'
 */
function extractRanges(nums) {
    let resultString = '';
    let pointer = 0;
    let rangeArray = Array.from({ length: nums.length }, () => []);

    rangeArray[0].push(nums[0]);

    rangeArray.forEach((_,i,arr)=>{
        if (nums[i] + 1 === nums[i + 1]) arr[pointer].push(nums[i + 1]); else {
            pointer = pointer + 1;
            arr[pointer].push(nums[i + 1])
        };
    })
rangeArray.filter((el, i) => (el !== undefined && el[0] !== undefined))
    .forEach((elem)=>{
        if (elem.length > 2) resultString += `${elem[0]}-${elem[elem.length - 1]},`; else
        if (elem.length == 2) resultString += `${elem[0]},${elem[elem.length - 1]},`; else
            resultString += `${elem[0]},`;
    });

   
    return resultString.slice(0, -1);
}
console.log(extractRanges([0, 1, 2, 5, 7, 8, 10, 11]));

module.exports = {
    createCompassPoints: createCompassPoints,
    expandBraces: expandBraces,
    getZigZagMatrix: getZigZagMatrix,
    canDominoesMakeRow: canDominoesMakeRow,
    extractRanges: extractRanges
};
