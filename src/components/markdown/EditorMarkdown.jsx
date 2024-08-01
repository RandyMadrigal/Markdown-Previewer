export const EditorMarkdown = ({title, handleChange, text}) =>{
   
    return ( 
    <div className="flex flex-col text-gray-700 bg-white shadow-md bg-clip-border p-4">
  
        <div className="p-2">
          <h5 className="mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
           {title}
          </h5>
        </div>
        <div>
            <textarea             
            onChange={handleChange}
            value={text}
            className="w-full p-4" name="editor" rows="16"></textarea>
        </div>
      </div>
      )
}