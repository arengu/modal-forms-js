const KEYS = {
  MODAL_INIT: 'af-modal-init',
  MODAL_SHOW: 'af-modal-show',
  MODAL_HIDE: 'af-modal-hide',
};

class EventsFactory {

  static triggerEvent (name, data) {
    const event = new CustomEvent(name, {detail: data});
    return document.dispatchEvent(event);
  }

  static modalInit () {
    this.triggerEvent(KEYS.MODAL_INIT);
  }

  static modalShow (formId) {
    this.triggerEvent(KEYS.MODAL_SHOW, {
      formId
    });
  }

  static modalHide (formId) {
    this.triggerEvent(KEYS.MODAL_HIDE, {
      formId
    });
  }

}

module.exports = EventsFactory;
