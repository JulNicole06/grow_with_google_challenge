//define default values in case User hits submit without changes
let gridHeight = $("#inputHeight").val()
let gridWidth = $("#inputWidth").val()
let color = $("#colorPicker").val()

//set user defined values for height, width, and color
$("#inputHeight").change(function() {
  gridHeight = $(this).val();
});

$("#inputWidth").change(function() {
  gridWidth = $(this).val();
});

$("#colorPicker").change(function() {
  color = $(this).val();
});

// When form is submitted by the user, call makeGrid()
$('#sizePicker').submit(function makeGrid(event){
	//clear grid when user re-submits form with new values
	$("tbody").remove();

	let rows = "";
	let cols = "";

	//set width of row
	for(let w=0; w<gridWidth; w++){
		cols += "<td class='blank'></td>";
	}

	//set height of columns
	for(let h=0; h<gridHeight; h++){
		rows += "<tr>" + cols + "</tr>";
	}

	//add grid to DOM
	$("#pixelCanvas").append(rows);

	//toggle cell background color when cell is clicked
	$('td').click(function(event){
		if($(event.target).hasClass("blank")){
			$(event.target).css("background-color", color);
			$(event.target).removeClass('blank');
		}
		else{
			$(event.target).css("background-color", 'white');
            $(event.target).addClass('blank');
		}
	})

	//prevent form from automatically refreshing page
	event.preventDefault();

});
