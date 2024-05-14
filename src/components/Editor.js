import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { EditorView } from "@codemirror/view";

const Editor = (props) => {
  const { displayName, value, onChange } = props;

  return (
    <div className="editor-container">
      <div className="editor-title">
        {displayName}
        <button>o/c</button>
      </div>
      <CodeMirror
        theme={"dark"}
        value={value}
        height="200px"
        extensions={[
          javascript({ jsx: true }), 
          EditorView.lineWrapping
        ]}
        onChange={onChange}
        className="codemirror-editor"
      />
    </div>
  );
};

export default Editor;
