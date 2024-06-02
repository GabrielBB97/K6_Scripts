import http from "k6/http";
import { check, group } from "k6";
import { Trend, Counter } from "k6/metrics";

const ReqDuration_4 = new Trend("Confirm_Info_Duration");
const ReqCounter_4 = new Counter("Confirm_Info_Passed");

//Fourth Request
export function Confirm_Information_03(datos){

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

	    if(pass){
	    	ReqDuration_4.add(req_4.timings.duration);
			ReqCounter_4.add(1);
		}
}