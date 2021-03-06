import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles  : [
    `:host ::ng-deep .logo {
      height: 32px;
      background: #333;
      border-radius: 6px;
      margin: 16px;
    }

    :host ::ng-deep .ant-layout-sider-collapsed .nav-text {
      display: none;
    }

    :host ::ng-deep .ant-layout-sider-collapsed .ant-menu-submenu-title:after {
      display: none;
    }

    :host ::ng-deep .ant-layout-sider-collapsed .anticon {
      font-size: 16px;
      margin-left: 8px;
    }
     :host ::ng-deep .trigger {
      font-size: 18px;
      line-height: 64px;
      padding: 0 16px;
      cursor: pointer;
      transition: color .3s;
      font-weight: bold;
    }

    :host ::ng-deep .trigger:hover {
      color: #108ee9;
    }
    `
  ]
})
export class AppComponent {
  isCollapsed=true;
}
