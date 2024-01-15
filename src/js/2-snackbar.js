import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = document.querySelector(`input[name = "delay"]`);

form.addEventListener('submit', onGeneratePromise);

function onGeneratePromise(evt) {
  evt.preventDefault();

  const delay = form.delay.value;
  const userClick = form.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userClick === 'fulfilled') {
        resolve(delay);
      } else if (userClick === 'rejected') {
        reject(delay);
      }
    }, delay);
  });
  promise
    .then(delay =>
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      })
    )
    .catch(delay =>
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      })
    );
  input.value = '';
}
