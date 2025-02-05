"use strict";
const myBio = {
    name: "Loyar",
    age: 22,
    email: "2382039@unai.edu",
    address: "Bandung,Parongpong",
    hobbies: ["cooking", "traveling", "coding"],
};
function displayBio(bio) {
    console.log(`Name: ${bio.name}`);
    console.log(`Age: ${bio.age}`);
    console.log(`Email: ${bio.email}`);
    console.log(`Address: ${bio.address}`);
    console.log("Hobbies: ");
    for (const hobby of bio.hobbies) {
        console.log(`- ${hobby}`);
    }
}
displayBio(myBio);
//# sourceMappingURL=index.js.map