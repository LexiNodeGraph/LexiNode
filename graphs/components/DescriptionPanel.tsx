import React, { FC } from "react";
import { BsInfoCircle } from "react-icons/bs";

import Panel from "./Panel";

const DescriptionPanel: FC = () => {
  return (
    <Panel
      initiallyDeployed
      title={
        <>
          <BsInfoCircle className="text-muted" /> Descrição
        </>
      }
    >
      Descrição do LexiNode
    </Panel>
  );
};

export default DescriptionPanel;
