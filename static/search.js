/**
 * Implement these two search algorithms.
 */

/**
 * Search for the number in the sorted list with the linear search algorithm
 * and return the index of the element.
 *
 * Optional: print out how many comparision was needed to find the number
 *
 * @param {number} number The number to search for
 * @param {array} list Ascending list of numbers
 * @returns {number|null} Index of the element or null
 */
function linear_search(number, list)

{for (var i = 0; i < list.length;i++) {if (list[i]===number){return(i)}}


    return null;
}

/**
 * Search for the number in the sorted list with the binary search algorithm
 * and return the index of the element.
 *
 * Optional: print out how many comparision was needed to find the number
 *
 * @param {number} number The number to search for
 * @param {array} list Ascending list of numbers
 * @returns {number|null} Index of the element or null
 */
function binary_search(number, list) {
    var x = Math.floor((list.length)/2)
    var maximum = list.length
    var minimum = 0
    var switch_off = 0

    while (switch_off===0)
    {

        if (list[x]=== number)
             {
                 switch_off += 1;
                 return x
             }
        else if (maximum-minimum <= 1)
                {
                    return null
                }
        else if (list[x] > number)
                {
                    maximum = x;
                    x = minimum
                    x += Math.floor((maximum-minimum)/2)
                }
        else  if (list[x] < number)
        {
            minimum = x;
            x += Math.floor((maximum-minimum)/2)
        }





    }

}




function print_result(search, index) {
    let result = search + ' search ';

    if (index === null) {
        result += 'did not find it.'
    } else {
        result += `found it on index ${index}.`
    }

    console.log(result);
}


function main() {
    let numbers = [3, 6, 8, 11, 18, 23, 24, 33, 36, 45, 46, 51, 56, 60, 69, 72, 83, 90, 93, 97];
    let searched_number = Number(prompt('What is the number you are looking for? (0-100)'));

    print_result('Linear', linear_search(searched_number, numbers));
    print_result('Binary', binary_search(searched_number, numbers));
}

main();

