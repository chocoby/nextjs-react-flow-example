import React, { memo, useCallback, Dispatch, FC } from 'react';
import { useZoomPanHelper, OnLoadParams, Elements, FlowExportObject } from 'react-flow-renderer';
import localforage from 'localforage';

import styles from "../styles/Controls.module.css";

localforage.config({
  name: 'react-flow-example',
  storeName: 'flows',
});

const flowKey = 'example-flow';

type ControlsProps = {
  rfInstance?: OnLoadParams;
  setElements: Dispatch<React.SetStateAction<Elements<any>>>;
};

const Controls: FC<ControlsProps> = ({ rfInstance, setElements }) => {
  const { transform } = useZoomPanHelper();

  const onSave = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      console.log('save', flow);

      localforage.setItem(flowKey, flow);
    }
  }, [rfInstance]);

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow: FlowExportObject | null = await localforage.getItem(flowKey);
      console.log('restore', flow)

      if (flow) {
        const [x = 0, y = 0] = flow.position;
        setElements(flow.elements || []);
        transform({ x, y, zoom: flow.zoom || 0 });
      }
    };

    restoreFlow();
  }, [setElements, transform]);

  return (
    <div className={styles.controls}>
      <button onClick={onSave}>save</button>
      <button onClick={onRestore}>restore</button>
    </div>
  );
};

export default memo(Controls);
