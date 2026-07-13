import type { Reference, Code } from "@/types/main/interfaces";
import { favicons } from "@/assets/main-description/favicons/favicons";

export const reference: Reference = [
  {
    target: "Move All Zeroes to End",
    sites: [
      {
        url: "https://www.geeksforgeeks.org/problems/move-all-zeroes-to-end-of-array0751/1",
        favicon: favicons.GeeksforGeeks.image,
        name: favicons.GeeksforGeeks.name,
        title: "Move All Zeroes to End",
      },
    ],
  },
];

export const code: Code = {
  language: "python",
  content: `Numeric = int | float


def move_all_zeroes_to_end(arr: list[Numeric]) -> list[Numeric]:
    zero_index: int = 0

    for i in range(len(arr)):
        if arr[i] != 0:
            # Avoid self-swapping
            if i != zero_index:
                arr[i], arr[zero_index] = arr[zero_index], arr[i]

            zero_index += 1

    return arr


print(move_all_zeroes_to_end([1, 2, 0, 4, 3, 0, 5, 0]))
print(move_all_zeroes_to_end([0, 0, 0, 3, 1, 4]))
print(move_all_zeroes_to_end([10, 20, 30]))
print(move_all_zeroes_to_end([0, 0]))
`,
};
