export const dummy = 0;

export const formatPokemonNumber = (number?: number) => {
  if (!number) return '';

  return number.toString().length <= 3 ? `000${number}`.slice(-3) : number;
};
