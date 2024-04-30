---
title: KISS principle
nextjs:
  metadata:
    title: KISS principle
    description: KISS, an acronym for "Keep it simple, stupid!", is a design principle first noted by the U.S. Navy in 1960
---

KISS is an acronym for **"Keep it simple, stupid!"**. In the development, it also exists under another form: [YANGI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it) (You Aren't Gonna Need It) and is a principle which arose from extreme programming (XP).

Very often, developers tend to over-engineer their code. From the beginning, they try to make it as generic as possible to be able to reuse it in many different contexts. But this is not always a good idea.

Sometimes, it is better to write a simple code that works for a specific context. And if you need to reuse it in another context, you can refactor it to make it more generic at this time.

KISS principle fits more agile practices.

## Why simplicity is often better?

In a modern context, objectives are often changing. It is very difficult to predict what will be the future needs of a project.
There is high probability that the code you write today will be obsolete in a few months or years. So you might spend a lot of time writing a generic code that will never be used. Or even worst, you will write code that won't match the future needs of the project and you will have a lot of technical debts.

Also having more code means more bugs and more maintenance.

So, it is better to write a simple code that works for the current needs.

## Waste of time?

The KISS principle is often considered as a waste of time by software architects. They think we can optimize by going directly to the generic solution. But in reality, it is often the opposite. The generic solution is often more complex and more difficult to maintain. So it is more expensive in the long term.

By writing code that is stupidly simple, developer will also understand that the code will have to be updated in the future. So they will be more careful about the code they write and will make it easy to update to unknown future needs.

In the opposite, if they write complex architecture, they will orient their code to the current and known future needs but it will be more likely not easy to update to unknown future needs.

It also has benefits in the long-term since with the KISS principle, you will keep the same mindset years after years and your code quality will remain the same.
With designed architecture, your code quality might be good at the beginning when you have the product vision in mind. But with time, your product will evolve and surpass the initial product vision and since you won't have the same iterative and perpertual mindset, your code quality will decrease.

## How to keep it simple?

Few tips to keep it simple:

- Write code using TDD (Test Driven Development). You write the tests first and then the code. And you code only things that are needed to make the tests pass.
- Refactor your code often. If you see that you need to add a new feature, refactor your code to make it easy to add this feature.
- Write your code in a way that it is easy to extend later if needed. It requires good skills since making code extendable is not always obvious.

## Compromise

Depending on the context, you might have enough visibility about the future requirements. In this case, you can write more generic code. But force yourself to write the code matching the current needs and prepare just some parts of the code for the future and don't prepare everything. You will be able to keep the mindset of the KISS principle.

Because even if you have a good visibility about the future needs, some new requirements might come and won't fit your perfect architecture. So you will have to refactor your code anyway.
