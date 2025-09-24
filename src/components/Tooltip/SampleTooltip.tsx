import Tooltip from "./Tooltip"

const SampleTooltip =

    <>
        <Tooltip />
        <Tooltip variant="blue" />
        <Tooltip variant="pink" />
        <Tooltip variant="green" />

        <Tooltip
            light
            header="Some Header" >Some sample text. Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip>
        <Tooltip
            variant="blue"
            light
            header="Some Header" >Some sample text. </Tooltip>
        <Tooltip
            variant="pink"
            light
            header="Some Header" >Some sample text. Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip>
        <Tooltip
            variant="green"
            light
            header="Some Header" >Some sample text</Tooltip>

    </>

export default SampleTooltip