export function capitalizeFirstLetter(val: string): string {
  return val.charAt(0).toUpperCase() + String(val).slice(1);
}

export function decodeHtml(html: string) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}
