function clear_screen() {}

function print(string) {
	return string;
}

function ask(question, limits) {
	var limits = limits || {},
		rand;
	if (limits.limit === undefined) {
		return "Mock answer";
	}
	rand = Math.floor(Math.random() * limits.limit.length);
	return limits.limit[rand];
	
}

exports.clear_screen = clear_screen;
exports.print = print;
exports.ask = ask;