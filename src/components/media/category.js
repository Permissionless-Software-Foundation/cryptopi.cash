import React from 'react'
import PropTypes from 'prop-types'
import MediaBox from './media-box'

let _this
class Category extends React.Component {
  constructor(props) {
    super(props)
    _this = this
    this.state = {
      scrollx: 0,
    }
    _this.scrollValue = window.innerWidth > 600 ? 300 : window.innerWidth
  }
  render() {
    const { id, title, about, media } = _this.props
    return (
      <section key={id} className="main style1 media-category">
        <h1>{title}</h1>
        <div id={id} className="media-container">
          <div className="media-arrow-left">
            <i
              aria-hidden="true"
              class="fas fa-caret-left "
              onClick={() => _this.toLeft(id)}
            ></i>
          </div>

          <div className="box about-box media-content">
            <div className="text-center">{about}</div>
          </div>
          {media.map((val, i) => {
            return <MediaBox key={val.url + i} url={val.url} />
          })}
          <div className="media-arrow-right">
            <i
              aria-hidden="true"
              class="fas fa-caret-right "
              onClick={() => _this.toRight(id)}
            ></i>
          </div>
        </div>
      </section>
    )
  }

  shouldComponentUpdate() {
    return false
  }

  // slider
  toRight(id) {
    try {
      const element = document.getElementById(id)
      if (element.scrollLeft !== _this.state.scrollx) return
      const value = _this.state.scrollx + _this.scrollValue

      element.scroll({
        top: 0,
        left: value,
        behavior: 'smooth',
      })

      _this.setState({
        scrollx: value,
      })
    } catch (error) {
      console.warn(error)
    }
  }

  // slider
  toLeft(id) {
    try {
      const element = document.getElementById(id)

      if (element.scrollLeft <= 0) return
      const value = _this.state.scrollx - _this.scrollValue

      element.scroll({
        top: 0,
        left: value,
        behavior: 'smooth',
      })

      _this.setState({
        scrollx: value,
      })
    } catch (error) {
      console.warn(error)
    }
  }
}
Category.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  about: PropTypes.string,
  media: PropTypes.array,
}
export default Category
