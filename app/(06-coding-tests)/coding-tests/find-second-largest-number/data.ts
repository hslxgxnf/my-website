import type { Reference, Code } from "@/types/main/interfaces";
import { favicons } from "@/assets/main-description/favicons/favicons";

export const reference: Reference = [
  {
    target: "Find Second Largest Number",
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
  content: `Numeric = int | float


def find_second_largest_number(arr: list[Numeric]) -> Numeric:
    n: int = len(arr)
    largest: Numeric = -1
    second_largest: Numeric = -1

    for i in range(n):
        if largest < arr[i]:
            second_largest = largest
            largest = arr[i]
        elif second_largest < arr[i] < largest:
            second_largest = arr[i]

    return second_largest


print(find_second_largest_number([12, 35, 1, 10, 34, 1]))
print(find_second_largest_number([10, 5, 10]))
print(find_second_largest_number([10, 10, 10]))
`,
};
