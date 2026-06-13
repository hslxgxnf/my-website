import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import { reference, ps1Code, ompCode } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "Windows",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <section>
          <HeadingLinkId headingNumber={1} lastUpdated="2026-05-14">
            Windows
          </HeadingLinkId>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>PowerShell</HeadingLinkId>
          <section>
            <ReferenceButton>
              <HeadingLinkId headingNumber={3}>Oh My Posh</HeadingLinkId>
            </ReferenceButton>
            <ul>
              <li>
                Install <Highlight type="text">Oh My Posh</Highlight>.
                <ul>
                  <li>
                    <Highlight type="simple-code" copy={true}>
                      winget install JanDeDobbeleer.OhMyPosh --source winget
                    </Highlight>
                  </li>
                </ul>
              </li>
              <li>
                Install a <Highlight type="text">Nerd Font</Highlight>.
                <ul>
                  <li>
                    <Highlight type="simple-code" copy={true}>
                      oh-my-posh font install meslo
                    </Highlight>
                  </li>
                </ul>
              </li>
              <li>
                Set the font as the{" "}
                <Highlight type="text">PowerShell</Highlight> default font.
                <ul>
                  <li>
                    <Highlight type="text" copy={true}>
                      MesloLGM Nerd Font
                    </Highlight>
                  </li>
                </ul>
              </li>
              <li>
                Apply <Highlight type="text">Oh My Posh</Highlight>.
                <ul>
                  <li>
                    <Highlight type="simple-code" copy={true}>
                      notepad $PROFILE
                    </Highlight>
                  </li>
                  <li>
                    <Highlight type="complex-code">{ps1Code}</Highlight>
                  </li>
                  <li>
                    Create the <Highlight type="text">cert.omp.json</Highlight>{" "}
                    file in the same directory as the{" "}
                    <Highlight type="text">
                      Microsoft.PowerShell_profile.ps1
                    </Highlight>{" "}
                    file.
                    <br />
                    <Highlight type="complex-code">{ompCode}</Highlight>
                  </li>
                  <li>
                    <Highlight type="simple-code" copy={true}>
                      . $PROFILE
                    </Highlight>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>PowerToys</HeadingLinkId>
          <section>
            <ReferenceButton>
              <HeadingLinkId headingNumber={3}>PowerRename</HeadingLinkId>
            </ReferenceButton>
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

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
