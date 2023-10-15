// console.log("Hello world")
// alert("ada notifikasi")
// prompt("Pinjam Seratus")

// var Promnet = "Coding is Easy"
// console.log(Promnet)
// var Promnet = "Coding is Easy"
// console.log(Promnet)
// var Promnet = "Coding is Easy"
// console.log(Promnet)

// let Promnet = "Coding is Fun"
// console.log(Promnet)
// let Promnet = "Coding is Fun"
// console.log(Promnet)

// const Promnet = "Coding is My Life"
// console.log(Promnet)
// const Promnet = "Coding is My Life"
// console.log(Promnet)

// let totalPoin = prompt("Masukkan Poin Anda")
// if(totalPoin > 100){
//     document.write("Congratulation");
//     }else{
//         document.write("Keep Trying")
// }

// let x = 6;
// let y = 3;

// console.log(x<10 && y > 1);
// console.log(x<10 && y < 1);
// console.log(x==5||y==5);
// console.log(x==6||y==5);
// console.log(!(x==y));

// document.write(x<10 && y > 1);
// document.write("<br>");
// document.write(x<10 && y < 1);

// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")
// button.addEventListener('click', function(){
//     let isi = input.value
//     console.log(isi)
//     p.innerHTML = isi
// })

let todoName = document.getElementById('todo-name');
let btnSubmit = document.getElementById('btn-submit');
btnSubmit.addEventListener('click', function () {
    if (todoName.value == '') {
        alert('Nama todo tidak boleh kosong!!');
    } else {
        let todoContainer = document.querySelector('.list-group')
        let todoHTML = todoContainer.innerHTML;
        todoHTML += `
                <li class="list-group-item d-flex justify-content-between">
                    <div>
                        <input class="form-check-input me-1" type="checkbox">
                        <span>${todoName.value}</span>
                    </div>
                    <button class="bage border-0 bg-danger btn-hapus" >x</button>
                </li>
                `;
        todoContainer.innerHTML = todoHTML;    
        todoName.value = '';    
        todoName.focus();

        let checkTodo = document.querySelectorAll('.form-check-input')
        for (let i = 0; i < checkTodo.length; i++) {
            const input = checkTodo[i];
            input.addEventListener('change', function(){
                let todoSpan = input.nextElementSibling;
                todoSpan.classList.toggle('text-decoration-line-through');
            })
        }

        let btnHapus = document.querySelectorAll('.btn-hapus');
        for (let x = 0; x < btnHapus.length; x++) {
            const hapus = btnHapus[x];
            console.log(hapus);
            hapus.addEventListener('click', function () {
                this.parentElement.remove();
            })
        }
    }
})

