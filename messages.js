const jokes = {
    joke: ['What do you call a pig that does Karate?', 'Why did the cookie go to the Hospital?',
'What did the toilet say to the other toilet?'], 
    punchline: ['A Pork chop', 'Because he felt crummy', 'You looked flushed'] 
};

function randomNumber(num) {
    //return a number between 0 and num - 1.
    return Math.floor(Math.random() * num);
};

let yourJoke = []; 

//iterate over the Jokes object 
for(let prop in jokes){
    let optionIdx = randomNumber(jokes[prop].length); 
    console.log(optionIdx);
    // use the objects properties to add the joke to the yourJoke array.
    switch(prop) {
        case 'joke':
            yourJoke.push(`${jokes.joke[optionIdx]}`);
            break
        case 'punchline': 
            yourJoke.push(`... ${jokes.punchline[optionIdx]}`); 
            break
        default: 
            yourJoke.push('I dont feel like it.'); 
    }
}; 

function formatMessage() { 
    formatted = yourJoke.join('\n'); 
    console.log(formatted); 
}

formatMessage(yourJoke); 
