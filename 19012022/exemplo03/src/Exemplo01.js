import React, { useState } from "react";

export default function Exemplo01(){
	const [livros, setLivros] = useState([
		{ id: 1, nome: "React"},
		{ id: 2, nome: "Java"},
		{ id: 3, nome: "Node"},
	]);

	function addLivro(){
		const newLivro = { id: Math.random, nome: 'CSS'}
		setLivros([...livros, newLivro]);
	}

	return (
		<>
		<ul>
			{livros.map((elemento) =>(
				<li key={elemento.id}>{elemento.nome}</li>
			))}
		</ul>

		<button onClick={() => addLivro()}>Adicionar Livro</button>

		</>
	)
}
