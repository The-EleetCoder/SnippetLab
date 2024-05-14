import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { EditorView } from "@codemirror/view";
import {sublime} from '@uiw/codemirror-theme-sublime'

const Editor = (props) => {
  const { displayName, value, onChange } = props;

  return (
    <div className="editor-container">
      <div className="editor-title">
        {displayName}
        <button>o/c</button>
      </div>
      <CodeMirror
        className="codemirror-editor"
        theme={sublime}
        value={value}
        extensions={[
          javascript({ jsx: true }), 
          EditorView.lineWrapping
        ]}
        height="100%"
        onChange={onChange}
      />
    </div>
  );
};

export default Editor;
