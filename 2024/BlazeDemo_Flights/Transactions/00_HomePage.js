import http from "k6/http";
import { check, group } from "k6";
import { Trend, Counter } from "k6/metrics"

const ReqDuration_1 = new Trend("HomePage_Duration");
const ReqCounter_1 = new Counter("HomePage_Passed");

//First Request
export function HomePage_00(){

	const req_1=http.get("https://blazedemo.com/index.php");

	let pass = check(req_1,{
		'Is Request 1 Status 200' : (r) => r.status == 200,
	});

	if(pass){
		ReqDuration_1.add(req_1.timings.duration);
	    ReqCounter_1.add(1);
	}
}