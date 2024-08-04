import PropTypes from "prop-types";

export const EditorMarkdown = ({ title, handleChange, text }) => {
  return (
    <div className="flex flex-col h-auto text-gray-700 bg-white shadow-md bg-clip-border p-4">
      <div className="p-2">
        <h5 className="mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {title}
        </h5>
      </div>
      <div>
        <textarea
          onChange={handleChange}
          value={text}
          className="w-full h-auto p-2 border border-gray-300 rounded "
          name="editor"
          rows="10"
        ></textarea>
      </div>
    </div>
  );
};

EditorMarkdown.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
