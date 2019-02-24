var $inputName = document.getElementById('input').value;
    // var userName = document.getElementsByClassName("input-field")[0].value;
    //console.log(document.querySelector('.input-field').value);

    $("button").click(function(){ 
        console.log('clicked');
        console.log('$inputName: ' + $inputName);
    
    });
nameGenerator($inputName);

function nameGenerator(wakandaName){

    var alphabet = ['a', 'b','c', 'd','e','f','g','h','i', 'j', 'k', 'l','m','n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x','y', 'z'];

    var wakandaLetters = ['ka', 'zu', 'mi', 'te', 'ku', 'lu', 'ji', 'ri', 'ki','zu', 'me', 'ta', 'rin', 'to', 'mo', 'no','ke', 'shi', 'ari', 'chi', 'do','ru', 'mei', 'na', 'fu', 'z'];

};

