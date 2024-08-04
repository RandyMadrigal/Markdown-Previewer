import { EditorMarkdown } from "./EditorMarkdown";
import { PreviewMarkdown } from "./PreviewMarkdown";
import { useState } from "react";
import "./markdown.css";

export const MarkDownContainer = () => {
  const [text, setText] = useState(
    "# Hola Mundo\nEste es un texto en **Markdown**."
  );

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
