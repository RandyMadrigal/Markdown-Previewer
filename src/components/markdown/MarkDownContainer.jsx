import { EditorMarkdown } from "./EditorMarkdown";
import { PreviewMarkdown } from "./PreviewMarkdown";
import { useState } from "react";

export const MarkDownContainer = () => {
  const [text, setText] = useState(
    "# Hola Mundo\nEste es un texto en **Markdown**."
  );

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container w-10/12 h-auto bg-slate-100 mx-auto grid grid-cols-2 border-t-2 p-2 gap-2">
      <EditorMarkdown title="Editor" handleChange={handleChange} text={text} />
      <PreviewMarkdown title="Preview" text={text} />
    </div>
  );
};
