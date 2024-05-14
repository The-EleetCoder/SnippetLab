import { useState, useEffect } from "react";
import Split from "react-split";
import Editor from "./components/Editor";

function App() {
  const [html, setHtml] = useState(() => localStorage.getItem("SnippetLab-html") || "");
  const [css, setCss] = useState(() => localStorage.getItem("SnippetLab-css") || "");
  const [js, setJs] = useState(() => localStorage.getItem("SnippetLab-js") || "");
  const [srcDoc, setSrcDoc] = useState();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  useEffect(() => {
    localStorage.setItem("SnippetLab-html", html);
    localStorage.setItem("SnippetLab-css", css);
    localStorage.setItem("SnippetLab-js", js);
  }, [html, css, js]);

  return (
    <div className="wrapper">
      <Split sizes={[50, 50]} direction="vertical" className="split-vertical">
        {/* top half */}
        <Split sizes={[33, 33, 34]} className="split-horizontal top-pane">
          <div className="pane">
            <Editor displayName="HTML" value={html} onChange={setHtml} />
          </div>
          <div className="pane">
            <Editor displayName="CSS" value={css} onChange={setCss} />
          </div>
          <div className="pane">
            <Editor displayName="JS" value={js} onChange={setJs} />
          </div>
        </Split>

        {/* bottom half */}
        <div className="pane">
          <iframe
            srcDoc={srcDoc}
            className="iframe"
            title="output"
            sandbox="allow-scripts"
            width="100%"
            height="100%"
          />
        </div>
      </Split>
    </div>
  );
}

export default App;
