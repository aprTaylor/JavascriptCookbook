export const replacePatterns = () => {
    const excerpt =
      `Raindrops the size of bullets thundered on the castle windows for days on end; 
    the lake rose, the flower beds turned into muddy streams, and Hagrid's pumpkins swelled to the size 
    of garden sheds. Oliver Wood's enthusiasm for regular training sessions, however, was not dampened, 
    which was why Harry was to be found, late one stormy Saturday afternoon a few days before Halloween, 
    returning to Gryffindor Tower, drenched to the skin and splattered with mud.
  
    Even aside from the rain and wind it hadn't been a happy practice session. Fred and George, who had 
    been spying on the Slytherin team, had seen for themselves the speed of those new Nimbus Two Thousand
     and Ones. They reported that the Slytherin team was no more than seven greenish blurs, shooting through 
     the air like missiles.`
  
    const root = document.createElement("div");
    const input1 = document.createElement("input");
    input1.type = "input";
    const input2 = document.createElement("input");
    input2.type = "input";
  
    const text = document.createTextNode(excerpt);
    const parent = document.createElement("div");
  
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerText = 'replace';
    btn.addEventListener('click', e => {
      const inputText1 = input1.value;
      const inputText2 = input2.value;
  
      const replace = text.textContent.replace(new RegExp(inputText1, "gi"), inputText2)
      text.textContent = replace;
    });
  
    root.appendChild(text)
    parent.appendChild(input1);
    parent.appendChild(document.createTextNode("with"))
    parent.appendChild(input2);
    parent.appendChild(btn);
    root.appendChild(parent);
    return root;
  };
  