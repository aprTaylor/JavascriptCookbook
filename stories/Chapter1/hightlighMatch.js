import { createElementFromHTML } from "../../utils"

export const highlight = () => {
    const ele = `
   <div>
   <form id="textsearch">
   <textarea id="incoming" cols="150" rows="10">
   </textarea>
   <p>
   Search pattern: <input id="pattern" type="text" />
   </p>
   </form>
   <button id="searchSubmit">Search for pattern</button>
   <div id="searchResult"></div>
   </div>
    `
  
    const element = createElementFromHTML(ele);
  
    element.querySelector("#searchSubmit").onclick = function () {
      // get pattern
      var pattern = document.getElementById("pattern").value;
      var re = new RegExp(pattern, "g");
      // get string
      var searchString = document.getElementById("incoming").value;
      var matchArray;
      var resultString = "<pre>";
      var first = 0;
      var last = 0;
      // find each match
      while ((matchArray = re.exec(searchString)) != null) {
        last = matchArray.index;
        // get all of string up to match, concatenate
        resultString += searchString.substring(first, last);
        // add matched, with class
        resultString += "<span class='found'>" + matchArray[0] + "</span>";
        first = re.lastIndex;
      }
      // finish off string
      resultString += searchString.substring(first, searchString.length);
      resultString += "</pre>";
      console.log("Result", resultString);
      // insert into page
      document.getElementById("searchResult").innerHTML = resultString;
    }
  
  
  
    return element;
  }