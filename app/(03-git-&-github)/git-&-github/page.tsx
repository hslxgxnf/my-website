import type { Metadata } from "next";

import styles from "@/styles/main-description-&-list/page.module.scss";
import { reference, code } from "./data";
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
            <HeadingLinkId headingNumber={1} publishedAt="2026-05-11">
              Git & GitHub
            </HeadingLinkId>
          </ReferenceButton>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Files</HeadingLinkId>
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
                  <p>Lists all stashes.</p>
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
              <p>Stages all changes.</p>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">git commit</Highlight>
              </p>
              <p>Creates a new commit with all staged changes.</p>
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
                    <Highlight type="complex-code">{code}</Highlight>
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
              </ul>
            </li>
            <li>
              <p>
                <Highlight type="simple-code">
                  git revert &lt;commit-id&gt;
                </Highlight>
              </p>
              <p>
                Creates a new commit that undoes the changes of the specified
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
                Deletes all commits after the specified commit, keeps the
                changes unstaged, and preserves the specified commit. This has
                the implicit <Highlight type="simple-code">--mixed</Highlight>{" "}
                flag, which is the default.
              </p>
              <ul>
                <li>
                  <p>
                    <Highlight type="simple-code">
                      git reset --soft &lt;commit-id&gt;
                    </Highlight>
                  </p>
                  <p>
                    Deletes all commits after the specified commit, keeps the
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
                    Deletes all commits after the specified commit, also deletes
                    the changes, and preserves the specified commit.
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
              <p>Lists all local branches.</p>
              <ul>
                <li>
                  <p>
                    <Highlight type="simple-code">
                      git branch --verbose (-v)
                    </Highlight>
                  </p>
                  <p>Lists all local branches verbosely.</p>
                </li>
                <li>
                  <p>
                    <Highlight type="simple-code">
                      git branch --verbose --verbose (-vv)
                    </Highlight>
                  </p>
                  <p>Lists all local branches more verbosely.</p>
                </li>
                <li>
                  <p>
                    <Highlight type="simple-code">
                      git branch --all (-a)
                    </Highlight>
                  </p>
                  <p>
                    Lists all local branches and remote repository branches.
                  </p>
                </li>
                <li>
                  <p>
                    <Highlight type="simple-code">
                      git branch &lt;branch-name&gt;
                    </Highlight>
                  </p>
                  <p>Creates the new branch.</p>
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
                  <p>Creates the new branch and moves to it.</p>
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
                    Moves the <Highlight type="text">HEAD</Highlight> directly
                    to the specified commit without being attached to any
                    branch.
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
                  <p>
                    <Highlight type="simple-code">git merge --abort</Highlight>
                  </p>
                  <p>
                    Aborts the paused merge process due to conflicts and
                    restores the current branch to its pre-merge state.
                  </p>
                </li>
                <li>
                  <p>
                    <Highlight type="simple-code">
                      git merge --continue
                    </Highlight>
                  </p>
                  <p>
                    Resumes the paused merge process after resolving conflicts
                    and staging the resolved changes.
                  </p>
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
                    <Highlight type="simple-code">git rebase --abort</Highlight>
                  </p>
                  <p>
                    Aborts the paused rebase process due to conflicts and
                    restores the current branch to its pre-rebase state.
                  </p>
                </li>
                <li>
                  <p>
                    <Highlight type="simple-code">
                      git rebase --continue
                    </Highlight>
                  </p>
                  <p>
                    Resumes the paused rebase process after resolving conflicts
                    and staging the resolved changes.
                  </p>
                </li>
              </ul>
            </li>
            <hr />
            <li>
              <p>
                <Highlight type="simple-code">git remote</Highlight>
              </p>
              <p>Lists all remote repository aliases.</p>
            </li>
            <ul>
              <li>
                <p>
                  <Highlight type="simple-code">
                    git remote --verbose (-v)
                  </Highlight>
                </p>
                <p>Lists all remote repository aliases and their URLs.</p>
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
          <ReferenceButton>
            <HeadingLinkId headingNumber={2}>GitHub Actions</HeadingLinkId>
          </ReferenceButton>
          <ul>
            <li>
              <p>Workflows</p>
              <ul>
                <li>
                  <p>
                    <Highlight type="simple-code">name</Highlight>
                  </p>
                  <p>Are attached to a GitHub repository.</p>
                </li>
                <li>
                  <p>
                    <Highlight type="simple-code">on</Highlight>
                  </p>
                  <p>Are triggered upon events.</p>
                </li>
                <li>
                  <p>
                    <Highlight type="simple-code">jobs</Highlight>
                  </p>
                  <p>Contain one or more jobs.</p>
                </li>
              </ul>
            </li>
            <li>
              <p>Jobs</p>
              <ul>
                <li>
                  <p>
                    <Highlight type="simple-code">&lt;job-name&gt;</Highlight>
                  </p>
                </li>
                <li>
                  <p>
                    <Highlight type="simple-code">needs</Highlight>
                  </p>
                  <p>
                    Run sequentially based on implicit success conditions,
                    overriding the default parallel execution.
                  </p>
                </li>
                <li>
                  <p>
                    <Highlight type="simple-code">if</Highlight>
                  </p>
                  <p>Run conditionally.</p>
                </li>
                <li>
                  <p>
                    <Highlight type="simple-code">runs-on</Highlight>
                  </p>
                  <p>Define a runner.</p>
                </li>
                <li>
                  <p>
                    <Highlight type="simple-code">steps</Highlight>
                  </p>
                  <p>Contain one or more steps.</p>
                </li>
              </ul>
            </li>
            <li>
              <p>Steps</p>
              <ul>
                <li>
                  <p>Run in order.</p>
                </li>
                <li>
                  <p>
                    <Highlight type="simple-code">if</Highlight>
                  </p>
                  <p>Run conditionally.</p>
                </li>
                <li>
                  <p>
                    <Highlight type="simple-code">name</Highlight>{" "}
                    <Highlight type="simple-code">run</Highlight>{" "}
                    <Highlight type="simple-code">uses</Highlight>{" "}
                    <Highlight type="simple-code">with</Highlight>
                  </p>
                  <p>
                    Execute a shell command, a custom action, or a third-party
                    action.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <HeadingLinkId headingNumber={2}>Errors</HeadingLinkId>
          <ul>
            <ReferenceButton>
              <li>Korean comments are broken in GitHub.</li>
            </ReferenceButton>
            <ReferenceButton>
              <li>
                The connection between a local repository and GitHub is broken.
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
