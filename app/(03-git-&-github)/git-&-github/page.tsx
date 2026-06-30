import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import { reference, gitCommitMessageCode, gitHookCode } from "./data";
import ReferenceNav from "@/components/main/ReferenceNav";
import ReferenceButton from "@/components/main/ReferenceButton";
import HeadingLinkId from "@/components/main-description/HeadingLinkId/HeadingLinkId";
import Highlight from "@/components/main-description/Highlight/Highlight";
import PageNav from "@/components/main-description/PageNav";

export const metadata: Metadata = {
  title: "Git & GitHub",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <aside>
        <ReferenceNav reference={reference} />
      </aside>

      <article>
        <section>
          <ReferenceButton>
            <HeadingLinkId headingNumber={1} lastUpdated="2026-06-30">
              Git & GitHub
            </HeadingLinkId>
          </ReferenceButton>
          <p>
            While <Highlight type="text">Git</Highlight> is a local version
            control system, <Highlight type="text">GitHub</Highlight> is a
            cloud-based platform for hosting{" "}
            <Highlight type="text">Git</Highlight> repositories.
          </p>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Files & Folders</HeadingLinkId>
          <ul>
            <li>
              <Highlight type="text">README.md</Highlight>
            </li>
            <li>
              <Highlight type="text">.gitignore</Highlight>
            </li>
            <li>
              <Highlight type="text">.gitattributes</Highlight>
            </li>
            <li>
              <Highlight type="text">.git/hooks</Highlight>
            </li>

            <li>
              <Highlight type="text">.github/workflows/*.yml</Highlight>
            </li>
          </ul>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Git Command Lines</HeadingLinkId>
          <ul>
            <li>
              <Highlight type="simple-code">git version</Highlight>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">
                  git config list --show-origin
                </Highlight>
              </p>
              <p>
                Lists system, global, and local configurations and their origin.
              </p>
            </li>
            <li>
              <Highlight type="simple-code">
                git config --global user.name &lt;name&gt;
              </Highlight>
            </li>
            <li>
              <Highlight type="simple-code">
                git config --global user.email &lt;email&gt;
              </Highlight>
            </li>
            <li>
              <Highlight type="simple-code">git clone &lt;url&gt;</Highlight>
            </li>
            <hr />
            <li>
              <Highlight type="simple-code">git init</Highlight>
            </li>
            <li>
              <Highlight type="simple-code">git status</Highlight>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">git stash</Highlight>
              </p>
              <p>
                Cuts the changes in the current project and pastes them into the
                stash archive.
              </p>
              <ul>
                <li>
                  <p>
                    <Highlight type="simple-code">
                      git stash push &lt;file-name&gt;
                    </Highlight>
                  </p>
                  <p>
                    Cuts the changes in the specified file and pastes them into
                    the stash archive.
                  </p>
                </li>
                <li>
                  <p>
                    <Highlight type="simple-code">git stash list</Highlight>
                  </p>
                  <p>Lists stashes.</p>
                </li>
                <li>
                  <p>
                    <Highlight type="simple-code">git stash show</Highlight>
                  </p>
                  <p>Shows the changes in the latest stash.</p>
                </li>
                <li>
                  <p>
                    <Highlight type="simple-code">git stash pop</Highlight>
                  </p>
                  <p>
                    Cuts the latest stash in the stash archive and pastes it
                    into the current project.
                  </p>
                </li>
                <li>
                  <p>
                    <Highlight type="simple-code">git stash apply</Highlight>
                  </p>
                  <p>
                    Copies the latest stash in the stash archive into the
                    current project.
                  </p>
                </li>
                <li>
                  <p>
                    <Highlight type="simple-code">git stash drop</Highlight>
                  </p>
                  <p>Deletes the latest stash in the stash archive.</p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">git add .</Highlight>
              </p>
              <p>Stages changes.</p>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">git commit</Highlight>
              </p>
              <p>Creates a commit with staged changes.</p>
              <p>
                One task per commit. Avoid combining multiple tasks into a
                single commit.
              </p>
              <ul>
                <ReferenceButton>
                  <li>
                    <p>
                      <Highlight type="simple-code">
                        git commit --message (-m) &lt;summary&gt; --message (-m)
                        &lt;description&gt;
                      </Highlight>
                    </p>
                    <p>
                      In IDEs, a blank line is required between the summary and
                      the description.
                    </p>
                    <Highlight type="complex-code">
                      {gitCommitMessageCode}
                    </Highlight>
                    <p>
                      <Highlight type="text">&lt;type&gt;</Highlight> can be{" "}
                      <Highlight type="text">feat</Highlight>,{" "}
                      <Highlight type="text">fix</Highlight>,{" "}
                      <Highlight type="text">refactor</Highlight>,{" "}
                      <Highlight type="text">chore</Highlight>,{" "}
                      <Highlight type="text">style</Highlight>,{" "}
                      <Highlight type="text">docs</Highlight>,{" "}
                      <Highlight type="text">test</Highlight>,{" "}
                      <Highlight type="text">build</Highlight>, etc.
                    </p>
                    <p>
                      <Highlight type="text">&lt;summary&gt;</Highlight> should
                      use the imperative mood, start with a lowercase letter,
                      and end without a period.
                    </p>
                  </li>
                </ReferenceButton>
                <li>
                  <p>
                    <Highlight type="simple-code">git commit --amend</Highlight>
                  </p>
                  <p>
                    Adds staged changes to the latest commit and updates its
                    message.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">
                  git revert &lt;commit-id&gt;
                </Highlight>
              </p>
              <p>
                Creates a commit that undoes the changes of the specified
                commit.
              </p>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">
                  git reset &lt;commit-id&gt;
                </Highlight>
              </p>
              <p>
                Deletes commits after the specified commit, keeps the changes
                unstaged, and preserves the specified commit. This has the
                implicit <Highlight type="simple-code">--mixed</Highlight> flag,
                which is the default.
              </p>
              <ul>
                <li>
                  <p>
                    <Highlight type="simple-code">
                      git reset --soft &lt;commit-id&gt;
                    </Highlight>
                  </p>
                  <p>
                    Deletes commits after the specified commit, keeps the
                    changes staged, and preserves the specified commit.
                  </p>
                </li>
                <li>
                  <p>
                    <Highlight type="simple-code">
                      git reset --hard &lt;commit-id&gt;
                    </Highlight>
                  </p>
                  <p>
                    Deletes commits after the specified commit, also deletes the
                    changes, and preserves the specified commit.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">git log</Highlight>
              </p>
              <p>Lists the commit history.</p>
              <ul>
                <li>
                  <p>
                    <Highlight type="simple-code">
                      git log -S &lt;string&gt;
                    </Highlight>
                  </p>
                  <p>
                    Finds commits where the specified string was added or
                    removed.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">git show</Highlight>
              </p>
              <p>Shows the latest commit with its diff.</p>
            </li>
            <hr />
            <li>
              <p>
                <Highlight type="simple-code">git branch</Highlight>
              </p>
              <p>Lists local branches.</p>
              <ul>
                <li>
                  <p>
                    <Highlight type="simple-code">
                      git branch --verbose (-v)
                    </Highlight>
                  </p>
                  <p>Lists local branches verbosely.</p>
                </li>
                <li>
                  <p>
                    <Highlight type="simple-code">
                      git branch --verbose --verbose (-vv)
                    </Highlight>
                  </p>
                  <p>Lists local branches more verbosely.</p>
                </li>
                <li>
                  <p>
                    <Highlight type="simple-code">
                      git branch --all (-a)
                    </Highlight>
                  </p>
                  <p>Lists local branches and remote repository branches.</p>
                </li>
                <li>
                  <p>
                    <Highlight type="simple-code">
                      git branch &lt;branch-name&gt;
                    </Highlight>
                  </p>
                  <p>Creates the specified branch.</p>
                </li>
                <li>
                  <p>
                    <Highlight type="simple-code">
                      git branch --delete (-d) &lt;branch-name&gt;
                    </Highlight>
                  </p>
                  <p>Deletes the specified branch.</p>
                </li>
                <li>
                  <p>
                    <Highlight type="simple-code">
                      git branch --move (-m) &lt;specified-branch-name&gt;
                      &lt;new-branch-name&gt;
                    </Highlight>
                  </p>
                  <p>Renames the specified branch.</p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">git checkout</Highlight>
              </p>
              <p>Shows a brief status of the current branch.</p>
              <ul>
                <li>
                  <p>
                    <Highlight type="simple-code">
                      git checkout &lt;branch-name&gt;
                    </Highlight>
                    ,{" "}
                    <Highlight type="simple-code">
                      git switch &lt;branch-name&gt;
                    </Highlight>
                  </p>
                  <p>Moves from the current branch to the specified branch.</p>
                  <p>
                    Uncommited changes are carried over to the specified branch
                    if there is no conflict.
                  </p>
                </li>
                <li>
                  <p>
                    <Highlight type="simple-code">git checkout -</Highlight>,{" "}
                    <Highlight type="simple-code">git switch -</Highlight>
                  </p>
                  <p>Moves to the previous branch or commit.</p>
                </li>
                <li>
                  <p>
                    <Highlight type="simple-code">
                      git checkout -b &lt;branch-name&gt;
                    </Highlight>
                    ,{" "}
                    <Highlight type="simple-code">
                      git switch --create (-c) &lt;branch-name&gt;
                    </Highlight>
                  </p>
                  <p>Creates the specified branch and moves to it.</p>
                </li>
                <li>
                  <p>
                    <Highlight type="simple-code">
                      git checkout &lt;commit-id&gt;
                    </Highlight>
                    ,{" "}
                    <Highlight type="simple-code">
                      git switch --detach &lt;commit-id&gt;
                    </Highlight>
                  </p>
                  <p>
                    Moves <Highlight type="text">HEAD</Highlight> directly to
                    the specified commit without being attached to any branch.
                  </p>
                </li>
                <li>
                  <p>
                    <Highlight type="simple-code">
                      git checkout -- &lt;file-name&gt;
                    </Highlight>
                    ,{" "}
                    <Highlight type="simple-code">
                      git restore &lt;file-name&gt;
                    </Highlight>
                  </p>
                  <p>Restores the specified file to the last commit state.</p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">
                  git merge &lt;branch-name&gt;
                </Highlight>
              </p>
              <p>Merges the specified branch into the current branch.</p>
              <ul>
                <li>
                  <Highlight type="simple-code">git merge --abort</Highlight>
                </li>
                <li>
                  <Highlight type="simple-code">git merge --continue</Highlight>
                </li>
              </ul>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">
                  git rebase &lt;branch-name&gt;
                </Highlight>
              </p>
              <p>
                Cuts the commits of the current branch that diverge from the
                specified branch and pastes them onto the specified branch to
                create a linear history. After rebasing, the specified branch
                should be fast-forward merged.
              </p>
              <ul>
                <li>
                  <p>
                    <Highlight type="simple-code">
                      git rebase --interactive (-i) HEAD~&lt;number&gt;
                    </Highlight>
                  </p>
                  <p>
                    Goes back to the specified number of commits and modifies
                    them interactively (<Highlight type="text">pick</Highlight>,{" "}
                    <Highlight type="text">edit</Highlight>,{" "}
                    <Highlight type="text">squash</Highlight>,{" "}
                    <Highlight type="text">fixup</Highlight>,{" "}
                    <Highlight type="text">reword</Highlight>,{" "}
                    <Highlight type="text">drop</Highlight>, etc.).
                  </p>
                </li>
                <li>
                  <Highlight type="simple-code">git rebase --abort</Highlight>
                </li>
                <li>
                  <Highlight type="simple-code">
                    git rebase --continue
                  </Highlight>
                </li>
              </ul>
            </li>
            <hr />
            <li>
              <p>
                <Highlight type="simple-code">git remote</Highlight>
              </p>
              <p>Lists remote repository aliases.</p>
            </li>
            <ul>
              <li>
                <p>
                  <Highlight type="simple-code">
                    git remote --verbose (-v)
                  </Highlight>
                </p>
                <p>Lists remote repository aliases and their URLs.</p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">
                    git remote add &lt;remote-repository-alias&gt;
                    &lt;remote-repository-url&gt;
                  </Highlight>
                </p>
                <p>
                  Creates the alias for the remote repository and connects the
                  current project to it.
                </p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">
                    git remote remove (rm) &lt;remote-repository-alias&gt;
                  </Highlight>
                </p>
                <p>
                  Disconnects the current project from the specified remote
                  repository.
                </p>
              </li>
              <li>
                <p>
                  <Highlight type="simple-code">
                    git remote set-url &lt;remote-repository-alias&gt;
                    &lt;remote-repository-url&gt;
                  </Highlight>
                </p>
                <p>Updates the URL of the specified remote repository.</p>
              </li>
            </ul>
            <li>
              <p>
                <Highlight type="simple-code">
                  git push &lt;remote-repository-alias&gt; &lt;branch-name&gt;
                </Highlight>
              </p>
              <p>
                Uploads the local branch to the remote repository branch that
                has the same name as the local branch. If the local and remote
                names are different,{" "}
                <Highlight type="simple-code">&lt;branch-name&gt;</Highlight>{" "}
                will be{" "}
                <Highlight type="simple-code">
                  &lt;local-branch-name&gt;:&lt;remote-repository-branch-name&gt;
                </Highlight>
              </p>
              <ul>
                <li>
                  <p>
                    <Highlight type="simple-code">
                      git push --set-upstream (-u)
                      &lt;remote-repository-alias&gt; &lt;branch-name&gt;
                    </Highlight>
                  </p>
                  <p>
                    Uploads and remembers this connection. Thereafter, you can
                    simply run{" "}
                    <Highlight type="simple-code">git push</Highlight>,{" "}
                    <Highlight type="simple-code">git fetch</Highlight>, or{" "}
                    <Highlight type="simple-code">git pull</Highlight> without
                    arguments.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">
                  git fetch &lt;remote-repository-alias&gt;
                  &lt;remote-branch-name&gt;
                </Highlight>
              </p>
              <p>
                Downloads the changes from the specified remote repository
                branch without merging them.
              </p>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">
                  git pull &lt;remote-repository-alias&gt;
                  &lt;remote-branch-name&gt;
                </Highlight>
              </p>
              <p>
                Downloads the changes from the specified remote repository
                branch and merges them into the current branch.
              </p>
            </li>
          </ul>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Git Hooks</HeadingLinkId>
          <p>
            <Highlight type="text">Git Hooks</Highlight> are located in{" "}
            <Highlight type="text">.git/hooks</Highlight> and must not have a
            file extension.
          </p>
          <p>
            <Highlight type="text">Git Hooks</Highlight> are custom scripts that
            trigger actions whenever a specified event occurs. They are divided
            into client-side hooks and server-side hooks.
          </p>
          <p>
            <Highlight type="text">commit-msg</Highlight> is a client-side hook
            that runs right after the commit message is created, allowing for
            its validation.
            <br />
            The following code creates a custom modal box that checks if the
            commit message contains <Highlight type="text">content</Highlight>.
          </p>
          <Highlight type="complex-code">{gitHookCode}</Highlight>
        </section>
        <section>
          <ReferenceButton>
            <HeadingLinkId headingNumber={2}>GitHub Actions</HeadingLinkId>
          </ReferenceButton>

          <p>
            <Highlight type="text">GitHub Actions</Highlight> is a continuous
            integration and continuous deployment (CI/CD) service.
          </p>
          <p>
            <Highlight type="text">GitHub Actions</Highlight> provides secrets,
            variables, artifacts, and outputs.
          </p>
          <p>
            <Highlight type="text">GitHub Actions</Highlight> consists of
            workflows that are located in{" "}
            <Highlight type="text">.github/workflows</Highlight> with{" "}
            <Highlight type="text">.yml</Highlight>. Workflows are triggered by
            specific events and contain one or more jobs.
          </p>
          <p>
            Jobs run on a runner and contain one or more steps. Jobs run in
            parallel by default but can run sequentially by specifying{" "}
            <Highlight type="simple-code">needs</Highlight>.
          </p>
          <p>
            Steps execute a shell command, a custom action, or a third-party
            action. Steps run in order.
          </p>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Troubleshooting</HeadingLinkId>
          <ul>
            <ReferenceButton>
              <li>
                <p>
                  Korean comments are garbled in{" "}
                  <Highlight type="text">GitHub</Highlight>.
                </p>
              </li>
            </ReferenceButton>
            <ReferenceButton>
              <li>
                <p>
                  The connection between a local repository and{" "}
                  <Highlight type="text">GitHub</Highlight> is lost.
                </p>
              </li>
            </ReferenceButton>
          </ul>
        </section>
      </article>

      <aside>
        <PageNav />
      </aside>
    </main>
  );
}
