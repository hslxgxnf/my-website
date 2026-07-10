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
  content: `def reverse_array_single_pointer(arr: list[int]) -> list[int]:
    for i in range(0, len(arr) // 2):
        arr[i], arr[-1 - i] = arr[-1 - i], arr[i]

    return arr


def reverse_array_two_pointers(arr: list[int]) -> list[int]:
    left_index: int = 0
    right_index: int = len(arr) - 1

    while left_index < right_index:
        arr[left_index], arr[right_index] = arr[right_index], arr[left_index]
        left_index += 1
        right_index -= 1

    return arr


print(reverse_array_single_pointer([1, 4, 3, 2, 6, 5]))
print(reverse_array_single_pointer([4, 5, 2]))
print(reverse_array_single_pointer([1]))
`,
};
