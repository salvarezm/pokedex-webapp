/** @jsxImportSource theme-ui */
import { getColor, lighten } from "@theme-ui/color";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MdCatchingPokemon } from "react-icons/md";
import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Link,
  Text,
  ThemeUICSSObject,
} from "theme-ui";
import {
  useGetEvolutionChainQuery,
  useGetPokemonByNameQuery,
  useGetPokemonSpeciesQuery,
} from "../../services/pokemon-api";
import { theme } from "../../shared/theme";
import { formatPokemonNumber } from "../../shared/util";
import { BasePoints } from "./components/base-points";
import { flatPokemonFlavorText } from "./util";
import { EvolutionChain } from "./components/evolution-chain";

interface Characteristic {
  name: string;
  value?: number;
}

export const Pokemon = () => {
  let { pokemonName = "" } = useParams();
  const navigate = useNavigate();
  const [characteristics, setCharacteristics] = useState<Characteristic[]>([]);
  const [activeFlavorText, setActiveFlavorText] = useState(0);
  const [idEvolutionChain, setIdEvolutionChain] = useState("");
  const { data } = useGetPokemonByNameQuery(pokemonName, {
    skip: !pokemonName,
  });
  const { data: speciesData } = useGetPokemonSpeciesQuery(data?.id, {
    skip: !data?.id,
  });

  useEffect(() => {
    const idEvolutionChain2 = speciesData?.evolution_chain?.url
      ?.split("/")
      ?.reverse();
    setIdEvolutionChain(idEvolutionChain2?.[1] || "");
  }, [speciesData]);

  const { data: evolutionChain } = useGetEvolutionChainQuery(idEvolutionChain, {
    skip: !idEvolutionChain,
  });

  useEffect(() => {
    const characteristics: Characteristic[] = [];
    characteristics.push({
      name: "Weight",
      value: data?.weight,
    });

    characteristics.push({
      name: "Height",
      value: data?.height,
    });

    characteristics.push({
      name: "Base experience",
      value: data?.base_experience,
    });

    setCharacteristics(characteristics);
  }, [data]);

  return (
    <>
      {/* header */}
      <Flex sx={{ flexDirection: "row", justifyContent: "center" }}>
        <Text variant="heading">{pokemonName}</Text>
      </Flex>

      <Flex sx={{ flexDirection: "row", gap: "16px" }}>
        {/* first section */}
        <Flex sx={{ flexDirection: "column", width: "100%", gap: "16px" }}>
          <Card variant="pokeImg">
            <img
              width={"100%"}
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatPokemonNumber(
                data?.id
              )}.png`}
            />
          </Card>
          <BasePoints stats={data?.stats} />
        </Flex>
        {/* second section */}
        <Flex sx={{ flexDirection: "column", width: "100%", gap: "16px" }}>
          {speciesData?.flavor_text_entries &&
            flatPokemonFlavorText(speciesData.flavor_text_entries).map(
              (flavorText, index) => (
                <Card
                  variant="standarCard"
                  key={flavorText}
                  hidden={index !== activeFlavorText}
                >
                  {flavorText}
                </Card>
              )
            )}
          <Flex sx={{ gap: "8px" }}>
            <Text variant="labelHeading">Versions:</Text>

            <MdCatchingPokemon
              size={24}
              sx={{ cursor: "pointer", color: "blue" }}
              onClick={() => setActiveFlavorText(0)}
            />
            <MdCatchingPokemon
              size={24}
              sx={{ cursor: "pointer", color: "red" }}
              onClick={() => setActiveFlavorText(1)}
            />
          </Flex>
          <Card
            variant="standarCard"
            sx={{ backgroundColor: getColor(theme, "primary"), width: "100%" }}
          >
            <Flex
              sx={{ flexDirection: "row", width: "100%", flexWrap: "wrap" }}
            >
              {characteristics.map((characteristic, index) => (
                <Flex
                  key={characteristic.name}
                  sx={{ width: "50%", flexDirection: "column", gap: "8px" }}
                >
                  <Flex>
                    <Text
                      variant="labelHeading"
                      sx={{ color: getColor(theme, "white") }}
                    >
                      {characteristic.name}
                    </Text>
                  </Flex>
                  <Flex>
                    <Text variant="labelHeading">{characteristic.value}</Text>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Card>
          <Text variant="labelHeading">Type:</Text>
          <Flex sx={{ gap: "8px" }}>
            {data?.types.map((type, index) => (
              <Badge
                sx={{ fontSize: 2, p: 2 }}
                variant={type.type.name}
                key={type.type.name}
              >
                {type.type.name}
              </Badge>
            ))}
          </Flex>
          <Text variant="labelHeading">Moves:</Text>
          <Flex sx={{ flexWrap: "wrap", gap: 2 }}>
            {data?.moves.slice(0, 50).map((move, index) => (
              <Badge
                sx={{ fontSize: 1, p: 1 }}
                variant="primary"
                key={move.move.name}
              >
                {move.move.name}
              </Badge>
            ))}
          </Flex>
        </Flex>
      </Flex>
      <Flex sx={{ flexDirection: "column" }}>
        <Text variant="labelHeading">Evolutions</Text>
        <EvolutionChain chain={evolutionChain?.chain} />
      </Flex>
      <Flex sx={{ flexDirection: "row-reverse", mt: "16px" }}>
        <Link href="#!" onClick={() => navigate("/")}>
          <Button variant="fire" onClick={() => navigate("/")}>
            Ir a la pokedex
          </Button>
        </Link>
      </Flex>
    </>
  );
};
