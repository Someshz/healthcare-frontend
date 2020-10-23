import React,{Component} from 'react';
import {Card,CardBody,Container,Col,Row,Progress} from 'reactstrap';
export class Classcomponent extends Component
{
    constructor(props){
        super(props);
        this.state={
            obj:[]
        };
    }
    callAPI()
    {
        fetch("http://localhost:9000/user")
        .then(res=>res.json())
        .then(res=>
            {  this.setState({obj:Array.from(res)})

            }
         )
    }
    componentWillMount()
    {
        this.callAPI();
    }
   render()
   {
   
    return(
        
        
        this.state.obj.map(e=>
            {
                return(
                    <div>
                    <Card>
                     <CardBody>
                     <Container>
                        <Row>
                            <Col><h1>Hospital :{e.name}</h1></Col>
                        </Row>
                        <Row>
                        <Col>information :{e.description}</Col>
                        <Col>specialization :{e.specialization}</Col>
                        <Col><i className="fa fa-phone">contact</i>   {e.contact}</Col>
                        <Col>Rating : <div className="text-center">{e.rating}</div><Progress value={e.rating} />  </Col>
                        </Row>
                        </Container>
                       </CardBody>
                    </Card>
                    </div>
                )
            })
    )
   
   }
}