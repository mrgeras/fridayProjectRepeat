const React = require('react');


function Layout({ children, title}) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="stylesheet" href="/style.css" />
            <title>{title} </title>
        </head>
      <body>
        <Navigation/>
        <div>
          {children}
        </div>
      </body>
      
    </html>
  );
}

module.exports = Layout;
