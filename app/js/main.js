// DECLARING ALL GLOBAL VARIABLES THAT ARE GRABBING HTML ELEMENTS BY ID
var results = document.getElementById('results');
var inputArea = document.getElementById('inputArea');
var listCategories = document.getElementById('listCategories');
var listAmount = document.getElementById('listAmount');
var generateBtn = document.getElementById('generateBtn');
var listObj = {};
var totalList = [];

generateBtn.addEventListener('click', function() {
	var totalListAmount = parseInt(listAmount.value);
	var parseBtn = document.createElement('button');
	var resetBtn = document.createElement('button');

	// CREATE EMPTY ARRAYS TO STORE THE INPUT OF SUBCATEGORY NAME AND URL
	var subCatNameArr = [];
	var subCatURLArr = [];

	generateBtn.setAttribute('disabled', 'true');

	parseBtn.className = 'btn btn-primary';
	parseBtn.textContent = 'Parse HTML';

	resetBtn.className = 'btn btn-danger';
	resetBtn.textContent = 'Reset';

	console.log(totalListAmount);

	for(var i = 0; i < totalListAmount; i++) {
		var subCatName = document.createElement('input');
		var subCatURL = document.createElement('input');
		var catNum = document.createElement('h2');

		// SINCE ARRAYS START AT 0 INDEX, ADD 1 TO DISPLAY THE CORRECT NUMBER OF CATEGORIES
		catNum.textContent = 'Category ' + (i + 1);

		// DYNAMICALLY ADD CLASSNAMES FOR FORMATTING
		subCatName.className = 'subCatName' + [i] + ' form-control';
		subCatName.setAttribute('placeholder', 'Enter Category Name');

		subCatURL.className = 'subCatURL' + [i] + ' form-control';
		subCatURL.setAttribute('placeholder', 'Enter URL');

		// PUSH ALL SUBCATEGORY NAME AND URL ELEMENTS INTO RESPECTIVE ARRAY
		subCatNameArr.push(subCatName);
		subCatURLArr.push(subCatURL);

		// APPEND THE NEWLY GENERATED INPUTS INTO THE DOM
		listCategories.appendChild(catNum);
		listCategories.appendChild(subCatName);
		listCategories.appendChild(subCatURL);

	}
	// CLEAR THE CURRENT VALUE OF THE #listAmount TO AN EMPTY STRING
	listAmount.value = '';
	// console.log(subCatNameArr);
	// console.log(subCatURLArr);

	inputArea.appendChild(parseBtn);
	inputArea.appendChild(resetBtn);

	// RESET INPUT VALUES TO EMPTY STRING
	resetBtn.addEventListener('click', function() {
		for(var i = 0; i < totalListAmount; i++) {
			subCatNameArr[i].value = '';
			subCatURLArr[i].value = '';
			results.textContent = '';
		}
	})

	// SET AN EVENT LISTENER FOR THE BUTTON THAT WILL PARSE OUR INPUT INTO RAW HTML ONTO THE DOM
	parseBtn.addEventListener('click', function() {
		var parsedData;

		// THESE ARE VARIABLES THAT WILL BE THE STARTING AND CLOSING RAW HTML UL ELEMENTS
		var start = document.createElement('h2');
		start.textContent = '<ul>'
		var end = document.createElement('h2');
		end.textContent = '</ul>'

		// console.log(subCatURLArr.value)

		// APPEND STARTING RAW UL TO DOM
		results.appendChild(start);

		// RUN A FOR LOOP TO ITERATE THROUGH EACH INPUT TO GRAB VALUE AND PARSE INTO RAW HTML ONTO THE DOM
		for(var i = 0; i < totalListAmount; i++) {
			if(subCatURLArr[i].value === '' || subCatNameArr[i].value === '') {
				alert('You forgot to enter data at Sub-category ' + (i + 1));
			} else {
				parsedData = '<li><a href="' + subCatURLArr[i].value + '">' + subCatNameArr[i].value + '</a></li>';

				var plainHTML = document.createElement('h2');
				plainHTML.textContent = parsedData;
				results.appendChild(plainHTML);

				listObj.subCatNameObj = subCatNameArr[i].value;
				totalList.push(listObj);

				// console.log('Value of subCatName at ' + [i] + ' index: ' + subCatNameArr[i].value);
				// console.log('Value of subCatURL at ' + [i] + ' index: ' + subCatURLArr[i].value)

				// console.log(subCatNameArr[i].value);
				// console.log(subCatURLArr[i].value);
			}
		}
		console.log(totalList);
		// APPEND CLOSING RAW UL TAG
		results.appendChild(end);
	})
})






