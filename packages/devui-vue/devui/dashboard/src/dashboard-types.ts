import type { ExtractPropTypes, PropType } from 'vue';
import { GridStackOptions } from 'gridstack';

export const dashboardProps = {
  initOptions: {
    type: Object as PropType<GridStackOptions>,
    default: {},
  },
  static: {
    type: Boolean,
    default: false,
  },
  float: {
    type: Boolean,
    default: true,
  },
  animate: {
    type: Boolean,
    default: true,
  },
  widgetMoveable: {
    type: Boolean,
    default: true,
  },
  widgetResizable: {
    type: Boolean,
    default: true,
  },
  showGridBlock: {
    type: Boolean,
    default: false,
  },
  column: {
    type: Number,
    default: 12,
  },
  minRow: {
    type: Number,
  },
  maxRow: {
    type: Number,
  },
  cellHeight: {
    type: Number || String,
    default: 100,
  },
  margin: {
    type: Number || String,
    default: 8,
  },
} as const;

export const dashboardWidgetProps = {
  id: {
    type: Number,
  },
  x: {
    type: Number,
    default: 0,
  },
  y: {
    type: Number,
    default: 0,
  },
  width: {
    type: Number,
    default: 1,
  },
  height: {
    type: Number,
    default: 1,
  },
  maxWidth: {
    type: Number,
    default: 0,
  },
  minWidth: {
    type: Number,
    default: 0,
  },
  maxHeight: {
    type: Number,
    default: 0,
  },
  minHeight: {
    type: Number,
    default: 0,
  },
  noResize: {
    type: Boolean,
    default: false,
  },
  noMove: {
    type: Boolean,
    default: false,
  },
  autoPosition: {
    type: Boolean,
    default: false,
  },
  locked: {
    type: Boolean,
    default: false,
  },
  widgetData: {},
} as const;

export type DashboardProps = ExtractPropTypes<typeof dashboardProps>;
export type DashboardWidgetProps = ExtractPropTypes<typeof dashboardWidgetProps>;
