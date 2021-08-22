window.onload=function(){
  var searchWin = document.getElementById("SearchWindow");
  var recordWin = document.querySelector(".RecordWindow");
  searchWin.addEventListener('focus',function(e){
    recordWin.style.display = "flex";
  });
  searchWin.addEventListener('blur',function(e){
    recordWin.style.display = "none";
  });
}

function search_onclick_submit(){
  var text = document.getElementById('SearchWindow').value;
  if(text=='나의세상나의빛아이즈원'){
    location.replace('도주.html');
  }
  else{
    alert('검색한 내용을 알 수 없습니다.');
  }
}
