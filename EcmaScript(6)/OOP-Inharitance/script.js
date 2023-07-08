/* INHERITANCE(miras alma)

bazı classlar bazı classların ortak özelliklerini kendininmiş gibi kullanır.Sürekli kod tekrarı yapmamak için ortak özellikeri inheritance olarak kodlarız.Kod tekrarı okunabilirlik ve yönetebilirliği zorlaştırır.Bir sınıfı miras aldığımızda özelliklerini ve metodlarını miras alıyoruz.

this bu sınıfı, super üst sınıfı temsil eder.
*/

class Person {
    firstName = "Busra";

    write(){
        console.log("Person Write", this.firstName)
    }
}

class Student extends Person {
    write(){
        console.log("Student Write", this.firstName)
        super.write();
    }
}

const student1 = new Student();
student1.write();
