export class Book{
    id: String;
    title: String;
    author: String;
    rating: String;
    price: String;
    coverPhotoUrl?: String;
    constructor(id: String,title: String,author: String,rating: String,price: String,coverPhotoUrl?: String) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.rating = rating;
        this.price = price;
        this.coverPhotoUrl = coverPhotoUrl;
}
};