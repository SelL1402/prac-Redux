import { connect } from "react-redux";
import * as actions from '../actions'
const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={dec} className="btn btn-primary">dec</button>
            <button onClick={inc} className="btn btn-primary">inc</button>
            <button onClick={rnd} className="btn btn-primary">rnd</button>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        counter: state.value,
    }
}


export default connect(mapStateToProps, actions)(Counter);