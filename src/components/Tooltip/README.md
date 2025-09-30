# Tooltip Component

This repository contains a **reusable React Tooltip component** that displays additional information when hovered or clicked. The tooltip supports multiple color variants, light/dark modes, and customizable content.

---

## ✨ Features

- 🎨 **Color Variants** – Choose from `grey`, `blue`, `pink`, or `green`.  
- 🌗 **Light/Dark Mode** – Invert the background and text colors with the `light` prop.  
- 🖱 **Hover or Click Trigger** – Tooltip appears on hover and can also be dismissed with a close button.  
- 🧩 **Customizable** – Supports custom text, headers, and trigger elements.  
- 🔌 **React Icons Support** – Includes a sample icon (`ImDrawer2`) for illustration.  

---

## 📦 Installation

### Clone this repo into your portfolio or project:

```bash
git clone https://github.com/zenidreney/react-modals.git
```
### Make sure you have the following dependencies installed:
```bash
npm install react react-dom react-icons
```
🚀 Usage
```tsx
import Tooltip from "./Tooltip"

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Tooltip
        text="Here’s some extra information!"
        header="Details"
        variant="blue"
      />
    </div>
  )
}

export default App
```
### With a Custom Trigger Element
```tsx
<Tooltip
  text="Custom trigger tooltip"
  header="Note"
  variant="pink"
  light
>
  <span className="custom-trigger">Hover over me</span>
</Tooltip>
```
## ⚙️ Props
The Tooltip component accepts the following props:

| Prop       | Type                                    | Description                                                         |
| ---------- | --------------------------------------- | ------------------------------------------------------------------- |
| `text`     | string                                  | The tooltip message text.                                           |
| `header`   | string                                  | Title or heading inside the tooltip.                                |
| `variant`  | `"grey" \| "blue" \| "pink" \| "green"` | Sets the tooltip’s color scheme.                                    |
| `light`    | boolean                                 | Inverts background/text colors for a light theme.                   |
| `children` | React element (optional)                | Custom trigger element (default is a button: *Click or Hover Me!*). |

## 🎨 Styling
Basic styles are defined in Tooltip.css. You can customize them or extend with your own styles.
📂 File Structure
```
src/
  └── components/
      └── Tooltip/
          ├── Tooltip.tsx     # Main tooltip component
          ├── Tooltip.css     # Tooltip styles
          └── README.md       # Documentation for Tooltip

```
## 📝 License
This project is for portfolio/demo purposes with a MIT License. Feel free to use, modify, and showcase it in your own work!
