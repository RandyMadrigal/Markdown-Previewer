import { EditorMarkdown } from "./EditorMarkdown";
import { PreviewMarkdown } from "./PreviewMarkdown";
import { useState } from "react";
import "./markdown.css";
import { getRows } from "../../helpers/getRows";

let DEMO = `# Hola mundo \n
## Hola mundo \n
### Hola mundo \n
#### Hola mundo \n
##### Hola mundo \n`;

export const MarkDownContainer = () => {
  const [text, setText] = useState(DEMO);
  const [rows, setRows] = useState(12);

  const handleChange = (e) => {
    setText(e.target.value);
    setRows(getRows(e.target.value));
  };

  return (
    <div className="container-markdown">
      <EditorMarkdown
        title="Editor"
        handleChange={handleChange}
        text={text}
        rows={rows}
      />
      <PreviewMarkdown title="Preview" text={text} />
    </div>
  );
};
