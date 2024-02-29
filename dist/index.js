#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createComponent_1 = require("./commands/createComponent");
const createHook_1 = require("./commands/createHook");
const createPage_1 = require("./commands/createPage");
const createReactApp_1 = require("./commands/createReactApp");
const createRedux_1 = require("./commands/createRedux");
const createService_1 = require("./commands/createService");
const commands = {
    create: createReactApp_1.default,
    hook: createHook_1.default,
    page: createPage_1.default,
    component: createComponent_1.default,
    redux: createRedux_1.default,
    store: createRedux_1.default,
    service: createService_1.default
};
const [command, appName] = process.argv.slice(2);
if (!command || !appName) {
    const availableCommands = Object.keys(commands).join(', ');
    console.error('Usage: react-structure-generator <command> or rsg <command>');
    console.error('Available commands: ', availableCommands);
    process.exit(1);
}
const commandFunction = commands[command];
if (!commandFunction) {
    const availableCommands = Object.keys(commands).join(', ');
    console.error('Invalid command. Available commands: ', availableCommands);
    process.exit(1);
}
commandFunction(appName);
