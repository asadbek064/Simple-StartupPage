var search  = $('#search'),
    input   = $('#search input[type="text"]'),
    engines = engines();

for (var key in engines)
  $('.search-engines').innerHTML += `<li><p title="${engines[key][0]}">!${key}</p></li>`;

$('#search .close').onclick = () =>
  search.classList.remove('active');

document.onkeypress = (e) => {
  if (document.activeElement !== $('.addTodo input') && document.activeElement !== $('.weather-config input')) {
    if (e.key == 'A' ||  'B' ||  'C' ||  'D' ||  "E" ||  'F' ||  'G' ||  'H' ||  'I' ||  'J' ||  'K' ||  'L' ||  'M' ||  'N' ||  'O' ||  'P' ||  'Q' ||  'R' ||  'S' ||  'T' ||  'U' ||  'V' ||  'W' ||  'X' ||  'Y' ||  'Z' )
      search.classList.add('active');

    input.focus();
    input.scrollIntoView();

    $('#search .close').onclick = () =>
      search.classList.remove('active');

    search.onkeyup = (e) => {
      let args   = e.target.value.split(' '),
          prefix = args[0],
          engine = engines['g'][0], // default engine
          str    = 0;

      $$('.search-engines li p').forEach((eng) => {
        let current = eng.parentNode;

        (prefix == eng.innerHTML)
          ? current.classList.add('active')
          : current.classList.remove('active');
      });

      if (e.key == 'Enter') {
        if (prefix.indexOf('!') == 0)
          (engine = engines[prefix.substr(1)][0], str = 0);

        window.location = engine + args.join(' ').substr(str).toString().replace(/\s+/m, '%20');
      } else if (e.keyCode == 27)
        search.classList.remove('active');
    };
  }
};
