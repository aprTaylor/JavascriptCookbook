import { createElementFromHTML } from  "../../utils"
import m from 'mithril';

const specialCharacters = () => {
    var resultString = "<p>This page \u00A9 Shelley Powers</p>";
    // print out to page

    var blk = document.createElement('div');
  
    let symbols = [
      "&#169;", "&#174;", "&#8482;", "&#8453;", "&#8460;", "&#8507;", "&#9730;", "&#9757;", "&#9772;",
      "&#120159;"
    ];
  
    symbols.forEach(symbol => {
      let btn = document.createElement('button');
      btn.type = 'button';
      btn.appendChild(createElementFromHTML(symbol));
      btn.addEventListener('click', e => blk.appendChild(createElementFromHTML(btn.textContent)));
      blk.appendChild(btn);
    })
  
    blk.appendChild(createElementFromHTML(resultString));
    return blk;
};

export default specialCharacters