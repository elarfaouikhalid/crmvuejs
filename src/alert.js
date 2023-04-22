import swal from 'sweetalert';

export function showAlert(title, message, type = 'info') {
  return swal({
    title,
    text: message,
    icon: type,
    button: "OK"
  });
}
