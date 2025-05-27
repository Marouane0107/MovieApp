# MovieApp

![Language](https://img.shields.io/badge/Language-JavaScript-yellow)
![Framework](https://img.shields.io/badge/Framework-React-blue)
![Build](https://img.shields.io/badge/Build-Vite-green)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

## 📖 Overview

**MovieApp** is a modern, responsive front-end web application built with React and Vite. It allows users to browse and search for movies, view details, and navigate between pages seamlessly via client-side routing.

Key goals:
- Quick development and hot reloading with Vite  
- Clean, component-based UI with React  
- Simple routing with React Router  
- Linting and code quality checks with ESLint  

---

## ✨ Features

- Browse a list of popular movies  
- Search movies by title  
- View detailed movie information (poster, synopsis, rating, release date)  
- Client-side routing for multiple pages  
- Responsive layout for desktop and mobile  

---

## 🛠️ Technical Stack

- **Framework**: React ^19.0.0  
- **Build tool**: Vite ^6.2.0  
- **Routing**: react-router-dom ^7.6.0  
- **Linting**: ESLint & plugins  
- **Language**: JavaScript (ESModules)  
- **Styling**: CSS / your choice of preprocessor  

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥16  
- npm or yarn  

### Installation

```bash
# Clone the repo
git clone https://github.com/Marouane0107/MovieApp.git
cd MovieApp/movie

# Install dependencies
npm install
# or
yarn install
```

### Running in Development

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:5173 in your browser to see the app with hot-reload.

### Building for Production

```bash
npm run build
# or
yarn build
```

Built files will output to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

---

## 📁 Project Structure

```
MovieApp/
├── movie/                  # Vite/React app
│   ├── index.html          # HTML template
│   ├── package.json        # Dependencies & scripts
│   ├── vite.config.js      # Vite configuration
│   ├── src/
│   │   ├── main.jsx        # App entry point
│   │   ├── App.jsx         # Root component
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page views (Home, Search, Details)
│   │   ├── assets/         # Static assets (images, styles)
│   │   └── styles/         # Global and module CSS files
│   └── public/             # Public static files
└── README.md               # This file
```

---

## 🖥️ Usage

- **Home page**: Browse popular movies  
- **Search**: Enter a title to filter results  
- **Details**: Click a movie card to see details page  

---

## 🧪 Testing & Linting

```bash
# Run ESLint
npm run lint
# or
yarn lint
```

Configure or extend rules in `.eslintrc.js`.

---

## 🤝 Contributing

1. Fork the repository  
2. Create a branch: `git checkout -b feature/your-feature`  
3. Commit changes: `git commit -m "Add feature"`  
4. Push to branch: `git push origin feature/your-feature`  
5. Open a Pull Request  

---

## 📚 Resources

- React documentation: https://reactjs.org/  
- Vite documentation: https://vitejs.dev/  
- React Router: https://reactrouter.com/  
- ESLint: https://eslint.org/  

---

## 👨‍💻 Author

**Marouane0107**  
https://github.com/Marouane0107  

---

*Front-end movie App built with React & Vite.*  
