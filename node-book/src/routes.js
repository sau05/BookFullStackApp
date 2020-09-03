const authorController = require('./controllers/author-controller');
const bookController = require('./controllers/book-controller');

module.exports = {
    configure: (app, router) => {
        app.get('/books', (req, res) => {
            // console.log(req.headers)
            bookController.bookList(req, res)
        })

        app.get('/books/:id', (req, res) => {
            bookController.getBook(req, res)
        })

        app.post('/book', (req, res) => {
            bookController.addBook(req, res)
        })

        app.put('/book/update/:id', (req, res) => {
            bookController.update(req, res)
        })

        app.put('/author/update/:id', (req, res) => {
            authorController.update(req, res)
        })
        app.get('/authors', (req, res) => {
            authorController.authorList(req, res)
        })

        app.get('/author/:id', (req, res) => {
            authorController.getAuthor(req, res)
        })

        app.post('/author', (req, res) => {
            authorController.addAuthor(req, res)
        })
    }
}