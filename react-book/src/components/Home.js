import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import BookListAddItem from './BookListAddItem';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            authorList: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/books', {
            method: 'GET'
        })
            .then(result =>
                result.json()
            ).then(data => {
                this.setState({
                    list: data.result
                })
            })
            .catch(err => {
                console.log(err)
            })
        fetch('http://localhost:8080/authors', {
            method: 'GET'
        })
            .then(result =>
                result.json()
            ).then(data => {
                this.setState({
                    authorList: data.result
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (<Fragment>
            <BookListAddItem list={this.state.list} authorList={this.state.authorList} />
        </Fragment>)
    }
}

export default withRouter(Home)