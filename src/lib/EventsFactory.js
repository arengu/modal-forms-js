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

  static modalShow () {
    this.triggerEvent(KEYS.MODAL_SHOW);
  }

  static modalHide () {
    this.triggerEvent(KEYS.MODAL_HIDE);
  }


}

module.exports = EventsFactory;
