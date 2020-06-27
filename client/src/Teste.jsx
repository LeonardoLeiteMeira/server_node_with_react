import React, { useState } from "react";
import axios from "axios";

function Botao() {
	const [variavel, setvariavel] = useState("Inicial");

	async function callAPI() {
		const axiosInstance = axios.create({
			responseType: "json",
			headers: { "content-type": "application/json" },
			timeout: 50000,
		});

		var response = await axiosInstance.get(
			"http://crivo-commitjr-com.umbler.net//api/test"
		);
		console.log(response.data);
		return response;
	}

	async function getMensage1() {
		var response = await callAPI();
		setvariavel(response.data.helloWorld);
	}

	async function getMensage2() {
		var response = await callAPI();
		setvariavel(response.data.BackEnd);
	}

	async function getMensage3() {
		var response = await callAPI();
		setvariavel(response.data.FrontEnd);
	}

	return (
		<>
			<p>{variavel}</p>
			<button className="btn" onClick={() => getMensage1()}>
				helloWorld teste
			</button>

			<button className="btn" onClick={() => getMensage2()}>
				BackEnd
			</button>

			<button className="btn" onClick={() => getMensage3()}>
				FrontEnd
			</button>
		</>
	);
}

export default Botao;
