import React, { Component } from 'react'
import { connect } from 'react-redux'

class SongList extends Component {
  renderList = () => {
    return this.props.songs.map(song => {
        return (
            <div className="item" key={song.title}>
            
            {/* {select button} */}
            <div className="right floated content">
                <button className="ui button primary">
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
    console.log(this.props)
    return <div className="ui divided list">{this.renderList()}</div>
  }
}

const mapStateToProps = (state) => {
    return { songs: state.songList}
}

export default connect(mapStateToProps)(SongList)
