//CREATE A SUBCLASS MAGAZINE WHICH EXTENDS CLASS BOOK AND HAVE AN ADDITIONAL PROPERTY CALLED ISSUE
class book{
    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    }
}

class Magazine extends book{
    constructor(title,author,year,issue){
        super(title,author,year);
        this.issue=issue;
}
getIssueNumber(){
    return this.issue;
}
}



const myMagazine = new Magazine('Dxo','Zayn',2023,5);

console.log(myMagazine.getIssueNumber());
