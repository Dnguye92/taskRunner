// DECLARING ALL GLOBAL VARIABLES THAT ARE GRABBING HTML ELEMENTS BY ID
var results = document.getElementById('results');
var inputArea = document.getElementById('inputArea');
var listCategories = document.getElementById('listCategories');
var jsonResults = document.getElementById('jsonResults');
var listAmount = document.getElementById('listAmount');
var generateBtn = document.getElementById('generateBtn');
var totalList = [];

generateBtn.addEventListener('click', function() {
	var totalListAmount = parseInt(listAmount.value);
	var parseBtn = document.createElement('button');
	var resetBtn = document.createElement('button');

	// CREATE EMPTY ARRAYS TO STORE THE INPUT OF SUBCATEGORY NAME AND URL
	var subCatNameArr = [];
	var subCatURLArr = [];
	var level2CatArr = [];

	generateBtn.setAttribute('disabled', 'true');

	parseBtn.className = 'btn btn-primary';
	parseBtn.textContent = 'Parse HTML';

	resetBtn.className = 'btn btn-danger';
	resetBtn.textContent = 'Reset';

	console.log(totalListAmount);

	for(var i = 0; i < totalListAmount; i++) {
		var subCatName = document.createElement('input');
		var subCatURL = document.createElement('input');
		var level2List = document.createElement('input');
		var catNum = document.createElement('h2');

		// SINCE ARRAYS START AT 0 INDEX, ADD 1 TO DISPLAY THE CORRECT NUMBER OF CATEGORIES
		catNum.textContent = 'Category ' + (i + 1);

		// DYNAMICALLY ADD CLASSNAMES FOR FORMATTING
		subCatName.className = 'subCatName' + [i] + ' form-control';
		subCatName.setAttribute('placeholder', 'Enter L-1 Name');

		subCatURL.className = 'subCatURL' + [i] + ' form-control';
		subCatURL.setAttribute('placeholder', 'Enter L-2 Name');

		level2List.className = 'level_2-list' + [i] + ' form-control';
		level2List.setAttribute('placeholder', 'How many L-2 Categories?');

		// PUSH ALL SUBCATEGORY NAME AND URL ELEMENTS INTO RESPECTIVE ARRAY
		subCatNameArr.push(subCatName);
		subCatURLArr.push(subCatURL);
		level2CatArr.push(level2List);

		// APPEND THE NEWLY GENERATED INPUTS INTO THE DOM
		listCategories.appendChild(catNum);
		listCategories.appendChild(subCatName);
		listCategories.appendChild(subCatURL);
		listCategories.appendChild(level2List);

	}
	// CLEAR THE CURRENT VALUE OF THE #listAmount TO AN EMPTY STRING
	listAmount.value = '';

	inputArea.appendChild(parseBtn);
	inputArea.appendChild(resetBtn);

	// RESET INPUT VALUES TO EMPTY STRING
	resetBtn.addEventListener('click', function() {
		for(var i = 0; i < totalListAmount; i++) {
			subCatNameArr[i].value = '';
			subCatURLArr[i].value = '';
			level2CatArr[i].value = '';
			results.textContent = '';
			// listCategories.textContent = '';
			// generateBtn.removeAttribute('disabled');
		}
	})

	// SET AN EVENT LISTENER FOR THE BUTTON THAT WILL PARSE OUR INPUT INTO RAW HTML ONTO THE DOM
	parseBtn.addEventListener('click', function() {
		var parsedData;
		var jsonText = document.createElement('p');
		var jsonTextHeader = document.createElement('h2');
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
				var listObj = {};
				var level2ListArr = [];
				var level2Obj = {};
				
				parsedData = '<li><a href="' + subCatURLArr[i].value + '">' + subCatNameArr[i].value + '</a></li>';

				var plainHTML = document.createElement('h2');
				plainHTML.textContent = parsedData;
				results.appendChild(plainHTML);

				level2ListArr.push(level2CatArr[i].value);

				listObj['level-1'] = subCatNameArr[i].value;
				listObj['level-2-list'] = level2ListArr;
				// listObj['level-2-list'][0]['l2-name'] = level2CatArr[i].value;
				console.log(level2CatArr[i].value);
				totalList.push(listObj);
			}
		}
		console.log(totalList);
		jsonText.textContent = JSON.stringify(totalList, null, 4);
		jsonTextHeader.textContent = 'JSON Results Below';
		jsonResults.appendChild(jsonTextHeader);
		jsonResults.appendChild(jsonText);
		// APPEND CLOSING RAW UL TAG
		results.appendChild(end);
	})
})






