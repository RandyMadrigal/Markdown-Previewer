export const List = () => {
  return (
    <section className="py-5 border-b-2">
      <h2 className="font-bold underline"> Unordered Lists</h2>
      <p className="py-2">Use -, *, or + to create unordered lists.</p>
      <ul>
        <li>-Item 1</li>
        <li>-Item 2 </li>
      </ul>

      <h2 className="mt-4 font-bold underline"> Ordered Lists</h2>
      <p className="py-2">Use numbers followed by a period for ordered lists</p>
      <ul className="list-none">
        <li>1. First item</li>
        <li>2. Second item</li>
        <li>3. Third item </li>
      </ul>
    </section>
  );
};
