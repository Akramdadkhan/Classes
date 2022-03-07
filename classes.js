class person{
    constructor(fname,lname){
        this.firstName = fname;
        this.lastName = lname;
    }
//First class which is usually Parent Class
    getFullName(){
        return `First Name : ${this.firstName} Last Name: ${this.lastName}`;
    }
}
// const result = new person("Akram","Khan")
// console.log(result.getFullName())

class Address extends person{
    constructor(fname,lname,city,country){
        super(fname,lname);
        this.city=city;
        this.country= country;
    }
    getAddress(){
        return `city:${this.city} country:${this.country}`;
    }
}
const res = new Address( "Akram","Khan","Nanded","India")
console.log(res )

class fullDetails extends Address{
    constructor(phone,fname,lname,city,country){
        super(fname,lname,city,country)
        this.phone = phone;
    }
    getPhone(){
        return `phone: ${this.phone}`
    }
}
const resultfull = new fullDetails("Akram","Khan","Nanded","India",9503572448)
console.log(resultfull)