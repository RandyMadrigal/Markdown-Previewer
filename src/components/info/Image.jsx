export const Image = () => {
  return (
    <section className="py-5 border-b-2">
      <h2> Links</h2>
      <p>To add a link, use: </p>
      <p>
        <span className="text-red-500">[Link text]</span>{" "}
        <span className="text-cyan-600">(http://link-url.com)</span>
      </p>

      <h2> Images</h2>
      <p>To insert an image, use: </p>
      <p>
        <span className="text-red-500">![Alt text]</span>
        <span className="text-cyan-600"> (http://image-url.com)</span>
      </p>
    </section>
  );
};
