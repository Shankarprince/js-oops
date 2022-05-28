// create  a class to hold all the person details
class person {
    constructor ( name, age, gender, occupation){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.occupation = occupation;
    }
}

const shankar = new person("Shankar", 29, "Male", "Salaried");
console.log(shankar);


// Calculate uber price using class and assigning a method
class uber {
    constructor ( start, end, type, fare){
        this.start = start;
        this.end = end;
        this.type = type;
        this.fare = fare;
    }
    totalFare(totalKms){
        this.fare = this.fare * totalKms;
        return "Total Fare is: " + this.fare;
    }
}
const firstTrip = new uber("KK Nagar", "T Nagar", "Auto", 10);
console.log(firstTrip.totalFare(5));
