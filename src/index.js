import React from 'react'

export default (Component) => {
  return class ReactToWidth extends React.Component {
    state = {width: 0}
    componentDidMount () {
      this._calculateWidth()
      window.addEventListener('resize', this._calculateWidth)
    }
    componentWillUnmount () {
      window.removeEventListener('resize', this._calculateWidth)
    }
    _calculateWidth = () => {
      this.setState({
        width: React.findDOMNode(this).offsetWidth
      })
    }
    render () {
      return <Component {...this.props} width={this.state.width} />
    }
  }
}
