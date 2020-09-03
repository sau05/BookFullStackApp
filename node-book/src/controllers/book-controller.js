const config = require('../../config')
const book = require('../models/book')
const author = require('../models/author')

function BookController() {
    this.bookList = function (req, res) {
        res.status(config.HTTP_SUCCESS).send({
            status: config.HTTP_SUCCESS,
            code: config.HTTP_SUCCESS,
            message: 'books found',
            result: book
        })
    }

    this.addBook = function (req, res) {
        if (req.body.name && req.body.isbn && req.body.authorId) {
            
            try {
                let newBook = {
                    bookId: book.length + 1,
                    isbn: req.body.isbn,
                    name: req.body.name,
                    authorId: req.body.authorId
                }
                book.push(newBook)
                res.status(config.HTTP_SUCCESS).send({
                    status: config.HTTP_SUCCESS,
                    code: config.HTTP_SUCCESS,
                    message: 'Book added successfuly.'
                })
            } catch (error) {
                res.status(config.HTTP_BAD_REQUEST).send({
                    status: config.HTTP_BAD_REQUEST,
                    code: config.HTTP_BAD_REQUEST,
                    message: 'Book not added.'
                })
            }
        } else {
            res.status(config.HTTP_BAD_REQUEST).send({
                status: config.HTTP_BAD_REQUEST,
                code: config.HTTP_BAD_REQUEST,
                message: 'Please check book data.'
            })
        }
    }

    this.getBook = function (req, res) {
        const id = req.params.id
        const result = book.find(book => book.bookId == id)
        const authorItem = author.find(author => author.authorId == result.authorId)
        result.author = authorItem
        res.status(config.HTTP_SUCCESS).send({
            status: config.HTTP_SUCCESS,
            code: config.HTTP_SUCCESS,
            result: result
        })
    }

    this.update = function (req, res) {
        const id = req.params.id
        res.status(config.HTTP_SUCCESS).send({
            status: config.HTTP_SUCCESS,
            code: config.HTTP_SUCCESS,
            message: 'Book update successfully.'
        })
    }
}

module.exports = new BookController();