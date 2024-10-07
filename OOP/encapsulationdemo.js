
function createLamp() {
    return {
        isOn: false, 
        turnOn: function() {
            this.isOn = true;
            console.log("The lamp is now ON.");
        },
        turnOff: function() {
            this.isOn = false;
            console.log("The lamp is now OFF.");
        },
        displayStatus: function() {
            console.log(`The lamp is currently ${this.isOn ? "ON" : "OFF"}.`);
        }
    };
}
let myLamp = createLamp();
myLamp.displayStatus();
myLamp.turnOn(); 
myLamp.displayStatus();
myLamp.turnOff(); 
myLamp.displayStatus(); 
