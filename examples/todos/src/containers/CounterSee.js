import { connect } from 'react-redux'
import Counter from '../components/Counter'

const mapStateToProps = (state) => ({
    counter: state.counter
    //state: state
})

const CounterSee = connect(mapStateToProps)(Counter)

export default CounterSee
