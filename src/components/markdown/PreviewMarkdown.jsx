import PropTypes from "prop-types";
import { marked } from "marked";
import DOMPurify from "dompurify";

export const PreviewMarkdown = ({ title, text }) => {
  const renderMarked = () => {
    const dirtyText = text;
    const html = marked.parse(dirtyText); // Convertir Markdown a HTML
    const cleanHtml = DOMPurify.sanitize(html); // Sanitizar el HTML
    console.log(cleanHtml);

    return { __html: cleanHtml }; // Retornar el HTML sanitizado
  };

  return (
    <div className="flex flex-col shadow-md bg-clip-border p-4">
      <div className="p-2">
        <h5 className="mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {title}
        </h5>
      </div>
      <div dangerouslySetInnerHTML={renderMarked()} />
    </div>
  );
};

PreviewMarkdown.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
