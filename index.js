var readlineSync = require('readline-sync');

console.log("Welcome to your login panel Doc!!!")
console.log("Please Enter your Username and Password to assess your console :)")
console.log("");

var name = readlineSync.question('Enter your Username: ');

var password = readlineSync.question('Enter your Secret Password: ', { hideEchoBack: true});
console.log();

if (name === "istiak" && password === "123"){
    console.log("Welcome to console Doc.")
    menu = ["Add a patient", "treate a Patient"];
    index = readlineSync.keyInSelect(menu, 'Select Task');

    // console.log(index);

    var patientList = [];

    function addPatients (patient){
        patientList.push(patient);
        return patientList;
    }

    while (index===0 || index===1){

        if(index===0){
            var Pname = readlineSync.question('Enter patient name: ');
            var Page = readlineSync.question('Enter patient age: ');

            var patient = {
                PatientName: Pname,
                PatientAge: Page,
                treatmentStatus: false
            }
            addPatients(patient);

            console.log("Patient " + patient.PatientName + " was added successfully");
            // index = readlineSync.keyInSelect(menu, 'Select Task');

        } else if (index===1){
            console.log('Now its time to treat a patient');
            for (i=0; i < patientList.length; i++){
                
            }

            var PTname = readlineSync.question('Enter patient name you want to treat: ');

            var treatedPatient = patientList.find((patient)=>patient.PatientName===PTname);
            console.log(treatedPatient);

        }

        index = readlineSync.keyInSelect(menu, 'Select Task');
    
    }

} else {
    console.log("Wrong Password!!!");
    console.log("This is my First Commit Using Git")
}






