export const List = () => {
  return (
    <section className="section list">
      <h2> Unordered Lists</h2>
      <p>Use -, *, or + to create unordered lists.</p>
      <ul>
        <li>-Item 1</li>
        <li>-Item 2 </li>
      </ul>

      <h2 className="mt-4"> Ordered Lists</h2>
      <p>Use numbers followed by a period for ordered lists</p>
      <ul>
        <li>1. First item</li>
        <li>2. Second item</li>
        <li>3. Third item </li>
      </ul>
    </section>
  );
};
