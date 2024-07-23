const books = [
  { title: "book1", author: "abc", year: 2008 },
  { title: "book2", author: "def", year: 20012 },
  { title: "book3", author: "ghi", year: 2006 },
  { title: " book4", author: "jkl", year: 2015 },
];
function filterAndCapitalizeBooks(books) {
  return books
    .filter((books) => books.year > 2010)
    .map((books) => ({
      title: books.title,
      author: capitalizeName(books.author),
      year: books.year,
    }));
}
const filtered_books = filterAndCapitalizeBooks(books);
console.log(filtered_books);
function capitalizeName(name) {
  return name
    .split(" ")
    .map((name) => name.toUpperCase())
    .join(" ");
}
