import type { Reference, Code } from "@/types/main/interfaces";
import { favicons } from "@/assets/main-description/favicons/favicons";

export const reference: Reference = [
  {
    target: "Oh My Posh",
    sites: [
      {
        url: "https://ohmyposh.dev/",
        favicon: favicons.Oh_My_Posh.image,
        name: favicons.Oh_My_Posh.name,
        title: "",
      },
      {
        url: "/ide-settings/jetbrains-webstorm#tools",
        favicon: favicons.self.image,
        name: favicons.self.name,
        title: "JetBrains WebStorm | Tools",
      },
      {
        url: "/ide-settings/jetbrains-pycharm#tools",
        favicon: favicons.self.image,
        name: favicons.self.name,
        title: "JetBrains PyCharm | Tools",
      },
    ],
  },
  {
    target: "PowerRename",
    sites: [
      {
        url: "https://learn.microsoft.com/en-us/windows/powertoys/powerrename",
        favicon: favicons.Microsoft.image,
        name: favicons.Microsoft.name,
        title: "PowerRename utility for Windows",
      },
      {
        url: "https://www.youtube.com/watch?v=RFYTpgb4_JA",
        favicon: favicons.YouTube.image,
        name: favicons.YouTube.name,
        title: "How to use Windows PowerToys' PowerRename utility\n",
      },
    ],
  },
];

export const ps1Code: Code = {
  language: "powershell",
  fileName: "Microsoft.PowerShell_profile.ps1",
  content: `# Find your local configuration file.
$MyThemePath = Join-Path (Split-Path $PROFILE) "cert.omp.json"
oh-my-posh init pwsh --config $MyThemePath | Invoke-Expression

# Press the Tab key to accept the cloudy gray suggestion.
Set-PSReadLineKeyHandler -Key Tab -Function AcceptSuggestion
`,
};

export const ompCode: Code = {
  language: "json",
  fileName: "cert.omp.json",
  content: `{
  "$schema": "https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/schema.json",
  "blocks": [
    {
      "alignment": "left",
      "segments": [
        {
          "background": "#E36464",
          "foreground": "#fff",
          "leading_diamond": "\ue0b6",
          "style": "diamond",
          "template": "{{ .UserName }} ",
          "trailing_diamond": "\ue0c6",
          "type": "session"
        },
        {
          "background": "green",
          "foreground": "#fff",
          "leading_diamond": "\ue0c7",
          "options": {
            "style": "folder"
          },
          "style": "diamond",
          "template": " {{ .Path }} ",
          "trailing_diamond": "\ue0c6",
          "type": "path"
        },
        {
          "background": "lightCyan",
          "foreground": "#fff",
          "leading_diamond": "\ue0c7",
          "options": {
            "branch_icon": ""
          },
          "style": "diamond",
          "template": " git({{ .HEAD }}) ",
          "trailing_diamond": "\ue0c6",
          "type": "git"
        },
        {
          "background": "lightMagenta",
          "foreground": "#fff",
          "leading_diamond": "\ue0c7",
          "options": {
            "time_format": "15:04"
          },
          "style": "diamond",
          "template": " {{ .CurrentDate | date .Format }} ",
          "trailing_diamond": "\ue0c6",
          "type": "time"
        }
      ],
      "type": "prompt"
    },
    {
      "alignment": "left",
      "segments": [
        {
          "foreground": "#fff",
          "style": "plain",
          "template": "\\n\u276f",
          "type": "text"
        }
      ],
      "type": "prompt"
    }
  ],
  "final_space": true,
  "version": 4
}
`,
};
