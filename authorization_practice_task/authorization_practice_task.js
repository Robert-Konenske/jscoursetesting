// Define the role of the person
let personRole = "Employee"; // Change this value to test different roles

// Variable to store the authorization message
let authorizationMessage;

// Implement conditional statements to determine access
if (personRole === "Employee") {
    authorizationMessage = "Access granted to Dietary Services.";
} else if (personRole === "Enrolled Member") {
    authorizationMessage = "Access granted to Dietary Services and one-on-one interaction with a dietician.";
} else if (personRole === "Subscriber") {
    authorizationMessage = "Partial access granted to Dietary Services.";
} else if (personRole === "Non-Subscriber") {
    authorizationMessage = "Please enroll or subscribe to avail this facility.";
} else {
    authorizationMessage = "Invalid role.";
}

// Output the authorization message to the console
console.log("Authorization Message:", authorizationMessage);