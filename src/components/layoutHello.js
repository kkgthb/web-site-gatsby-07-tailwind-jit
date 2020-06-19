import React from "react"

export default function LayoutHello({ children }) {
  return (
    <div className="hello-layout-wrapper">
      <div className="hello-layout-header">Header placeholder</div>
      <div className="hello-layout-main">
	    { children }
      </div>
	  <div className="hello-layout-footer">Footer placeholder</div>
	</div>
  )
}