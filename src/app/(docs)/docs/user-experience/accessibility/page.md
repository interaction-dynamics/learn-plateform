---
title: Accessibility
nextjs:
  metadata:
    title: Accessibility
    description: Always use linters and formatters in your projects
---

Everybody should be able to use the internet and your website. You must make your website accessible, including to people with disability.

> Depending on the size of your business, it might even be mandatory by law to have your website accessible and you might be fined if it is not the case.

Accessibility on the web is well specified with norms [WCAG 2.1](https://www.w3.org/TR/WCAG21/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/), and the working draft of [WCAG 3.0](https://www.w3.org/TR/wcag-3.0/), as of February 2024.

There are a lot of criteria to respect. So to not be overwhelmed, start small and improve the coverage step by step from levels A (minimum) to AA and AAA (highest).

The 3 general aspects you must be careful about are:

- colors 🎨 : use colors with enough contrast to distinguish the components of your page
- descriptions 💬: you need to add alternative text to images, label for icon buttons and inputs
- interactions: all elements should be accessible and interactive with keyboards

## Tools for Accessibility

A lot of tools exist:

- lighthouse It will help you to detect basic accessibility issues directly in Chrome
- check the contrast between your background and text colors: [https://colourcontrast.cc](https://colourcontrast.cc)
- run Playwright accessibility testing: [https://playwright.dev/docs/accessibility-testing](https://playwright.dev/docs/accessibility-testing) (and even better: run it in your CI)
- install a screen reader browser extension to be sure that all your pages are readable by a screen reader
- use storybook accessibility add-ons to verify if your components respect accessibility rules

{% figure alt="Accessibility add-on in storybook" src="/assets/storybook-accessibility.webp" caption="" /%}

## Empathy

The first step is to put yourself in the shoes of a person with a disability. You can use tools to simulate the experience of a person with a disability:

- use storybook accessibility add-ons to simulate color blindness, screen reader, etc.
- use the website: [https://www.whocanuse.com/](https://www.whocanuse.com/)

Notice that these tools have a lot of limitations:

- they simulate only one disability at a time but in reality, a person might have multiple disabilities
- they simulate only visual disabilities but there are also motor disabilities and cognitive disabilities

So the best way to ensure that your website is accessible is to test it with real people with disabilities. You can use platforms like [https://www.userlytics.com/](https://www.userlytics.com/) to find testers.
