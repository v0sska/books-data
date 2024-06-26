This project is created for techical task and provide basics CRUD funcionality.

for start project type in command line for starting MongoDB:
  
              docker-compose up 

example of adding a book: 

          {
              "title": "Example Book",
              "pageCount": 350,
              "publishedDate": {
                  "date": "2023-01-01T00:00:00.000Z"
              },
              "thumbnailUrl": "http://example.com/thumbnail.jpg",
              "shortDescription": "This is a short description of the example book.",
              "longDescription": "This is a long description of the example book. It goes into more detail about the book's content and features.",
              "status": "PUBLISHED",
              "authors": ["Author One", "Author Two"]
          }

and example of list of books: 

