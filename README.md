# 🎲 Roll-It

A simple two-player dice game built with vanilla JavaScript, HTML, and CSS as a DOM manipulation capstone project.

## 🎯 About

Both players roll simultaneously each round. The game instantly compares the results and announces the winner — all through dynamic DOM updates with no page frameworks.

## 🚀 Features

- Two-player simultaneous dice roll
- Dice images update dynamically on every roll
- Instant winner announcement displayed at the top
- Custom "Bitcount Prop Single" Google Font for a stylish look
- One-click **Roll** button (triggers a page reload to randomize)

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and layout |
| CSS3 | Styling and card design |
| JavaScript (Vanilla) | DOM manipulation and game logic |
| Google Fonts | Bitcount Prop Single typeface |

## 📁 Project Structure

```
Roll-It/
├── index.html       ← Game layout and structure
├── style.css        ← Styling for cards, buttons, layout
├── index.js         ← Dice logic and DOM updates
└── images/          ← Dice face images (one.png → six.png) + favicon
```

## ▶️ How to Play

1. Clone the repository:
   ```bash
   git clone https://github.com/subhan1606/Roll-It.git
   ```
2. Open `index.html` in any browser
3. Click the **Roll** button
4. Both dice roll simultaneously — the winner is announced at the top
5. Click **Roll** again to play another round!

## 💡 DOM Concepts Practiced

- Dynamically updating image `src` attributes
- Updating element `textContent` based on game logic
- Using `Math.random()` to simulate dice rolls
- Event-driven UI with `onclick` / `location.reload()`
- Structuring a multi-element layout with CSS card components

## 🙋 Author

**Subhan**  
B.Tech Computer Engineering — GIDC Degree Engineering College (GTU)  
[GitHub →](https://github.com/subhan1606)

---

*Built as a capstone project for DOM manipulation practice.*
