import type { Reference, Code } from "@/types/main/interfaces";
import { favicons } from "@/assets/main-description/favicons/favicons";

export const reference: Reference = [
  {
    target: "Rotate Array Counterclockwise",
    sites: [
      {
        url: "https://www.geeksforgeeks.org/problems/rotate-array-by-n-elements-1587115621/1",
        favicon: favicons.GeeksforGeeks.image,
        name: favicons.GeeksforGeeks.name,
        title: "Rotate Array",
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
  content: `import math


def rotate_array_counterclockwise_reversal(arr: list[int], d: int) -> list[int]:
    d %= len(arr)

    arr[0:d] = arr[0:d][::-1]
    arr[d:] = arr[d:][::-1]
    arr[:] = arr[::-1]

    return arr


def rotate_array_counterclockwise_juggling(arr: list[int], d: int) -> list[int]:
    n = len(arr)
    d %= n
    cycles = math.gcd(n, d)

    for i in range(cycles):
        start = arr[i]
        current_index = i

        while True:
            next_index = (current_index + d) % n

            if next_index == i:
                break

            arr[current_index] = arr[next_index]
            current_index = next_index

        arr[current_index] = start

    return arr


print(rotate_array_counterclockwise_reversal([1, 2, 3, 4, 5], 2))
print(rotate_array_counterclockwise_reversal([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 3))
print(rotate_array_counterclockwise_reversal([7, 3, 9, 1], 9))
`,
};
