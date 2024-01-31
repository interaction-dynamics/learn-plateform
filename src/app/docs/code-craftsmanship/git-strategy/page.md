---
title: Git strategy
nextjs:
  metadata:
    title: Git strategy
    description: How to manage your git repository to keep a clean history
---

The git strategy includes a lot of technics around git and versioning.

Since it is not code, this topic is very often neglected by developers. However, it is very important to have a clean git history. It will help you to understand what happened in the past, and to find the origin of a bug. It will also help you to document your codebase using `git blame`.

## Commit message

Writing a right commit message is not easy. It is a mix between art and science. You should keep it short enough to be readable but long enough to be understandable and to give enough context. The good practice is to keep the first line short and to add more details in the body of the commit message.

The commit message can be used to documentate your codebase. It is the first thing that people will see when they use `git blame` to understand why a line of code has been written. Read the section [documentation/git message](../documentation) to learn why it is a good source of documentation.

A good commit message should answer the following questions:

- What has been done?
- Why has it been done?
- How has it been done? if the code is not self-explanatory

The [conventional commits format](https://www.conventionalcommits.org/en/v1.0.0/) is a good practice to follow.

## Merge strategy

Following the previous section, it is important to keep a clean git history. Some git strategies may introduce merge commits that pollute the git history. The `rebase` stragegy doesn't have this issue. It is a good idea to use it. Remember to also squash your temporary commits before merging your branch to keep a clean git history.

Using `rebase` strategy to merge your branches on the main branch will also help you to keep your git history linear. It will be easier to understand what happened in the past. Using `rebase` strategy to sync your branch with the main branch will also ensure you that your branch will always contain an exact copy of the main branch.

## Trunk-based development, git flow, or something else?

There are a lot of different strategies to manage your git repository. The most popular are [trunk-based development](https://trunkbaseddevelopment.com/), [git flow](https://nvie.com/posts/a-successful-git-branching-model/), and [github flow](https://guides.github.com/introduction/flow/). They all have pros and cons. You should choose the one that fits your needs.

Trunk-based development is a good strategy for small teams. It is very simple to understand and to use. It is also a good strategy for open-source projects since it is very easy to contribute to a project using this strategy.

Git flow is a good strategy for large teams. It is more complex to understand and to use. It is also a good strategy for open-source projects since it is very easy to contribute to a project using this strategy. It takes more time to have your code merged on the main branch but it is safer so it matches perfectly the larger organizations.

## Mono-repository

A mono-repository is a git repository that contains multiple projects. It is useful to ensure a dependency synchronization between projects or if projects have dependency between each other. However it can have some drawbacks. It can be difficult to manage the access rights on the repository. It can also be difficult to manage the CI/CD pipeline. It can also be difficult to manage the versioning of the projects.

## Git hooks

Git hooks are scripts that are executed before or after a git command. They can be used to enforce some rules. For example, you can use a git hook to ensure that the commit message follows a specific format. You can also use a git hook to ensure that the code is formatted before committing it.

When a project becomes bigger or if new developers join the team, it can be useful to set up some git hooks to ensure that the best practices are respected before triggering the continuous integration pipeline.

Official git documentation: [https://git-scm.com/docs/githooks](https://git-scm.com/docs/githooks).
