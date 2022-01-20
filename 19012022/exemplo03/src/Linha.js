import React from "react";

export default function Linha({pokemon, remover}){
	return(
		<>
		<li>
			{pokemon.name}
			<button onClick={() => remover(pokemon.name)}>Remover</button>
		</li>
		</>
	)
}
