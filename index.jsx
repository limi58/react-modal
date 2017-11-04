import React from 'react'

const layerStl = {
  position: 'fixed',
  background: 'rgba(0,0,0,0.12)',
  zIndex: 9,
  height: '100%',
  width: '100%',
  transition: 'opacity 0.3s',
  WebkitTransition: 'opacity 0.3s',
  visibility: 'hidden',
  opacity: 0,
  top: 0,
  left: 0,
  cursor: 'pointer',
}

const contentStl = {
  boxShadow: '0 5px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.4)',
  top: 0,
  position: 'fixed',
  width: '50%',
  background: '#fff',
  margin: '0 auto',
  left: 0,
  right: 0,
  padding: '15px',
  borderRadius: '4px',
  zIndex: 10,
  visibility: 'hidden',
  opacity: 0,
  maxHeight: '80%',
  overflowY: 'auto',
  transition: 'all 0.3s',
  WebkitTransition: 'all 0.3s',
}

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      layerStl: this.props.layerStl || layerStl,
      contentStl: this.props.contentStl || contentStl,
      y: this.props.y || '50px',
    }
  }
  componentWillReceiveProps(nextProps) {
    const status = nextProps.status
    const y = this.state.y
    if (status) {
      this.setState({ 
        layerStl: { ...this.state.layerStl, opacity: 1, visibility: 'visible' },
        contentStl: { ...this.state.contentStl, opacity: 1, visibility: 'visible', transform: `translate3d(0, ${y}, 0)` }
      })
    } else {
      this.setState({ 
        layerStl: { ...this.state.layerStl, opacity: 0, visibility: 'hidden' },
        contentStl: { ...this.state.contentStl, opacity: 0, visibility: 'hidden', transform: `translate3d(0, -${y}, 0)` }
      })
    }
  }
  onHide() {
    if(this.props.onHide != null) this.props.onHide()
  }
  render() {
    const { status } = this.props
    return (
      <div className={this.props.modalClassName}>
        <div 
          style={this.state.layerStl} 
          onClick = { () => this.onHide() }
          className={this.props.layerClassName || ''}
        >
        </div>
        <div 
          style={this.state.contentStl} 
          className={this.props.contentClassName || ''}
        >
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Modal