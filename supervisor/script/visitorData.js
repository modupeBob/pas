$(document).ready(function(){
	$.getJSON("visitorData.json", function(data){
		var visitor_data='';
		$.each(data, function(key, value){
			visitor_data +='<tr>';
			visitor_data += '<td>'+value.fname+'</td>';
			visitor_data += '<td>'+value.email+'</td>';
			visitor_data += '<td>'+value.visiting+'</td>';
			visitor_data += '<td>'+value.date+'</td>';
			
			visitor_data +='</tr>';

		});
		$('#visitorData').append(visitor_data);

		

	});
});
