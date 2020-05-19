import React from "react";
import styled from "styled-components";
import { useGlobalDataStore } from "../../state";
import { createObjFromUpload } from "../../utils";

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
      <ImportBtn onClick={importBackup}>Import Character</ImportBtn>
    </Wrap>
  );
};

const Wrap = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
`;
const Label = styled.label`
  margin-right: 16px;
`;
const StyledInput = styled.input`
  margin: 0 8px;
`;
const ImportBtn = styled.button`
  background: transparent;
  border: 1px solid black;
  border-radius: 4px;
`;

export default ImportCharacter;
