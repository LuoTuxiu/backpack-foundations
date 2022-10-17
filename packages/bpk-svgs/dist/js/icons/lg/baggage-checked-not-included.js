import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M10.333 1h3.334C14.403 1 15 1.597 15 2.333V3.5a.5.5 0 0 1-1 0V3h-4v.5a.5.5 0 0 1-1 0V2.333C9 1.597 9.597 1 10.333 1zM6 7a2 2 0 0 1 2-2h8c.437 0 .842.14 1.171.379l4.083-4.083a1 1 0 0 1 1.414 0l.036.035a1 1 0 0 1 0 1.414L18 7.45 6.042 19.408 2.748 22.7a1 1 0 0 1-1.414 0l-.036-.035a1 1 0 0 1 0-1.415L6 16.55V7zm2 13.485a.5.5 0 0 1 .146-.354l9-9a.5.5 0 0 1 .854.354V19a2 2 0 0 1-2 2v1a1 1 0 1 1-2 0v-1h-4v1a1 1 0 1 1-2 0v-1.515z" /></svg>);