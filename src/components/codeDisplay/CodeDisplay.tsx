import React, { LegacyRef, useEffect, useRef } from "react";
import Prism from "prismjs";
import { Box } from "@mui/material";
// import "./prism.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  code: string;
}
export default function CodeDisplay({ code }: Props) {
  useEffect(() => {
    Prism.highlightAll();
    // (document.querySelector("#code") as HTMLDivElement).innerHTML = code;
  }, []);

  const displayRef = useRef<LegacyRef<HTMLElement>>();

  return (
    <Box sx={{ width: "100%" }}>
      <pre className="line-numbers">
        <code
          className="language-javascript"
          ref={displayRef.current}
          id="code"
        >
          {`${code}`}
        </code>
      </pre>
    </Box>
  );
}
