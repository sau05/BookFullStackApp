import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Col, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

const BookListAddItem = (props) => {

    const [name, setName] = React.useState('');
    const [isbn, setIsbn] = React.useState('');
    const list = props.list;
    const authorList = props.authorList;
    const [authorId, setAuthorId] = React.useState('');
    const [buttonState, setButtonState] = React.useState(true);

    const handleNameChange = event => {
        setName(event.target.value);
    };

    const handleIsbnChange = event => {
        setIsbn(event.target.value);
    }

    const handleAuthorChange = event => {
        setButtonState(event.target.selectedIndex === 0);
        setAuthorId(event.target.value)
    }

    const handleSubmit = event => {
        if (name && isbn && authorId) {
            fetch('http://localhost:8080/book', {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    isbn: isbn,
                    authorId: authorId
                })
            }).then((result) => {
                setName('');
                setIsbn('');
                window.location.reload();
            }).catch(error => {
                console.log(error)
            })
        }
        event.preventDefault()
    };
    return (
        <div>
            <Form onSubmit={handleSubmit} >
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Book Name</Form.Label>
                        <Form.Control value={name} onChange={handleNameChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control value={isbn} onChange={handleIsbnChange} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Author</Form.Label>
                        <Form.Control as="select" defaultValue="Choose..." onChange={handleAuthorChange}>
                            <option>Choose Author...</option>
                            {
                                authorList.map(list => (
                                    <option
                                        key={list.authorId}
                                        value={list.authorId}
                                        label={list.firstName + ' ' + list.lastName}
                                    />
                                ))
                            }
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit" disabled={buttonState}>
                    Add Book
                </Button>
                <Link to={{ pathname: `/author` }}>Go to Author list</Link>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Book List</Form.Label>
                        {list && <ListGroup>
                            {list.map((item, index) => (
                                <ListGroupItem><Link key={index} to={{ pathname: `/book/${item.bookId}`, id: item.bookId }}>{item.name}</Link></ListGroupItem>
                            ))}
                        </ListGroup>
                        }
                    </Form.Group>
                </Form.Row>
            </Form>
        </div>
    );
};

export default BookListAddItem;