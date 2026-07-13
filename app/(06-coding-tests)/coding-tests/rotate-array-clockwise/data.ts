import type { Reference, Code } from "@/types/main/interfaces";
import { favicons } from "@/assets/main-description/favicons/favicons";

export const reference: Reference = [
  {
    target: "Rotate Array Clockwise",
    sites: [
      {
        url: "https://www.geeksforgeeks.org/problems/rotate-array-clockwise/1",
        favicon: favicons.GeeksforGeeks.image,
        name: favicons.GeeksforGeeks.name,
        title: "Rotate Array Clockwise",
      },
      {
        url: "https://www.geeksforgeeks.org/dsa/juggling-algorithm-for-array-rotation/",
        favicon: favicons.GeeksforGeeks.image,
        name: favicons.GeeksforGeeks.name,
        title: "Juggling Algorithm for Array Rotation",
      },
    ],
  },
];

export const code: Code = {
  language: "python",
  content: `Numeric = int | float


def rotate_array_clockwise_reversal(arr: list[Numeric], d: int) -> list[Numeric]:
    n: int = len(arr)
    d %= n

    def reverse(start_index: int, end_index: int) -> None:
        while start_index < end_index:
            arr[start_index], arr[end_index] = arr[end_index], arr[start_index]
            start_index += 1
            end_index -= 1

    reverse(0, n - d - 1)
    reverse(n - d, n - 1)
    reverse(0, n - 1)

    return arr


import math


def rotate_array_clockwise_juggling(arr: list[Numeric], d: int) -> list[Numeric]:
    n: int = len(arr)
    d %= n
    cycles: int = math.gcd(n, d)

    for i in range(cycles):
        start = arr[i]
        current_index = i

        while True:
            next_index = (current_index - d) % n

            if next_index == i:
                break

            arr[current_index] = arr[next_index]
            current_index = next_index

        arr[current_index] = start

    return arr


print(rotate_array_clockwise_reversal([1, 2, 3, 4, 5, 6], 2))
print(rotate_array_clockwise_reversal([1, 2, 3, 4, 5], 4))
`,
};
