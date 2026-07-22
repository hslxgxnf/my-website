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


def find_max_subarray_sum(arr: list[Numeric]) -> Numeric:
    current_sum: Numeric = arr[0]
    max_sum: Numeric = arr[0]

    for i in range(1, len(arr)):
        current_sum = max(current_sum + arr[i], arr[i])
        max_sum = max(max_sum, current_sum)

    return max_sum


print(find_max_subarray_sum([2, 3, -8, 7, -1, 2, 3]))
print(find_max_subarray_sum([-2, -4]))
print(find_max_subarray_sum([5, 4, 1, 7, 8]))
`,
};
