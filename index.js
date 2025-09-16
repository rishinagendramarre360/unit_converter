/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let btnEl = document.getElementById("btn")
let inputEl = document.getElementById("input-el")
let lenEl = document.getElementById("len")
let volEl = document.getElementById("vol")
let massEl = document.getElementById("mass")


btnEl.addEventListener("click", function() {
    let feetVal = inputEl.value * 3.28084
    let meterVal = inputEl.value / 3.281
    
    let gallonVal = inputEl.value * 0.264
    let literVal = inputEl.value / 0.264
    
    let poundVal = inputEl.value * 2.204
    let kiloVal = inputEl.value / 2.204
    
    let lenVal = `${inputEl.value} meters = ${feetVal.toFixed(3)} feet | ${inputEl.value} feet = ${meterVal.toFixed(3)} meters`
    
    let volVal = `${inputEl.value} liters = ${gallonVal.toFixed(3)} gallons | ${inputEl.value} gallons = ${literVal.toFixed(3)} liters`
    
    let massVal = `${inputEl.value} kilos = ${poundVal.toFixed(3)} pounds | ${inputEl.value} pounds = ${kiloVal.toFixed(3)} kilos`
    
    lenEl.innerHTML += `<p id = "len-el">${lenVal}</P>`
    volEl.innerHTML += `<p id = "vol-el">${volVal}</P>`
    massEl.innerHTML += `<p id = "mass-el">${massVal}</P>` 
})
