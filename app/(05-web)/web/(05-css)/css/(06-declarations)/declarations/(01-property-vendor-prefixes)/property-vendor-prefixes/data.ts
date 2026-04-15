import type { Reference } from "@/types/non-root/shared-page/interfaces";
import { favicons } from "@/assets/non-root/shared-page/favicons/favicons";

export const reference: Reference = [
  {
    target: "Property Vendor Prefixes",
    sites: [
      {
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix",
        favicon: favicons.MDN.image,
        name: favicons.MDN.name,
        title: "Vendor prefix",
      },
    ],
  },
];
