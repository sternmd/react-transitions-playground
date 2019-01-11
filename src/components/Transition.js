import React, { Component } from 'react';
import '../css/App.css';

class TransitionComp extends Component{
    state = {
        show: true
    }

    showDiv = () => {
        this.setState({
            show: !this.state.show ? true : false
        })
    }

    render(){
        return(
            <div>
                { this.state.show ? <div style={{
                  background: 'red',
                  height: '100px'
                }}>
                </div> : null
                }
            </div>

        )
    }
}


export default TransitionComp;
