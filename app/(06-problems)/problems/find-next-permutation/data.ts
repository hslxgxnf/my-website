import type { Reference, Code } from "@/types/main/interfaces";
import { favicons } from "@/assets/main-description/favicons/favicons";

export const reference: Reference = [
  {
    target: "Find Next Permutation",
    sites: [
      {
        url: "https://www.geeksforgeeks.org/problems/next-permutation5226/1",
        favicon: favicons.GeeksforGeeks.image,
        name: favicons.GeeksforGeeks.name,
        title: "Next Permutation",
      },
    ],
  },
];

export const code: Code = {
  language: "python",
  content: `Numeric = int | float


def find_next_permutation(arr: list[Numeric]) -> list[Numeric]:
    n: int = len(arr)

    def reverse(left_index: int, right_index: int) -> None:
        while left_index < right_index:
            arr[left_index], arr[right_index] = arr[right_index], arr[left_index]
            left_index += 1
            right_index -= 1

    pivot_index: int = -1
    for i in range(n - 2, -1, -1):
        if arr[i] < arr[i + 1]:
            pivot_index = i
            break

    if pivot_index == -1:
        reverse(0, n - 1)
        return arr

    for i in range(n - 1, pivot_index, -1):
        if arr[i] > arr[pivot_index]:
            arr[i], arr[pivot_index] = arr[pivot_index], arr[i]
            break

    reverse(pivot_index + 1, n - 1)
    return arr


print(find_next_permutation([2, 4, 1, 7, 5, 0]))
print(find_next_permutation([3, 4, 2, 5, 1]))
print(find_next_permutation([3, 2, 1]))
`,
};
