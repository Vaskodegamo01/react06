import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import axios from '../../axios-shop';


class ProductFrom extends Component {
    state = {
        page: '',
        title: '',
        content: '',
        description: '',
        image: ''
    };
    textHandler = event =>{
        this.setState({[event.target.name]: event.target.value})
    };

    fileHandler = event =>{
        this.setState({[event.target.name]: event.target.files[0]})
    };

    submitForm = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(this.state).forEach(item=>{
            if(item !== "page") formData.append(item, this.state[item])
        });
        axios.post(`info/${this.state.page}`,formData).then(response => {
            if(response.status === 200) window.location.assign(`http://localhost:3000/${this.state.page}`);
        })
    };
    render(){
        return (
            <div className='justify-content-center'>
                <Form as={Col}>
                    <Form.Group as={Col} controlId="Page">
                        <Form.Label>Page</Form.Label>
                        <Form.Control  name="page" onChange={(e)=>this.textHandler(e)} value={this.state.page} as="select">
                            <option value="">Select</option>
                            <option>home</option>
                            <option>about</option>
                            <option>news</option>
                            <option>blogs</option>
                            <option>contacts</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="Title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" onChange={(e)=>this.textHandler(e)} value={this.state.title} placeholder="Enter title" />
                    </Form.Group>
                    <Form.Group controlId="Content">
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" rows="4" name="content" onChange={(e)=>this.textHandler(e)} value={this.state.content} placeholder="Enter content" />
                    </Form.Group>
                    <Form.Group controlId="Description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" onChange={(e)=>this.textHandler(e)} value={this.state.description} placeholder="Enter description" />
                    </Form.Group>
                    <Form.Group controlId="Image">
                        <Form.Label>Image</Form.Label>
                        <Form.Control name="image" type="file" onChange={(e)=>this.fileHandler(e)}/>
                    </Form.Group>
                    <button onClick={(e)=>this.submitForm(e)}>send</button>
                </Form>
            </div>
        )
    }
}

export default ProductFrom;