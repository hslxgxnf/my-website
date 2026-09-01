import type { Metadata } from "next";

import { reference, ps1Code, ompCode } from "./data";
import RefNav from "@/components/main/RefNav";
import RefButton from "@/components/main/RefButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "Windows",
};

export default function Page() {
  return (
    <main>
      <RefNav reference={reference} />

      <article>
        <section>
          <HeadingLinkId headingNumber={1} lastUpdated="2026-07-01">
            Windows
          </HeadingLinkId>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>PowerShell</HeadingLinkId>
          <section>
            <RefButton>
              <HeadingLinkId headingNumber={3}>Oh My Posh</HeadingLinkId>
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
                        <Highlight type="complex-code">{ps1Code}</Highlight>
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
                        <Highlight type="simple-code" copy={true}>
                          . $PROFILE
                        </Highlight>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>PowerToys</HeadingLinkId>
          <section>
            <RefButton>
              <HeadingLinkId headingNumber={3}>PowerRename</HeadingLinkId>
            </RefButton>
          </section>
          <section>
            <HeadingLinkId headingNumber={3}>Color Picker</HeadingLinkId>
          </section>
          <section>
            <HeadingLinkId headingNumber={3}>Screen Ruler</HeadingLinkId>
          </section>
          <section>
            <HeadingLinkId headingNumber={3}>Mouse Utilities</HeadingLinkId>
          </section>
        </section>
      </article>

      <PageNav />
    </main>
  );
}
