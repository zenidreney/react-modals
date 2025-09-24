
import type { JSX } from "react";
import "./Tooltip.css"
import { ImDrawer2 } from "react-icons/im";

const colorSchemes = {
  grey: { bg: "#262626", text: "#C7C7C7" },
  blue: { bg: "#1E40AF", text: "#E8EDFF" },
  pink: { bg: "#A9229B", text: "#FFE9FD" },
  green: { bg: "#47AA5D", text: "#E3FFE9" },

}

type TooltipProps = {
  children?: JSX.Element;
  text?: string;
  variant?: keyof typeof colorSchemes;
  light?: boolean;
  header?: string;
}

const defaultValues: TooltipProps = {
  children: <button>Hover Me!</button>,
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.",
  variant: "grey",
  light: false,
  header: "Archive Notes"
}


function Tooltip({
  children = defaultValues.children,
  text = defaultValues.text,
  variant = defaultValues.variant,
  light = defaultValues.light,
  header = defaultValues.header
}: TooltipProps) {

  const scheme = colorSchemes[variant || "grey"] || colorSchemes.grey

  const styles = light ?
    { "--tooltip-bg": scheme.text, "--text-color": scheme.bg } :
    { "--tooltip-bg": scheme.bg, "--text-color": scheme.text }


  return (
    <div className="tooltip-trigger">
      <div className="tooltip-fbox" style={styles as React.CSSProperties}  >
        <ImDrawer2 className="icon" />
        <div className="tooltip-text-fbox">
          <h3 >
            {header}
          </h3>
          <p >
            {text}
          </p>
        </div>
        <button className="tooltip-btn">X</button>
      </div>
      {children}
    </div>
  )
}

export default Tooltip

