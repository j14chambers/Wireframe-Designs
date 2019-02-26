
$('.btn').click(function(){
    var $inputName = document.getElementById('input').value;
    $('#results').html('');
    nameGenerator($inputName);
});

function resetForm(){
    $('#input').html('');
    $inputName = '';
    console.log('form reset');
};

function nameGenerator(inputName){
    
    var splitLetters = inputName.toLowerCase().split('');
    var wakandaName = [];
    var alphabet = ['a', 'b','c', 'd','e','f','g','h','i', 'j', 'k', 'l','m','n', 'o', 'p', 'q', 'r', 's', 't','u', 'v', 'w', 'x','y', 'z'];
    var wakandaLetters = ['ka', 'zu', 'mi', 'te', 'ku', 'lu', 'ji', 'ri', 'ki','zu', 'me', 'ta', 'rin', 'to', 'mo', 'no','ke', 'shi', 'ari', 'chi', 'do','ru', 'mei', 'na', 'fu', 'z'];

    console.log(inputName);
    console.log(splitLetters);

    console.log(alphabet.length);
    console.log(wakandaLetters.length);

    for (var i = 0; splitLetters.length > i; i++) {
        splitLetters[i];
        console.log(splitLetters[i]);

        console.log(alphabet.indexOf(splitLetters[i]));
        lettersFromWakanda = wakandaLetters[alphabet.indexOf(splitLetters[i])];
        console.log(lettersFromWakanda);
        
        wakandaName.push(lettersFromWakanda);
    }
    
    wakandaName.join('');
    
    wakandaName = wakandaName.join('');
    console.log(wakandaName);
    //Return the name to the html file.
     $('#results').html('<h2>You no longer go by '+ inputName + '. You now will be known as ' + '<br> ' + '</h2>' );
     $('#wakanda-name').html('<h2>' +wakandaName.charAt(0).toUpperCase() +  wakandaName.slice(1) + '</h2>');
     
     resetForm();
};





