import React, {Fragment, Component} from 'react'

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'hello, my name is lss',
            list: ['1111','222']
        }
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input onChange={this.onChangInput.bind(this)} value={this.state.inputValue}  type="text"/>
                    <button onClick={this.handleClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return <li 
                                        onClick={this.handleDelLi.bind(this, index)} 
                                        key={index}
                                        dangerouslySetInnerHTML={{__html: item}}></li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    onChangInput(e) {
        // console.log(e.target)
        this.setState({
            inputValue: e.target.value
        })
    }
    handleClick() {
        if(!this.state.inputValue) {
            alert('input 不能为空')
            return
        }
        let targetArr = [...this.state.list, this.state.inputValue]
        this.setState({
            list: targetArr,
            inputValue: ''
        })
    }
    handleDelLi(index) {
        // console.log(index)
        let targetArr = [...this.state.list]
        targetArr.splice(index, 1)
        this.setState({
            list: targetArr
        })
    }
}


export default Todolist
