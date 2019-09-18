import React from 'react';
import { BallBeat } from 'react-pure-loaders';



class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:true
        }
    }
    render() {
        return (
            <div>
                <BallBeat
                color = {'white'}
                loading = {this.state.loading}
                />
            </div>
        )
    }
}

export default Loading;