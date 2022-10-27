// target
let targets = document.querySelector(".targets1");
let span = document.querySelectorAll(".progress .blue");

if(targets){
  window.addEventListener("scroll", () => {
    if (window.scrollY >= targets.offsetTop -100) {
      span.forEach((span) => {
        span.style.width = span.dataset.width;
      });
     
    };
  });
}
// target

// numbr
let section = document.querySelector(".teckets");
let nums = document.querySelectorAll(".box .span");
let started = false;
if(section){

  window.addEventListener('scroll' , ()=>{
    if (window.scrollY >= section.offsetTop -100) {
      if (!started) {
        nums.forEach((num) => startcount(num));
      };
      started = true;
    };
  
    function startcount(el) {
      const goal = el.dataset.goal;
      const count = setInterval(() => {
  
        let value = parseInt(el.innerHTML);
        value += 10
        el.innerHTML = value
        if (el.textContent == goal) {
          clearInterval(count);
        }
      }, 3000 / goal);
    };
  
  });
}
// numbr

// delete;
let tasks = document.querySelectorAll('.task-row');
let icons = document.querySelectorAll('.delete');

icons.forEach(icon =>{
  icon.addEventListener('click', ()=>{
    icon.parentElement.remove();
  });
});

tasks.forEach(task =>{
  task.addEventListener('click',()=>{
    task.classList.toggle('done');
  });
});
// delete;

// icon red
if(document.querySelector('.icon-post')){
  let icon = document.querySelector('.icon-post');
  icon.addEventListener('click',()=>{
   icon.classList.toggle('red');
  });
}
// icon red

// ermove-friends
let remove = document.querySelectorAll('.remove-friends');
if(remove){
  remove.forEach(remove =>{
    remove.addEventListener('click', ()=>{
      remove.parentElement.parentElement.parentElement.remove();
    })
  })
}
// ermove-friends

