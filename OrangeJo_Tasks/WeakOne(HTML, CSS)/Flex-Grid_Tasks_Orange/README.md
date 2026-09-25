# Flex-Grid_Tasks_Orange
This is the first Flex&amp;Grid tasks (9/9/2026) in Orange Training (Basics)

## Overview
Seven exercises covering CSS positioning, Flexbox, and CSS Grid layout. Pages are connected via **Next** / **Back** buttons starting from [TaskThree-1.html](HTML/TaskThree-1.html).

## Structure
- `HTML/` — one HTML page per exercise (`TaskThree-1.html` … `TaskThree-7.html`)
- `CSS/` — the matching external stylesheet for each page (`TaskThree-1.css` … `TaskThree-7.css`)

## Tasks

| # | HTML | CSS | What it covers |
|---|------|-----|-----------------|
| 1 | [TaskThree-1.html](HTML/TaskThree-1.html) | [TaskThree-1.css](CSS/TaskThree-1.css) | `position: static / relative / absolute` compared side by side inside a flex container |
| 2 | [TaskThree-2.html](HTML/TaskThree-2.html) | [TaskThree-2.css](CSS/TaskThree-2.css) | Flexbox card layout (`flex-direction: column`, `flex: 1`) with a footer pinned to the bottom via `margin-top: auto` |
| 3 | [TaskThree-3.html](HTML/TaskThree-3.html) | [TaskThree-3.css](CSS/TaskThree-3.css) | Nested flex rows/columns rendering nine numbered, colored bars |
| 4 | [TaskThree-4.html](HTML/TaskThree-4.html) | [TaskThree-4.css](CSS/TaskThree-4.css) | CSS Grid image gallery using `grid-template-columns: repeat(3, 1fr)` |
| 5 | [TaskThree-5.html](HTML/TaskThree-5.html) | [TaskThree-5.css](CSS/TaskThree-5.css) | A 4-column CSS Grid of numbered, colored (and empty) cells |
| 6 | [TaskThree-6.html](HTML/TaskThree-6.html) | [TaskThree-6.css](CSS/TaskThree-6.css) | A full-viewport-height, 2-column Grid split screen with `place-items: center` |
| 7 | [TaskThree-7.html](HTML/TaskThree-7.html) | [TaskThree-7.css](CSS/TaskThree-7.css) | `position: fixed` to pin an image in place while the page scrolls |

## How to view
Open [HTML/TaskThree-1.html](HTML/TaskThree-1.html) in a browser and use the **Next** / **Back** buttons to move through the exercises.

> **Note:** the stylesheet `<link>` tags in `HTML/*.html` currently point to an absolute local path (`C:\Users\...\CSS\TaskThree-N.css`) instead of a relative one. The pages will only pick up their styling on the machine/path they were authored on — let me know if you'd like these switched to relative paths (e.g. `../CSS/TaskThree-1.css`) so the styling loads anywhere.
