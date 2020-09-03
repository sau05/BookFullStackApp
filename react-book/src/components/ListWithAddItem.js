import React from 'react';
import { Form, Col, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

const ListWithAddItem = (props) => {

    console.log(props.list)
    const [fName, setFName] = React.useState('');
    const [lName, setLName] = React.useState('');
    // const [list, setList] = props.list
    const list = props.list;

    fetch('http://localhost:8080/authors',{
        method: 'GET'
    })
    .then(result => 
        result.json()
        // console.log(result.json())
    ).then(data=>{
        console.log(data.result)
    }).catch(error => {
        console.log(error)
    })
    const handleFNameChange = event => {
        setFName(event.target.value);
    };

    const handleLNameChange = event => {
        setLName(event.target.value);
    }

    const handleSubmit = event => {
        if (fName && lName) {
            console.log(fName)
            // setList(list.concat(value));
            fetch('http://localhost:8080/author', {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                        firstName: fName,
                        lastName: lName
                })
            }).then((result) => {
                setFName('');
                setLName('');
                window.location.reload();
            }).catch(error => {
                console.log(error)
            })
        }
        event.preventDefault()
    };
    return (
        <div>
            <Form onSubmit={handleSubmit}>
            <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control value={fName} onChange={handleFNameChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control value={lName} onChange={handleLNameChange} />
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">
                    Add Author
                </Button>
                <Form.Row>
                    {list && <ListGroup>
                        {console.log(list)}
                        {list.map((item, index) => (
                            <ListGroupItem>{item.firstName+' '+item.lastName}</ListGroupItem>
                        ))}
                    </ListGroup>
                    }
                </Form.Row>
            </Form>
        </div>
    );
};

export default ListWithAddItem;