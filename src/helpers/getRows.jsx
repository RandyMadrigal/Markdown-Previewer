export const getRows = (text) => {
  let rows = 0;

  const lineBreak = text.split("").find((x) => {
    if (x === "\n") {
      rows += 1;
    }
  });

  return rows * 1.5;
};
