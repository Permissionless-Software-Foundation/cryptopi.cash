import React from 'react'
import PropTypes from 'prop-types'

let _this
class MediaBox extends React.Component {
  constructor(props) {
    super(props)
    _this = this
    this.state = {
      url: '',
    }
  }
  render() {
    const { url, info } = _this.state
    const { onShowInfo, onWatchVideo } = _this.props
    return (
      <div className="grid-wrapper media-content">
        <div className="col-12">
          <div className="youtube-responsive-container">
            <iframe
              width="560"
              height="315"
              src={url}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="kickoff"
              style={{ padding: '10px' }}
            />
          </div>
        </div>
        <div className="col-12 media-btn-container">
          <button
            onClick={() => onShowInfo(info)}
            type="button"
            className="button  media-btn"
          >
            Info
          </button>
          <button
            onClick={() => onWatchVideo(url)}
            type="button"
            className="button  media-btn"
          >
            Watch
          </button>
        </div>
      </div>
    )
  }
  static getDerivedStateFromProps(props, state) {
    if (!state.url) {
      return props
    } else {
      return null
    }
  }
  shouldComponentUpdate() {
    return false
  }
}
MediaBox.propTypes = {
  url: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  onShowInfo: PropTypes.func,
  onWatchVideo: PropTypes.func,
}

export default MediaBox
