import SampleTooltip from "./components/Tooltip/SampleTooltip"
import SamplePopup from "./components/Popup/SamplePopup"

function App() {

  return (
    <div className="app-container">
      <h1>React Modals</h1>

      <section>
<h2>Tooltip Component</h2>
        {SampleTooltip}
        </section>
<h2>Toast Popup Component</h2>
      {SamplePopup}

    </div>
  )
}

export default App
