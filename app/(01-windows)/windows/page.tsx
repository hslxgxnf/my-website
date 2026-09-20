import type { Metadata } from "next";

import {
  reference,
  ps1CodeSuggestionTab,
  ps1CodeOhMyPosh,
  ompCode,
} from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import Heading from "@/components/main/Heading/Heading";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main/PageNav";

export const metadata: Metadata = {
  title: "Windows",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <section>
          <Heading type="link-id" number={1} lastUpdated="2026-09-14">
            Windows
          </Heading>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            PowerShell
          </Heading>
          <section>
            <Heading type="link-id" number={3}>
              Suggestion Tab
            </Heading>
            <ul>
              <li>
                <p>
                  Open{" "}
                  <Highlight type="text">
                    Microsoft.PowerShell_profile.ps1
                  </Highlight>
                  .
                </p>
                <ul>
                  <li>
                    <p>
                      <Highlight type="simple-code" copy={true}>
                        notepad $PROFILE
                      </Highlight>
                    </p>
                  </li>
                  <li>
                    <p>
                      If it doesn't exist, create it.{" "}
                      <Highlight type="simple-code" copy={true}>
                        New-Item -Path $PROFILE -Type File -Force
                      </Highlight>
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  Modify{" "}
                  <Highlight type="text">
                    Microsoft.PowerShell_profile.ps1
                  </Highlight>
                  .
                </p>
                <ul>
                  <li>
                    <Highlight type="complex-code">
                      {ps1CodeSuggestionTab}
                    </Highlight>
                  </li>
                  <li>
                    <p>
                      If the version of{" "}
                      <Highlight type="simple-code">PSReadLine</Highlight> is
                      outdated, errors can occur. Upgrade it.{" "}
                      <Highlight type="simple-code" copy={true}>
                        Install-Module PSReadLine -Force -AllowClobber
                      </Highlight>
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  Refresh{" "}
                  <Highlight type="text">
                    Microsoft.PowerShell_profile.ps1
                  </Highlight>
                  .
                </p>
                <ul>
                  <li>
                    <p>
                      <Highlight type="simple-code" copy={true}>
                        . $PROFILE
                      </Highlight>
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
          <section>
            <RefButton>
              <Heading type="link-id" number={3}>
                Oh My Posh
              </Heading>
            </RefButton>
            <ul>
              <li>
                <p>
                  Install <Highlight type="text">Oh My Posh</Highlight>.
                </p>
                <ul>
                  <li>
                    <p>
                      <Highlight type="simple-code" copy={true}>
                        winget install JanDeDobbeleer.OhMyPosh --source winget
                      </Highlight>
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>Install a font.</p>
                <ul>
                  <li>
                    <p>
                      <Highlight type="simple-code" copy={true}>
                        oh-my-posh font install meslo
                      </Highlight>
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  Set the installed font as the{" "}
                  <Highlight type="text">PowerShell</Highlight> default font.
                </p>
                <ul>
                  <li>
                    <p>
                      <Highlight type="text" copy={true}>
                        MesloLGM Nerd Font
                      </Highlight>
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  Apply <Highlight type="text">Oh My Posh</Highlight>.
                </p>
                <ul>
                  <li>
                    <p>
                      Open{" "}
                      <Highlight type="text">
                        Microsoft.PowerShell_profile.ps1
                      </Highlight>
                      .
                    </p>
                    <ul>
                      <li>
                        <p>
                          <Highlight type="simple-code" copy={true}>
                            notepad $PROFILE
                          </Highlight>
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p>
                      Modify{" "}
                      <Highlight type="text">
                        Microsoft.PowerShell_profile.ps1
                      </Highlight>
                      .
                    </p>
                    <ul>
                      <li>
                        <Highlight type="complex-code">
                          {ps1CodeOhMyPosh}
                        </Highlight>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p>
                      Create <Highlight type="text">cert.omp.json</Highlight> in
                      the same directory as{" "}
                      <Highlight type="text">
                        Microsoft.PowerShell_profile.ps1
                      </Highlight>
                      .
                    </p>
                    <ul>
                      <li>
                        <Highlight type="complex-code">{ompCode}</Highlight>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p>
                      Refresh{" "}
                      <Highlight type="text">
                        Microsoft.PowerShell_profile.ps1
                      </Highlight>
                      .
                    </p>
                    <ul>
                      <li>
                        <p>
                          <Highlight type="simple-code" copy={true}>
                            . $PROFILE
                          </Highlight>
                        </p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </section>
        <section>
          <Heading type="link-id" number={2}>
            PowerToys
          </Heading>
          <section>
            <RefButton>
              <Heading type="link-id" number={3}>
                PowerRename
              </Heading>
            </RefButton>
          </section>
        </section>
      </article>

      <PageNav />
    </main>
  );
}
