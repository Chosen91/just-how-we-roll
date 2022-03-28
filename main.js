sixe.push(roll);
console.log(sixes);

d6Mean.innerText = getAverage(sixes);
d6Median.innerText = getMedian(sixes);
d6Mode.innerText = getMode(sixes);



function rolldose6One() {
doubleSixes.push(roll);
console.log(doubleSixes);

doubleD6Mean.innerText = getAverage(doubleSixes);
doubleD6Median.innerText = getMedian(doubleSixes);
doubleD6Mode.innerText = getMode(doubleSixes);


}

function rollDoubleD6Two() {
doubleSixes.push(roll);
console.log(doubleSixes);

doubleD6Mean.innerText = getAverage(doubleSixes);
doubleD6Median.innerText = getMedian(doubleSixes);
doubleD6Mode.innerText = getMode(doubleSixes);


}

function rollD12() {

twelves.push(roll);
console.log(twelves);

d12Mean.innerText = getAverage(twelves);
d12Median.innerText = getMedian(twelves);
d12Mode.innerText = getMode(twelves);

}

function rollD20() {

twenties.push(roll);
console.log(twenties);

d20Mean.innerText = getAverage(twenties);
d20Median.innerText = getMedian(twenties);
d20Mode.innerText = getMode(twenties);

}