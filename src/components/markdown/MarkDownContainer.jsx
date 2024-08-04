import { EditorMarkdown } from "./EditorMarkdown";
import { PreviewMarkdown } from "./PreviewMarkdown";
import { useState } from "react";
import "./markdown.css";

let DEMO = `# Hola mundo \n
## Hola mundo \n
### Hola mundo \n
#### Hola mundo \n
##### Hola mundo \n`;

export const MarkDownContainer = () => {
  const [text, setText] = useState(DEMO);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container-markdown">
      <EditorMarkdown title="Editor" handleChange={handleChange} text={text} />
      <PreviewMarkdown title="Preview" text={text} />
    </div>
  );
};
