import Tooltip from "./Tooltip"
import type { CSSProperties } from "react"


const styles: CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px"

}

const SampleTooltip =

    <div style={styles}>
        <Tooltip />

        <Tooltip variant="blue" ><button className="sample-btn">Click or Hover me!</button></Tooltip>
        <Tooltip variant="pink" ><button className="sample-btn">Click or Hover me!</button></Tooltip>
        <Tooltip variant="green" ><button className="sample-btn">Click or Hover me!</button></Tooltip>

        <Tooltip
            light
            header="Always Trust"
            text="Add some text to keep it up. Let the insipiration fill you." ><button className="sample-btn">Click or Hover me!</button></Tooltip>

        <Tooltip
            variant="blue"
            light
            header="You Can Change" ><button className="sample-btn">Click or Hover me!</button></Tooltip>
        <Tooltip
            variant="pink"
            light
            header="Keep Working" ><button className="sample-btn">Click or Hover me!</button></Tooltip>
        <Tooltip
            variant="green"
            light
            header="Stay Joyful"
            text="Add some text to keep it up. Let the insipiration fill you." ><button className="sample-btn">Click or Hover me!</button></Tooltip>

    </div>

export default SampleTooltip