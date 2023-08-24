import React from "react"
import "./AppBackdrop.css"

interface Props {
  open?: boolean
  containerStyle?: React.CSSProperties
  contentContainerStyle?: React.CSSProperties
  onClose?: () => void
  children?: JSX.Element
}

/**
 *this component is to use to make all modal of the app
 * @param {boolean} open - use to open close modal
 * @param {React.CSSProperties} containerStyle - the style of modal
 * @param {React.CSSProperties} contentContainerStyle - the style of content container of modal
 * @param {()=>void } onClose - function to execute when modal close
 * @param {JSX.Element} children - contain of modal
 */

const AppBackdrop: React.FC<Props> = ({
  open,
  children,
  containerStyle,
  contentContainerStyle,
  onClose
}) => {
  const handleClick = (ev: React.MouseEvent<HTMLDivElement>) =>
    ev?.stopPropagation()

  if (!open) {
    return <></>
  }

  return (
    <div
      className="app-backdrop flex-col-center"
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 3000,
        ...containerStyle
      }}
    >
      <div onClick={handleClick} style={{ ...contentContainerStyle }}>
        {children}
      </div>
    </div>
  )
}
export default AppBackdrop
