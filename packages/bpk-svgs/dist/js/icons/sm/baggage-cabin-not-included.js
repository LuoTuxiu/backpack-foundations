import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><g clipPath="url(#clip0_8306_178)"><path d="M10.8 0h2.4A1.8 1.8 0 0 1 15 1.746V6.9L21.443.457a1.5 1.5 0 1 1 2.121 2.121L2.582 23.561a1.5 1.5 0 0 1-2.121-2.122L9 12.9V1.8A1.8 1.8 0 0 1 10.8 0zm2.7 8.4V3h-3v8.25c-.02.17-.007.115-.02.17L13.5 8.4zM8.25 22.875v-.636a.25.25 0 0 1 .073-.177l8.237-8.237a.234.234 0 0 1 .278-.045A2.25 2.25 0 0 1 18 15.75v4.5a2.25 2.25 0 0 1-2.25 2.25v.375a1.125 1.125 0 0 1-2.25 0V22.5h-3v.375a1.125 1.125 0 0 1-2.25 0z" /></g></svg>);