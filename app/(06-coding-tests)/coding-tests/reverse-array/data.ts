import type { Reference, Code } from "@/types/main/interfaces";
import { favicons } from "@/assets/main-description/favicons/favicons";

export const reference: Reference = [
  {
    target: "Reverse Array",
    sites: [
      {
        url: "https://www.geeksforgeeks.org/problems/reverse-an-array/1",
        favicon: favicons.GeeksforGeeks.image,
        name: favicons.GeeksforGeeks.name,
        title: "Reverse an Array",
      },
    ],
  },
];

export const code: Code = {
  language: "python",
  content: `def reverse_array(arr: list[int]) -> list[int]:
    for i in range(0, len(arr) // 2):
        arr[i], arr[len(arr) - 1 - i] = arr[len(arr) - 1 - i], arr[i]

    return arr


print(reverse_array([1, 4, 3, 2, 6, 5]))
print(reverse_array([4, 5, 2]))
print(reverse_array([1]))
`,
};
