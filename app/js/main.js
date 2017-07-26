// var	button = document.getElementById('button'),
// 	results = document.getElementById('results');

// button.addEventListener('click', function() {
// 	// console.log(input.value + ' ' + url.value)
// 	var li = document.createElement('li');
// 	var a = document.createElement('a');
// 	console.log(ul);

// 	// for(var i = 0; i < 5; i++) {
// 	// 	var input = document.getElementById('input' + [i]);
// 	// 	var link = document.getElementById('urlValue' + [i]);
// 	// 	var br = document.createElement('br');
// 	// 	var h1 = document.createElement('h1');
// 	// 	var parsed;
// 	// 	parsed = '<li>' + '<a href="' + link.value + '>' + input.value + '</a>' + '</li>';
// 	// 	h1.textContent = parsed;

// 	// 	results.appendChild(h1);
	
// 	// }
// 	// results.textContent = '<a href="' + url.value + '>' + input.value + '</a>';
// })

var results = document.getElementById('results');
var listAmount = document.getElementById('listAmount');
var generateBtn = document.getElementById('generateBtn');

generateBtn.addEventListener('click', function() {
	var totalListAmount = parseInt(listAmount.value);
	var parseBtn = document.createElement('button');
	var subCatNameArr = [];
	var subCatURLArr = [];

	parseBtn.className = 'btn btn-primary';
	parseBtn.textContent = 'Parse HTML';

	console.log(totalListAmount);

	for(var i = 0; i < totalListAmount; i++) {
		var subCatName = document.createElement('input');
		var subCatURL = document.createElement('input');
		var catNum = document.createElement('h2');

		catNum.textContent = i + 1;


		subCatName.className = 'subCatName form-control';
		subCatName.setAttribute('placeholder', 'Enter Category Name');

		subCatURL.className = 'subCatURL form-control';
		subCatURL.setAttribute('placeholder', 'Enter URL');

		results.appendChild(catNum);
		results.appendChild(subCatName);
		results.appendChild(subCatURL);

		console.log(subCatName);
		console.log(subCatURL);

	}

	results.appendChild(parseBtn);

	parseBtn.addEventListener('click', function() {
		console.log('This second function works!');
		console.log(document.getElementsByClassName('subCatName'))
		for(var i = 0; i < totalListAmount; i++) {
			
		}

	})
})





