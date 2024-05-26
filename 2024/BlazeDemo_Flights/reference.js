//init
import http from "k6/http";
import { sleep, check, group } from "k6";
import { Trend } from "k6/metrics";

    //Global variables
const ReqDuration_2 = new Trend("Request_2_Avarage_Duration");
const ReqDuration_3 = new Trend("Request_3_Avarage_Duration");
const ReqDuration_4 = new Trend("Request_4_Avarage_Duration");

export const options={

	//Defining targeted metrics to be accomiplished in order to the test to pass 
	thresholds: {

		http_reqs: ['count >= 1'],
		http_req_failed: ['rate < 0.1'],
		//Request_2_Avarage_Duration: ['avg < 600'],
		Request_3_Avarage_Duration: ['avg < 700'],
		Request_4_Avarage_Duration: ['avg < 800']
		//http_req_duration: ['avg < 250']
	},

	//Defining scenario configuration to run
	scenarios: {

		BlazeDemo_Flights: {

			executor: 'constant-vus',

			startTime: '0s',
			gracefulStop: '30s',

			vus: 2,
			duration: '5s'
		}
	}

};

//setup
export function setup(){

	console.log("------------------------Starting the test");
    // Data to be used in the payloads
	const P_AirLine=[
	    ['Paris','Buenos Aires'],
        ['Philadelphia','Rome'],
        ['Boston','London'],
        ['Portland','Berlin'],
        ['San Diego','New York'],
        ['Mexico City','Dublin'],
        ['São Paolo','Cairo']
	];

	const P_Flights=[
	    [43,'Virgin America',472.56],
        [234,'United Airlines',432.98],
        [9696,'Aer Lingus',200.98],
        [12,'Virgin America',765.32],
        [4346,'Lufthansa',233.98]
    ];

    return {
    	'P_AirLine': P_AirLine,
    	'P_Flights': P_Flights
    };

}

//default function
export default function(datos){
	//Declaring variables
	let Random_1=Math.floor(Math.random() * 7);
	let Random_2=Math.floor(Math.random() * 7);
	let Random_3=Math.floor(Math.random() * 5);

	//First Request
	group("BlazeDemo_00_HomePage", function(){

	    const req_1=http.get("https://blazedemo.com/index.php");

	    check(req_1,{
		    'Is Request 1 Status 200' : (r) => r.status == 200,
	    });

	});

	sleep(3);
	//console.log(`${datos.P_AirLine[0]} ${datos.P_Flights[0][1]}`);

	//Second Request
	group("BlazeDemo_01_Reserve_Flights", function(){

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

	});

    sleep(3);

    //Third Request
    group("BlazeDemo_02_Purchase_Flights",function(){

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

	});

	sleep(3);

	//Fourth Request
	group("BlazeDemo_03_Confirm_Information", function(){

	    const req_4=http.post("https://blazedemo.com/confirmation.php",
		{
			'inputName': 'Gabriel Bustamante',
			'address': 'Privada la Esperanza',
			'city': 'Gomez Palacio',
			'state': 'Durango',
			'zipCode': 35029,
			'cardType': 'visa',
			'creditCardNumber': 1234567894578961,
			'creditCardMonth': 9,
			'creditCardYear': 2032,
			'nameOnCard': 'Jose Bustamante'
		},
		{
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		});

		let pass = check(req_4,{
		    'Is Request 4 Status 200' : (r) => r.status == 200,
	    });

	    if(pass)
	    	ReqDuration_4.add(req_4.timings.duration);

	});

/*
	check(req_2,{
		'Is Request 2 Status 200' : (r) => r.status == 200,
	});

	check(req_3,{
		'Is Request 3 Status 200' : (r) => r.status == 200,
	});

	check(req_4,{
		'Is Request 4 Status 200' : (r) => r.status == 200,
	});
*/

	//ReqDuration_2.add(req_2.timings.duration);
	//ReqDuration_3.add(req_3.timings.duration);
	//ReqDuration_4.add(req_4.timings.duration);

	//console.log(`REQUEST 2: ${req_2.body}`);
	//console.log(`REQUEST 3: ${req_3.body}`);
	//console.log(`REQUEST 4: ${req_4.body}`);
}

//teardown
export function teardown(){
	console.log("------------------------End of Test");
}