// Родительская функция для электроприборов
function ElectricalDevice(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
}

// Методы родительской функции
ElectricalDevice.prototype = {
    // Включение прибора в розетку
    plugIn: function() {
        if (!this.pluggedIn) {
            this.pluggedIn = true;
            console.log(this.name + " включен в розетку.");
        } else {
            console.log(this.name + " уже включен в розетку.");
        }
    },

    // Выключение прибора из розетки
    unplug: function() {
        if (this.pluggedIn) {
            this.pluggedIn = false;
            console.log(this.name + " выключен из розетки.");
        } else {
            console.log(this.name + " уже выключен из розетки.");
        }
    }
};

// Настольная лампа
function DeskLamp(brightness) {
    ElectricalDevice.call(this, "Настольная лампа", 60);
    this.brightness = brightness;
}

// Наследование прототипа родительской функции
DeskLamp.prototype = Object.create(ElectricalDevice.prototype);
DeskLamp.prototype.constructor = DeskLamp;

// Дополнительный метод для настольной лампы
DeskLamp.prototype.adjustBrightness = function(brightness) {
    this.brightness = brightness;
    console.log("Яркость настольной лампы установлена на " + this.brightness + "%.");
};

// Компьютер
function Computer(brand, processor) {
    ElectricalDevice.call(this, "Компьютер", 400);
    this.brand = brand;
    this.processor = processor;
}

// Наследование прототипа родительской функции
Computer.prototype = Object.create(ElectricalDevice.prototype);
Computer.prototype.constructor = Computer;

// Дополнительный метод для компьютера
Computer.prototype.start = function() {
    console.log(this.brand + " компьютер с процессором " + this.processor + " запущен.");
};

// Создание экземпляров приборов
const deskLamp = new DeskLamp(50);
const computer = new Computer("Apple", "Intel Core i7");

// Включение приборов и подсчет потребляемой мощности
deskLamp.plugIn();
computer.plugIn();

// Вызов дополнительных методов
deskLamp.adjustBrightness(75);
computer.start();

// Выключение приборов
deskLamp.unplug();
computer.unplug();
