import { defineComponent } from 'vue';
import type { SetupContext } from 'vue';
import transferPanel from './components/transfer-panel';
import transferOperate from './components/transfer-operate';
import { transferProps, TTransferProps, TKey, IItem } from './transfer-types';
import { transferState } from './composables/use-transfer';
import './transfer.scss';

export default defineComponent({
  name: 'DTransfer',
  components: {
    transferPanel,
    transferOperate,
  },
  props: transferProps,
  emits: ['update:modelValue', 'change'],
  setup(props: TTransferProps, ctx: SetupContext) {
    const {
      sourceTitle,
      targetTitle,
      sourceDisabled,
      targetDisabled,
      sourceData,
      targetData,
      sourceChecked,
      targetChecked,
      sourceDirection,
      targetDirection,
      updateSourceAllCheckedHandle,
      updateTargetAllCheckedHandle,
      updateSourceCheckedHandle,
      updateTargetCheckedHandle,
      toMoveTargetHandle,
      toMoveSourceHandle,
      updateSourceDataHandle,
      updateTargetDataHandle,
    } = transferState(props, ctx);
    return () => {
      return (
        <div class="devui-transfer">
          {ctx.slots.header && ctx.slots.header()}
          <transferPanel
            filter={props.filter}
            isKeyupSearch={props.isKeyupSearch}
            isDrag={props.isSourceDrag}
            height={props.height}
            unit={props.unit}
            placeholder={props.placeholder}
            sortMethods={props.sortMethods}
            search={props.search}
            dragstart={props.dragstart}
            drop={props.drop}
            dragend={props.dragend}
            title={sourceTitle.value}
            data={sourceData.value}
            defaultChecked={sourceChecked.value}
            direction={sourceDirection.value}
            v-slots={{
              header: ctx.slots.sourceHeader,
            }}
            onUpdteAllChecked={(value: IItem[]) => {
              updateSourceAllCheckedHandle(value);
            }}
            onChangeChecked={(value: IItem[]) => {
              updateSourceCheckedHandle(value);
            }}
            onUpdateData={(startValue: TKey, endValue: TKey) => {
              updateSourceDataHandle(startValue, endValue);
            }}></transferPanel>
          <transferOperate
            sourceDisabled={sourceDisabled.value}
            targetDisabled={targetDisabled.value}
            v-slots={{ ...ctx.slots }}
            onToTarget={() => {
              toMoveTargetHandle();
            }}
            onToSource={() => {
              toMoveSourceHandle();
            }}></transferOperate>
          <transferPanel
            filter={props.filter}
            isKeyupSearch={props.isKeyupSearch}
            isDrag={props.isTargetDrag}
            height={props.height}
            unit={props.unit}
            placeholder={props.placeholder}
            sortMethods={props.sortMethods}
            search={props.search}
            dragstart={props.dragstart}
            drop={props.drop}
            dragend={props.dragend}
            title={targetTitle.value}
            data={targetData.value}
            defaultChecked={targetChecked.value}
            direction={targetDirection.value}
            v-slots={{
              header: ctx.slots.targetHeader,
            }}
            onUpdteAllChecked={(value: IItem[]) => {
              updateTargetAllCheckedHandle(value);
            }}
            onChangeChecked={(value: IItem[]) => {
              updateTargetCheckedHandle(value);
            }}
            onUpdateData={(startValue: TKey, endValue: TKey) => {
              updateTargetDataHandle(startValue, endValue);
            }}></transferPanel>
        </div>
      );
    };
  },
});
