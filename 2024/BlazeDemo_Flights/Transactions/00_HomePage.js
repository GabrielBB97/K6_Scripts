import http from "k6/http";
import { check, group } from "k6";

//First Request
export function HomePage_00(){

	group("BlazeDemo_00_HomePage", function(){

	    const req_1=http.get("https://blazedemo.com/index.php");

	    check(req_1,{
		    'Is Request 1 Status 200' : (r) => r.status == 200,
	    });

	});

}