export const currencyConversion = (float: number): string => {
  const newFormat = new Intl.NumberFormat("pt-BR", {
    useGrouping: true,
    minimumFractionDigits: 2,
  });
  return newFormat.format(float);
};
