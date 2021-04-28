import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M3 3.75a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v1.5c6 0 6 9 0 9v1.5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm15 4.5v3a1.5 1.5 0 0 0 0-3zm-15 12a1.5 1.5 0 0 0 0 3h15a1.5 1.5 0 0 0 0-3z" /></svg>);