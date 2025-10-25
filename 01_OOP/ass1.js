class Book {
    constructor(title, author, year) {
        this.title = title.toString();
        this.author = author.toString();
        if(!Number.isInteger(year) || year <= 0) {
            throw new Error("Year must be a positive integer.");
        }
        this.year = year;
    }

}

class Ebook extends Book {
    constructor(title, author, year, fileSize) {
        super(title, author, year);
        if(!Number.isFinite(fileSize) || fileSize <= 0) {
            throw new Error("File size must be a positive number.");
        }
        this.fileSize = fileSize;
    }

    download() {
        return  `Downloading ${this.title} by ${this.author}, size: ${this.fileSize}MB`;
    } 
    
}