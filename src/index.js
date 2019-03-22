import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Login from './components/Login'
import './css/index.css'

export default class Index extends Component {
    render() {
        return (
            <Login />
        )
        
    }
}

ReactDOM.render(<Index />, document.getElementById('root'))
