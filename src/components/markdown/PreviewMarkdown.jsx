import PropTypes from "prop-types";
import { marked } from "marked";
import DOMPurify from "dompurify";

export const PreviewMarkdown = ({ title, text }) => {

  marked.use({
    gfm:true,
    breaks : true,
  });

  const renderMarked = () => {
    const dirtyText = text;
    const html = marked.parse(dirtyText); // Convertir Markdown a HTML
    const cleanHtml = DOMPurify.sanitize(html); // Sanitizar el HTML

    return { __html: cleanHtml }; // Retornar el HTML sanitizado
  };

  return (
    <div className="preview-markdown">
      <div className="p-2">
        <h5 className="title">{title}</h5>
      </div>
      <div id="preview" dangerouslySetInnerHTML={renderMarked()} />
    </div>
  );
};

PreviewMarkdown.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
