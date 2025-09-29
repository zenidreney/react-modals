# Popup Component

This repository contains a **reusable React Popup component** that displays a banner notification when triggered. The popup automatically dismisses after a few seconds, making it useful for alerts, confirmations, or lightweight notifications.

---

## ✨ Features

- 🎛 **Customizable Banner** – Pass in text, heading, and variant to control the popup's appearance.  
- ⏳ **Auto-Close** – The popup automatically disappears after 3 seconds.  
- 🖱 **Custom Trigger** – Default trigger is a "Click Me" button, but you can pass in your own React element.  
- ⚡ **Portal Rendering** – Uses `createPortal` to render the popup at the root of the DOM for better positioning.  

---

## 📦 Installation

Clone this repo into your portfolio or project:

```bash
git clone https://github.com/your-username/your-repo-name.git

```
Make sure you have the following dependencies installed:
```bash
npm install react react-dom
```
## 🚀 Usage

```tsx

import Popup from "./Popup"

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Popup
        text="This is a popup message!"
        heading="Hello!"
        variant="success"
      />
    </div>
  )
}

export default App
```
### With a custom trigger button

```tsx
<Popup
  text="Custom trigger example!"
  heading="Notice"
  variant="warning"
>
  <button className="my-custom-btn">Open Popup</button>
</Popup>
```
## ⚙️ Props

The Popup component extends the props from the Banner component:

| Prop       | Type                     | Description                                            |
| ---------- | ------------------------ | ------------------------------------------------------ |
| `text`     | string                   | The message text shown in the popup banner.            |
| `heading`  | string                   | Title or heading of the popup.                         |
| `variant`  | string                   | Controls the style variant (e.g., `success`, `error`). |
| `children` | React element (optional) | Custom trigger element. Defaults to a button.          |

## 🎨 Styling

Basic styles are defined in Popup.css. You can customize them or extend with your own styles.

## 📂 File Structure
```
src/
  ├── Popup.tsx        # Main popup component
  ├── Popup.css        # Popup styles
  └── Banner/
       ├── Banner.tsx  # Banner component (used inside Popup)
       └── ...
```

This project is for portfolio/demo purposes with a MIT License.
Feel free to use, modify, and showcase it in your own work!
