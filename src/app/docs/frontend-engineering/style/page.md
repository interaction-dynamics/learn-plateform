---
title: Style
nextjs:
  metadata:
    title: Style
    description: Quidem magni aut exercitationem maxime rerum eos.
---

The style is a very important part of the frontend engineering. It is the first thing that the user sees and may be the reason why the user will stay or not on your website.

{% callout %}
This section is not about the design of your website but about the way you will write the style of your website.
{% /callout %}

Differents technologies exists but you should always use the same technology for the same project. It is not a good idea to mix different technologies in the same project.

They are also key concepts that you should know to write a good style:

- avoid global style: it doesn't scale
- avoid style duplication: it is hard to maintain
- avoid style conflicts: it is hard to debug

A solution that will not be covered in this page is the inline style. It is a very bad practice and should be avoided.

---

## CSS

CSS is the most popular technology to write style. It is a very simple technology that is easy to learn.

It had some limitations in the past but most of them are now covered like:

- [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [CSS nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Nesting)

```css
--main-bg-color: blue;

.dark {
  --main-bg-color: brown;
}

.one {
  .two {
    background-color: var(--main-bg-color);
  }
}
```

Some limitations remain like themes and prefixing.
For example, it is hard to maintain more than 2-3 themes in the same project. Specifically if they are dynamic like for example, a theme customized by the user.
Using a preprocessors like [SASS](https://sass-lang.com/) or [LESS](http://lesscss.org/) can help to solve some of these limitations.

It is also strongly suggested to use css modules to avoid style conflicts. Check how your framework handles css modules.

{% callout %}
However, it is very important as a front-end developer to know how to write CSS. It is the base of all the other technologies. And you must be able to style user interfaces that are pixel-perfect matching the design provided by the designers.
{% /callout %}

---

## SASS (or SCSS)

SASS is a CSS preprocessor. It is a superset of CSS. It means that you can write CSS in a SASS file and it will work.

It doesn't solve all the limitations of CSS but it solves some of them like: prefixing. It also gives more compatibility to ther features like nesting and variables that may not be supported by all the old browsers.

```css
@mixin button-base() {
  @include typography(button);

  display: inline-flex;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    color: $mdc-button-disabled-ink-color;
  }
}

.primaryButton {
  @include button-base();

  background-color: $mdc-theme-primary;
}
```

The problem with CSS and SASS is that it requires a dedicated files most of the time (except for vue.js). It forces the developers to switch between the HTML and the CSS files. It reduces the productivity and increase the source of bugs.

---

## Tailwind

Tailwind is a CSS framework. It is a very different approach than SASS. It doesn't provide any component but only utility classes.

It solves the problem of the CSS and SASS files. You don't need to switch between the HTML and the CSS files. You can write the style directly in the HTML file. It increases the productivity and reduces the source of bugs.

But you don't have the same flexibility than with CSS and SASS. You can't do everything you want. You are limited to the utility classes provided by the framework.

{% callout %}
Tailwind gives the opportunity to create your own utility classes and even to use arbitrary values. But it is not very scalable so it should be used with caution.
{% /callout %}

Tailwind doesn't provide variables so [duplication might happen](https://tailwindcss.com/docs/reusing-styles). It is recommended to use Tailwind in combination with a component architecture to create very reusable components to avoid the duplication.

```html
<figure class="rounded-xl bg-slate-100 p-8 dark:bg-slate-800">
  <img class="mx-auto h-24 w-24 rounded-full" src="/sarah-dayan.jpg" alt="" />
</figure>
```

Other similar libraries like [bootstrap](https://getbootstrap.com/) are also very popular. So far Tailwind offers the best customization, performances and ecosystem.

---

## CSS-in-JS

CSS-in-JS is a very different approach than CSS, SASS and Tailwind. You write your style directly in your JavaScript files.

Differents libraries exists like [styled-components](https://styled-components.com/) or [emotion](https://emotion.sh/). They are very similar and solve the same problems.

They all provide different syntaxes to write the style but our favorite is the styled components with css since it is oriented to work with components, easier to learn and faster to import style from mockups software like Figma.

```jsx
const Button = styled('button')(
  ({ margin, theme }) => `
  border: 0;
  padding: 5px 10px;
  display: inline-block;
  background-color: ${theme.colors.primary};
`,
)
```
