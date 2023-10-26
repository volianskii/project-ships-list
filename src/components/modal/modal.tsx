type ModalProps = {
  active: boolean;
  description: string;
  setActive: (status: boolean) => void;
}

const Modal = ({ active, description, setActive }: ModalProps): JSX.Element => {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Modal;
