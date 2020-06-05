import React from "react";
import styled from "styled-components";
import { useGlobalDataStore } from "../../state";
import { createObjFromUpload } from "../../utils";
import Button from "../button";

const InputId = "importcharacterid";

const ImportCharacter = () => {
  const { importSaveFile } = useGlobalDataStore();
  function importBackup() {
    const OnComplete = context => {
      importSaveFile(context);
    };
    createObjFromUpload(InputId, OnComplete);
  }

  return (
    <Wrap>
      <Label>Import Character</Label>
      <StyledInput type="file" id={InputId} />
      <Button onClick={importBackup}>Import Character</Button>
    </Wrap>
  );
};

const Wrap = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  margin-top: 16px;
`;
const Label = styled.label`
  margin-right: 16px;
`;
const StyledInput = styled.input`
  margin: 0 8px;
`;

export default ImportCharacter;
