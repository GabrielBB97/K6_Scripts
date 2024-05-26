//setup
export function initFunction(){

	console.log(`------------------------Start of Test [${new Date().toISOString()}]`);

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