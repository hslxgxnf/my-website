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

export const code: Code = {
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
