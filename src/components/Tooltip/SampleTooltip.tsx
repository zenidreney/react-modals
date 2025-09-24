import Tooltip from "./Tooltip"

const SampleTooltip =

    <>
        <Tooltip><button className="sample-btn">Hover me!</button></Tooltip>

        <Tooltip variant="blue" ><button className="sample-btn">Hover me!</button></Tooltip>
        <Tooltip variant="pink" ><button className="sample-btn">Hover me!</button></Tooltip>
        <Tooltip variant="green" ><button className="sample-btn">Hover me!</button></Tooltip>

        <Tooltip
            light
            header="Some Header"
            text="Add some text to keep it up" ><button className="sample-btn">Hover me!</button></Tooltip>
            
        <Tooltip
            variant="blue"
            light
            header="Some Header" ><button className="sample-btn">Hover me!</button></Tooltip>
        <Tooltip
            variant="pink"
            light
            header="Some Header" ><button className="sample-btn">Hover me!</button></Tooltip>
        <Tooltip
            variant="green"
            light
            header="Some Header" ><button className="sample-btn">Hover me!</button></Tooltip>

    </>

export default SampleTooltip