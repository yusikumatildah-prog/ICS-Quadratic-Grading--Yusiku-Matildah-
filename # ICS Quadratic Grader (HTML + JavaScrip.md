# ICS Quadratic Grader (HTML + JavaScript)

A single-page web app built with HTML and JavaScript that:

- Solves quadratic equations (ax² + bx + c = 0)
- Converts numeric scores (0–100) to letter grades

---

## 💻 How to Run
1. Download both files: index.html and script.js.
2. Place them in the same folder.
3. Double-click index.html to open it in a browser.
4. Works fully offline.

---

## 🧮 Test Cases

### Quadratic Solver:
| a | b | c | Expected Result |
|---|---|---|----------------|
| 1 | -3 | 2 | x₁=2, x₂=1 |
| 1 | 2 | 1 | x=-1 (repeated root) |
| 1 | 1 | 1 | complex roots (-0.5 ± 0.866i) |

### Grade Converter:
| Score | Expected Grade |
|--------|----------------|
| 85 | A+ |
| 75 | A |
| 65 | B+ |
| 60 | B |
| 55 | C+ |
| 50 | C |
| 49 | D |
| 0 | D |

---

## 🧾 GitHub Repository Naming
Use:  
ICS-Quadratic-Grader-<YourSurname-YourFirstname>

Example:  
ICS-Quadratic-Grader-Yusiku-Matildah

Commit at least 3 times:
- Initial structure  
- Added quadratic solver  
- Added grading system