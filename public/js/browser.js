window.addEventListener('load', function () {
  let urlLocation = window.location.pathname;
  
  if (urlLocation == '/contact') {
    this.document.getElementById('home').className = 'siimple-navbar-item';
    this.document.getElementById('contact').className = 'siimple-navbar-item siimple-nav-item--selected siimple--color-success';
  } else if (urlLocation == '/blog') {
    this.document.getElementById('home').className = 'siimple-navbar-item';
    this.document.getElementById('blog').className = 'siimple-navbar-item siimple-nav-item--selected siimple--color-success';

  } else if (urlLocation == '/location') {
    this.document.getElementById('home').className = 'siimple-navbar-item';
    this.document.getElementById('location').className = 'siimple-navbar-item siimple-nav-item--selected siimple--color-success';
  }
});