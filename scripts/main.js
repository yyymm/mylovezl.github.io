/*let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
let myVariable;
myVariable = '李雷';
/*
这里的所有内容
都是注释。
*/
//  这是一条注释。

let myImage = document.querySelector('img');
myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox_PNG44.png') {
    myImage.setAttribute('src', 'images/firefox2.png');
  } else {
    myImage.setAttribute('src', 'images/firefox_PNG44.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla 酷毙了， ' + myName;
  }
  //  localStorage.setItem('name', myName);
  //  myHeading.textContent = 'Mozilla 酷毙了， ' + myName;
}
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}
myButton.onclick = function () {
  setUserName();
}