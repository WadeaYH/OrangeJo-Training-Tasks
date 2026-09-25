# JS Restaurant Task (Orange Training)

Simple Restaurant Ordering System built with HTML, CSS, and JavaScript — Day 1 task, Orange Training (Basics), 20/9/2026.

## What it does

Collects customer info through prompts, checks eligibility and order validity, then prints a summary on the page.

1. Ask for Name, Age, Gender
2. Show a welcome message based on gender
3. Check if the customer is old enough to order (16+)
4. Ask for an order (Burger / Shawarma / Zinger) and validate it
5. Confirm or flag the order based on age + order validity (`&&`, `||`, `!`)
6. Print a final summary (Name, Age, Gender, Order, Order Status) with `document.write()`

## How to run

Open `HTML/index.html` in a browser and answer the prompts.

## Files

- `HTML/index.html` — page structure, loads the script at the end of `<body>`
- `JS/script.js` — all the logic (prompts, conditions, output)
- `CSS/style.css` — currently empty

## Task checklist

- [x] Part 1 — Customer info + welcome message
- [x] Part 2 — Eligibility check (age < 16)
- [x] Part 3 — Choose an order + validation
- [x] Part 4 — Logical operators (`&&`, `||`, `!`)
- [x] Part 5 — `alert()` / `console.log()` / `document.write()` summary
- [x] Extra Challenge — order-availability variable (named `validOrder` instead of `isAvailable`, same true/false logic)

## Rules followed

No arrays, functions, loops, objects, or DOM manipulation — only variables, prompts, comparisons, conditions, and logical operators, as required by the task.
