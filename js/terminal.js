
const commands = {
    // Commands from functions.js
    nameAndAge: practiseQuestion1,
    getQuarter: practiseQuestion2,
    checkString: practiseQuestion3,
    findLargest: practiseQuestion4,
    sameLastDigit: practiseQuestion5,
    // assignment 3 
    positiveArray: ques1,
    last_n_Elements: ques2,
    emptyString : ques3,
    lowerCase : ques4,
    stringWithoutSpaces : ques5,
    arrayCheck : ques6,
    //assignment 4
    deleteFromArray : ques41,
    noOfDigits : ques42,
    sumOfDigit : ques43,
    factorial : ques44,
    //asignment 5 
    dice : ques51,
};


document.addEventListener("DOMContentLoaded", () => {
    const terminalWindow = document.getElementById("terminal-window");
    const terminalOutput = document.getElementById("terminal-output");
    const terminalInput = document.getElementById("terminal-input");

    // NEW: List of available themes
    const availableThemes = ['dracula', 'light', 'nord'];

    // NEW: Set the default theme on load
    document.body.className = `theme-${availableThemes[0]}`;

    terminalWindow.addEventListener('click', () => {
        terminalInput.focus();
    });

    function logToTerminal(message, type = "") {
        const p = document.createElement("p");
        p.innerHTML = message;
        if (type) {
            p.className = `output-${type}`;
        }
        terminalOutput.appendChild(p);
    }

    function processCommand(commandString) {
        logToTerminal(
            `<span class="prompt-user">user@machine:~$</span> ${commandString}`,
            "log"
        );

        const parts = commandString.trim().split(" ");
        const command = parts[0];
        const arg = parts[1];

        if (command === "help") {
            let helpText = "Available commands:<br>";
            helpText += `&nbsp;&nbsp;<span class="output-command">node &lt;functionName&gt;</span> - Run a function from the list below.<br>`;
            helpText += `&nbsp;&nbsp;<span class="output-command">theme &lt;themeName&gt;</span> - Change the terminal theme.<br>`;
            helpText += `&nbsp;&nbsp;<span class="output-command">clear</span> - Clear the terminal output.<br>`;
            helpText += "<br>Available functions:<br>";
            Object.keys(commands).forEach((cmd) => {
                helpText += `&nbsp;&nbsp;${cmd}<br>`;
            });
            helpText += "<br>Available themes:<br>";
            availableThemes.forEach((theme) => {
                helpText += `&nbsp;&nbsp;${theme}<br>`;
            });

            logToTerminal(helpText, "help");

        } else if (command === 'node') {
            if (arg && commands[arg]) {
                logToTerminal(`Executing <span class="output-command">${arg}</span>...`, "info");
                commands[arg]();
            } else {
                logToTerminal(`Error: Function '${arg}' not found. Type 'help' for a list.`, "error");
            }
        
        // NEW: Logic to handle the 'theme' command
        } else if (command === 'theme') {
            if (arg && availableThemes.includes(arg)) {
                document.body.className = `theme-${arg}`;
                logToTerminal(`Theme changed to <span class="output-command">${arg}</span>.`, 'info');
            } else {
                logToTerminal(`Error: Theme '${arg}' not found. Available themes are: ${availableThemes.join(', ')}.`, 'error');
            }

        } else if (command === "clear") {
            terminalOutput.innerHTML = "";
        } else if (command.trim() !== "") {
            logToTerminal(
                `JavaScript: command not found: ${command}. Type 'help' for assistance.`,
                "error"
            );
        }
        
        terminalWindow.scrollTop = terminalWindow.scrollHeight;
    }

    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = terminalInput.value;
            processCommand(command);

            terminalInput.value = "";
        }
    });

    logToTerminal("Welcome to JS Terminal! Type `help` to see available commands.", "info");
});