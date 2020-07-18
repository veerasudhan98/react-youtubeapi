import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/YouTube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component{
    state= {videos : [], video : null}

//THIS SHOWS ON DEFAULT SCREEN
    componentDidMount=()=>{
        this.getOnSubmit('nature');
    }
//WHEN USER CLICKS A VIDEO
    getOnClick = async (clickedVideo) =>{
        await this.setState({video:clickedVideo})
    }
//WHEN USER PRESS ENTER ON SEARCHBAR
    getOnSubmit= async(value)=>{
        const response = await youtube.get('/search',{
            params:{
                q:value
            }
        })
        this.setState({videos: response.data.items})
        this.setState({video:this.state.videos[0]})    
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar inputText={this.getOnSubmit}/>
                <div className="ui grid">
                <div className="ui row">
                <div className="eleven wide column">
                    <VideoDetail video={this.state.video}/>
                </div>
                <div className="five wide column">
                    <VideoList style={{border:'5px solid black'}}
                        videoList={this.state.videos}
                        click={this.getOnClick}/>
                </div>
                </div>
                </div>
            </div>
        )
    }
}

export default App
