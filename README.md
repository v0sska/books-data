This project is created for techical task and provide basics CRUD funcionality.

for start project type in terminal line for starting MongoDB:
  
              docker-compose up 

After this type in terminal for start project:

            npm start or npm build

example of adding a book: 

                  {
                   "title": "1984",      
                    "pageCount": 328,
                    "publishedDate": {
                      "date": "1949-06-08T00:00:00.000Z"
                    },
                    "thumbnailUrl": "http://example.com/1984.jpg",
                    "shortDescription": "A novel by George Orwell.",
                    "longDescription": "1984, dystopian social science fiction novel and cautionary tale, written by the English writer George Orwell. It was                               published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime.",
                    "status": "CANCELED",
                    "authors": [
                    "George Orwell"
                    ]
                  }


and example of list of books: 

            {
                    "_id": "667c12194c14a1eaf8ddefff",
                    "title": "1984",
                    "pageCount": 328,
                    "publishedDate": {
                        "date": "1949-06-08T00:00:00.000Z"
                    },
                    "thumbnailUrl": "http://example.com/1984.jpg",
                    "shortDescription": "A novel by George Orwell.",
                    "longDescription": "1984, dystopian social science fiction novel and cautionary tale, written by the English writer George Orwell. It was                               published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime.",
                    "status": "CANCELED",
                    "authors": [
                        "George Orwell"
                    ]
                }

Also, when the project starts, the method that fills the database is called

