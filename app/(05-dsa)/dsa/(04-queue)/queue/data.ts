import type { Reference } from "@/types/main/interfaces";
import { favicons } from "@/assets/main-description/favicons/favicons";

export const reference: Reference = [
  {
    target: "Queue",
    sites: [
      {
        url: "https://www.geeksforgeeks.org/dsa/queue-data-structure/",
        favicon: favicons.GeeksforGeeks.image,
        name: favicons.GeeksforGeeks.name,
        title: "Queue Data Structure",
      },
    ],
  },
  {
    target: "Double-Ended Queue (Deque)",
    sites: [
      {
        url: "https://www.geeksforgeeks.org/dsa/deque-set-1-introduction-applications/",
        favicon: favicons.GeeksforGeeks.image,
        name: favicons.GeeksforGeeks.name,
        title: "Deque Data Structure",
      },
    ],
  },
  {
    target: "Priority Queue",
    sites: [
      {
        url: "https://www.geeksforgeeks.org/dsa/heap-data-structure/",
        favicon: favicons.GeeksforGeeks.image,
        name: favicons.GeeksforGeeks.name,
        title: "Heap Data Structure",
      },
    ],
  },
];
