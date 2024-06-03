//RuntimeSettings for the test like scenario type, thresholds, executor, users, duration, etc...

export function option(){

return {

	//Defining targeted metrics to be accomiplished in order to the test to pass 
	thresholds: {

		http_reqs: ['count >= 1'],
		http_req_failed: ['rate < 0.1'],
	},

	//Defining scenario configuration to run
	scenarios: {

		BlazeDemo_Flights: {

			executor: 'constant-arrival-rate',

			duration: '30s',
			rate: 10,
			timeUnit: '1s',
			preAllocatedVUs: 7,
			maxVUs: 10
			

		}
	},
	tags: {
		Test: `Flights_SmokeTest_${new Date().toISOString()}`
	}
};

}