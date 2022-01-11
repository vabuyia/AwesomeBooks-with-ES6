export default class Books {
  constructor() {
    this.bookList = [];
  }

  addNewBook(newBook) {
    return this.bookList.push(newBook);
  }

  removeBooksFromList(element) {
    for (let i = 0; i < this.bookList.length; i += 1) {
      if (element === this.bookList[i].title) {
        this.bookList.splice(i, 1);
      }
    }
    return this.bookList;
  }
}