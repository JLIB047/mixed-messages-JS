const jokes = {
    joke: ['What do you call a pig that does Karate?', 'Why did the cookie go to the Hospital?',
'What did the toilet say to the other toilet?'], 
    punchline: ['A Pork chop', 'Because he felt crummy', 'You looked flushed'] 
};

function randomNumber(num) {
    //return a number between 0 and num - 1.
    return Math.floor(Math.random() * num);
};

const randomJoke = () => {
let yourJoke = []; 
//iterate over the Jokes object 
    let optionIdx = randomNumber(jokes.punchline.length); 
    console.log(optionIdx);

    if(optionIdx === 0){
        yourJoke.push(`${jokes.joke[0]} ... ${jokes.punchline[0]}`); 
    } 
    if(optionIdx === 1){
        yourJoke.push(`${jokes.joke[1]} ... ${jokes.punchline[1]}`); 
    } else if (optionIdx === 2){
        yourJoke.push(`${jokes.joke[2]} ... ${jokes.punchline[2]}`);
    }
    // use the objects properties to add the joke to the yourJoke array.
    /*switch(prop) {
        case 0: 
            yourJoke.push(`${jokes.joke[optionIdx]}`);
            yourJoke.push(`... ${jokes.punchline[optionIdx]}`);
            break
        case 1: 
            yourJoke.push(`${jokes.joke[optionIdx]}`);
            yourJoke.push(`... ${jokes.punchline[optionIdx]}`);
            break
        case 2: 
            yourJoke.push(`${jokes.joke[optionIdx]}`);
            yourJoke.push(`... ${jokes.punchline[optionIdx]}`);
        default: 
            yourJoke.push('I dont feel like it.'); 
    }*/ 
    console.log(yourJoke);
    return yourJoke; 
};

randomJoke();
/*const formatMessage = () => { 
    formatted = .join('\n'); 
    console.log(formatted); 
}

formatMessage(randomJoke()); */
