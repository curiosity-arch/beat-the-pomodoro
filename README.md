Welcome, brave coder! ⚔️

This repository is a growing collection of my coding adventures — small projects built to sharpen my skills and explore the world of web development. Each project here represents one step forward in my quest to master code.

---

## 📁 Project: ` beat-the-pomodoro `

A minimalist Pomodoro Timer app with a live digital clock built using **HTML**, **CSS**, and **JavaScript**.

### 🔧 Features
- ⏰ Real-time clock display (updates every second)
- 🍅 25-minute Pomodoro timer
- 🟢 Start, ⏸ Pause, and 🔄 Reset buttons
- 🧠 Simple logic using built-in JavaScript functions

---

**JavaScript Concepts Used**
This project uses a few key JavaScript functions. Two of the most important are:

⏱️ ` setInterval() `
Used to repeatedly run a function at a specified interval (in milliseconds).

In this project, ` setInterval() ` is used for:
* Updating the real-time clock every second.
* Counting down the Pomodoro timer once per second.

Example:
```js
setInterval(() => {
  console.log("This runs every second");
}, 1000);
```

✋ ` clearInterval() `
Used to stop a function that was started by ` setInterval() `.
This is important to prevent the timer from running multiple times or continuing after it's done.

In this project, ` clearInterval() ` is used for:
* Pausing the timer
* Resetting the timer
* Stopping when time runs out

Example:
```js
const timerId = setInterval(() => {
  console.log("Running...");
}, 1000);

// Stop the interval later
clearInterval(timerId);
```

> These two functions are built-in features of JavaScript and are very useful for time-based applications like clocks, countdowns, and animations.