export const flatPokemonFlavorText = (flavorText: FlavorTextEntry[]) =>
  /* eslint-disable-next-line implicit-arrow-linebreak */
  flavorText
    .filter((e) => e.language.name === 'en')
    .map((e) => e.flavor_text)
    .reduce(
      (acc, val) => (!acc.includes(val) ? [...acc, val] : acc),
      [] as string[],
    )
    .slice(0, 2);
