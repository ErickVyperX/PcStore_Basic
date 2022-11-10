class InputDevice {
    _connectorType;
    _brand;

    constructor(connectorType, brand) {
        this._connectorType = connectorType;
        this._brand = brand;
    }

    get connectorType() {
        return this._connectorType;
    }

    set connectorType(connectorType) {
        this._connectorType = connectorType;
    }

    get brand() {
        return this._brand;
    }

    set brand(brand) {
        this._brand = brand;
    }

    toString() {
        return `${this.connectorType} ${this.brand}`;
    }
}

class Mouse extends InputDevice{
    _mouseID;
    static mouseCounter = 0;

    constructor(connectorType, brand) {
        super(connectorType, brand);
        this._mouseID = Mouse.mouseCounter++;
    }

    get mouseID() {
        return this._mouseID;
    }

    toString() {
        return  `${this.mouseID}` + super.toString();
    }
}

class Keyboard extends InputDevice{
    _keyboardID;
    static keyboardCounter = 0;

    constructor(connectorType, brand) {
        super(connectorType, brand);
        this._keyboardID = Keyboard.keyboardCounter++;
    }

    get keyboardID() {
        return this._keyboardID;
    }

    toString() {
        return  `${this.keyboardID}` + super.toString();
    }
}

class Monitor {
    _monitorID;
    _brand;
    _inches;
    static monitorCounter = 0;

    constructor(brand, inches) {
        this._monitorID = Monitor.monitorCounter++;
        this._brand = brand;
        this._inches = inches;
    }

    get monitorID() {
        return this._monitorID;
    }

    get brand() {
        return this._brand;
    }

    set brand(brand) {
        this._brand = brand;
    }

    get inches() {
        return this._inches;
    }

    set inches(inches) {
        this._inches = inches;
    }

    toString() {
        return `${this.monitorID} ${this.brand} ${this.inches}`;
    }
}

class Computer {
    _computerID;
    _name;
    _mouse;
    _keyboard;
    _monitor;
    static computerCounter = 0;

    constructor(name, mouse, keyboard, monitor) {
        this._computerID = Computer.computerCounter++;
        this._name = name;
        this._mouse = mouse;
        this._keyboard = keyboard;
        this._monitor = monitor;
    }

    get computerID() {
        return this._computerID;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get mouse() {
        return this._mouse;
    }

    set mouse(mouse) {
        this._mouse = mouse;
    }

    get keyboard() {
        return this._keyboard;
    }

    set keyboard(keyboard) {
        this._keyboard = keyboard;
    }

    get monitor() {
        return this._monitor;
    }

    set monitor(monitor) {
        this._monitor = monitor;
    }

    toString() {
        return `${this.computerID} ${this.name} ${this.mouse.toString()} ${this.keyboard.toString()} ${this.monitor.toString()}`;
    }
}

class Order {
    _orderID;
    _computers;
    static orderCounter = 0;

    constructor() {
        this._orderID = Order.orderCounter++;
        this._computers = [];
    }

    get orderID() {
        return this._orderID;
    }

    get computers() {
        return this._computers;
    }

    set computers(computers) {
        this._computers = computers;
    }

    addComputer(computer) {
        this.computers.push(computer);
    }

    toString() {
        return `Order Number: ${this.orderID}\nUnits: ${this.computers}`;
    }
}

/*---------------------TEST-------------------------*/
let mouse1 = new Mouse("USB-C", "HyperX");
let mouse2 = new Mouse("USB", "Corsair");
let keyboard1 = new Keyboard("Bluetooth", "Cooler Master");
let keyboard2 = new Keyboard("HDMI", "Razer");
let monitor1 = new Monitor("Samsung", 27);
let monitor2 = new Monitor("Teros", 34);
let computer1 = new Computer("MortalPC", mouse1, keyboard1, monitor1);
let computer2 = new Computer("DefinitivePC", mouse2, keyboard2, monitor2);
let order = new Order();
order.addComputer(computer1);
order.addComputer(computer2);
console.log(order.toString());