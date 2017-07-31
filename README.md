# Usage

```bash
npm i m-react-modal
```

```js
import Modal from 'm-react-modal'

<Modal 
  status={this.state.modifyStatus} 
  onHide={() => this.setState({ modifyStatus: false })}
>
  <h1>I am a react modal</h1>
</Modal>
```

# Optional

```js
<Modal {...opts}>
  <h1>I am a react modal</h1>
</Modal>
```

**opts:**

```js
y: '50px'

layerStl: {
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

contentStl: {
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
```