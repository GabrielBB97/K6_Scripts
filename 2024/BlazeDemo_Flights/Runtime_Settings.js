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

		/*

		executor: 'ramping-arrival-rate',

		startRate: 5,
		timeUnit: '1s',
		preAllocatedVUs: 5,
		maxVUs: 100,
		stages: [
			{target: 5, duration: '10m'},
			{target: 20, duration: '20m'},
			{target: 35, duration: '30m'},
			{target : 5, duration: '5m'},
			{target: 0, duration: '1m'},
		]

		*/
			

		}
	},
	tags: {
		Test: `Flights_SmokeTest_${new Date().toISOString()}`
	}
};

}