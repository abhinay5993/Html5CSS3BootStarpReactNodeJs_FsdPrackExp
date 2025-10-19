"use strict";
/**
 * Implimentation with Inheritance of class.
 *
 */
class CarEntity {
    constructor(crColor, crPrice, crBrand, crTransmits) {
        this.crColor = crColor;
        this.crPrice = crPrice;
        this.crBrand = crBrand;
        this.crTransmits = crTransmits;
    }
}
let carEntObj = new CarEntity("Red", 50000.54, "Tata", "CNG");
console.log("\nCar Entity Object : " + JSON.stringify(carEntObj));
class RangeRover extends CarEntity {
    constructor(crColor, crPrice, crBrand, crTransmits, brandAuth, brandContactNo) {
        super(crColor, crPrice, crBrand, crTransmits);
        this.brandContactNo = "+91-9566089853";
        this.brandAuth = brandAuth;
        this.brandContactNo = brandContactNo ? brandContactNo : this.brandContactNo;
    }
}
let rngRovObj = new RangeRover("White", 5000000.99, "BMW", "Electric", true);
console.log("\nRangeRover/child-class Entity Object1 : " + JSON.stringify(rngRovObj));
let rngRov2Obj = new RangeRover("Blue", 9349489.99, "Mahindra", "Petrol", false, "9800903770");
console.log("\nRangeRover/child-class Entity Object2 : " + JSON.stringify(rngRov2Obj));
