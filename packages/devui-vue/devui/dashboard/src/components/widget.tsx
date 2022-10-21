import { toRefs } from '@vueuse/core';
import { useNamespace } from '../../../shared/hooks/use-namespace';
import { defineComponent, onMounted, ref } from 'vue';
import { DashboardWidgetProps, dashboardWidgetProps } from '../dashboard-types';
import './widget.scss';

export default defineComponent({
  name: 'DDashboardWidget',
  props: dashboardWidgetProps,
  emits: ['xChange', 'yChange', 'widthChange', 'heightChange', 'widgetInit', 'widgetResize', 'widgetDestroy'],
  setup(props: DashboardWidgetProps, { emit, slots, expose }) {
    const ns = useNamespace('dashboard');
    const { widgetData, x, y, width, height } = toRefs(props);
    return () => {
      return (
        <div
          class={[ns.e('widget'), 'grid-stack-item']}
          gs-x={x.value}
          gs-y={y.value}
          gs-w={width.value}
          gs-h={height.value}>
          <div class="grid-stack-item-content">{slots.default?.(widgetData)}</div>
        </div>
      );
    };
  },
});
