export default (function (w, d, u) {
  const s = d.createElement("script");
  s.async = true;
  s.src = u + "?" + ((Date.now() / 180000) | 0);
  const h = d.getElementsByTagName("script")[0];
  h.parentNode.insertBefore(s, h);
})(window, document, "https://cdn-ru.bitrix24.ru/b27062060/crm/form/loader_28.js");
