import { toRefs } from '@vueuse/core';
import { defineComponent, onMounted, ref } from 'vue';
import { useNamespace } from '../../shared/hooks/use-namespace';
import { DashboardProps, dashboardProps } from './dashboard-types';
import { useExposeGridStackMethods, useGridStackService } from './composables/use-dashboard';
import './dashboard.scss';

export default defineComponent({
  name: 'DDashboard',
  props: dashboardProps,
  emits: ['widgetAdded', 'widgetChanged', 'widgetRemoved', 'dashboardInit'],
  setup(props: DashboardProps, { emit, slots, expose }) {
    const ns = useNamespace('dashboard');
    const propsRef = toRefs(props);
    const dashboardRef = ref<HTMLElement>();
    const { gridstack } = useGridStackService(dashboardRef, propsRef);
    const { getCurrentColumn, getCurrentRow, getCurrentColumnWidth, getCurrentCellHeight, getCurrentMargin } =
      useExposeGridStackMethods(gridstack);

    expose({ getCurrentColumn, getCurrentRow, getCurrentColumnWidth, getCurrentCellHeight, getCurrentMargin });
    return () => {
      return (
        <div ref={dashboardRef} class={[ns.b(), 'grid-stack']}>
          {slots.default?.()}
        </div>
      );
    };
  },
});
