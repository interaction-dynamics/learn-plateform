---
title: Linters & Formatters
nextjs:
  metadata:
    title: Linters & Formatters
    description: Always use linters and formatters in your projects
---

Javascript and Typescript are very flexible languages, and that's a good thing. But it also means that you can write code in many different ways, and that's a bad thing. It's bad because it makes it harder to read and understand code written by other people, and even code written by yourself a few months ago.

You need tool to help you write code in a consistent way, and that's where linters and formatters come in.

---

## Linters

Linters are there to detect the most common mistakes in your code. It can be warn you about a variable that is never used, or a function that is too complex.

We strongly suggest to use [ESLint](https://eslint.org/) for Javascript and Typescript.

Depending on the size of the project, you can use a different set of rules. Bigger the project is, more strict the rules should be. It also depends on the team, and how much they are used to write clean code. For very small projects, you can even skip a linter.

---

## Formatters

Formatters are there to make sure that your code is formatted in a consistent way. It can be the indentation, the spacing, the quotes, etc. As soons as multiple developers work on the same project, it's important to set up a formatter.

We strongly suggest to use [Prettier](https://prettier.io/) for Javascript and Typescript.

{% callout %}

Some developers try to use linters to enforce formatting, but it's not a good idea. Linters are here to detect mistakes, not to format code. It's not their job, and they are not good at it. In order to have a consistent formatting with a linter, you need to add a lot of rules, which takes time before having a good result.

{% /callout %}

If you use a formatter, we suggest to disable all formatting rules in your linter. It will make your linter faster, and it will avoid conflicts between the two tools. For [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/), we suggest the module [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier).
