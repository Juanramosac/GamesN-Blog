class Navbar extends  HTMLElement {
  async connectedCallback() {
const navUrl = new URL('navbar.html', import.meta.url).href;
      
      const response = await fetch(navUrl);
      if (!response.ok) throw new Error('No se pudo cargar navbar.html');
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