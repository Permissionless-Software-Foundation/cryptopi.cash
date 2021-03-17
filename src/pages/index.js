import React from 'react'
// import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'


import Intro from '../components/media/intro'
import Category from '../components/media/category'
import InfoModal from '../components/media/modals.js/info'
import WatchModal from '../components/media/modals.js/watch'


const categoryA = {
  title: 'Category A',
  about:
    'Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and and Lorem Ipsum is simply dummy text of the printing and and Lorem Ipsum is simply dummy text of the printing and   ',
  videos: [
    {
      url: 'https://www.youtube.com/embed/G7ptg7VIRnk',
      info: 'Category A - Video Number 1 Info',
    },
    {
      url: 'https://www.youtube.com/embed/nrtVuk3v1R0',
      info: 'Category A - Video Number 2 Info',
    },
    {
      url: 'https://www.youtube.com/embed/G7ptg7VIRnk',
      info: 'Category A - Video Number 3 Info',
    },
  ],
}
const categoryB = {
  title: 'Category B',
  about:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here making it look like readable English. Many desktop publishing packages and web page editors now .',
  videos: [
    {
      url: 'https://www.youtube.com/embed/nrtVuk3v1R0',
      info: 'Video Number 1 Info',
    },
    {
      url: 'https://www.youtube.com/embed/G7ptg7VIRnk',
      info: 'Video Number 2 Info',
    },
    {
      url: 'https://www.youtube.com/embed/JJfxYKWV9JQ',
      info: 'Video Number 3 Info',
    },
    {
      url: 'https://www.youtube.com/embed/VVc0VbOD4co',
      info: 'Video Number 4 Info',
    },
  ],
}
let _this

class HomeIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showInfo: false,
      info: '',
      watchVideo: false,
      urlToWatch: '',
    }

    _this = this
  }

  async componentDidMount() {}

  render() {
    const { showInfo, info, urlToWatch, watchVideo } = _this.state
    return (
      <Layout>
        <Helmet
          title="Uncensorable Publishing"
          meta={[
            { name: 'description', content: 'Uncensorable Publishing' },
            {
              name: 'keywords',
              content:
                'ipfs, bch, bitcoin, bitcoin cash, web, publishing, gatsby, template',
            },
          ]}
        ></Helmet>
        <Intro />

        <Category
          key={categoryA.title}
          id={categoryA.title}
          title={categoryA.title}
          about={categoryA.about}
          onShowInfo={_this.toggleInfo}
          onWatchVideo={_this.toggleVideo}
          media={categoryA.videos}
        />

        <Category
          key={categoryB.title}
          id={categoryB.title}
          title={categoryB.title}
          about={categoryB.about}
          onShowInfo={_this.toggleInfo}
          onWatchVideo={_this.toggleVideo}
          media={categoryB.videos}
        />
        {_this.state.showInfo && (
          <InfoModal info={info} show={showInfo} onHide={_this.toggleInfo} />
        )}
        {_this.state.watchVideo && (
          <WatchModal
            url={urlToWatch}
            show={watchVideo}
            onHide={_this.toggleVideo}
          />
        )}
      </Layout>
    )
  }
  toggleInfo(info) {
    _this.setState({
      showInfo: !_this.state.showInfo,
      info,
    })
  }

  toggleVideo(urlToWatch) {
    _this.setState({
      watchVideo: !_this.state.watchVideo,
      urlToWatch,
    })
  }
}

export default HomeIndex
