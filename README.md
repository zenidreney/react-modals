# React UI Components

A small collection of **reusable React components** built with TypeScript.  
This repo is designed for **portfolio/demo purposes** to showcase component architecture, styling, and interactivity.  

Currently includes:

- 🎉 [Popup Component](./src/components/Popup/README.md) – A lightweight popup notification with banner content.  
- 💡 [Tooltip Component](./src/components/Tooltip/README.md) – A customizable tooltip with multiple color schemes and modes.  

---

## 📦 Installation

Clone this repo:

```bash
git clone https://github.com/zenidreney/react-modals.git
cd react-modals
```
### Install dependencies:

```bash
npm install
```
## 🚀 Getting Started

Run the development server:

```bash
npm run dev
```
Then open http://localhost:5173
 to view the components in your browser.

📂 File Structure
```bash
src/
  └── components/
      ├── Popup/
      │   ├── Popup.tsx       # Main popup component
      │   ├── Popup.css
      │   ├── README.md       # Documentation for Popup
      │   └── Banner/
      │       ├── Banner.tsx  # Banner component (used inside Popup)
      │       └── Banner.css
      │
      └── Tooltip/
          ├── Tooltip.tsx     # Main tooltip component
          ├── Tooltip.css
          └── README.md       # Documentation for Tooltip

