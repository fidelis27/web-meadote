import React from 'react';

interface props {
  style: Object;
  onclickRemove: Promise<void>;
  onclickCancel: void;
}

const Popup: React.FC<props> = ({ style, onclickRemove, onclickCancel }) => {
  function createMarkup(t: string) {
    return { __html: t };
  }

  return (
    <div className="popupcontainer" style={style}>
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <div className="popup">
            <h1>Excluir </h1>
            <p
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={createMarkup(
                'Tem certeza que deseja excluir o usuário?',
              )}
            />
            <button
              type="button"
              className="fancy-btn"
              onClick={() => onclickRemove}
            >
              Confirmar
            </button>
            <button
              type="button"
              className="fancy-btn"
              onClick={() => onclickCancel}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
