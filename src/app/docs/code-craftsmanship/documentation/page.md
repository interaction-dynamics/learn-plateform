---
title: Documentation
nextjs:
  metadata:
    title: Documentation
    description: How to manage your git repository to keep a clean history
---

Even if code is **specification** and should be self-explanatory, it is sometimes useful to write some documentation. It can be useful to explain the architecture of your project, how to use a library or contribute to your project.

---

## In code

Documentation in code should be reduced to strict minimum since it often becomes outdated. Having to describe each function and each class is a sign of code not being self-explanatory. However, it maybe useful to add few lines to explain a hack or a workaround.

**TODO** should be considered as code smell because they often tend to stay in the code for a long time and grow in number. A good idea is to add a condition to the TODO comment to give more details.

You can use the eslint rule [expiring-todo-comments](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/expiring-todo-comments.md) to enforce expiration date on TODO comments or link to a ticket in your issue tracker.

However, if your code is for a library or a large open-source project, it might be useful to add some documentation in the code. In this case, you can use [jsdoc](https://jsdoc.app/) to document your code.

---

## Commit messages

Commit messages are the first documentation of your project. They should be as clear as possible. They should explain what has been done and why. If developers used Pull Request/Merge requests, the number should be included in the commit message. Same thing about the ticket number. It will give a lot of context for a future reader of the code.

In comparison of the other kind of documentation, they are, by design, always up to date. Used with `git blame`, they can be very useful to understand why a line of code has been written.

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

---

## CONTRIBUTING

A CONTRIBUTING file is often neglected but it is very useful to explain how to contribute to your project. It will help you to avoid answering the same questions again and again.
Don't hesitate to be exhaustive and to explain how to run the tests, how to build the project, how to deploy it, how to write a commit message, how to write a pull request, etc. Potential contributors should take enough time to read this file before contributing to your project.

---

## Storybook

If you are working on large application with multiple data dependencies, it can be useful to use Storybook to test the user interface of your component in an isolated environment. [Storybook](https://storybook.js.org/) is a tool in this situation.
