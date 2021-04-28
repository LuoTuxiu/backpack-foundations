import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M19.113 8.095a1.496 1.496 0 0 1 0 2.008l-6.397 5.948a1 1 0 0 1-1.358.003l-6.532-6.01a1.427 1.427 0 0 1 .138-1.949 1.572 1.572 0 0 1 1.997-.103l5.078 4.638 4.97-4.535a1.72 1.72 0 0 1 2.104 0z" /></svg>);