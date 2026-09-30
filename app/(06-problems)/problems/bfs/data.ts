import type { Reference, Code } from "@/types/interfaces";
import { favicons } from "@/assets/images/favicons";

export const reference: Reference = [
  {
    target: "BFS",
    sites: [
      {
        url: "https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1",
        favicon: favicons.GeeksforGeeks.image,
        name: favicons.GeeksforGeeks.name,
        title: "BFS of Graph",
      },
    ],
  },
];

export const code: Code = {
  language: "python",
  content: `from collections import deque


def bfs(adj):
    visited = [False] * len(adj)
    result = []

    for i in range(len(adj)):
        if not visited[i]:
            queue = deque()
            queue.append(i)
            visited[i] = True

            while queue:
                current = queue.popleft()
                result.append(current)

                for neighbor in adj[current]:
                    if not visited[neighbor]:
                        queue.append(neighbor)
                        visited[neighbor] = True

    return result


print(bfs([[2, 3, 1], [0], [0, 4], [0], [2]]))
print(bfs([[1, 2], [0, 2], [0, 1, 3, 4], [2], [2]]))`,
};
