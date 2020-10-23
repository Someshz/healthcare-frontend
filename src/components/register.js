import React,{Component} from 'react';
import {Container,Col, Form,FormGroup,Input,Label} from 'reactstrap';


export class Register extends Component
{
    constructor(props){
        super(props);
        this.state={
          name:'',
          description:'',
          specialization:'',
          contact:0,
          rating:0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange1=this.handleChange1.bind(this);
        this.handleChange2=this.handleChange2.bind(this);
        this.handleChange3=this.handleChange3.bind(this);
        this.handleChange4=this.handleChange4.bind(this);
        this.handleChange5=this.handleChange5.bind(this);
    }

    handleChange1(event) {
      this.setState({name: event.target.value});
    }
    handleChange2(event) {
      this.setState({description: event.target.value});
    }
    handleChange3(event) {
      this.setState({specialization: event.target.value});
    }
    handleChange4(event) {
      this.setState({contact: event.target.value});
      console.log(this.state.contact);
    }
    handleChange5(event) {
      this.setState({rating: event.target.value});
    }

    handleSubmit(){
      let databody = {
          "name": this.state.name,
          "description": this.state.description,
          "specialization":this.state.specialization,
          "contact":this.state.contact,
          "rating":this.state.rating
      }
  
      return fetch('http://localhost:9000/user', {
          method: 'POST',
          body: JSON.stringify(databody),
          headers: {
              'Content-Type': 'application/json'
          },
      })
      .then(res => res.json())
      .then(data => console.log(data)); 
  }
    
    render(){
          return(
            <Container>
              <Col>
              <Form onSubmit={this.handleSubmit}>
             <FormGroup>
               <Label for="name">Name of Hospital</Label>
               <Input type="name" name="name" id="name" value={this.state.name} onChange={this.handleChange1} placeholder="Name of Hospital" />
             </FormGroup>
             <FormGroup>
               <Label for="description">Description</Label>
               <Input type="description" name="description" value={this.state.description} onChange={this.handleChange2} id="description" placeholder="Information Of Hospital" />
             </FormGroup>
             <FormGroup>
               <Label for="specialization">Specialization</Label>
               <Input type="specialization" name="specialization" value={this.state.specialization} onChange={this.handleChange3} id="specialization" placeholder="Specialization"/>
             </FormGroup>
             <FormGroup>
               <Label for="contact">Contact</Label>
               <Input type="number" name="contact" id="contact" value={this.state.contact} onChange={this.handleChange4} placeholder="Contact"/>
             </FormGroup>
             <FormGroup>
               <Label for="rating">Rating</Label>
               <Input type="number" name="rating" id="rating" value={this.state.rating} onChange={this.handleChange5} placeholder="Rating" />
             </FormGroup>
             <Input type="submit" value="Register New Hospital" color="success"/>
             </Form>
             </Col>
             </Container>
           
        )
    }

}    
