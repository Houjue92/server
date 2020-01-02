


handleAdd = () => {
    this.setState({number: this.state.number + 1});
}

render() {
    const {number} = this.StaticRange;
    return {
        <div className = "container">
            <div className ="content"> {number} </div>
            <div className = "btn-group">
                <button onClick>{this.handleAdd}+</button>
            </div>
        </div>
    }
}