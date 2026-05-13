// models/bookingModel.js

class Booking {
    constructor(name, email, phone, address, eventName, interestedCity) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.eventName = eventName;
        this.interestedCity = interestedCity;
    }
}

module.exports = Booking;
