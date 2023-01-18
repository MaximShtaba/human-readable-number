module.exports = function toReadable(number) {

	let hundred = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	let units = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',]
	let unitsTeens1119 = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",];

	let numberLangth = String(number).length;
	let numberText = String(number);

	if (number === 0) {
		return "zero";
	}
	if (numberLangth === 1) {
		return (hundred[number - 1]);
	}
	else if (numberLangth === 2 && Number(numberText[0]) !== 1 && Number(numberText[1]) !== 0) {
		return (units[Number(numberText[0]) - 1] + " " + hundred[(numberText[1]) - 1]);
	}
	else if (numberLangth === 2 && Number(numberText[0]) === 1 && Number(numberText[1]) !== 0) {
		return unitsTeens1119[Number(numberText[1] - 1)]
	}
	else if (numberLangth === 2 && Number(numberText[1]) === 0 && Number(numberText[0]) !== 1) {
		return units[Number(numberText[0]) - 1]
	}
	else if (number === 10) {
		return "ten"
	}

	else if (numberLangth === 3 && Number(numberText[1]) === 0 && Number(numberText[2]) === 0) {     //100,400,500,600 ,900
		return hundred[Number(numberText[0]) - 1] + " hundred";
	}
	else if (numberLangth === 3 && Number(numberText[1]) === 0 && Number(numberText[2]) !== 0) {   //101===909
		return hundred[Number(numberText[0]) - 1] + " hundred " + hundred[(numberText[2]) - 1];
	}
	else if (numberLangth === 3 && Number(numberText[1]) !== 1 && Number(numberText[2]) !== 0) {//121=999
		return hundred[Number(numberText[0]) - 1] + " hundred " + (units[Number(numberText[1]) - 1] + " " + hundred[(numberText[2]) - 1]);
	}
	else if (numberLangth === 3 && Number(numberText[1]) === 1 && Number(numberText[2]) !== 0) {
		return hundred[Number(numberText[0]) - 1] + " hundred " + unitsTeens1119[Number(numberText[2] - 1)];
	}
	else if (numberLangth === 3 && Number(numberText[2]) === 0 && Number(numberText[1]) !== 1) {
		return hundred[Number(numberText[0]) - 1] + " hundred " + units[Number(numberText[1] - 1)];
	}
	else if (numberLangth === 3 && Number(numberText[2]) === 0 && Number(numberText[1]) === 1) {
		return hundred[Number(numberText[0]) - 1] + " hundred " + 'ten';
	}
}
