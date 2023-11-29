---
title: Micro-Services
nextjs:
  metadata:
    title: Micro-Services
    description: Micro-Services also exist in the Frontend.
---

Micro-services are not only a backend thing. They also exist in the frontend and are often called micro-frontends.

They offer the same benefits as in the backend:

- scalability
- performances
- isolation

In the frontend, you have mostly two way to split the user interfaces in micro-services:

- by component
- by page

---

## By component

You can split your user interface in micro-services by component. Each component is an endpoint of one of the micro-services.

The modern way to implement this architecture is the combo of the webpack plugin [module-federation](https://webpack.js.org/concepts/module-federation/) and [react lazy](https://react.dev/reference/react/lazy).

After defining the components and exposing them, you can import them in other micro-services.

```ts
import { lazy } from 'react'

const Component = lazy(async () => await import('micro-service-name/Component'))

export default function NewComponent() {
  return (
    <div>
      <Component />
    </div>
  )
}
```

It helps to avoid building the same component in each micro-service. It saves time and space.

With this approach, you can also deploy each service independently. It helps to reduce the risk of breaking the whole application when you deploy a new feature.

You can also use [next.js dynamic import](https://nextjs.org/docs/advanced-features/dynamic-import) if you use next.js

---

## By page

A second approach is to split your user interface in micro-services by page. It is less generic but remains relevant for small to medium apps since it is very easy to set up and help to maintain performances. It is also a good way to start with micro-services.

You can just use [react lazy](https://react.dev/reference/react/lazy) since pages are components in react.

```ts
import { lazy } from 'react'

const LandingRoute = lazy(async () => await import('./LandingRoute'))

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/landing' element={<LandingRoute />} />
      </Routes>
    </HashRouter>
  )
}
```

Another approach is to use [nextjs](https://nextjs.org/) with the [pages](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts).
