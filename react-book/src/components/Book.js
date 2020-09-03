import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import BookListAddItem from './BookListAddItem';

class Book extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/books',{
            method: 'GET'
        }).then(response => response.json())
            .then(data => {
                this.setState({
                    list: data.result
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (<Fragment>
            <BookListAddItem list={this.state.list} />
        </Fragment>)
    }
}

export default withRouter(Book)