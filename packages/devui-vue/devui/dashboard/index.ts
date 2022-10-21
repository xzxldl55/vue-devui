import type { App } from 'vue';
import Dashboard from './src/dashboard';
import Widget from './src/components/widget';

export * from './src/dashboard-types';

export { Dashboard };

export default {
  title: 'Dashboard 仪表盘',
  category: '数据展示',
  status: '50%',
  install(app: App): void {
    app.component(Dashboard.name, Dashboard);
    app.component(Widget.name, Widget);
  },
};
