import { useState, useEffect } from "react";
import Editor from "./components/Editor";

function App() {

  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])


  return (
    <>
      {/* top section */}
      <div className="pane top-pane">
        <Editor
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>

      {/* bottom section */}
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
    </>
  );
}

export default App;
