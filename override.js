var atags = document.getElementsByTagName('a');
for (var i = 0; i < atags.length; i++) {
	var a = atags[i];
	if(a.innerText=="All"){
		a.innerText="All2";
	}
}