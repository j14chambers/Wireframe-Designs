function nameGenerator(){

    var userName = document.getElementsByClassName("input-field")[0].value;
    console.log(document.getElementsByClassName("input-field")[0].value);

    console.log(document.querySelector('.input-field').value);

	$("button").click(function(){ 
        console.log('clicked');
        console.log('Name: ' + userName);
    
    });
	
}
nameGenerator();