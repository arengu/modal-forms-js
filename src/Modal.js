const CSSInjector = require('./css/CSSInjector');
const EventsFactory = require('./lib/EventsFactory');
const ModalUI = require('./ui/ModalUI');
const { includes } = require('./lib/Utilities');

const MAGIC_SELECTOR = 'data-arengu-modal-form-id';
const ARENGU_SDK_LOADED = 'af-init';

let isWaitingSdkLoad = false;

class ArenguModal {

  constructor () {
    this.cssInjector = CSSInjector.create();
    this.ui = ModalUI.create();
  }

  _waitForDom (fn) {
    const VALID_STATES = ['interactive', 'complete'];

    if (includes(VALID_STATES, document.readyState)) {
      fn();
      return;
    }

    let executed = false;
    document.addEventListener('readystatechange', function listenState (event) {
      if (includes(VALID_STATES, event.target.readyState) && !executed) {
        executed = true;
        fn();
      }
    });
  }

  _waitSdkLoadEventAndEmbedForm (formId) {
    const self = this;

    document.addEventListener(ARENGU_SDK_LOADED, function (e) {
      self.show(formId)
    });
  }

  _injectModalHtml() {
    const node = this.ui.render();
    document.body.appendChild(node);
  }

  _embedForm (formId) {
    return window.ArenguForms.embed(formId, this.ui.modalBody);
  }

  _addTrigger(formId, node) {
    const self = this;

    node.addEventListener('click', function(e) {
      e.preventDefault();
      self.show(formId);
    });
  }

  _auto () {
    const list = document.querySelectorAll(`[${MAGIC_SELECTOR}]`);
    const array = Array.from(list);

    // old browsers do not implement NodeList.prototype.forEach
    array.forEach((node) => {
      const formId = node.dataset.arenguModalFormId;
      this._addTrigger(formId, node);
    });
  }


  init () {
    this.cssInjector.injectDefault();
    this._waitForDom(() => {
      this._injectModalHtml();
      this._auto();
      EventsFactory.modalInit();
    });
  }

  show (formId) {
    if (!formId) {
      return console.error('Error showing modal, no form ID provided');
    }

    const self = this;

    if (window.ArenguForms) {
      return this._embedForm(formId)
      .then(() => self.ui.show(formId));
    }

    if (!isWaitingSdkLoad) {
      isWaitingSdkLoad = true;
      this._waitSdkLoadEventAndEmbedForm(formId);
    }

  }

  hide () {
    this.ui.hide();
  }

  static create (...args) {
    return new ArenguModal(...args);
  }

}

module.exports = ArenguModal;
