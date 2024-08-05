export const getRows = (text) => {
  let rows = 0;

  const saltoLinea = text.split("").find((x) => {
    if (x === "\n") {
      rows += 1;
    }
  });

  console.log(rows);

  return rows * 1.5;
};
