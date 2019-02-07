"""
Implement these two search algorithms.
"""


def linear_search(number, list):
    """
    Search for the number in the sorted list with the linear search algorithm
    and return the index of the element.

    Optional: print out how many comparision was needed to find the number

    :param integer number: The number to search for
    :param list of numbers list: Ascending list of numbers
    :return: Index of the element or None
    :rtype: integer
    """
    counter = 0
    for i in list:
        counter += 1
        if i == number:
            return counter

    else:
        return None


def binary_search(number, list):
    """
    Search for the number in the sorted list with the binary search algorithm
    and return the index of the element.

    Optional: print out how many comparision was needed to find the number

    :param integer number: The number to search for
    :param list of numbers list: Ascending list of numbers
    :return: Index of the element or None
    :rtype: integer
    """

    x = int(len(list)/2)

    maximum = (len(list))

    minimum = 0

    switch_off = 0

    while switch_off == 0:

        if list[x] == number:
            switch_off += 1
            return (x+1)

        elif maximum-minimum <= 1:
            return None     
            

        elif list[x] > number:
            maximum = x
            x = minimum
            x += int((maximum-minimum)/2)
            
        elif list[x] < number:
            minimum = x
            x += int((maximum-minimum)/2)

    return None


def print_results(search, index):
    result = search.title() + ' search '

    if index is None:
        result += 'did not find it.'
    else:
        result += f'found it on index {index}.'

    print(result)


def main():
    numbers = [3, 6, 8, 11, 18, 23, 24, 33, 36, 45, 46, 51, 56, 60, 69, 72, 83, 90, 93, 97]
    searched_number = int(input('What is the number you are looking for? (0-100) '))

    print_results('linear', linear_search(searched_number, numbers))
    print_results('binary', binary_search(searched_number, numbers))


if __name__ == '__main__':
    main()
