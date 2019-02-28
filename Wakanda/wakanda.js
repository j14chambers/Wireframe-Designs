//This code generates letters from an array that is gathered from a person name. This code outputs a new name in 'Wakanda Translation'.
//This is may not be based on any thing from the movie 'Black Panther'. The translation comes from an image on Instagram.

$('.btn').click(function(){
    var $inputName = document.getElementById('input').value;  //input from HTML stored as $inputName
    $('#results').html(''); 
    nameGenerator($inputName);  // Function for generating Wakanda name
});

//Resets form when a new name is submitted
function resetForm(){
    $('#input').html('');
    $inputName = '';
    console.log('form reset');
};

function nameGenerator(inputName){
    
    var splitLetters = inputName.toLowerCase().split(''); //Lower case all letters from input and split letters into an array
    var wakandaName = [];

    var alphabet = ['a', 'b','c', 'd','e','f','g','h','i', 
    'j', 'k', 'l','m','n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x','y', 'z'];

    var wakandaLetters = ['ka', 'zu', 'mi', 'te', 'ku', 'lu', 
    'ji', 'ri', 'ki','zu', 'me', 'ta', 'rin', 'to', 'mo', 'no',
    'ke', 'shi', 'ari', 'chi', 'do','ru', 'mei', 'na', 'fu', 'z'];

    console.log(inputName);
    console.log(splitLetters);

    //Check the length of both arrays for same length - 26 letters
    console.log(alphabet.length);
    console.log(wakandaLetters.length);


    //With the given input name, each letter goes through a loop to match it up a letter in 'alphabet' to return a letter from 'wakandaLetters'.
    for (var i = 0; splitLetters.length > i; i++) {
        splitLetters[i];
        console.log(splitLetters[i]);

        console.log(alphabet.indexOf(splitLetters[i]));
        lettersFromWakanda = wakandaLetters[alphabet.indexOf(splitLetters[i])]; //Finds if there is a corresponding letter for each letter in the '$inputName' with 'alphabet'.
        console.log(lettersFromWakanda);
        
        wakandaName.push(lettersFromWakanda); //The letter that matches the index from line 44 is return and pushed to 'wakandaName'
    }
    
    wakandaName.join('');
    //Joins 'wakandaName' into a string; was an array
    wakandaName = wakandaName.join('');
    console.log(wakandaName);

    //Return the name to the html file uppercasing the first lettter in 'WakandaName'.
     $('#results').html('<h2>You no longer go by '+ inputName + '. You now will be known as ' + '<br> ' + '</h2>' );
     $('#wakanda-name').html('<h2>' +wakandaName.charAt(0).toUpperCase() +  wakandaName.slice(1) + '</h2>');
     
     resetForm();
};





