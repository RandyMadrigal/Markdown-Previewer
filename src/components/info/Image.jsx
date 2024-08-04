export const Image = () => {
  return (
    <section className="py-5 border-b-2">
      <h2 className="font-bold underline"> Links</h2>
      <p className="py-2">To add a link, use: </p>
      <p className="py-2">
        <span className="text-red-500">[Link text]</span>{" "}
        <span className="text-cyan-600">(http://link-url.com)</span>
      </p>

      <h2 className="font-bold underline"> Images</h2>
      <p className="py-2">To insert an image, use: </p>
      <p className="py-2">
        <span className="text-red-500">![Alt text]</span>
        <span className="text-cyan-600"> (http://image-url.com)</span>
      </p>
    </section>
  );
};
