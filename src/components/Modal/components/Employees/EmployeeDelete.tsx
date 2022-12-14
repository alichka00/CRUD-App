import * as S from "components/Modal/styles";
import { useAppDispatch } from "store/hook";
import { deleteEmployee } from "store/employees";
import { Button } from "styles/Button/styles";
import { AiOutlineClose } from "react-icons/ai";

interface I_EmployeeDeleteProps {
  onClose: () => void;
  id: string;
}

export const EmployeeDelete = ({ onClose, id }: I_EmployeeDeleteProps) => {
  const dispatch = useAppDispatch();
  const handleDeleteEmployee = () => {
    dispatch(deleteEmployee(id));
    onClose();
  };
  return (
    <S.Modal>
      <S.ModalOverlay onClick={onClose} />
      <S.ModalContent onClick={(event) => event.stopPropagation()}>
        <S.Title>Delete Employee???</S.Title>
        <S.ModalClose>
          <AiOutlineClose
            size={25}
            style={{ cursor: "pointer" }}
            onClick={onClose}
          />
        </S.ModalClose>
        <Button onClick={handleDeleteEmployee}>Yes</Button>{" "}
        <Button onClick={onClose}>No</Button>
      </S.ModalContent>
    </S.Modal>
  );
};
