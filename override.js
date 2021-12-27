const urlParams = new URLSearchParams(window.location.search);
// console.log(window.location.origin);
const q = urlParams.get('q');
const origin = window.location.origin;
const atags = document.getElementsByTagName('a');


for (var i = 0; i < atags.length; i++) {
	var a = atags[i];
	const params = new URLSearchParams(a.href);
	if (params.has("tbm")) {
		console.log(params.get("tbm"));
	}
}

//all books videos news images maps shopping flights finance

/*
bks
nws
vid
lcl
nws
isch
flm
shop
*/