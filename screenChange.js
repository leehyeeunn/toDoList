function screenChange() {
  var scr = document.getElementsByClassName('screen');
  var round = document.getElementsByClassName('dot');
  //요소 선택자로 모은 NodeList는 배열이 아니라 유사배열객체
  //따라서 call/apply 이용하여 배열로 저장 가능

  // 각 요소들을 배열로 저장
  var scrArray = Array.prototype.slice.call(scr);
  var roundArray = Array.prototype.slice.call(round);

  var i = 0;
  var intervalId = setInterval(function() {
    // 현재 인덱스의 요소를 보이게 함
    scrArray[i].style.display = 'block';
    roundArray[i].style.background = 'white';

    // 0.5초 후에 다시 숨김으로 바꿈
    setTimeout((function(index) {
      return function() {
        scrArray[index].style.display = 'none';
        roundArray[index].style.background = 'black';
      };
    })(i), 500);//이 함수는 클로저를 통해 i에 접근하고 함수를 반환 
    //클로저=외부 함수의 변수에 접근할 수 있는 내부 함수

    // 다음 요소로 이동
    i++;

    // 모든 요소를 한 번씩 변경한 경우, 다시 반복
    if (i >= scrArray.length) {
      i=0;
    }
  }, 2000); // 2초 간격으로 호출
}

screenChange(); // 초기 호출
