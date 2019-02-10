import React, { Component } from 'react'
import { connect } from 'react-redux'

import { selectSong } from '../actions/index'

class SongList extends Component {
  
  renderList = () => {
    return this.props.songs.map(song => {
        return (
            <div className="item" key={song.title}>
            
            {/* {select button} */}
            <div className="right floated content">
                <button className="ui button primary" onClick={() => {
                    this.props.selectSong(song)
                }}>
                    Select
                </button>
            </div>
            
            {/* {song title} */}
            <div className="content">{song.title}</div>
            </div>
            
        )
    })
  }  

  render () {
    return <div className="ui divided list">{this.renderList()}</div>
  }
}

// state arguments is the object created by combine reducers
// in src/reducers/index.js
const mapStateToProps = (state) => {
    console.log(state)
    return { songs: state.songList}
}

export default connect(mapStateToProps, { selectSong })(SongList)
