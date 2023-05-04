const React = require('react');
const Navigation = require('./Navigation');

function Layout({ children, title }) {
  return (
    <html lang="ru">
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="stylesheet" href="/style.css" />
        <title>{title} </title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        />
        <script defer src="https://code.jquery.com/jquery-3.6.4.min.js" />
        <script
          defer
          src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"
        />
      </head>
      <body>
        <header>
          <Navigation user={user} />
        </header>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}

module.exports = Layout;
