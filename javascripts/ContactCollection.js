
"use strict"

let contacts = [
    
    {
        name: "Meg",
        phone: "12345",
        address: "123 main st"
    }, 
    {
        name: "John",
        phone: "456678",
        address: "200 main st"
    }, 
    {
        name: "Klaus",
        phone: "9877665",
        address: "300 main st"
    }, 


];







localStorage.setItem("contacts", JSON.stringify(contacts));

function getContacts(){
    return JSON.parse(localStorage.getItem("contacts"));

};

module.export(getContacts);