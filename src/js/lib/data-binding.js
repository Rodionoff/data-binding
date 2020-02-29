class DataBinding {
  constructor() {
    this.input = document.querySelector('.input-wrapper input');
    this.data = {
      value: ''
    }
    this.htmlView = document.querySelector('.input-value span');
    this.init();
  } 
  init() {
    this.setProxy();
    this.setInitialValue('initial value');
    this.displayValue();
    this.addEventListeners();
  }
  setProxy() {
    const self = this;
    // https://learn.javascript.ru/proxy
    this.data = new Proxy(this.data, {
      get(target, prop) {
        if (prop in target) {
          return target[prop];
        }
      },
      set(target, key, val) {
        if (key === 'value') {
          target[key] = val;
          self.displayValue();
          return true;
        }
        return false;
      }
    })
  }
  setInitialValue(initialValue) {
    this.data.value = initialValue;
  }
  displayValue() {
    this.input.value = this.data.value;
    this.htmlView.innerText = this.data.value;
  }
  addEventListeners() {
    this.input.oninput = (event) =>
      this.data.value = event.target.value;
      this.displayValue(); 
  }
}

window.dataBinding = new DataBinding();