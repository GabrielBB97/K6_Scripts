import http from "k6/http";
import { check, group } from "k6";
import { Trend } from "k6/metrics";

const ReqDuration_3 = new Trend("Purchase_Flights_Avarage_Duration");

//Third Request
export function Purchase_Flights_02(datos, Random_1, Random_2, Random_3){

	    const req_3=http.post("https://blazedemo.com/purchase.php",
		{
			'flight': datos.P_Flights[Random_3][0],
			'price': datos.P_Flights[Random_3][2],
			'airline': datos.P_Flights[Random_3][1],
			'fromPort': datos.P_AirLine[Random_1][0],
			'toPort': datos.P_AirLine[Random_2][0]
		},
		{
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		});

		let pass = check(req_3,{
		    'Is Request 3 Status 200' : (r) => r.status == 200,
	    });

	    if(pass)
	    	ReqDuration_3.add(req_3.timings.duration);

}