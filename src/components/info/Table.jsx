export const Table = () => {
  const table = `
    | Encabezado 1 | Encabezado 2 |
    |--------------|--------------|
    | Fila 1, Col 1 | Fila 1, Col 2 |
    | Fila 2, Col 1 | Fila 2, Col 2 |
      `;

  return (
    <section className="section table">
      <h2>Table</h2>
      <p>You can create tables using | for columns and - for header rows:</p>

      <pre>{table}</pre>
    </section>
  );
};
