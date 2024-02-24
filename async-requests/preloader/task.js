const URL = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';
const xhr = new XMLHttpRequest();
xhr.open('GET', URL);
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    const resObj = JSON.parse(xhr.responseText);
    const valutesObj = resObj.response.Valute;
    const valutes = Object.values(valutesObj);
    const items = document.getElementById('items');
    valutes.forEach(valute => {
      const item = document.createElement('div');
      item.classList.add('item');

      const itemCode = document.createElement('div');
      itemCode.classList.add('item__code');
      itemCode.innerText = valute.CharCode;

      const itemValue = document.createElement('div');
      itemValue.classList.add('item__value');
      itemValue.innerText = valute.Value;

      const itemCurrency = document.createElement('div');
      itemCurrency.classList.add('item__currency');
      itemCurrency.innerText = 'руб.';
      item.append(itemCode);
      item.append(itemValue);
      item.append(itemCurrency);
      items.append(item);

      const loader = document.getElementById('loader');
      loader.classList.remove('loader_active');
    });
  };
};