class Navbar extends  HTMLElement {
  async connectedCallback() {
    const response = await fetch ('navbar/navbar.html');
    this.innerHTML = await response.text();

    //menu 
    const b =  this.querySelector('.toggle');
    const n = this.querySelector('#menu');
    if(b &&n ){
      b.addEventListener('click', () => n.classList.toggle('open'));
    }
  }

}

customElements.define('nav-bar', Navbar);