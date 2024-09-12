//CREATE A CLASS REPRESENTING A BOOK WITH PROPERTIES LIKE TITLE,AUTHOR,AND YEAR(CURRENT YEAR AND YEAR OF PUBLICATION)
class book{
    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    }

    getAge(){
        const currentYear = new Date().getFullYear();
        return currentYear-this.year;
    }
}

const book1 = new book("BOOK1","AUTHOR1",2021);



console.log(book1.title);
console.log(book1.author);
console.log(book1.year);


const currentYear = book1.getAge();
console.log(currentYear);