const numSoma1: HTMLElement | null = document.getElementById("numSoma1");
const numSoma2: HTMLElement | null = document.getElementById("numSoma2");
const peso: HTMLElement | null = document.getElementById("peso");
const altura: HTMLElement | null = document.getElementById("altura");
const numMedia1: HTMLElement | null = document.getElementById("numMedia1");
const numMedia2: HTMLElement | null = document.getElementById("numMedia2");
const numMedia3: HTMLElement | null = document.getElementById("numMedia3");
const numMedia4: HTMLElement | null = document.getElementById("numMedia4");
const numMedia5: HTMLElement | null = document.getElementById("numMedia5");

const calcularSoma = document.getElementById("soma");
const calcularImc = document.getElementById("imc");
const calcularMedia = document.getElementById("media");

calcularSoma?.addEventListener("click", renderizaSoma);
calcularImc?.addEventListener("click", renderizaImc);
calcularMedia?.addEventListener("click", renderizaMedia);

function soma(num1: number, num2: number) {
	console.log("A soma é", num1 + num2);
}

function media(
	num1: number,
	num2: number,
	num3: number,
	num4: number,
	num5: number
) {
	const soma = num1 + num2 + num3 + num4 + num5;
	const media = soma / 5;
	console.log("A média é", media);
}

function imc(peso: number, altura: number) {
	const calculoImc = peso / Math.pow(altura, 2);
	console.log("Seu IMC é", calculoImc);
}

function renderizaSoma() {
	soma(
		parseFloat((numSoma1 as HTMLInputElement)?.value),
		parseFloat((numSoma2 as HTMLInputElement)?.value)
	);
}

function renderizaImc() {
	imc(
		parseFloat((peso as HTMLInputElement)?.value),
		parseFloat((altura as HTMLInputElement)?.value)
	);
}

function renderizaMedia() {
	media(
		parseFloat((numMedia1 as HTMLInputElement)?.value),
		parseFloat((numMedia2 as HTMLInputElement)?.value),
		parseFloat((numMedia3 as HTMLInputElement)?.value),
		parseFloat((numMedia4 as HTMLInputElement)?.value),
		parseFloat((numMedia5 as HTMLInputElement)?.value)
	);
}
