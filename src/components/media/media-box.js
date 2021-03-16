import React from 'react'
import PropTypes from 'prop-types'

let _this
class MediaBox extends React.Component {
  constructor(props) {
    super(props)
    _this = this
    this.state = {
      url: 'https://www.youtube.com/embed/RlNVyatwd5M',
    }
  }
  render() {
    return (
      <div className="grid-wrapper media-content">
        <div className="col-12">
          <div className="youtube-responsive-container">
            <iframe
              width="560"
              height="315"
              src={_this.props.url}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="kickoff"
              style={{ padding: '10px' }}
            />
          </div>
        </div>
        <div className="col-6">
          <button
            onClick={_this.showInfo}
            type="button"
            className="button special media-btn"
          >
            Info
          </button>
        </div>
        <div className="col-6">
          <button
            onClick={_this.watch}
            type="button"
            className="button special media-btn"
          >
            Watch
          </button>
        </div>
      </div>
    )
  }
  showInfo() {
    // show info
  }
  watch() {
    // watch
  }
}
MediaBox.propTypes = {
  url: PropTypes.string.isRequired,
}

export default MediaBox
