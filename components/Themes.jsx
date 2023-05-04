const React = require('react');

module.exports = function Themes({ card, showButtons }) {
  return (
    <div
      data-id={card.id}
      className="card card-card card-container-add card-container-edit card-container-del"
    >
      <div className="wrapper__card">
        <div className="themeCard hidden">{card.theme}</div>
        <div className="card-body">
          <br />
          <div className="btn-group" role="group" aria-label="Basic example">
            {showButtons && (
              <>
                <form
                  id="formId"
                  className="edit-card mb-3"
                  style={{ display: 'none' }}
                >
                  <input name="theme" defaultValue={card.theme} />
                </form>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    className="show-card btn btn-warning edit-ad"
                  >
                    Выбрать
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};