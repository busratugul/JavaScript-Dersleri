
//this

class Person {
    // constructor(firstName){
    // this.isim = firstName
    // }
    firstName = "Busra"

    write(){ //this
        console.log(this.firstName);
    }
}

const person = new Person("Busra");
person.write(); //isim = "Busra"

class Student extends Person {
    write2(){
        super.write();
    }

    }


const student1 = new Student();
student1.write2()

class Human {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary   
    }

    writeInfo(){
        console.log(this.firstName, this.lastName, this.salary);
    }

}
class Teacher extends Human {
    constructor(firstName, lastName, salary){
        super(firstName,lastName,salary)
    }
    write(){
        super.writeInfo();
    }
}

const teacher = new Teacher("Busra", "Tugul", "40000");
teacher.write()