function nightdayhandler(self){
  var target = document.querySelector('body');
  if(self.value === '야간모드') {
    target.style.backgroundColor='black';
    target.style.color='white';
    self.value='주간모드'
    var i=0;
    var alist=document.querySelectorAll('a');
    while(i<alist.length){
      alist[i].style.color='red';
      i=i+1;
    }
  }
  else{
    target.style.backgroundColor='white';
    target.style.color='black';
    self.value='야간모드';
    var i=0;
    var alist=document.querySelectorAll('a');
    while(i<alist.length){
      alist[i].style.color='blue';
      i=i+1;
    }
  }
}
