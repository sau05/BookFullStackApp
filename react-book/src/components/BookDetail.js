import React, { Fragment } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import { InputGroup, FormControl, Button } from 'react-bootstrap'

class BookDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            book: {},
            isLoading: true
        }
    }
    update = () => {

    }
    handleNameChange = event => {
        this.setState({
            // book: event.target.value
        });
    };
    
    componentWillMount() {
        const { match: { params: { id } } } = this.props;
        fetch(`http://localhost:8080/books/${id}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    book: data.result,
                    isLoading: false
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    componentDidMount() {

    }

    render() {
        const isLoading = this.state.isLoading
        return (
            <div>
                {!isLoading && <Fragment>
                    <li><h1>Book Details</h1></li>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon3">
                                Book Name
                        </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="basic-url" aria-describedby="basic-addon3" value={this.state.book.name} size="10" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon3">
                                ISBN
                        </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="basic-url" aria-describedby="basic-addon3" value={this.state.book.isbn} onChange={this.handleNameChange} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon3">
                                Author
                        </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="basic-url" aria-describedby="basic-addon3" value={this.state.book.author.firstName + ' ' + this.state.book.author.lastName} onChange={this.handleNameChange} />
                    </InputGroup>
                    <Button variant="success" onClick={this.update}>Update</Button>{' '}

                    <Button variant="danger" onClick={this.props.history.goBack}>Cancel</Button>
                </Fragment>}
            </div>)
    }
}

export default withRouter(BookDetail)