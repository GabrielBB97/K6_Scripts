//init
import { option } from "./Runtime_Settings.js"
import { initialSettings } from "./00_Init.js"
import { endFunction } from "./02_End.js"

//Options of the test
export const options=option();

//run once and at the beginning
export function setup(){
    return initialSettings();
}
//run multiple times
export default function(){
    
}
//run once and at the end
export function teardown(){
    endFunction();
}


