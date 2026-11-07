# Motif Git and Release Workflow

## 1. Goals

Keep the initial Alpha baseline identifiable, prevent incomplete work from entering the accepted release branch, and make implementation evidence reviewable. The workflow is `features/*` → `staging` → `main` after the initial baseline commit.

This workflow describes the intended repository process. GitHub protections, CI checks, and deployment settings are not considered configured until verified in the actual accounts and repository.

## 2. Branch model

| Branch       | Role                                                 | Allowed inbound changes                          | Deployment                                                            |
| ------------ | ---------------------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------- |
| `main`       | Accepted Alpha source / production branch            | Initial project baseline, then PR from `staging` | Production only after a deployable product and owner release approval |
| `staging`    | Persistent integration branch                        | PRs from `features/*`                            | Preview only if a deployment provider is configured                   |
| `features/*` | Feature, content, test, fix, and implementation work | Created from current `staging`                   | Optional per-PR Preview; never Production                             |

Use descriptive names such as `features/visual-foundation`, `features/button-adaptation`, `features/component-validation`, `features/website`, `features/documentation`, and `features/blog`.

## 3. Initial Alpha baseline

The first project commit is made after the A0 starter has been initialized and A1 baseline documentation has been aligned with the actual repository. It contains:

- The runnable Next.js starter.
- shadcn configuration and the chosen Sera/Base UI setup.
- Fumadocs initial integration.
- `package.json` and the committed pnpm lockfile.
- The Alpha specification and agent instructions.
- `.gitignore` and `.gitattributes`.
- Necessary repository metadata.

The initial commit contains the starter application and its authoritative documentation. Public homepage, full documentation information architecture, and blog content remain A5 deliverables.

The project name is Motif and its sole initial version identity is Alpha. Maintain one baseline and let commits describe actual development work within it.

## 4. Initial repository procedure

1. Create or open the intended Git repository.
2. Initialize the A0 starter in the repository root (or generate it in a temporary parent and move it into the empty repository without retaining a nested `.git`).
3. Complete the A0 setup and A1 baseline documentation.
4. Inspect `git status`, generated files, lockfile, ignore/attribute behavior, and secrets before staging.
5. Create the initial commit on `main`, for example:

```text
chore: establish Motif initial baseline
```

6. Push `main` and create `staging` from that exact commit.
7. Configure branch protections and required checks where the selected Git host/plan supports them.
8. Start implementation work in `features/*` branches from `staging`.

If the initialization CLI creates a Git repository or initial commit, inspect and preserve useful work. Ensure the final initial baseline commit and history accurately represent the actual repository setup.

## 5. Feature branch lifecycle

For each task:

1. Fetch and update `origin/staging`.
2. Create `features/<descriptive-name>` from `origin/staging`.
3. Implement only the approved scope and active roadmap stage.
4. Run the applicable local gates before requesting integration.
5. Commit and push the feature branch.
6. Open a PR from `features/*` into `staging`. Include scope, relevant design/Composition Brief, changed files, test results, screenshots, and known limitations.
7. Update the feature branch with current `staging` when needed and rerun affected checks.
8. Merge only after required CI checks and review conditions pass.

Local gates depend on the stage. They may include lint, type-check, unit/integration tests, production build, browser checks, accessibility scans, and reviewed visual diffs. Report only checks that were executed, with their actual results.

## 6. Local staging gate

Before a candidate is considered ready for online staging review:

1. Check out the latest `staging` locally and ensure the working tree is clean.
2. Confirm the local commit SHA matches `origin/staging`.
3. Run the integrated checks appropriate to the active stage.
4. Record the exact SHA, environment, commands, and results.
5. If anything fails, fix it in a new `features/*` branch and send it through the same PR process; keep `staging` changes within reviewed PRs.

A deployment may be created automatically when a PR merges into `staging`; its existence does not make it an accepted candidate. Local integration evidence remains required.

## 7. Preview verification

If Vercel or another Preview deployment provider is selected:

1. Identify the Preview deployment corresponding to the exact tested `staging` commit.
2. Confirm deployment status and inspect build logs/metadata.
3. Test the routes, assets, fonts, links, metadata, responsive states, accessibility, and runtime errors that exist at the current stage.
4. Verify Preview environment variables and ensure Production secrets/data are not exposed.
5. Record the Preview URL, exact SHA, test results, defects, and owner disposition.
6. Mark the candidate `READY FOR RELEASE` only after owner acceptance.

Configure the Production domain and release the product only after A5 acceptance.

## 8. Release to main / Production

1. Open a PR from `staging` into `main`.
2. Identify the exact accepted staging commit and link local plus Preview evidence where applicable.
3. Require relevant CI checks, resolved review conversations, and owner release approval.
4. Confirm no unreviewed commits were added after the candidate was accepted. If they were, repeat affected verification.
5. Merge the accepted PR into `main`; use PR review as the normal integration path.
6. If a Production deployment is configured, verify routes, assets, logs, metadata, and domain after deployment.
7. Record release commit, deployment reference, smoke-test evidence, known issues, and rollback plan.

The first Production release occurs only after A5's three publishing surfaces are accepted. A successful starter build is not a Production release milestone.

## 9. Branch protections

### `main`

- PR required for ordinary changes after the initial baseline.
- Release PR expected from `staging`.
- Required checks match actual scripts and tests.
- Owner approval required for release.
- No force-push or deletion.

### `staging`

- PR required; feature work enters through `features/*`.
- Required checks before merge.
- No force-push or deletion.

Verify Git host, repository visibility, plan, and permissions before relying on enforcement. Where source-branch restrictions are unavailable, use a verified CI check or documented review rule, and report the actual enforcement state.

## 10. Merge and history policy

- Use one consistent merge strategy. Squash merge is suitable for focused feature PRs when concise integration history is preferred.
- Keep the staging-to-main release boundary identifiable.
- Never rewrite shared `staging` or `main` history.
- Delete a feature branch only after its PR is merged and evidence is retained. Never delete `staging` or `main`.
- Avoid overlapping PRs that modify shared visual foundations without an agreed integration order.
- Git history records actual project development; it does not create or imply earlier Motif product versions.

## 11. Hotfixes and rollback

A Production defect follows the protected route. Create a narrowly scoped `features/*` branch from the current accepted state, integrate through `staging`, run relevant checks, and release through a PR to `main`. An urgent exception requires explicit owner authorization and a recorded rationale, commit, tests, and follow-up reconciliation. Prefer rollback to a known-good deployment over improvised Production edits.

## 12. Release evidence template

```yaml
release_candidate:
  source_branch: "staging"
  source_commit: ""
  feature_prs: []
  local_staging_checks:
    environment: ""
    commands: []
    results: []
  preview:
    provider: ""
    deployment_url: ""
    commit: ""
    build_status: "NOT CONFIGURED"
    online_checks: []
  owner_disposition: "PENDING"
  production_pr: ""
  production_commit: ""
  production_deployment: "NOT RELEASED"
  post_deploy_smoke: []
  rollback_target: ""
```

## 13. Non-negotiable release rule

No feature branch merges directly into `main`. No untested staging candidate enters `main`. No Production release is accepted without applicable local evidence, Preview evidence when configured, owner approval, and a post-deployment smoke test.
