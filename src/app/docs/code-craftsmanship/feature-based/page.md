---
title: Feature-based organization
nextjs:
  metadata:
    title: Feature-based organization
    description: Some rules inspired by the book Clean Code
---

Projects should be organized by features. It will help you to keep your codebase clean and easy to maintain.

The best way to explain is to show you an example. Let's say you have a project with a login page and a dashboard page.

Most of the projects would be organized like this:

```bash
src/
├── components/
│   ├── DashboardPage.tsx
│   └── LoginPage.tsx
├── hooks/
├── utils/
│   └── services/
│       ├── authentication.ts
│       └── http.ts
└── state/
    ├── users.ts
    └── data.ts
```

The problem with this kind of architecture based on layers is that it is hard to find the code related to a feature. For example, if you want to find the code related to the login page, you have to search in the `components`, `hooks`, `utils` and `state` folders. It makes it harder to debug and to remove a feature.

A better way to organize your project is to group the code by feature. For example, the login page will be in the `login` folder and the dashboard page in the `dashboard` folder.

If you want, you can also follow an hybrid approach and group the code by feature and by layer. For example, you can have a `login` folder with a `components`, `hooks`, `utils` and `state` folders inside. You can also keep some root folders for the code that is shared between features.

```bash
src/
├── app/
├── features/
│   ├── dashboard/
│   │   ├── components/
│   │   │   └── DashboardPage.tsx
│   │   ├── services/
│   │   │   └── http.ts
│   │   └── state/
│   │       └── data.ts
│   └── authentication/
│       ├── components/
│       │   └── LoginPage.tsx
│       ├── services/
│       │   └── authentication.ts
│       └── state/
│           └── users.ts
├── utils
└── state
```

With such an architecture, you will be able to easier track the code related to a feature. It will faster to debug when you will find a bug. I will also be faster when you will remove a feature.

[//]: https://tree.nathanfriend.io/?s=(%27options!(%27fancy0~fullPath!false~trailingSlash0~rootDot0)~4(%274%27src3component5Dashboard2-Login2hooks3util5service5-authentication*--http*state3*%27)~version!%271%27)*%5Cn--%20%200!true2Page.tsx*3%2F*4source!5s*-%0154320-*

Read a nice article about [Layer vs Feature Architecture](https://dev.to/smotastic/layer-vs-feature-architecture-3cko).
