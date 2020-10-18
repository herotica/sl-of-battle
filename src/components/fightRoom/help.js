import React from "react";
import Modal from "../../components/modal";
import { PreText } from "./styled";

export default ({ show, onHide }) => {
  return (
    show && (
      <Modal title="Sluts of battle Combat" onHide={onHide} wide>
        <PreText>{`Combat in sluts of battle is a fight between sexual energies, break your opponent by forcing them to orgasm to their limit before you do
  \nCombat resolves in the below order:
  \n- Select control type: your ability relates to your seduction & grappling skills but, opponents may vary in therir resistance to each.
  \n- Win grapple: select what part of you body you want to use, then the body part of your opponent to target to increase your opponents arousal
  \n- Win seduction: control which area your opponent targets, let them fuck you where you are most resistant
  \n- Lose: Your opponent is in control and will fuck you how they like, use this to determine their strengths
  \n- Orgasms: Your life is the orgasm icons, every time your arousal reaches 100 you orgasm and your max is decreased by 1, once you have none left, you lose!`}</PreText>
      </Modal>
    )
  );
};
