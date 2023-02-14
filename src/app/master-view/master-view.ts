import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { defineComponents, IgcButtonComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent, IgcRippleComponent);

@customElement('app-master-view')
export default class MasterView extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .button {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-button @click="${() => Router.go('/master-view')}" class="button">
        Button
        <igc-ripple></igc-ripple>
      </igc-button>
      <igc-button @click="${() => Router.go('/master-view')}" class="button">
        Button
        <igc-ripple></igc-ripple>
      </igc-button>
    `;
  }
}
