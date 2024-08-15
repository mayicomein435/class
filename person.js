class Person {
    constructor(firstName, lastName, age, gender, address, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    // Getters
    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    getAge() {
        return this.age;
    }

    getGender() {
        return this.gender;
    }

    getAddress() {
        return this.address;
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }

    getEmail() {
        return this.email;
    }

    // Setters
    setFirstName(firstName) {
        this.firstName = firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    setAge(age) {
        this.age = age;
    }

    setGender(gender) {
        this.gender = gender;
    }

    setAddress(address) {
        this.address = address;
    }

    setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    setEmail(email) {
        this.email = email;
    }

    // Method to return a string representation of the person
    toString() {
        return `Person[firstName=${this.firstName}, lastName=${this.lastName}, age=${this.age}, gender=${this.gender}, address=${this.address}, phoneNumber=${this.phoneNumber}, email=${this.email}]`;
    }
}

// Example usage:
const person1 = new Person(
    "john",
    "Doe",
    30,
    "Male",
    "123 Main St, Anytown, USA",
    "555-1234",
    "john.doe@example.com"
);

console.log(person1.toString());
// Output: Person[firstName=John, lastName=Doe, age=30, gender=Male, address=123 Main St, Anytown, USA, phoneNumber=555-1234, email=john.doe@example.com]
