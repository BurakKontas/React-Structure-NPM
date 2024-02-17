#!/usr/bin/env node

import createComponent from "./commands/createComponent";
import createHook from "./commands/createHook";
import createPage from "./commands/createPage";
import createReactApp from "./commands/createReactApp";
import createRedux from "./commands/createRedux";
import createService from "./commands/createService";


interface Command {
    [key: string]: Function;
}

const commands: Command = {
    create: createReactApp,
    hook: createHook,
    page: createPage,
    component: createComponent,
    redux: createRedux,
    store: createRedux,
    service: createService
};


const [command, appName] = process.argv.slice(2);

if (!command || !appName) {
    console.error('Usage: react-structure <command>');
    process.exit(1);
}

const commandFunction = commands[command];
if (!commandFunction) {
    const availableCommands = Object.keys(commands).join(', ');
    console.error('Invalid command. Available commands: ', availableCommands);
    process.exit(1);
}

commandFunction(appName);
