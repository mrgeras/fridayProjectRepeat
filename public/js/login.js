const form = document.getElementById('login-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const { login, password } = event.target;
  // console.log(123);

  const response = await fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      login: login.value,
      password: password.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const result = await response.json();

  if (response.ok) {
    window.location.href = '/';
  } else {
    event.target.password.value = '';
    toastr.options = {
      closeButton: true,
      newestOnTop: false,
      progressBar: true,
      positionClass: 'toast-bottom-center',
      preventDuplicates: false,
      onclick: null,
      showDuration: '300',
      hideDuration: '1000',
      timeOut: '5000',
      extendedTimeOut: '1000',
      showEasing: 'swing',
      hideEasing: 'linear',
      showMethod: 'fadeIn',
      hideMethod: 'fadeOut',
    };
    toastr.success(`${result.message}`);
  }
});
