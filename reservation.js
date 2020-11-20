
var newReservation = [{
  customerName = "",
  phoneNumber = "",
  id = "",
  email = "",
}
];
class CustomerInfo {
  constructor(name, id, email) {
    this.customerName = name;
    this.phoneNumber = phoneNumber;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.customerName;
  }
  getPhoneNumber() {
    return this.phoneNumber;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
}

module.exports = CustomerInfo;
