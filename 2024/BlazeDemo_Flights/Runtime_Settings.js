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

			executor: 'per-vu-iterations',

			startTime: '0s',
			gracefulStop: '15s',

			vus: 10,
			iterations: 2,
			//duration: '15m'
		}
	},
	tags: {
		Test: `Flights_SmokeTest_${new Date().toISOString()}`
	}
};

}