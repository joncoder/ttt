var rl = require('readline-sync');

function clear_screen() {
	print('\033c');
}

function print(string) {
	console.log(string);
}

function ask(question, limit) {
	return rl.question("\n" + question + "\n", limit);
}

exports.clear_screen = clear_screen;
exports.print = print;
exports.ask = ask;