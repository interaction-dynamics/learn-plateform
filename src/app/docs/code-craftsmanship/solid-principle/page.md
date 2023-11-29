---
title: SOLID principle
nextjs:
  metadata:
    title: SOLID principle
    description: In software engineering, SOLID is a mnemonic acronym for five design principles intended to make object-oriented designs more understandable, flexible, and maintainable.
---

SOLID stands for:

- **S:** Single-responsiblity Principle
- **O:** Open-closed Principle
- **L:** Liskov Substitution Principle
- **I:** Interface Segregation Principle
- **D:** Dependency Inversion Principle

These are a lot of terms to remember, but the concepts are simple and easy to understand. The best way to learn them is to see them in action.

---

## Single-responsiblity Principle

The single-responsibility principle (SRP) states that every module, class or function should have responsibility over a single part of the functionality provided by the software, and that responsibility should be entirely encapsulated by the class, module or function.

---

## Open-closed Principle

The open–closed principle (OCP) states that every module, cassl, or function should be open for extension, but closed for modification. That means that you should be able to extend a class's behavior, without modifying it. It is very important to make the distinction between extension and modification.

Extension means adding new functionality so adding new code. Modification means changing the existing functionality ie. changing the existing code.

Modification are dangerous because you can introduce bugs in the existing code. You can also break other parts of the code that depend on the existing code. Extension are often safer and more scalable.

Some design paradigms are perfect to apply open-close principle like the decorator pattern or the composition pattern.

Read this article about [Keeping React components maintainable with Open-closed Principle](https://medium.com/interaction-dynamics/keep-your-react-components-maintainable-with-solid-react-composition-codecraftsmanship-4-2969834e9ffa).

---

## Liskov Substitution Principle

{% workinprogress %}
{% /workinprogress %}

<!-- --- -->

<!--
## Interface Segregation Principle

IN PROGRESS

---

## Dependency Inversion Principle

IN PROGRESS -->
