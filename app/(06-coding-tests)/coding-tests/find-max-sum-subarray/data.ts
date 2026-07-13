import type { Reference, Code } from "@/types/main/interfaces";
import { favicons } from "@/assets/main-description/favicons/favicons";

export const reference: Reference = [
  {
    target: "Find Max Sum Subarray",
    sites: [
      {
        url: "https://www.geeksforgeeks.org/dsa/print-the-maximum-subarray-sum/",
        favicon: favicons.GeeksforGeeks.image,
        name: favicons.GeeksforGeeks.name,
        title: "Print subarray with maximum sum",
      },
    ],
  },
];

export const code: Code = {
  language: "python",
  content: `Numeric = int | float


def find_max_sum_subarray(arr: list[Numeric]) -> list[Numeric]:
    current_sum: Numeric = arr[0]
    max_sum: Numeric = arr[0]

    current_start_index: int = 0
    max_sum_start_index: int = 0
    max_sum_end_index: int = 0

    for i in range(1, len(arr)):
        if current_sum < 0:
            current_sum = arr[i]
            current_start_index = i
        else:
            current_sum += arr[i]

        if current_sum > max_sum:
            max_sum = current_sum
            max_sum_start_index = current_start_index
            max_sum_end_index = i

    return arr[max_sum_start_index : max_sum_end_index + 1]


print(find_max_sum_subarray([2, 3, -8, 7, -1, 2, 3]))
print(find_max_sum_subarray([-2, -4]))
print(find_max_sum_subarray([5, 4, 1, 7, 8]))
`,
};
