---
title: KISS principle
nextjs:
  metadata:
    title: KISS principle
    description: KISS, an acronym for "Keep it simple, stupid!", is a design principle first noted by the U.S. Navy in 1960
---

KISS is an acronym for **"Keep it simple, stupid!"**. This principle is also known as Occam's razor, which states that the simplest solution is usually the best one.

Very often, developers who studied computer engineering tend to over-engineer their code. They try to make it as generic as possible to be able to reuse it in many different contexts. But this is not always a good idea.

Sometimes, it is better to write a simple code that works for a specific context. And if you need to reuse it in another context, you can refactor it to make it more generic.

## Why simplicity is often better?

In a modern context, objectives are often changing. It is very difficult to predict what will be the future needs of a project.
There is high probability that the code you write today will be obsolete in a few months or years. So you might spend a lot of time writing a generic code that will never be used. Or even worst, you will write code that won't match the future needs of the project and you will have a lot of technical debts.

Also having more code means more bugs and more maintenance.

So, it is better to write a simple code that works for the current needs.

## How to keep it simple?

TDD is a good way to keep it simple.

## Waste of time?

The KISS principle is often considered as a waste of time by software architects. They think we can optimize by going directly to the generic solution. But in reality, it is often the opposite. The generic solution is often more complex and more difficult to maintain. So it is more expensive in the long term.

An alternative is to keep the code simple but prepare it so it is easy to extend later if needed.

There are several variants of the KISS principle:

- Steve Jobs's "~~Simplify~~, ~~Simplify~~, Simplify", which simplified Henry David Thoreau's quote "Simplify, simplify, simplify." for emphasis.
