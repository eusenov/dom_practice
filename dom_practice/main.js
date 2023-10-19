{/* <p id="elem1">1</p>
    <p id="elem2">2</p>
    <p id="elem3">3</p> */}
// let elems = document.querySelectorAll('p')
// // for (elem of elems){
// //     console.log(elem.textContent);
// // }
// // console.log(elems[0].textContent);
// let [el1, el2, el3] = elems;
// console.log(el1);
// console.log(el2);
// console.log(el3);

// №1⊗jsPmDmEGAS

// Дан следующий HTML:

/* <div id="block">
	<p>1</p>
	<p>2</p>
</div> */
// Получите ссылку на первый абзац из дива с id, равным block.
// let first_txt = document.querySelector('#block p')
// console.log(first_txt);     

// №2⊗jsPmDmEGAS

// Дан следующий HTML:

// <div class="block">
// 	<p>1</p>
// 	<p>2</p>
// </div>
// Получите ссылку на первый абзац из дива с классом block.

// №3⊗jsPmDmEGAS

// Дан следующий HTML:

// <p class="www">text</p>
// <p class="www">text</p>
// Получите ссылку на первый абзац с классом www.
// let first = document.querySelector('.www')
// console.log(first);  

// Даны 3 кнопки:

/* <input id="button1" type="submit">
<input id="button2" type="submit">
<input id="button3" type="submit">  */
// Сделайте так, чтобы по клику на первую 
// кнопку на экран выводилось число 1, 
// по клику на вторую - число 2, а по клику на третью - число 3.

// function f1(){
//     console.log('1');
// }
// function f2(){
//     console.log('2');
// }
// function f3(){
//     console.log('3');
// }

// let b1 = document.querySelector('#button1')
// let b2 = document.querySelector('#button2')
// let b3 = document.querySelector('#button3')


// b1.addEventListener('click', f1)
// b2.addEventListener('click', f2)
// b3.addEventListener('click', f3)

// Дан абзац:

// <p id="elem">text</p>
// Даны следующие функции:

// function func1() {
// 	console.log('1');
// }

// function func2() {
// 	console.log('2');
// }

// function func3() {
// 	console.log('3');
// }
// Привяжите все эти функции к нашему абзацу.

// function func1() {
// 	console.log('1');
// }

// function func2() {
// 	console.log('2');
// }

// function func3() {
// 	console.log('3');
// }

// let text = document.querySelector('#elem');
// text.addEventListener('click', ()=>{
//     func1()
//     func2()
//     func3()
// })

// №1⊗jsPmDmDEH

// Дана кнопка. По двойному клику по ней выведите какое-нибудь сообщение.
// let button = document.querySelector('#button');
// button.addEventListener('dblclick', ()=>{
//     alert('sliznust')
// })

// №2⊗jsPmDmDEH

// Дана кнопка. По наведению на нее выведите какое-нибудь сообщение.
// button.addEventListener('mouseover', ()=>{
//     alert('saskeeeee')
// })

// №3⊗jsPmDmDEH

// Дана кнопка. По уходу курсора с нее выведите какое-нибудь сообщение.
// button.addEventListener('mouseout', ()=>{
//     alert('saskeeeee')
// })
///////////////////////////////////////////////////////////////////////
// №4⊗jsPmDmDEH

// Дана кнопка. По наведению на нее выведите одно сообщение, 
// а по уходу с нее - другое.
// button.addEventListener('mouseover', ()=>{
//     console.log('narutoo')
// })
// button.addEventListener('mouseout', ()=>{
//     console.log('saskeeeee')
// })
///////////////////////////////////////////////////////////////////////

// №1⊗jsPmDmET

// Дан абзац и кнопка. По клику на кнопку прочитайте текст абзаца и 
// выведите его в консоль.
// let text = document.querySelector('#text');
// let butotn = document.querySelector('#button'); 

// button.addEventListener('click', ()=>{
//     console.log(text.textContent);
// })

// №2⊗jsPmDmET

// Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст.
// button.addEventListener('click', ()=>{
//     console.log(text.textContent='45');
// })

// №3⊗jsPmDmET

// Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка. 
// По нажатию на кнопку выведите на экран сумму хранящихся чисел.
// let text_2 = document.querySelector('#text_2');
// button.addEventListener('click', ()=>{
//     console.log(Number(text.textContent)+Number(text_2.textContent));
// })

// №4⊗jsPmDmET

// Даны три абзаца с числами, див, и кнопка. По нажатию на кнопку 
// запишите в текст дива сумму чисел.
// let div = document.querySelector('#div');
// let div_num = Number(div.textContent); 
// button.addEventListener('click', ()=>{
//     div_num = Number(text.textContent)+Number(text_2.textContent)
//     console.log(div.textContent);
// })

// №5⊗jsPmDmET

// Дан абзац с числом и кнопка. По нажатию на кнопку прибавьте к значению 
// абзаца единицу и запишите полученное число обратно.
// let num = text.textContent; 

// button.addEventListener('click', ()=>{
//     let res = Number(text.textContent) + 1;
//     text.textContent = res; 
// })
//???????????????????????????????????????????????????????????????????????
// №6⊗jsPmDmET

// Дан абзац с текстом и кнопка. По нажатию на кнопку запишите в конец 
// текста абзаца восклицательный знак.
// button.addEventListener('click', ()=>{
//     let res = text.textContent + '!'; 
//     text.textContent = res; 
// })
//???????????????????????????????????????????????????????????????????????

// №1⊗jsPmDmEH

// Дан абзац и кнопка. По клику на кнопку прочитайте 
// HTML код абзаца и выведите его в консоль.
// let text = document.querySelector('#text');
// let butotn = document.querySelector('#button'); 

// button.addEventListener('click', ()=>{
//     console.log(text.innerHTML);
// })


// // №2⊗jsPmDmEH

// // Дан абзац и кнопка. По клику на кнопку запишите в абзац 
// // новый текст так, чтобы он был жирным.
// button.addEventListener('click', ()=>{
//     text.innerHTML = '<b>bananax</b>'; 
// })

// №1⊗jsPmDmAVP

// Дан следующий инпут:

// <input id="elem" type="email">
// Дана также кнопка. По нажатию на кнопку выведите на экран содержимое 
// атрибута type указанного выше инпута.
// let elem = document.querySelector('#elem'); 
// let button = document.querySelector('#button'); 

// button.addEventListener('click', ()=>{
//     console.log(elem.type);
// })

// №2⊗jsPmDmAVP

// Дан следующий инпут:

// <input id="elem" type="email">
// Дана также кнопка. По нажатию на кнопку запишите в атрибут type 
// значение submit.

// button.addEventListener('click', ()=>{
//     elem.type = 'submit'; 
//     console.log(elem.type);
// })

// №3⊗jsPmDmAVP

// Пусть у вас есть ссылка в виде тега a, кнопка и абзац. По нажатию 
// на кнопку выведите в абзац содержимое атрибута href ссылки.
// let a = document.querySelector('#a'); 
// let text = document.querySelector('#text'); 

// button.addEventListener('click', ()=>{
//     text.textContent = a.href;
// })
//???????????????????????????????????????????????????????????????????????
// №4⊗jsPmDmAVP

// Пусть у вас есть ссылка и кнопка. По нажатию на кнопку добавьте в 
// конец текста ссылки содержимое ее атрибута href в круглых скобках.
//???????????????????????????????????????????????????????????????????????

// №5⊗jsPmDmAVP

// Пусть у вас есть картинка. Разместите ее на странице с помощью 
// тега img. Пусть даны также кнопка и абзац. Сделайте так, чтобы 
// по клику на кнопку в абзац записался путь к картинки из ее атрибута 
// src.
// let img = document.querySelector('#img'); 
// button.addEventListener('click', ()=>{
//     text.textContent = img.src; 
//     console.log(img.src);
// })

// №6⊗jsPmDmAVP

// Дана картинка в теге img и кнопка. По нажатию на кнопку в атрибут 
// width запишите значение 300.
// button.addEventListener('click', ()=>{ 
//     img.width = 300; 
// })

// №7⊗jsPmDmAVP

// Дана картинка в теге img и кнопка. Пусть в атрибуте width задана 
// некоторая ширина. Сделайте кнопку, по нажатию на которую ширина 
// картинки будет увеличиваться в 2 раза.
// img.width = 300; 
// button.addEventListener('click', ()=>{ 
//     img.width = 600; 
// })

// №8⊗jsPmDmAVP

// Пусть у вас есть две картинки. Сделайте на странице тег img 
// и две кнопки. По нажатию на первую кнопку запишите в атрибут 
// src путь к первой картинке, а по нажатию на вторую - путь ко второй 
// картинке.
// let button_2 = document.querySelector('#button_2'); 
// let img_2 = document.querySelector('#img_2'); 
// button.addEventListener('click', ()=>{
//     img.src = img_2.src; 
// })
// button_2.addEventListener('click', ()=>{
//     img_2.src = img.src; 
// })

// №1⊗jsPmDmTF

// Дан инпут и кнопка. По нажатию на кнопку запишите в инпут 
// какой-нибудь текст.
// let input = document.querySelector('#input'); 
// let input_2 = document.querySelector('#input_2'); 
// button.addEventListener('click', ()=>{ 
//     input.value = 'cup'; 
// })


// №2⊗jsPmDmTF

// Дан инпут, абзац и кнопка. По нажатию на кнопку запишите в абзац 
// текст из инпута.
// button.addEventListener('click', ()=>{ 
//     text.textContent = input.value; 
// })

// №3⊗jsPmDmTF

// Даны два инпута и кнопка. В первый инпут пользователем вводится число. 
// По нажатию на кнопку запишите во второй инпут квадрат введенного числа.
// button.addEventListener('click', ()=>{ 
//     input_2.value = input.value**2; 
// })
//???????????????????????????????????????????????????????????????????????
// №4⊗jsPmDmTF

// Даны два инпута и кнопка. По нажатию на кнопку запишите в первый инпут 
// значение второго инпута, а во второй инпут - значение первого. Ваш 
// код должен работать универсально, для любых значений инпутов.
// let button = document.querySelector('#button'); 
// let input = document.querySelector('#input'); 
// let input_2 = document.querySelector('#input_2'); 


// button.addEventListener('click', ()=>{ 
//     input.value = input_2.value; 
//     input_2.value = input.value; 
// })
//???????????????????????????????????????????????????????????????????????
// №5⊗jsPmDmTF

// Даны 5 инпутов, абзац и кнопка. В инпут вводятся числа. 
// По нажатию на кнопку запишите среднее арифметическое введенных чисел 
// в абзац.

// №1⊗jsPmDmTFF

// Дан инпут. По получению фокуса запишите в него число 1, 
// а по потери фокуса - число 2.
// input.addEventListener('focus', ()=>{
//     input.value = 1; 
// })
// input.addEventListener('blur', ()=>{
//     input.value = 2; 
// })

// №2⊗jsPmDmTFF

// Дан инпут. Пусть в него вводится число. По потери фокуса выведите 
// на экран квадрат этого числа.
// input.addEventListener('blur', ()=>{
//     input.value = input.value**2; 
// })
//???????????????????????????????????????????????????????????????????????
// №3⊗jsPmDmTFF

// Дан инпут, в котором изначально есть какой-то текст. По получению 
// фокуса инпутом очистите содержимое этого инпута.
// input.addEventListener('focus', ()=>{
//     input.value = null; 
// })
//???????????????????????????????????????????????????????????????????????

// №3⊗jsPmDmEA

// Дан див с несколькими CSS классами, записанными через пробел:

// <div id="elem" class="aaa bbb ccc"></div>
// Дана также кнопка. По нажатию на кнопку получите массив CSS классов нашего дива.
// let div = document.querySelector('#div'); 
// button.addEventListener('click', ()=>{
//     arr = div.className.split(' ');  
//     console.log(arr);
// })

// №1⊗jsPmDmThs

// Дан инпут. По получению фокуса этим инпутом запишите в него число 1, а по потери 
// фокуса - число 2. Для обращения у инпуту внутри функции-обработчика используйте объект this.
// function funcFocus(){
//     this.value = 1; 
// }
// function funcBlur(){
//     this.value =2; 
// }

// input_2.addEventListener('focus', funcFocus)
// input_2.addEventListener('blur', funcBlur)

// №2⊗jsPmDmThs

// Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на 
// эту кнопку ее значение каждый раз увеличивалось на единицу.
// let res = 0;
// function funcPlus(){
//     res++;  
//     console.log(res);
// }
// button.addEventListener('click', funcPlus)

// №1⊗jsPmDmThsA

// Даны 5 абзацев с какими-то текстами. 
// По клику на любой абзац запишите в конец его
// текста восклицательный знак.
//???????????????????????????????????????????????????????????????????????
// let text_1 = document.querySelector('#text_1'); 
// let text_2 = document.querySelector('#text_2'); 
// let text_3 = document.querySelector('#text_3'); 
// let text_4 = document.querySelector('#text_4'); 
// let text_5 = document.querySelector('#text_5'); 

// text_1 = addEventListener('click', ()=>{text_1.textContent+='!'})
// text_2 = addEventListener('click', ()=>{text_2.textContent+='!'})
// text_3 = addEventListener('click', ()=>{text_3.textContent+='!'})
// text_4 = addEventListener('click', ()=>{text_4.textContent+='!'})
// text_5 = addEventListener('click', ()=>{text_5.textContent+='!'})
//???????????????????????????????????????????????????????????????????????
// function getPlusSym() {
//     this.textContent += '!'; 
// }

// let texts = document.querySelectorAll('p')
// for(let elem of texts){
//     elem.addEventListener('click', getPlusSym) 
// }

// №2⊗jsPmDmThsA

// Даны 3 инпута, в которых записаны какие-то числа. 
// По потери фокуса в любом из инпутов возведите стоящее 
// в нем число в квадрат.
//???????????????????????????????????????????????????????????????????????
// №1⊗jsPmDmHU

// Дана ссылка и кнопка. По нажатию на кнопку добавьте в конец текста 
// ссылки содержимое ее атрибута href в круглых скобках. Сделайте так, 
// чтобы это добавление происходило лишь по первому нажатию.
// function func(){
//     a.href += '(' + a.href + ')'
//     console.log(a.href);
//     a.removeEventListener('click', func); 
// }
// button.addEventListener('click', func)
//???????????????????????????????????????????????????????????????????????

// №2⊗jsPmDmHU

// Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по 
// клику на эту кнопку ее значение каждый раз увеличивалось на единицу. 
// После того, как значение кнопки достигнет 10 - отвяжите обработчик события, 
// чтобы кнопка больше не реагировала на нажатие.

// function func(){
//     this.value =parseInt(button.value) + 1;
//     console.log(this.value); 
//     if(this.value==10){
//         this.removeEventListener('click', func)
//     }
// }

// button.addEventListener('click', func); 

//  =========== ПРАКТИКУМ ===========
let input = document.querySelector('#input'); 
let input_2 = document.querySelector('#input_2');
let input_3 = document.querySelector('#input_3');
let input_4 = document.querySelector('#input_4'); 
let text = document.querySelector('#text'); 
let button = document.querySelector('#button'); 
let button_plus = document.querySelector('#button_plus'); 
let button_minus = document.querySelector('#button_minus'); 
// let texts = document.querySelectorAll('p'); 
let text_nums = document.querySelectorAll('p'); 
let links = document.querySelector('a'); 
let text_divs = document.querySelectorAll('div')
let celsius = document.querySelector('#celsius')
let coefficients =  document.querySelectorAll('input')

// №1⊗jsPmDmPm

// Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.
// input.addEventListener('blur', ()=>{
//     text.textContent+=input.value; 
// })

// №2⊗jsPmDmPm

// Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие 
// в этих инпутах и запишите их сумму в абзац.
// button.addEventListener('click', ()=>{
//    let res = Number(input.value) + Number(input_2.value); 
//    text.textContent = res; 
// })

// №3⊗jsPmDmPm

// Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.
// function func(){
//     let res = 0; 
//     let num = this.value;
//     for (let elem of num){
//         res+=Number(elem); 
//     }
//     this.value = res;  
// }
// input.addEventListener('blur', func)

// №4⊗jsPmDmPm

// Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее 
// арифметическое этих чисел (сумма делить на количество).
// function func(){
//     let sum = 0; 
//     let count = 0; 
//     let nums = this.value; 
//     nums = nums.split(',')
//     for(let elem of nums){
//         sum += Number(elem); 
//         count++; 
//     }
//     let res = sum/count; 
//     console.log(res);
// }
// input.addEventListener('blur', func)

// №5⊗jsPmDmPm

// Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, 
// имя и отчество в остальные 3 инпута.
// function func(){
//     let elems = this.value; 
//     elems = elems.split(' ')
//     for(let i=0; i<elems.length; i++){
//         input_2.value = elems[0]; 
//         input_3.value = elems[1];
//         input_4.value = elems[2]; 
//     }
// }
// input.addEventListener('blur', func)

// №6⊗jsPmDmPm

// Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так,
// чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали 
// записанными с большой буквы (в этом же инпуте).
// function func(){
//     let elems = this.value; 
//     let newElems = []; 
//     elems = elems.split(' ')
//     for(let elem of elems){
//         elem = elem.split('')
//         elem[0] = elem[0].toUpperCase(); 
//         elem = elem.join('');
//         newElems.push(elem); 
//     }   
//     this.value = newElems; 
// }

// input.addEventListener('blur', func)

// №7⊗jsPmDmPm

// Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.
// function func(){
//     let text = this.value; 
//     let letters = text.split(' ')
//     console.log(letters.length);
// }
// input.addEventListener('blur', func)

// №8⊗jsPmDmPm

// Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте 
// поставьте эту дату в формате 2016-12-31.
// function func(){
//     let str = this.value; 
//     input.value = str.split('.').reverse().join('-');
// }
// input.addEventListener('blur', func)
// №9⊗jsPmDmPm

// Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается 
// с начала и с конца одинаково (например, мадам).
// function func(){
//     let word = input.value;
//     let reversedWord = word.split('').reverse().join('');
//     if(word==reversedWord){
//         console.log('+++');
//     }
//     else{
//         console.log('---');
//     }
// }
// button.addEventListener('click', func)

// №10⊗jsPmDmPm

// Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри 
// себя цифру 3.
// function func(){
//     let num = this.value; 
//     num = num.split('')
//     for(item of num){
//         if(item==3){
//             console.log('+++');
//         }
//         else{
//             console.log('---');
//             break; 
//         }
//     }
// }
// input.addEventListener('blur', func)

// №11⊗jsPmDmPm

// Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его 
// порядковый номер.
// function func(){
//     let count = 0; 
//     for(elem of texts){
//         count++; 
//         elem.textContent = elem.textContent + String(count); 
//     }
// }
// button.addEventListener('click', func)

// №12⊗jsPmDmPm

// Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.
// for(elem of links){
//     elem += '(' + elem.href + ')'
// }

// №13⊗jsPmDmPm

// Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → 
// (делается так: &rarr;).

// №14⊗jsPmDmPm

// Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, 
// которое в нем находится.
// for(let elem of text_nums){
//     elem.addEventListener('click',()=>{
//         elem.textContent = elem.textContent**2;
//     } )
// }

// №15⊗jsPmDmPm

// Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели 
// (словом), который приходится на эту дату.
// input.addEventListener('blur', ()=>{
//     let nums = input.value.split('.')
//     let date = new Date(nums[0], nums[1], nums[2]); 
//     let day = date.getDay(); 
//     console.log(day);

// })

// №16⊗jsPmDmPm

// Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение 
// инпута. Сделайте так, чтобы это значение не могло стать меньше нуля.
// button_plus.addEventListener('click', ()=>{
//     input.value = Number(input.value)+1; 
//     if(input.value<=0){
//         button_plus.disabled = true; 
//     }
// })
// button_minus.addEventListener('click', ()=>{
//     input.value = Number(input.value)-1;
//     if(input.value<=0){
//         button_minus.disabled = true; 
//     }
// })

// №17⊗jsPmDmPm

// Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим 
// абзацам.
// let count = 0; 
// for(let elem of text_nums){
//     elem.addEventListener('click', ()=>{
//         count++; 
//         input.value = count; 
//     });
// }


// №18⊗jsPmDmPm

// На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них 
// стоит так, чтобы он стал длиной 10 символов. И добавьте троеточие в конец обрезанного текста
// for(let elem of text_divs){
//     let text = elem.textContent;  
//     if (text.length > 10){
//         text =text.slice(0, 10) + '...'; 
//     }
//     elem.textContent = text; 
// }

// №19⊗jsPmDmPm

// Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и
// запишите в инпут.

// №20⊗jsPmDmPm

// Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. По нажатию на кнопку 
// перемешайте введенные символы случайным образом и запишите ее обратно в инпут.
// function func(){
//     let randomLets = shuffleString(input.value)
//     console.log(randomLets);
// }

// function shuffleString(str) {
//     let shuffledStr = '';
//     let arr = str.split(''); 
//     arr.sort(() => Math.random() - 0.5); 
//     shuffledStr = arr.join(''); 
//     return shuffledStr;
// }

// button.addEventListener('click', func)

// №21⊗jsPmDmPm

// Дан инпут, кнопка и абзац. В инпут вводится температура в градусах Фаренгейта. По клику на 
// кнопку выведите в абзац температуру в градусах Цельсия.
// button.addEventListener('click', ()=>{
//     celsius.textContent = (input.value-32)*5/9; 
// })

// №22⊗jsPmDmPm

// Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац 
// факториал этого числа.
// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
//   }
// ; 

// button.addEventListener('click', ()=>{
//     text.textContent = factorial(input.value); 
// })
// №23⊗jsPmDmPm

// Даны 3 инпута, кнопка и абзац. В инпуты вводятся коэффициенты квадратного уравнения. По 
// нажатию на кнопку найдите корни этого уравнения и выведите их в абзац.
// function getRootsQuadraticEquation(coefficients) {
//     let a = coefficients[0];
//     let b = coefficients[1];
//     let c = coefficients[2];
    
//     let discriminant = b * b - 4 * a * c;
    
    
//     if (discriminant < 0) {
//       return 'корней нет';
//     }
    
//     else if (discriminant === 0) {
//       let root = -b / (2 * a);
//       return [root];
//     }
    
//     else {
//       let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//       let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//       return [root1, root2];
//     }
//   }
  
// button.addEventListener('click', ()=>{
//     let arrOfCoefficients = []
//     for(let elem of coefficients){
//         arrOfCoefficients.push(elem.value); 
//     }
//     text.textContent = getRootsQuadraticEquation(arrOfCoefficients); 
// })


