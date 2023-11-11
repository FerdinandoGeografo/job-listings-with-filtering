import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header class="header"></header>
    <main class="main">
      <app-jobs-filter-box></app-jobs-filter-box>
      <app-jobs-list></app-jobs-list>
    </main>
  `,
  styles: [
    `
      .header {
        height: 15.6rem;
        background-color: rgba(92, 165, 165, 1);
        background-image: url("../assets/images/bg-header-desktop.svg");
        background-size: cover;
        background-repeat: no-repeat;
      }

      .main {
        background-color: rgba(92, 165, 165, 0.1);
        padding: 0 16.5rem 7.6rem 16.5rem;
        position: absolute;
        top: 12rem;
        min-height: 100vh;
        width: 100%;
      }

      @media (max-width: 71em) {
        .main {
          padding: 0 6rem;
        }
      }

      @media (max-width: 30em) {
        .main {
          padding: 0 2.4rem;
        }
      }
    `
  ]
})
export class AppComponent {

}
