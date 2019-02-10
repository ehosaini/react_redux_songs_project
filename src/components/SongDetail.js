import React, { Component } from 'react'
import { connect } from 'react-redux'

class SongDetail extends Component {
  displaySongDetails ({ song }) {
    if (!song) {
      return <div> Select a song first </div>
    }

    return (
      <div>
        <h3>Song Detail</h3>
        <div>
          <p>Title: {song.title}</p>
        </div>
        <div>
          <p>Duration: {song.duration}</p>
        </div>
      </div>
    )
  }
  render () {
    // return <div>{this.props.selectedSong && this.props.selectedSong.title}</div>
    return this.displaySongDetails(this.props)
  }
}

const mapStateToProps = (state) => {
  console.log(state.selectedSong)
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)
