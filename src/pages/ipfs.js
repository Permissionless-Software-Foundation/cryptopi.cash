import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

// const IPFS = typeof window !== `undefined` ? require('ipfs') : null
// const IPFS = require('ipfs')
import IPFS from 'ipfs'
let ipfs
const MASTER_MULTIADDR = `/dns4/wss.psfoundation.cash/tcp/443/wss/ipfs/QmaUW4oCVPUFLRqeSjvhHwGFJHGWrYWLBEt7WxnexDm3Xa`

// const Generic = (props) => (
let _this
class IPFSPage extends React.Component {
  constructor(props) {
    super(props)
    _this = this
    this.state = {
      output: '',
      showTerminal: true,
    }
  }

  async componentDidMount() {
    try {
      console.log('Setting up instance of IPFS...')
      this.handleLog('Setting up instance  of IPFS...')

      ipfs = await IPFS.create()
      this.handleLog('IPFS node created.')

      // Pass the IPFS instance to the window object. Makes it easy to debug IPFS
      // issues in the browser console.
      if (typeof window !== 'undefined') window.ipfs = ipfs

      await this.initIpfs()

      console.log('...IPFS node setup.')
      this.handleLog('...IPFS node setup.')
    } catch (err) {
      this.handleLog('Error trying to initialize IPFS node!')
      console.error('Error in componentDidMount(): ', err)
    }
  }

  render() {
    const { output, showTerminal } = _this.state
    return (
      <Layout>
        <Helmet>
          <title>IPFS Example</title>
          <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>IPFS Example</h1>
              </header>
              <span className="image main">
                {showTerminal && (
                  <textarea
                    id="ipfsTerminal"
                    name="ipfsTerminal"
                    rows="10"
                    cols="50"
                    readOnly
                    value={`${output ? `${output}>` : '>'}`}
                  />
                )}
              </span>
              <p>
                This page demonstrates how to create an IPFS node in the
                browser. If you open a web console, you can interact with the
                IPFS node by interacting with <code>window.ipfs</code>.
              </p>
              <p>
                Try copying and pasting this instruction into the web console,
                in order to show the peers your browser-based IPFS node is
                connected to:
                <br />
                <code>
                  console.log(JSON.stringify(await window.ipfs.swarm.peers(),
                  null, 2))
                </code>
              </p>
            </div>
          </section>
        </div>
      </Layout>
    )
  }

  // Initialize the IPFS node and try to connect to the PSF bootstrap node.
  async initIpfs() {
    try {
      ipfs = await ipfs
      this.handleLog('IPFS node is ready.')

      this.handleLog(
        'Trying to connect to PSF node. This will fail if this page is not served over https...'
      )
      await ipfs.swarm.connect(MASTER_MULTIADDR)
      this.handleLog('...IPFS node connected PSF node!')
    } catch (err) {
      console.error('Error in initIpfs()')
      throw err
    }
  }

  // Adds a line to the terminal
  handleLog(str) {
    try {
      _this.setState({
        output: _this.state.output + '   ' + str + '\n',
      })
      _this.keepScrolled()
    } catch (error) {
      console.warn(error)
    }
  }

  // Keeps the terminal scrolled to the last line
  keepScrolled() {
    try {
      // Keeps scrolled to the bottom
      var textarea = document.getElementById('ipfsTerminal')
      if (textarea) {
        textarea.scrollTop = textarea.scrollHeight
      }
    } catch (error) {
      console.warn(error)
    }
  }

  // Shows the terminal
  handleShowTerminal() {
    _this.setState({
      showTerminal: true,
    })
  }

  // Hides the terminal
  handleHideTerminal() {
    _this.setState({
      showTerminal: false,
    })
  }
}

export default IPFSPage
