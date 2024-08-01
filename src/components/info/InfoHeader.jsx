export const InfoHeader = () => {
  return (
    <section className="py-5 border-b-2 ">
      <h2> #Markdown Basics</h2>

      <p>
        # Markdown Basics Markdown is a lightweight markup language that makes
        it easy to create formatted documents. Here`s how to use it so you can
        create rich content with ease. ## Headings You can create headings using
        the `#` symbol. The more `#`s you use, the lower the heading level.
        ```markdown # Heading 1 ## Heading 2 ### Heading 3 #### Heading 4 #####
        Heading 5 ###### Heading 6
      </p>

      <h2> ##Heading</h2>
      <p>
        You can create headings using the `#` symbol. The more `#`s you use, the
        lower the heading level.
      </p>

      <ul>
        <li># Heading 1</li>
        <li>## Heading 2</li>
        <li>### Heading 3</li>
        <li>#### Heading 4</li>
        <li>##### Heading 5</li>
        <li>###### Heading 6</li>
      </ul>
    </section>
  );
};
