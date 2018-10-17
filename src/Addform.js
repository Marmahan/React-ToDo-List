import React, { Component } from 'react';

class Addform extends Component{
    state = {
        content : ''
    }
    handlechange=(e)=>{
        this.setState({
            content: e.target.value
        })
    }
    handlesubmit=(e)=>{
      e.preventDefault();
      //pass the new state to the Addtodo function in the App component  
      this.props.Addtodo(this.state);
      //empty the content, since the value of the inputtext equals the content then the inputtext will be cleared
      this.setState({
          content:''
      })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handlesubmit}>
                    <div className = "col-lg-6">
                        <div className = "input-group">
                            <input type = "text" className = "form-control" onChange={this.handlechange} value={this.state.content}/>
                                <span className = "input-group-btn">
                                    <button className = "btn btn-default" onSubmit={this.handlesubmit}>
                                        Go!
                                    </button>
                                </span>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Addform;