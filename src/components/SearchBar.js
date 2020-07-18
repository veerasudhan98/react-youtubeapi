import React from 'react'

class SearchBar extends React.Component{
    state={searchItem:''}
    render(){
        return (
            <div style={{marginTop:'20px'}}>
                <form className="ui form" 
                onSubmit={(e)=>{e.preventDefault();
                this.props.inputText(this.state.searchItem)}}>
                    <input type="text"
                    value={this.state.searchItem}
                    onChange={(e)=>this.setState({searchItem:e.target.value})}
                    placeholder="SEARCH HERE FOR VIDEOS"/>
                </form>
            </div>
        )
    }
}

export default SearchBar