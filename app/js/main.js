var newLinks = document.getElementById('new');
console.log(newLinks);
var subCat = document.getElementsByClassName('subCat');
console.log(subCat);
newLinks.addEventListener('hover', function() {
	subCat.style.display = 'show';
})
