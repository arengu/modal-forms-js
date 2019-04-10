
const EventsFactory = require('../lib/EventsFactory');
const BaseView = require('../base/BaseView')

class ModalUI extends BaseView {

  constructor () {
    super();

    this.closeButton = null;
    this.modalBody = null;
    this.html = null;
  }

  _addCloseButtonListener(node) {
    node.addEventListener('click', this.hide.bind(this));
  }

  _buildCloseButton () {
    const node = document.createElement('button');
    node.classList.add('af-modal-close-icon');
    node.textContent = '×';

    this._addCloseButtonListener(node);

    return node;
  }

  _addModalContainerListener(node) {
    const self = this;

    node.addEventListener('click', function(e) {
      if (node === e.target) {
        self.hide();
      }
    });
  }

  _buildModalContainer () {
    const node = document.createElement('div');
    node.classList.add('af-modal-container');

    this._addModalContainerListener(node);

    return node;
  }

  _buildModalContent () {
    const node = document.createElement('div');
    node.classList.add('af-modal-content');

    return node;
  }

  _buildModalBody () {
    const node = document.createElement('div');
    node.classList.add('af-modal-body');

    return node;
  }

  _resetContent() {
    this.modalBody.innerHTML = null;
  }

  show () {
    this.html.classList.add('af-modal-show');
    EventsFactory.modalShow();
  }

  hide () {
    this.html.classList.remove('af-modal-show');
    this._resetContent();
    EventsFactory.modalHide();
  }

  build () {
    const container = this._buildModalContainer();

    const modalContent = this._buildModalContent();
    container.appendChild(modalContent);

    const closeButton = this._buildCloseButton();
    modalContent.appendChild(closeButton);

    const modalBody = this._buildModalBody();
    modalContent.appendChild(modalBody);

    this.closeButton = closeButton;
    this.modalBody = modalBody;
    this.html = container;
  }

  static create (...args) {
    return new ModalUI(...args);
  }

}

module.exports = ModalUI;
