import PropTypes from "prop-types";

export const EditorMarkdown = ({ title, handleChange, text, rows }) => {
  return (
    <div className="editor-markdown">
      <div className="p-2">
        <h5 className="title">{title}</h5>
      </div>
      <div>
        <textarea
          id="editor"
          onChange={handleChange}
          value={text}
          name="editor"
          rows={rows}
        ></textarea>
      </div>
    </div>
  );
};

EditorMarkdown.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
};
