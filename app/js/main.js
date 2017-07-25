var	button = document.getElementById('button'),
	results = document.getElementById('results');

button.addEventListener('click', function() {
	// console.log(input.value + ' ' + url.value)
	var ul = document.getElementById('categories');
	var li = document.createElement('li');
	var a = document.createElement('a');
	console.log(ul);

	for(var i = 0; i < 5; i++) {
		var input = document.getElementById('input' + [i]);
		var link = document.getElementById('urlValue' + [i]);
		var br = document.createElement('br');
		var h1 = document.createElement('h1');
		var parsed;
		parsed = '<li>' + '<a href="' + link.value + '>' + input.value + '</a>' + '</li>';
		h1.textContent = parsed;

		results.appendChild(h1);
	
	}
	// results.textContent = '<a href="' + url.value + '>' + input.value + '</a>';
})