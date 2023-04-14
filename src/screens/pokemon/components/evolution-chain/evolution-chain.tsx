import { Flex } from "theme-ui";
import { PokemonCard } from "../../../../components/pokemon-card/pokemon-card";
import { MdArrowForwardIos } from "react-icons/md";

interface EvolutionChainProps {
    chain?: Chain;
}

function getPokemonChain(chain: Chain) {
    const pokemonChain = [];
    let current = chain;

    while (current) {
        pokemonChain.push(current.species.name);
        current = current.evolves_to?.[0];
    }

    return pokemonChain;
}

export const EvolutionChain = ({ chain }: EvolutionChainProps) => {
    if (!chain) {
        return null;
    }

    const pokemonChain = getPokemonChain(chain);


    return <Flex sx={{justifyContent: 'center', width: '100%'}}>
        {pokemonChain.map((pokemon, index) => {
            return <Flex sx={{alignItems: 'center'}}>
                <PokemonCard pokemon={{ name: pokemon }} />
                {index < pokemonChain.length - 1 && <MdArrowForwardIos size={52} />}
            </Flex>
        })}
    </Flex>;
};