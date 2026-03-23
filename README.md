# 🎯 Decision Picker Web App

A simple, clean, and interactive web app that helps users make decisions by randomly selecting from a list of user-defined options.

---

## 🚀 Features

* Add unlimited custom options
* Delete options easily
* Random selection with animation
* Separate result screen
* Roll again without re-entering options
* Local history stored in browser (`localStorage`)
* Minimal, responsive UI

---

## 🧠 How It Works

1. Click the **( + )** button to open the input field
2. Enter an option and click **Add**
3. Repeat to add multiple options
4. Click **ROLL**
5. App randomly selects and displays one option

---

## 📁 Project Structure

```
decision-picker/
│
├── index.html        # Main input screen
├── result.html       # Result display screen
├── style.css         # Styling
├── script.js         # Input + option logic
├── result.js         # Random selection + animation
```

---

## ⚙️ Installation / Usage

1. Download or clone the repository:

```
git clone https://github.com/your-username/decision-picker.git
```

2. Open the project folder

3. Run the app:

* Simply open `index.html` in your browser

No server or setup required.

---

## 💾 Data Storage

* Uses browser **localStorage**
* Stores:

  * Current options
  * Roll history

Example structure:

```
[
  {
    "options": ["Yes", "No"],
    "result": "Yes",
    "time": "2026-03-23 21:00"
  }
]
```

---

## 🎨 UI Highlights

* Floating action button (FAB) for adding options
* Option chips with delete controls
* Clean dark theme
* Shuffle animation before final result

---

## ⚠️ Limitations

* No backend (data not shared across devices)
* History not visible in UI (stored only)
* No option editing (only add/remove)

---

## 🔮 Future Improvements

* History page (view past decisions)
* Spinner wheel animation
* Sound effects
* Light/Dark mode toggle
* Share result feature
* PWA support (installable app)

---

## 📌 Tech Stack

* HTML
* CSS
* JavaScript (Vanilla)

---

## 📄 License

This project is open-source and free to use.

---

## ✍️ Author

Sunny
---
Built as part of a frontend-focused project to create a visually engaging and practical utility app.
