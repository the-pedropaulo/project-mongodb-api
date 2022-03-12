class Person {
    constructor(nameOne, nameTwo) {
        this.nameOne = nameOne;
        this.nameTwo = nameTwo;
    }

    getName() {
        let users = [
            {
                "name": this.nameOne,
                "age": "23"
            },
            {
                "name": this.nameTwo,
                "age": "24"
            }
        ];

        return users;
    }
}

module.exports = {
    Person
};