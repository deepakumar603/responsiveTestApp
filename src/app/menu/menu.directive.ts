import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `<nav>
  <div class="container">
    <a href="#" class="brand-logo">
      <img class="responsive-img" style="width: 250px;" src="assets/logo.png" />
    </a>
  </div>
</nav>`,
styleUrls: ['./menu.style.css']
})

export class MenuComponent{
    constrctor(){}
}