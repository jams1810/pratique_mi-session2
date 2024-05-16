class Keyboard {
    constructor(
        name,
        brand,
        compatibleDevices,
        connectivityTechnology,
        keyboardDescription,
        specialFeature,
        colour,
        numberOfKeys,
        style,
        productDimensions,
        material
    ){
    this.name = name;
    this.brand = brand;
    this.compatibleDevices = compatibleDevices; this.connectivityTechnology = connectivityTechnology; this.keyboardDescription = keyboardDescription; this.specialFeature = specialFeature;
    this.colour = colour;
    this.numberOfKeys = numberOfKeys;
    this.style = style;
    this.productDimensions = productDimensions; this.material = material;
    }
    
    toHtml() {
        const div = document.createElement('div');
        Object.entries(this).forEach(entry => {
            const span = document.createElement('span');
            span.textContent = entry[1];
            div.appendChild(span);
        })

        return div;
    } 
}

    const stars = [
        new Keyboard(
            "Magic-Refiner",
            "MAGIC-REFINER",
            "Smartphone",
            "Bluetooth",
            "Mechanical",
            "Ergonomic",
            "Off-white & Orange/Red Switch",
            68,
            "Modern",
            "31.2L x 10.2W x 4.3H Centimetres",
            "Polycarbonate"
        ),
        new Keyboard(
            "Magic-Refiner",
            "MAGIC-REFINER",
            "Smartphone",
            "Bluetooth",
            "Mechanical",
            "Ergonomic",
            "Off-white & Orange/Red Switch",
            68,
            "Modern",
            "31.2L x 10.2W x 4.3H Centimetres",
            "Polycarbonate"
        ),
        new Keyboard(
            "Magic-Refiner",
            "MAGIC-REFINER",
            "Smartphone",
            "Bluetooth",
            "Mechanical",
            "Ergonomic",
            "Off-white & Orange/Red Switch",
            68,
            "Modern",
            "31.2L x 10.2W x 4.3H Centimetres",
            "Polycarbonate"
        ),
        new Keyboard(
            "Magic-Refiner",
            "MAGIC-REFINER",
            "Smartphone",
            "Bluetooth",
            "Mechanical",
            "Ergonomic",
            "Off-white & Orange/Red Switch",
            68,
            "Modern",
            "31.2L x 10.2W x 4.3H Centimetres",
            "Polycarbonate"
), ];

stars.forEach(Keyboard => {
    document.body.appendChild(Keyboard.toHtml());
})