import type { Reference } from "@/types/interfaces";
import { favicons } from "@/assets/images/favicons";

export const reference: Reference = [
  {
    target: "Graph",
    sites: [
      {
        url: "https://www.geeksforgeeks.org/dsa/graph-data-structure/",
        favicon: favicons.GeeksforGeeks.image,
        name: favicons.GeeksforGeeks.name,
        title: "Graph Data Structure",
      },
      {
        url: "https://www.geeksforgeeks.org/dsa/graph-data-structure-and-algorithms/",
        favicon: favicons.GeeksforGeeks.image,
        name: favicons.GeeksforGeeks.name,
        title: "Graph Algorithms",
      },
    ],
  },
  {
    target: "Types",
    sites: [
      {
        url: "https://www.geeksforgeeks.org/dsa/graph-types-and-applications/",
        favicon: favicons.GeeksforGeeks.image,
        name: favicons.GeeksforGeeks.name,
        title: "Types of Graphs with Examples",
      },
    ],
  },
];
