import React from 'react'
// import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

// Get the IPFS hash from the BCH Blockchain.
import Memo from '../services/memo-hash'
import Intro from '../components/media/intro'
import Category from '../components/media/category'

// import BCHJS from '@chris.troutner/bch-js'

let _this

class HomeIndex extends React.Component {
  constructor(props) {
    super(props)

    this.addr = `bitcoincash:qr7u857krgsvq0dwe8rzlt5rcx35r6hnmu6glavtx0`
    this.memo = new Memo({ bchAddr: this.addr })

    this.state = {
      ipfsHash: 'No Result',
      ipfsHashLink: '',
    }

    _this = this

    _this.categoryA = [
      {
        url: 'https://www.youtube.com/embed/RlNVyatwd5M',
        info: ' A video 1',
      },
    ]

    _this.categoryB = [
      {
        url: 'https://www.youtube.com/embed/nrtVuk3v1R0',
        info: ' A video 1',
      },
      {
        url: 'https://www.youtube.com/embed/G7ptg7VIRnk',
        info: ' A video 2',
      },
      {
        url: 'https://www.youtube.com/embed/JJfxYKWV9JQ',
        info: ' A video 3',
      },
      {
        url: 'https://www.youtube.com/embed/VVc0VbOD4co',
        info: ' A video 4',
      },
    ]
  }

  async componentDidMount() {
    const hash = await this.memo.findHash()

    if (!hash) {
      console.error(
        `Could not find IPFS hash in transactions for address ${this.addr}`
      )
      return
    }
    console.log(`latest IPFS hash: ${hash}`)

    this.setState({
      ipfsHash: hash,
      ipfsHashLink: `https://ipfs.io/ipfs/${hash}`,
    })
  }

  render() {
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
          key="Category A"
          id="Category A"
          title="Category A"
          about="About category A"
          media={_this.categoryA}
        />

        <Category
          key="Category B"
          id="Category B"
          title="Category B"
          about="About category B"
          media={_this.categoryB}
        />
      </Layout>
    )
  }
}

export default HomeIndex
