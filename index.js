'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var layerStl = {
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
  cursor: 'pointer'
};

var contentStl = {
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
  WebkitTransition: 'all 0.3s'
};

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.state = {
      layerStl: _this.props.layerStl || layerStl,
      contentStl: _this.props.contentStl || contentStl,
      y: _this.props.y || '50px'
    };
    return _this;
  }

  _createClass(Modal, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var status = nextProps.status;
      var y = this.state.y;
      if (status) {
        this.setState({
          layerStl: _extends({}, this.state.layerStl, { opacity: 1, visibility: 'visible' }),
          contentStl: _extends({}, this.state.contentStl, { opacity: 1, visibility: 'visible', transform: 'translate3d(0, ' + y + ', 0)' })
        });
      } else {
        this.setState({
          layerStl: _extends({}, this.state.layerStl, { opacity: 0, visibility: 'hidden' }),
          contentStl: _extends({}, this.state.contentStl, { opacity: 0, visibility: 'hidden', transform: 'translate3d(0, -' + y + ', 0)' })
        });
      }
    }
  }, {
    key: 'onHide',
    value: function onHide() {
      if (this.props.onHide != null) this.props.onHide();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var status = this.props.status;

      return _react2.default.createElement(
        'div',
        { className: this.props.modalClassName },
        _react2.default.createElement('div', {
          style: this.state.layerStl,
          onClick: function onClick() {
            return _this2.onHide();
          },
          className: this.props.layerClassName || ''
        }),
        _react2.default.createElement(
          'div',
          {
            style: this.state.contentStl,
            className: this.props.contentClassName || ''
          },
          this.props.children
        )
      );
    }
  }]);

  return Modal;
}(_react2.default.Component);

exports.default = Modal;
