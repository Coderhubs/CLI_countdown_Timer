#!/usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"


function formattedTimer(seconds: number) {

    // calculate hours,minutes and seconds
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60)


    const formatted_Hours = hours < 10 ? `0` + hours : String(hours)
    const formatted_Minutes = minutes < 10 ? `0` + minutes : String(minutes)
    const formatted_Seconds = seconds < 10 ? `0` + remainingSeconds : String(remainingSeconds)

    return `${formatted_Hours}: ${formatted_Minutes}:${formatted_Seconds}`;

}
function formatDate() {
    const now = new Date();
    return now.toLocaleString("en-US");
}

function formatTimeNow() {
    const now = new Date();
    return now.toLocaleTimeString("en-US", { hour: `2-digit`, minute: `2-digit`, hour12: true })

}

async function runcountdown() {

    const answers = await inquirer.prompt({
        name: "time",
        type: "number",
        message: chalk.yellowBright("Enter the countdown time in seconds:")
    });

    // Convert their answer into a number of seconds
    let seconds = answers.time;

    await console.log(chalk.bgCyanBright.bold.blackBright(`Starting countdown "from ${formattedTimer(seconds)}.Current date is ${formatDate()}.`));


    // Set an interval to update every second
    const intervalID = setInterval(() => {

        seconds--;

        console.clear();

        console.log(chalk.greenBright("Time remaining"))
        console.log(chalk.bold.whiteBright(`${formattedTimer(seconds)} |${formatDate()} |${formatTimeNow()}`));


        if (seconds === 0) {
            clearInterval(intervalID);
            console.log(chalk.bold.redBright("COUNT_DOWN_FINISHED"));

            console.log(chalk.blueBright("Times UP!!!"));

            console.log(chalk.blueBright("Times UP!!!"));

            console.log(chalk.blueBright("Times UP!!!"));

            console.log(chalk.bgBlackBright.whiteBright(`Date:${formatDate()},Time:${formatTimeNow()}`));

        }
    }, 1000);
}

runcountdown();