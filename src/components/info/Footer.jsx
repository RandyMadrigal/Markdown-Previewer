export const Footer = () => {
  return (
    <section className="py-5 border-b-2">
      <h2 className="font-bold underline">Conclusion</h2>
      <p className="py-2">
        This is a quick guide to getting started with markdown
      </p>
      <p className="py-2">
        For more information:
        <a
          href="https://www.markdownguide.org/basic-syntax/"
          target="_blank"
          className="bg-green-600 mx-2 p-2 rounded-xl text-white font-bold hover:bg-green-800"
        >
          Click here
        </a>
      </p>
    </section>
  );
};
