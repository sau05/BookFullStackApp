const author = require('../models/author')
const config = require('../../config')

function AuthorController() {
    this.authorList = function (req, res) {
        res.status(config.HTTP_SUCCESS).send({
            status: config.HTTP_SUCCESS,
            code: config.HTTP_SUCCESS,
            message: 'authors found',
            result: author
        })
    }

    this.addAuthor = function (req, res) {
        if (req.body.firstName && req.body.lastName) {
        
            try {
                let newAuthor = {
                    authorId: author.length + 1,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName
                }
                author.push(newAuthor)
                res.status(config.HTTP_SUCCESS).send({
                    status: config.HTTP_SUCCESS,
                    code: config.HTTP_SUCCESS,
                    message: 'Author added successfuly.'
                })
            } catch (error) {
                res.status(config.HTTP_BAD_REQUEST).send({
                    status: config.HTTP_BAD_REQUEST,
                    code: config.HTTP_BAD_REQUEST,
                    message: 'Author not added.'
                })
            }
        } else {
            res.status(config.HTTP_BAD_REQUEST).send({
                status: config.HTTP_BAD_REQUEST,
                code: config.HTTP_BAD_REQUEST,
                message: 'Please check author data.'
            })
        }
    }

    this.getAuthor = function (req, res) {
        const id = req.params.id
        const result = author.find(author => author.authorId = id)
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
            message: 'Author update successfully.'
        })
    }
}

module.exports = new AuthorController();