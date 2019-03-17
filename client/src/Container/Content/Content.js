import React, {Component, Fragment} from 'react';
import axios from '../../axios-shop';
import './Content.css'

class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            content: null
        };
    }


    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== prevProps.history.location.pathname) {
            axios.get(`info${this.props.history.location.pathname}`).then(response => {
                this.setState({content: response.data})
            })
        }
    }

    componentDidMount() {
        axios.get(`info${this.props.history.location.pathname}`).then(response => {
            this.setState({content: response.data})
        })
    }

    render() {
        const url = 'http://localhost:8000/uploads/';
        return (
            <Fragment>
                {this.state.content && this.state.content.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className="Content">
                                <h3><b>{item.title}</b></h3>
                                <p>{item.content}</p>
                                <span>{item.description}</span>
                            </div>
                            <div className="Image">
                                <img src={url + item.image}  width="200"  alt=""/>
                            </div>
                        </div>
                    )
                })}
            </Fragment>
        )
    }
}

export default Content;