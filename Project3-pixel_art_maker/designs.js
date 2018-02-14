// Select color input
let gridHeight = $("#inputHeight").val()
let gridWidth = $("#inputWidth").val()


$("#inputHeight").change(function() {
  gridHeight = $(this).val();
});

$("#inputWidth").change(function() {
  gridWidth = $(this).val();
});


// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
	let rows = "";
	let cols= "";

	//determine length of one row
	for(let w=0; w<gridWidth; w++){
		cols += "<td></td>";
	}

	for(let h=0; h < gridHeight; h++){
		rows += "<tr>" + cols + "</tr>";
	}

	$("#pixelCanvas").append(rows);
	event.preventDefault();
});
