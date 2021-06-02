import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M3 3a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v18.919a1.5 1.5 0 0 1-1.974 1.423l-6.552-2.184a1.5 1.5 0 0 0-.948 0l-6.552 2.184A1.5 1.5 0 0 1 3 21.919V3zm14.56 5.56a1.5 1.5 0 0 0-2.12-2.12l-4.94 4.939-1.94-1.94a1.5 1.5 0 1 0-2.12 2.122l3 3a1.5 1.5 0 0 0 2.12 0l6-6z" /></svg>);