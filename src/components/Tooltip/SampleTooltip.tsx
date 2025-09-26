import Tooltip from "./Tooltip"
import type { CSSProperties } from "react"


const styles: CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "150px"
}

const SampleTooltip =

    <div style={styles}>
        <Tooltip />

        <Tooltip variant="blue" ><button className="sample-btn">Click or Hover me!</button></Tooltip>
        <Tooltip variant="pink" ><button className="sample-btn">Click or Hover me!</button></Tooltip>
        <Tooltip variant="green" ><button className="sample-btn">Click or Hover me!</button></Tooltip>

        <Tooltip
            light
            header="Some Header"
            text="Add some text to keep it up" ><button className="sample-btn">Click or Hover me!</button></Tooltip>

        <Tooltip
            variant="blue"
            light
            header="Some Header" ><button className="sample-btn">Click or Hover me!</button></Tooltip>
        <Tooltip
            variant="pink"
            light
            header="Some Header" ><button className="sample-btn">Click or Hover me!</button></Tooltip>
        <Tooltip
            variant="green"
            light
            header="Some Header" ><button className="sample-btn">Click or Hover me!</button></Tooltip>

    </div>

export default SampleTooltip