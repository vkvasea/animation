
  const element = document.querySelector(".main__foto");
  const circle = document.querySelector(".circle");


//   domRect = element.getBoundingClientRect();
//   console.log (domRect);


function setMouseEvent() {
    function glassEffect(e) {
        const circle = document.querySelector(".circle");
        const x = e.clientX;
        const y = e.clientY; 
		circle.style.transform = `translateX(${x}px) translateY(${y}px)`;

    }


		function glassEffect(e) {
			const circle = document.querySelector(".circle");
			const x = e.clientX;
			const y = e.clientY; 
			circle.style.transform = `translateX(${x}px) translateY(${y}px)`;
	
			domRect = element.getBoundingClientRect();
			// console.log (domRect ['y']);
			   
			// console.log (y)
			// console.log (x)


		if (x > domRect ['x'] && y > domRect ['y'] && y < domRect ['bottom']) {
				setMainFoto();
				console.log ("в зоне")
			} else {
				setMainFotoOut();
				console.log ("вышел с зоны") 
			};
			
		// if( y < domRect ['bottom'] && x > domRect ['x'] ){
		// 	console.log ("в зоне")
		// } else {
		// 	console.log ("вышел с зоны")
		// };

		}
	

function setMainFoto() {
	let MainFotoClass = document.getElementById('circle');
    MainFotoClass.classList.add('show_ciecle');
}

function setMainFotoOut() {
    let element = document.getElementById('circle');
    element.classList.remove('show_ciecle');
}

	// курсор появляется когда всегда
    let container = document.querySelector(".container");
    container.addEventListener("mousemove", glassEffect); 
	// появляется в области жирафа
	// let mainFoto = document.querySelector(".main__foto");
	// mainFoto.addEventListener("mousemove", setMainFoto);


	// mainFoto.addEventListener("mousemove", setMainFotoOut);
	



	// const mainFotoout = document.querySelector(".main__foto");
	// mainFotoout.addEventListener("mousemove", setMainFotoOut);
	
}

setMouseEvent();




// добавить класс для индикатора загрузки пока дом загружен а контент еще нет
function myFunction() {
    let element = document.getElementById("loading");
    element.classList.remove("show");
}
document.addEventListener("DOMContentLoaded", myFunction);

// добавить класс для изчезновения индикатора загрузки когда дом полностью загружен
let l = document.getElementById('loading');
window.addEventListener("load", function(event) {
    l.classList.add('visability');
  });


// запускаем событие когда все прогружено

window.onload = function() { 


    function myFunctionAdd() {
        let elementadd = document.getElementById("loading_strong");
        elementadd.classList.add("visability");
    }
        

const animItems = document.querySelectorAll('.anim-items')

if (animItems.length > 0){
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll(){
		for (let i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;


			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				let animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
				animItem.classList.add('show');
			} else {
				if(!animItem.classList.contains('_anim-no-hide')){
				 animItem.classList.remove('show');
				}
			}
		}
	}
	function offset(el){
		const rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}
	const showAnimations = setTimeout(animOnScroll, 300);
	showAnimations;
}
}
