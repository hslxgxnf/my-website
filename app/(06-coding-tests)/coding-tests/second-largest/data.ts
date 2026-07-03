import type { Reference, Code } from "@/types/main/interfaces";
import { favicons } from "@/assets/main-description/favicons/favicons";

export const reference: Reference = [
  {
    target: "Second Largest",
    sites: [
      {
        url: "https://www.geeksforgeeks.org/problems/second-largest3735/1",
        favicon: favicons.GeeksforGeeks.image,
        name: favicons.GeeksforGeeks.name,
        title: "Second Largest",
      },
    ],
  },
];

export const problemCode: Code = {
  language: "text",
  content: `Given an array of positive integers arr[], return the second largest element from the array.
If the second largest element doesn't exist then return -1.

Note: The second largest element should not be equal to the largest element.

Examples:
Input: arr[] = [12, 35, 1, 10, 34, 1]
Output: 34
Explanation: The largest element of the array is 35 and the second largest element is 34.
Input: arr[] = [10, 5, 10]
Output: 5
Explanation: The largest element of the array is 10 and the second largest element is 5.
Input: arr[] = [10, 10, 10]
Output: -1
Explanation: The largest element of the array is 10 and the second largest element does not exist.

Constraints:
2 ≤ arr.size() ≤ 10⁵
1 ≤ arr[i] ≤ 10⁵`,
};

export const solutionCode: Code = {
  language: "python",
  content: `def get_second_largest(arr: list[int]) -> int:
    n: int = len(arr)
    largest: int = -1
    second_largest: int = -1

    for i in range(n):
        if largest < arr[i]:
            second_largest = largest
            largest = arr[i]
        elif second_largest < arr[i] < largest:
            second_largest = arr[i]

    return second_largest


print(get_second_largest([12, 35, 1, 10, 34, 1]))
print(get_second_largest([10, 5, 10]))
print(get_second_largest([10, 10, 10]))`,
};
