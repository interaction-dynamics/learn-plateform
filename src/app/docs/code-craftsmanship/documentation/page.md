---
title: Documentation
nextjs:
  metadata:
    title: Documentation
    description: How to manage your git repository to keep a clean history
---

Even if code is **specification** and should be self-explanatory, it is sometimes useful to write some documentation. It can be useful to explain the architecture of your project, how to use a library or contribute to your project.

---

## Comments

Documentation as commented should be reduced to strict minimum since it often becomes outdated. Having to describe each function and each class is a sign of code not being self-explanatory. However, it maybe useful to add few lines to explain a hack or a workaround.

However, if your code is for a library or a large open-source project, it might be useful to add some documentation in the code. In this case, you can use [jsdoc](https://jsdoc.app/) to document your code.

**TODO** should be considered as code smell because they often tend to stay in the code for a long time and grow in number. A good idea is to add a condition to the TODO comment to give more details.

You can use the eslint rule [expiring-todo-comments](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/expiring-todo-comments.md) to enforce expiration date on TODO comments or link to a ticket in your issue tracker.

---

## Documentation by code

The best way to document your code is to write clean code. Clean code is self-explanatory. It is a good idea to use meaningful names for your variables, functions, classes, etc. It is also a good idea to write small functions and small classes. It will make your code easier to understand.

The best way to explain that is to show an example:

```typescript
// not self explanatory
const time = date.getTime() - new Date().getTime()

if (time > 0) {
  // do something
}

// self explanatory

const isDatePassed = (date: Date): boolean => {
  const currentTime = new Date().getTime()
  return date.getTime() - currentTime > 0
}

if (isDatePassed(date)) {
  // do something
}
```

Creating dedicated function (even if used only once) is a good way to document your code. It will give a name to a piece of code and make it easier to understand.

---

## Commit messages

Commit messages are one of first documentation of your project. Used with `git blame` (with a IDE extension), they document each line of the code of your projects.

{% figure alt="git blame" src="/assets/git-blame.png" caption="" /%}

In comparison of the other kind of documentation, they are, by design, always up to date since every time you change the line, the commit message of the line changes. It is also a smart to use them to document your codebase since they automatically contain the author, the date of the change, all the changes made in the commit, etc. Sometimes, they are even linked to a pull request or a ticket.

They should be as clear as possible. They should explain what has been done and why. They should be linked to a Pull/Merge request or a ticket. It will give a lot of context for a future reader of the code.

The [conventional commits format](https://www.conventionalcommits.org/en/v1.0.0/) is a good practice to follow.

Commit messages with a strong convention can be used to generate a CHANGELOG file. It is a good way to keep your CHANGELOG up to date.

---

## README

A README file should be present at the root of your project. It should contain the following information:

- how to install the project
- how to run the project
- how to contribute to the project
- the license of the project

Try to keep the README as short as possible. If you need to add more information, you can create a `docs` folder and add more files inside. You can also add a link to the CONTRIBUTING.md file.

{% callout %}
Remember that most of the git repository hosting services will display the README file on the home page of your repository. So, it is the first thing that people will see when they visit your repository. It is a good idea to make it as attractive as possible. Use markdown to add some images, links, etc.
{% /callout %}

You can generate a basic README file with this tool: [contributing-generator](https://github.com/friedrith/contributing-generator).

---

## CONTRIBUTING

A CONTRIBUTING file is often neglected but it is very useful to explain how to contribute to your project. It will help you to avoid answering the same questions again and again.
Don't hesitate to be exhaustive and to explain how to run the tests, how to build the project, how to deploy it, how to write a commit message, how to write a pull request, etc. Potential contributors should take enough time to read this file before contributing to your project.

The good strategy is to keep the README file as short as possible to avoid scaring people who just onboarded on your project and to add more of the technical details in the CONTRIBUTING file.

You can generate a basic CONTRIBUTING file with this tool: [contributing-generator](https://github.com/friedrith/contributing-generator).

## Templates

If you are working on a large project with multiple contributors, it can be useful to use templates for your issues and pull requests. It will help contributors to provide the right information and to follow the right process. You can create templates for issues, pull requests, and even for the pull request review.

You can generate a Pull Request template for github with this tool: [contributing-generator](https://github.com/friedrith/contributing-generator).

---

## Storybook

If you are working on large application with multiple data dependencies, it can be useful to use Storybook to test the user interface of your component in an isolated environment. [Storybook](https://storybook.js.org/) is a tool in this situation.
