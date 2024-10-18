# Simple Rest
## How to Run
1. `git clone ...`
2. `cd /path/to/project`
3. `npm install`
4. `node index.js`

## API DOCS

1. **GET** `/`
**Description**: Returns a greeting message.

**Response**:
- 200 OK
```
"Hello World"
```

2. **GET** `/books`
**Description**: Fetches a list of all books.

**Response**:
- 200 OK
```json
{
  "data": [
    {
      "id": 1,
      "name": "Book Title 1",
      "author": "Author 1"
    },
    ...
  ]
}
```

3. **GET** `/books/:id`
**Description**: Fetches details of a specific book by ID

**Parameters**:
- `id` (required): ID of the book to retrieve.

**Response**:
- 200 OK
```json
{
  "data": {
    "id": 1,
    "name": "Book Title 1",
    "author": "Author 1"
  }
}
```

4. **POST** `/books`
**Descriptions**: Adds a new book to the collection.

**Request Body**:
```json
{
  "name": "New Book Title",
  "author": "New Author"
}
```

**Response**:
- 200 OK
```json
{
  "message": "Book Created",
  "data": {
    "id": 2,
    "name": "New Book Title",
    "author": "New Author"
  }
}
```

5. **PUT** `/books/:id`
**Description**: Updates an existing book by ID

**Parameters**:
- `id` (required): ID of the book to update

**Request Body**:
```json
{
  "name": "Updated Book Title",
  "author": "Updated Author"
}
```

**Response**:
- 200 OK
```json
{
  "message": "Book Updated",
  "data": {
    "id": 1,
    "name": "Updated Book Title",
    "author": "Updated Author"
  }
}
```

6. **DELETE** `/books/:id`
**Description**: Deletes a specific book by ID

**Parameters:
- `id` (required): ID of the book to delete

**Response**:
- 200 OK
```json

{
  "message": "Book Deleted"
}
```
