// BAD
// class Book {
//     itle: string = "";
//     author: string = "";
//     description: string = "";
//     pages: number = 100;

//     public saveToFile(): void { }
// }

class Book {
    title: string = "";
    author: string = "";
    description: string = "";
    pages: number = 100;
}

class Persistence {
    saveToFile(book: Book): void { }
}