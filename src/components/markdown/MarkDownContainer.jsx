import { EditorMarkdown } from "./EditorMarkdown";
import { PreviewMarkdown } from "./PreviewMarkdown";
import { useState } from "react";
import "./markdown.css";
import { getRows } from "../../helpers/getRows";

let DEMO = `# Hola mundo

## Hola mundo

### Hola mundo

[GitHub](https://github.com/RandyMadrigal/Markdown-Previewer)

Inline code example: \`const x = 42;\`

- Element 1
- Element 2

**bold text**

>this is a example of Blockquotes

#### Code block:

    <html>
      <head>
      </head>
    </html>

![React-logo](/assets/images/react-logo.png)

`;

export const MarkDownContainer = () => {
  const [text, setText] = useState(DEMO);
  const [rows, setRows] = useState(30);

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
