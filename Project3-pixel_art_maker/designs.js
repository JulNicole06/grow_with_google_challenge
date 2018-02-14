let gridHeight = $("#inputHeight").val()
let gridWidth = $("#inputWidth").val()
let color = $("#colorPicker").val()

$("#inputHeight").change(function() {
  gridHeight = $(this).val();
});

$("#inputWidth").change(function() {
  gridWidth = $(this).val();
});

$("#colorPicker").change(function() {
  color = $(this).val();
});

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
	//clear grid each time user selects new sizes
	$("tbody").remove();

	let rows = "";
	let cols = "";

	for(let w=0; w<gridWidth; w++){
		cols += "<td></td>";
	}

	for(let h=0; h<gridHeight; h++){
		rows += "<tr>" + cols + "</tr>";
	}

	$("#pixelCanvas").append(rows);
	event.preventDefault();
});

