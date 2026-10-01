
class Footer extends  HTMLElement {
  async connectedCallback() {
    const response = await fetch ('footer/footer.html');
    this.innerHTML = await response.text();
  }

}

customElements.define('custom-footer', Footer);
