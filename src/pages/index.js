import React from 'react'
// import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Banner from '../components/Banner'

// import pic02 from '../assets/images/pic02.jpg'
// import pic05 from '../assets/images/pic05.jpg'

// Get the IPFS hash from the BCH Blockchain.
import Memo from '../services/memo-hash'
import Media from '../components/media'
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

        <Banner />

        <div id="main">
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Explore the Deep Web</h2>
              </header>
              <p>
                This internet is bigger than just the web. Don't know what Tor
                is? Check out{' '}
                <a
                  href="https://www.torproject.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  the Tor project
                </a>
                . Never heard of the Inter-Planetary File System (IPFS)?{' '}
                <a href="https://ipfs.io" target="_blank" rel="noreferrer">
                  Find out more
                </a>
                . These are separate networks on the internet. They kind of work
                like the web, but they are separate and run by different rules.
                They were created to fix some of the problems with the existing
                web.
              </p>
              <p>
                You can access this website via these other
                deep-web networks:
              </p>
              <ul>
                <li>
                  Web:{' '}
                  <a href="https://uncensorablepublishing.com">
                    UncensorablePublishing.com
                  </a>
                </li>
                <li>
                  Tor:{' '}
                  <a href="http://mscdffxifbhxiww6k6ub2buzdn3khqzoxpcbnbhrzkypdmkqz4u5hwid.onion">
                    mscdffxifbhxiww6k6ub2buzdn3khqzoxpcbnbhrzkypdmkqz4u5hwid.onion
                  </a>
                </li>
                <li>
                  IPFS:{' '}
                  <a
                    href={_this.state.ipfsHashLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {this.state.ipfsHash}
                  </a>
                </li>
                <li>
                  Bitcoin Cash Blockchain:{' '}
                  <a
                    href="https://memo.cash/profile/bitcoincash:qr7u857krgsvq0dwe8rzlt5rcx35r6hnmu6glavtx0"
                    target="_blank"
                    rel="noreferrer"
                  >
                    bitcoincash:qr7u857krgsvq0dwe8rzlt5rcx35r6hnmu6glavtx0
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <Media />
      </Layout>
    )
  }
}

export default HomeIndex
