//RuntimeSettings for the test like scenario type, thresholds, executor, users, duration, etc...

export function option(){

return {

	//Defining targeted metrics to be accomiplished in order to the test to pass 
	thresholds: {

		http_reqs: ['count >= 1'],
		http_req_failed: ['rate < 0.1'],
		Request_2_Avarage_Duration: ['avg < 600'],
		Request_3_Avarage_Duration: ['avg < 700'],
		Request_4_Avarage_Duration: ['avg < 800']
		//http_req_duration: ['avg < 250']
	},

	//Defining scenario configuration to run
	scenarios: {

		BlazeDemo_Flights: {

			executor: 'constant-vus',

			startTime: '0s',
			gracefulStop: '15s',

			vus: 2,
			duration: '20s'
		}
	}

};

}