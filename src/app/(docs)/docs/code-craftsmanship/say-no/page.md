---
title: Say No
nextjs:
  metadata:
    title: Say No
    description: Always use linters and formatters in your projects
---

Product team (Product Manager, Product Owner, etc) often wants to push more features in the product.

In addition of the technical debt included with the new features, the team might loose focus on the product vision with multiple unrelated features.

As a developer, you have sometimes the duty to say no to the product team.

---

## Explain the technical debt

The technical debt is the cost of the future work that you will have to do to fix the code that you are writing today. Sometimes a new feature is some different to the existing codebase that it will introduce a lot of technical debt. It is important to explain the technical debt to the product team so they can balance the value of the feature with the cost of the technical debt.

Depending on the experience of the product team, they might not be aware of the technical debt. They might also be aware of it but don't consider it as a priority.

{% callout %}
Remember that it will your role to fix all the issues coming from this technical debt. So it is important for you to choose to fix it now or later. Later might mean in the middle of the night or during the weekend if the issue is critical.
{% /callout %}

Up to you to explain the technical debt and the cost of it. You can also explain the cost of the technical debt in terms of money. Another solution is to include the technical debt in the feature estimation. It will reduce the team velocity but you will be sure that the technical debt will be managed.

Our suggestion is to always include the technical debt in the feature estimation. It also follows the [boy scout rule](/docs/code-craftsmanship/clean-code-rules#Boy%20scout%20rule). Having dedicated time to fix the technical debt is a good way to keep the codebase healthy but it is really rare in the organizations.

---

## Product Vision

As a front-end developer, you are often the last person to see the feature before it is released. So you are the last person to say no. Don't hesitate to test the feature and to raise your point if you think that the feature is not aligned with the product vision.

The product vision is the long term goal of the product. It is the reason why the users are using the product.
Sometimes, the issues are also coming from the interactions or the flow. These two elements are harder to detect on static mockups. So designers and product team might not be aware of it. Raise your point in the next refinement meeting.

With some experience, you will learn to anticipate these problems by imagining the feature interaction and the flow based on the mockup. You will be able to say no before the feature is implemented.

It is important to say no as soon as possible. The earlier you say no, the easier it will be. It is also important to say no with arguments. Saying no without arguments will not help the product team to understand the problem. Also be open to discussion. You might be wrong and the product team might be right. Keep the discussion open and try to find a solution together.
