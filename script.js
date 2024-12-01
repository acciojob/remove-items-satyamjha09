

function removeSelectedItem() {

	const selectElement = document.getElementById("colorSelect");

	const selectedIndex = selectElement.selectedIndex;

  if (selectedIndex !== -1) {
    selectElement.remove(selectedIndex); // Removes the selected option
  } else {
    alert("Please select a color to remove.");
  }
	
	
}