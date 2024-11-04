import React from "react";
import ReactDOM from "react-dom";
import MyReactComponent from "./MyReactComponent";

class MyWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.props = {
      message: "Default message",
      random: "Default random value",
    };
  }

  static get observedAttributes() {
    return ["message", "random"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.props[name] = newValue;
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    ReactDOM.render(
      <MyReactComponent {...this.props} onCustomEvent={this.emitCustomEvent} />,
      this.shadowRoot
    );
  }

  emitCustomEvent = (data) => {
    const event = new CustomEvent("myEvent", {
      detail: { count: data },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  };
}

customElements.define("my-web-component", MyWebComponent);
