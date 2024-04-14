let month = "Mar"
// if not used break then after execution of any case all block will be executed including default
// We can not use and, or switch case conditions
switch (month){
	case 1:
		console.log("Jan");
		break;
	case 2:
		console.log("Feb");
		break;
	case (("Mar") | (3)):
		console.log("March");
		break;
	case 4:
		console.log("April");
		break;
	case 5:
		console.log("May");
		break;
	case 6:
		console.log("June");
		break;

	default:
		console.log('Not mentioned');
}