const waitForUserInput = require('wait-for-user-input')

blobr();

async function blobr () {
    while (true) {
        const userInput = await waitForUserInput('pls to blobr: \n');

        const blobedOutput = [...userInput].map(blobChar).reduce((a,b) => a.concat(b));

        console.log(`\ncopy pasta: \n${blobedOutput}\n`);
    }
}

function blobChar(char) {
    switch (char) {
        case ' ':
            return `:blob_blank:`;
        case '?':
            return `:blob_question:`;
        case '!':
            return `:blob_exclamation:`;
        case '+':
            return `:blob-plus:`;
        case '-':
            return `:blob-minus:`;
        
    }
    return `:blob_${char}:`
}
