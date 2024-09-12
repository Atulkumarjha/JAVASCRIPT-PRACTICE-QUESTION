//CREATE AN OBJECT 'PERSON' AND A NEW OBJECT 'STUDENT' AND THE 'STUDENT' OBJECT INHERITS FROM 'PERSON' OBJECT
const person = {
    name:"aryan",
    age:20
}


const student = Object.create(person);
student.studentId='16212';

console.log(student.name);
console.log(student.studentId);
