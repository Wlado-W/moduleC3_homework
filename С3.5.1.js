// Родительский класс для электроприборов
class ElectricalDevice {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.pluggedIn = false;
    }

    // Включение прибора в розетку
    plugIn() {
        if (!this.pluggedIn) {
            this.pluggedIn = true;
            console.log(`${this.name} включен(-на) в розетку.`);
        } else {
            console.log(`${this.name} уже включен(-на) в розетку.`);
        }
    }

    // Выключение прибора из розетки
    unplug() {
        if (this.pluggedIn) {
            this.pluggedIn = false;
            console.log(`${this.name} выключен(-на) из розетки.`);
        } else {
            console.log(`${this.name} уже выключен(-на) из розетки.`);
        }
    }
}

// Класс настольной лампы
class DeskLamp extends ElectricalDevice {
    constructor(name, power, brightness) {
        super(name, power);
        this.brightness = brightness;
    }

    // Метод для настройки яркости настольной лампы
    adjustBrightness(brightness) {
        this.brightness = brightness;
        console.log(`Яркость ${this.name} установлена на ${this.brightness}%.`);
    }
}

// Класс компьютера
class Computer extends ElectricalDevice {
    constructor(name, power, brand, processor) {
        super(name, power);
        this.brand = brand;
        this.processor = processor;
    }

    // Метод для запуска компьютера
    start() {
        console.log(`${this.brand} компьютер с процессором ${this.processor} запущен.`);
    }
}

// Создание экземпляров приборов
const deskLamp = new DeskLamp("Настольная лампа", 60, 50);
const computer = new Computer("Компьютер", 400, "Apple", "Intel Core i7");

// Включение приборов и подсчет потребляемой мощности
deskLamp.plugIn();
computer.plugIn();

// Вызов дополнительных методов
deskLamp.adjustBrightness(75);
computer.start();

// Выключение приборов
deskLamp.unplug();
computer.unplug();
