"use strict";
const numSoma1 = document.getElementById("numSoma1");
const numSoma2 = document.getElementById("numSoma2");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const numMedia1 = document.getElementById("numMedia1");
const numMedia2 = document.getElementById("numMedia2");
const numMedia3 = document.getElementById("numMedia3");
const numMedia4 = document.getElementById("numMedia4");
const numMedia5 = document.getElementById("numMedia5");
const calcularSoma = document.getElementById("soma");
const calcularImc = document.getElementById("imc");
const calcularMedia = document.getElementById("media");
calcularSoma === null || calcularSoma === void 0 ? void 0 : calcularSoma.addEventListener("click", renderizaSoma);
calcularImc === null || calcularImc === void 0 ? void 0 : calcularImc.addEventListener("click", renderizaImc);
calcularMedia === null || calcularMedia === void 0 ? void 0 : calcularMedia.addEventListener("click", renderizaMedia);
function soma(num1, num2) {
    console.log("A soma é", num1 + num2);
}
function media(num1, num2, num3, num4, num5) {
    const soma = num1 + num2 + num3 + num4 + num5;
    const media = soma / 5;
    console.log("A média é", media);
}
function imc(peso, altura) {
    const calculoImc = peso / Math.pow(altura, 2);
    console.log("Seu IMC é", calculoImc);
}
function renderizaSoma() {
    soma(parseFloat(numSoma1 === null || numSoma1 === void 0 ? void 0 : numSoma1.value), parseFloat(numSoma2 === null || numSoma2 === void 0 ? void 0 : numSoma2.value));
}
function renderizaImc() {
    imc(parseFloat(peso === null || peso === void 0 ? void 0 : peso.value), parseFloat(altura === null || altura === void 0 ? void 0 : altura.value));
}
function renderizaMedia() {
    media(parseFloat(numMedia1 === null || numMedia1 === void 0 ? void 0 : numMedia1.value), parseFloat(numMedia2 === null || numMedia2 === void 0 ? void 0 : numMedia2.value), parseFloat(numMedia3 === null || numMedia3 === void 0 ? void 0 : numMedia3.value), parseFloat(numMedia4 === null || numMedia4 === void 0 ? void 0 : numMedia4.value), parseFloat(numMedia5 === null || numMedia5 === void 0 ? void 0 : numMedia5.value));
}
