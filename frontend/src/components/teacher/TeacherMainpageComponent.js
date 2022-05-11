import React, {Component} from "react";

export default class TeacherMainpage extends Component{

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Welcome back to our platform, Teacher!</h1>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4">
                            Some text in here can be useful.
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}