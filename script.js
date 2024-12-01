

function removeSelectedItem() {

	const seletedElement = document.getElementById("colorSelect");

	const seletedIndex = seletedElement.seletedIndex;

	if(seletedIndex !== -1) {
		seletedElement.remove(seletedIndex);
	} else {
		alert("Please select a color to remove.");
	}
	
	
}