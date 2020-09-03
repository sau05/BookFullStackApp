import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import ListWithAddItem from './ListWithAddItem';

class Author extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/authors', {
            method: 'GET'
        }).then(result => result.json())
            .then(data => {
                // console.log(res.data)
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
            <ListWithAddItem list={this.state.list} />
        </Fragment>)
    }
}

export default withRouter(Author)