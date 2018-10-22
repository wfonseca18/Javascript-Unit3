
// Declaring array
const patientList = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam'
];
var neverComplete;

alert(patientList);

// Creating function to loop
function mainFunc() {
  // Populating the command variable
  const command = prompt('Choose one: update, delete, add, reorder');

  // Switch statement for handling options
  switch (command.toLowerCase()) { // Setting the command to lowercase
    case 'update': // Updating list
      // Get the patient's name
      var name = prompt("Patient's name");

      // Loop though the array to find the name
      for (var i = 0; i < patientList.length; i++) {
        // If the name is found, ask for the new name and update it
        if (patientList[i].toUpperCase() === name.toUpperCase()) {
          patientList[i] = prompt('New name');
          alert(patientList);
          break;
        }
      }
      // If we get here, patient wasn't found in the list
      if (i === patientList.length) {
        alert('Patient not found!');
      }
      break;

    case 'delete': // Deleting from list
      // Get the patient's name
      var name = prompt("Patient's name");

      // Loop though the array to find the name
      for (var i = 0; i < patientList.length; i++) {
        // If the name is found, delete the element in the array
        if (patientList[i].toUpperCase() === name.toUpperCase()) {
          patientList.splice(i, 1);
          alert(patientList);
          break;
        }
      }
      // If we get here, patient wasn't found in the list
      if (i === patientList.length) {
        alert('Patient not found!');
      }
      break;

    case 'add': // Adding to list
      // Get the patient's name
      var name = prompt("Patient's name");

      // If a value wasn't entered, print error message
      // Else add name to the array
      if (!name) {
        alert('Invalid entry!');
      } else {
        patientList.push(name);
        alert(patientList);
      }
      break;

    case 'reorder': // Reordering list
      // Get the first patient's name
      var name1 = prompt("First patient's name");

      // Loop though the array to find the first patient's name
      for (var i = 0; i < patientList.length; i++) {
        // If the first patient's name is found, continue
        if (patientList[i].toUpperCase() === name1.toUpperCase()) {
          // Get the second patient's name
          var name2 = prompt("Second patient's name");

          // Loop though the array to find the second patient's name
          for (var o = 0; o < patientList.length; o++) {
            // If the second patient's name is found, swap the values in the array
            if (patientList[o].toUpperCase() === name2.toUpperCase()) {
              patientList[i] = name2;
              patientList[o] = name1;
              alert(patientList);
              break;
            }
          }
          // If we get here, the second patient wasn't found in the list
          if (o === patientList.length) {
            alert('Second patient not found!');
            break;
          }
          break;
        }
      }
      // If we get here, the first patient wasn't found in the list
      if (i === patientList.length) {
        alert('First patient not found!');
        break;
      }
      break;

    default: // Switch statement defaults to display an error message
      alert('Invalid entry!');
  }
}

// Creating a never-ending loop that calls mainFunc
while (!neverComplete) {
  mainFunc();
}
