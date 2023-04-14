import { Badge, Box, Card, Flex, Text, ThemeProvider } from "theme-ui";
import { useGetPokemonByNameQuery } from "../../services/pokemon-api";
import { lighten } from "@theme-ui/color";
import { useNavigate } from "react-router-dom";

export interface PokemonCardProps {
  pokemon: PokemonListResult;
}

export const PokemonCard = ({ pokemon: { name } }: PokemonCardProps) => {
  const { data } = useGetPokemonByNameQuery(name);
  const navigate = useNavigate();

  const handlePokemonClick = () => {
    navigate(`/pokemon/${name}`);
  };

  const idImage =
    data?.id && data?.id.toString().length <= 3
      ? ("000" + data?.id).slice(-3)
      : data?.id;

  return (
    <Card key={`${name}`} variant={"pokecard"} onClick={handlePokemonClick}>
      <Flex sx={{ flexDirection: "column" }}>
        <Card variant="pokeImg" sx={{ width: "205px", height: "205px" }}>
          <img
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idImage}.png`}
          />
        </Card>
        <Box>N* {idImage}</Box>
        <Text variant="text.subheading">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Text>

        <Flex sx={{ flexDirection: "row", gap: "8px" }}>
          {data?.types.map((item) => (
            <Badge variant={item.type.name} key={item.type.name}>
              {item.type.name}
            </Badge>
          ))}
        </Flex>
      </Flex>
    </Card>
  );
};
