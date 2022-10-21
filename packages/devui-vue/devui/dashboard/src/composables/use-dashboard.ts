import { GridStack, GridStackElement } from 'gridstack';
import { onMounted, Ref, ref, ToRefs, watch, watchEffect } from 'vue';
import { DashboardProps } from '../dashboard-types';

export const useGridStackService = (
  el: Ref<GridStackElement | undefined>,
  props: ToRefs<DashboardProps>
): { gridstack: Ref<GridStack> } => {
  const gridstack = ref() as Ref<GridStack>;

  onMounted(() => {
    if (el.value) {
      console.log(props);
      gridstack.value = GridStack.init({}, el.value);
      watchEffect(() => {
        gridstack.value.margin(props.margin.value);
      });
    }
  });

  return {
    gridstack,
  };
};

export const useExposeGridStackMethods = (gridstack: Ref<GridStack>) => {
  const getCurrentColumn = (): number => {
    return gridstack.value.getColumn();
  };

  const getCurrentRow = (): number => {
    return gridstack.value.getRow();
  };

  const getCurrentColumnWidth = (): number => {
    return gridstack.value.cellWidth();
  };

  const getCurrentCellHeight = (): number => {
    return gridstack.value.getCellHeight();
  };

  const getCurrentMargin = (): number => {
    return gridstack.value.getMargin();
  };

  return {
    getCurrentColumn,
    getCurrentRow,
    getCurrentColumnWidth,
    getCurrentCellHeight,
    getCurrentMargin,
  };
};
