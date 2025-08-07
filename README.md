# Web Terminal Emulator

A highly customizable, themeable terminal emulator built entirely with vanilla HTML, CSS, and JavaScript. This project simulates a command-line interface in the browser, allowing users to run predefined JavaScript functions in a fun, interactive way.

---

## ✨ Features

- **Authentic Terminal Interface**: A full-screen, responsive terminal with a classic header and prompt.  
- **Themeable UI**: Switch between multiple themes on the fly. Comes pre-packaged with:
  - `dracula` (default)
  - `light`
  - `nord`
- **Dynamic Command System**: Easily add new JavaScript functions and make them available as terminal commands.  
- **Core Commands**: Includes essential commands like `help`, `clear`, and `theme <themeName>`.  
- **Interactive Experience**: The terminal automatically focuses when clicked and always keeps the input prompt at the bottom of the output.  
- **Zero Dependencies**: Built with 100% vanilla JavaScript, HTML5, and CSS3. No frameworks or libraries needed.

---

## 🚀 Live Demo

[https://termi-js.vercel.app/](https://termi-js.vercel.app/)

---

## 💻 How to Use

The terminal supports the following commands right out of the box:

| Command               | Description                                                  |
|-----------------------|--------------------------------------------------------------|
| `help`                | Lists all available commands, functions, and themes.         |
| `node <functionName>` | Executes the specified JavaScript function.                  |
| `theme <themeName>`   | Changes the terminal's appearance to the specified theme.    |
| `clear`               | Clears all output from the terminal screen.                  |

---

## 🔧 How to Add New Commands

Extending the terminal with your own commands is easy!

### 1. Define Your Function

Open a function file (like `js/functions.js`) and write your new JavaScript function:

```js
// In js/functions.js
function sayHello() {
  alert("Hello, world!");
}
```

### 2. Register the Command

Open `js/terminal.js` and add your function to the `commands` object. The key you use here will be the command’s name:

```js
// In js/terminal.js
const commands = {
  // ... other commands
  hello: sayHello // Add your new command here
};
```

Now you can run `node hello` in the terminal!

---

## 📁 File Structure

```
.
├── index.html              # Main HTML file
├── style.css               # All styles and theme definitions
├── js/
│   ├── functions.js        # Your custom JavaScript functions
│   ├── assignment3.js      # More custom functions
│   └── terminal.js         # Core terminal logic and command registry
└── README.md               # You are here!
```