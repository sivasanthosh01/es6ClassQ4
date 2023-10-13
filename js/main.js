class Book{
    constructor(title,author,publicationYear){
        this.title=title;
        this.author=author;
        this.publicationYear=publicationYear;
    }
    details(){
        console.log(this.title);
        console.log(this.author);
        console.log(this.publicationYear);
    }
}
let book=new Book("Sachin","Anothoy",2020)
book.details();

class Ebook extends Book{
    constructor(title,author,publicationYear,bookPrice){
        super(title,author,publicationYear)
        this.bookPrice=bookPrice
    }
    details(){
        console.log(this.title);
        console.log(this.author);
        console.log(this.publicationYear);
        console.log(this.bookPrice,"Price");
    }
}
let price=new Ebook("ViratKohli","Jone Cena",2021,400);
price.details();

