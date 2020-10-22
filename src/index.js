module.exports = function toReadable (number) {
if (number == 0) return 'zero';

function readUnits(n) {
	if (n == 1) return 'one'
	if (n == 2) return 'two'
	if (n == 3) return 'three'
	if (n == 4) return 'four'
	if (n == 5) return 'five'
	if (n == 6) return 'six'
	if (n == 7) return 'seven'
	if (n == 8) return 'eight'
	if (n == 9) return 'nine'
	if (n == 0) return ''
}
let hundreds;
// let decades;
let units;

let str_hundreds = '';
let str_decades = '';
let str_units = '';

let str = number.toString()
if (str.length == 3){
	str = str.split('');
	hundreds = str.splice(0,1).join('');
	str_hundreds = `${readUnits(hundreds)} hundred `
	str = str.join('');
}

if (str.length == 2) {
	if (str[0] == 1){
		if (str == 10) str_units = 'ten';
		if (str == 11) str_units = 'eleven';
		if (str == 12) str_units = 'twelve';
		if (str == 13) str_units = 'thirteen';
		if (str == 14) str_units = 'fourteen';
		if (str == 15) str_units = 'fifteen';
		if (str == 16) str_units = 'sixteen';
		if (str == 17) str_units = 'seventeen';
		if (str == 18) str_units = 'eighteen';
		if (str == 19) str_units = 'nineteen';
		return `${str_hundreds}${str_units}`.trim()
	}
	if (str[0] == 2) str_decades = 'twenty ';
	if (str[0] == 3) str_decades = 'thirty ';
	if (str[0] == 4) str_decades = 'forty ';
	if (str[0] == 5) str_decades = 'fifty ';
	if (str[0] == 6) str_decades = 'sixty ';
	if (str[0] == 7) str_decades = 'seventy ';
	if (str[0] == 8) str_decades = 'eighty ';
	if (str[0] == 9) str_decades = 'ninety ';
}

if (str.length == 1) return `${readUnits(str)}`;

str = str.split('');
str.splice(0, 1);
units = str[0];
str_units = readUnits(units);

return `${str_hundreds}${str_decades}${str_units}`.trim();
}
