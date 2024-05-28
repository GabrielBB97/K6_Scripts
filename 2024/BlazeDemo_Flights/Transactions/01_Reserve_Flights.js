import http from "k6/http";
import { check, group } from "k6";
import { Trend } from "k6/metrics";

//Global variables
const ReqDuration_2 = new Trend("Reserve_Flights_Avarage_Duration");

//Second Request
export function Reserve_Flights_01(datos, Random_1, Random_2){
	
	const req_2=http.post("https://blazedemo.com/reserve.php", 
	{
		    'fromPort': datos.P_AirLine[Random_1][0],
		    'toPort': datos.P_AirLine[Random_2][1]
	}, 
    { 
	    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

	let pass = check(req_2,{
	    'Is Request 2 Status 200' : (r) => r.status == 200,
    });

    if(pass)
    	ReqDuration_2.add(req_2.timings.duration);
	
}