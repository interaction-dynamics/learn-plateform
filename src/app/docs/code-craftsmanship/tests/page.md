---
title: Tests
nextjs:
  metadata:
    title: Tests
    description: Tests are crucial for the development of a software project. They are the first line of defense against bugs and regressions.
---

Implementing features is only one part of the development process. The other part is making sure that the features work as expected.
This is where tests come in.

Tests are crucial for the development of a software project for multiple reasons:

- avoid bugs and regressions
- help to refactor the codebase
- document the codebase

## Test coverage

With a good test coverage, your velocity will be higher. You will be more confident when adding more features or refactoring existing code because you will have less chance to introduce undetected bugs and regressions. You will also be able to refactor your codebase without introducing bugs.

A lot of tools exist to measure the test coverage of your codebase:

- [Istanbul](https://istanbul.js.org/)
- [Jest](https://jestjs.io/)
- [Sonarcloud](https://sonarcloud.io/)

Some of them are integrated into your CI/CD pipeline and will fail the build if the test coverage is not high enough. They can fail if the global test coverage is below a threshold or if the test coverage of any new file is below a threshold. This is a good way to enforce a good test coverage.

It is also important to check the different sections of the coverage reports like **branch**, **function**, **line** and **statement** coverage. A high statement coverage does not mean that the codebase is well tested. You also need to have a high branch coverage. A high branch coverage means that you have tested all the different paths of your codebase.

```bash
----------------------------|---------|----------|---------|---------|-------------------
File                        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------------------------|---------|----------|---------|---------|-------------------
All files                   |   98.78 |    89.47 |     100 |   98.68 |
 __test__                   |   85.71 |       50 |     100 |   85.71 |
  unlogger.js               |   85.71 |       50 |     100 |   85.71 | 7
 linux/scan                 |     100 |    83.33 |     100 |     100 |
  command.js                |     100 |      100 |     100 |     100 |
  parser.js                 |     100 |       75 |     100 |     100 | 43
 macOS/connect              |     100 |      100 |     100 |     100 |
  command.js                |     100 |      100 |     100 |     100 |
 macOS/current-connections  |     100 |      100 |     100 |     100 |
  command.js                |     100 |      100 |     100 |     100 |
  parser.js                 |     100 |      100 |     100 |     100 |
----------------------------|---------|----------|---------|---------|-------------------
```

## Pyramid of tests

There are different types of tests that you can use to test your codebase. The most common types of tests are:

- unit tests
- integration tests
- end-to-end tests

In the ideal world, only end-to-end tests would be enough to test your codebase. But in the real world, it is not possible to have a good test coverage with only end-to-end tests. They are slow to run, not always stable, and they are hard to maintain.

The most common way to test your codebase is to use a mix of different types of tests. The most common way to mix them is to use the pyramid of tests.

{% 690 alt="pyramid" src="/assets/pyramid.jpg" caption="Pyramid of tests" /%}

![Pyramid](/assets/pyramid.jpg)

## AAA pattern
