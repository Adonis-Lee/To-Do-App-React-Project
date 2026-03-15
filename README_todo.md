# ✅ To-Do App

A clean and minimal To-Do application built with ReactJS and Tailwind CSS. Add, complete, and delete your daily tasks with a simple and intuitive interface.

---

## 📱 Features

- **Add Tasks** – Type and add new to-do items instantly
- **Complete Tasks** – Click on a task to mark it as done (strikethrough + green highlight)
- **Delete Tasks** – Remove individual tasks with the Delete button
- **Clear All** – Remove all tasks at once with a confirmation dialog
- **Task Counter** – Live TOTAL and DONE counters at the top
- **Time Stamp** – Each task shows the time it was added
- **Persistent Storage** – Tasks are saved to localStorage and survive page refresh

---

## 🛠️ Built With

- [ReactJS](https://react.dev/) – UI framework
- [Tailwind CSS](https://tailwindcss.com/) – Styling
- [Vite](https://vitejs.dev/) – Build tool

---

## 🚀 Getting Started

### Prerequisites

- Node.js installed → [Install Node.js](https://nodejs.org/)

### Run the app

```bash
# Clone the repository
git clone https://github.com/Adonis-Lee/to-do-app.git

# Navigate into the project
cd to-do-app

# Install dependencies
npm install

# Run the app
npm run dev
```

---

## 📁 Project Structure

```
src/
├── App.jsx               # State management & logic
├── Components/
│   ├── Header.jsx        # App title
│   ├── Stats.jsx         # Total & Done counters
│   ├── TodoForm.jsx      # Input & Add button
│   └── TodoList.jsx      # Task list with delete & toggle
├── Pages/
│   └── Home.jsx          # Main layout
└── Interfaces/
    └── Todo.js           # Todo data structure (JSDoc)
```

---

## 🌐 Live Demo

👉 [https://to-do-app-mau.netlify.app](https://to-do-app-mau.netlify.app)

---

## 📸 Screenshot

![To-Do App](screenshot_todo.png)

---

## 👤 Author

**Mehmet Anıl ÜLKÜ**

---

## 📄 License

This project was developed for educational purposes as part of a JavaScript training program.
