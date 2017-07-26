var results = document.getElementById('results');
var inputArea = document.getElementById('inputArea');
var listCategories = document.getElementById('listCategories');
var listAmount = document.getElementById('listAmount');
var generateBtn = document.getElementById('generateBtn');

generateBtn.addEventListener('click', function() {
	var totalListAmount = parseInt(listAmount.value);
	var parseBtn = document.createElement('button');
	var subCatNameArr = [];
	var subCatURLArr = [];

	generateBtn.setAttribute('disabled', 'true');
	parseBtn.className = 'btn btn-primary';
	parseBtn.textContent = 'Parse HTML';

	console.log(totalListAmount);

	for(var i = 0; i < totalListAmount; i++) {
		var subCatName = document.createElement('input');
		var subCatURL = document.createElement('input');
		var catNum = document.createElement('h2');

		catNum.textContent = 'Category ' + (i + 1);


		subCatName.className = 'subCatName' + [i] + ' form-control';
		subCatName.setAttribute('placeholder', 'Enter Category Name');

		subCatURL.className = 'subCatURL' + [i] + ' form-control';
		subCatURL.setAttribute('placeholder', 'Enter URL');

		subCatNameArr.push(subCatName);
		subCatURLArr.push(subCatURL);

		listCategories.appendChild(catNum);
		listCategories.appendChild(subCatName);
		listCategories.appendChild(subCatURL);

	}
	listAmount.value = '';
	console.log(subCatNameArr);
	console.log(subCatURLArr);

	inputArea.appendChild(parseBtn);

	parseBtn.addEventListener('click', function() {
		var parsedData;
		var start = document.createElement('h2');
		start.textContent = '<ul>'
		var end = document.createElement('h2');
		end.textContent = '</ul>'

		console.log(subCatURLArr.value)

		results.appendChild(start);

		for(var i = 0; i < totalListAmount; i++) {
			if(subCatURLArr[i].value === '' || subCatNameArr[i].value === '') {
				alert('You forgot to enter data at Sub-category ' + (i + 1));
			} else {
				parsedData = '<li><a href="' + subCatURLArr[i].value + '">' + subCatNameArr[i].value + '</a></li>';

				var plainHTML = document.createElement('h2');
				plainHTML.textContent = parsedData;
				results.appendChild(plainHTML);

				console.log('Value of subCatName at ' + [i] + ' index: ' + subCatNameArr[i].value);
				console.log('Value of subCatURL at ' + [i] + ' index: ' + subCatURLArr[i].value)

				console.log(subCatNameArr[i].value);
				console.log(subCatURLArr[i].value);
			}
		}
		results.appendChild(end);
	})
})






