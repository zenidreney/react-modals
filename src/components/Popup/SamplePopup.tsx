import Popup from "./Popup"
import type { CSSProperties } from "react"

const styles: CSSProperties = {
    
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",
    margin: "10px"

}

const SamplePopup =

    <div style={styles}>

        <Popup
            heading="Success"
            text="Your work has been saved"
            variant="success"/>
        <Popup
            heading="Warning"
            text="A netwook error was detected"
            variant="warning"><button className="popup-btn">Prop text to Popup</button></Popup>
        <Popup
            heading="Error"
            text="Please re-save your work again"
            variant="error"><button className="popup-btn">Prop text to Popup</button></Popup>
        <Popup
            heading="Information"
            text="Please read updated information"
            variant="neutral"/>
    </div>


export default SamplePopup