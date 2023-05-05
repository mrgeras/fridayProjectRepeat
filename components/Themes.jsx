const React = require('react');

module.exports = function Themes({ theme, user }) {
  return (
    <div
      data-id={theme.id}
      className="theme theme-theme theme-container-add theme-container-edit theme-container-del"
    >
      <div className="wrapper__theme">

        <div className="theme-body">
          <br />
          <div className="btn-group" role="group" aria-label="Basic example">
            {user && (
              <>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button 
                    type="button" id={theme.id}
                    className="show-theme btn btn-warning edit-ad"
                  > <a href={`/api/game/${theme.id}`}>{theme.theme}</a>
                  
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