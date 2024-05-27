//init Context
import { option } from "./Runtime_Settings.js"
import { initFunction } from "./00_Init.js"
import { endFunction } from "./02_End.js"
import { HomePage_00 } from "./Transactions/00_HomePage.js"
import { Reserve_Flights_01 } from "./Transactions/01_Reserve_Flights.js"
import { Purchase_Flights_02 } from "./Transactions/02_Purchase_Flights.js"
import { Confirm_Information_03 } from "./Transactions/03_Confirm_Information.js"

//Options of the test -- part of the Init context
export const options=option();

//run once and at the beginning
export function setup(){
    return initFunction();
}
//run multiple times
export default function(datos){
    //Declaring variables
	let Random_1=Math.floor(Math.random() * 7);
	let Random_2=Math.floor(Math.random() * 7);
	let Random_3=Math.floor(Math.random() * 5);
    //Executing transactions 
    HomePage_00();
    Reserve_Flights_01(datos, Random_1, Random_2);
    Purchase_Flights_02(datos, Random_1, Random_2, Random_3);
    Confirm_Information_03(datos);  
}
//run once and at the end
export function teardown(){
    endFunction();
}


