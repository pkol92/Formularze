const root = document.getElementById("libraryApp");
const div = document.createElement("div");
const form = document.createElement("form");
form.setAttribute("id", "bookForm");
root.append(div);
div.append(form);
document.querySelector("#bookForm").required = true;

const inputBook = document.createElement("input");
inputBook.setAttribute("id", "bookTitle");
inputBook.required = true;

// do naprawy
inputBook.addEventListener("input", e => {
    let input = document.querySelector("#bookTitle");
    let val = input.value;
    const reg = /^[a-zA-Z0-9]{1,}$/g; 

    //dorobić nad polem że nie przeszło
    if (!reg.test(val)) {
        alert("uwaga");
    }

    // if (!reg.test(val)) {
    //     input.classList.add("field-error");
    // } else {
    //     input.classList.remove("field-error");
    // }
});

const inputAuthor = document.createElement("input");
inputAuthor.setAttribute("id", "author");
inputAuthor.required = true;
inputAuthor.setAttribute("pattern", "[a-zA-Z] {3}");

inputAuthor.addEventListener("input", e => {
    let input = document.querySelector("#author");
    const val = input.value;
    const reg = /^[a-zA-Z ]{3,}$/g; 

    //dorobić nad polem że nie przeszło
    // if (!reg.test(val)) {
    //     alert("uwaga");
    // }
    // if (!reg.test(val)) {
    //     input.classList.add("field-error");
    // } else {
    //     input.classList.remove("field-error");
    // }
});

const labelBook = document.createElement("label");
labelBook.innerText = "Tytuł książki (min. 1 znak):"
const labelAuthor = document.createElement("label");
labelAuthor.innerText = "Autor (min. 3 znaki nie będące cyframi):"

form.append(labelBook,inputBook, labelAuthor, inputAuthor);

const divRadio = document.createElement("div");
const legendRadio = document.createElement("legend");
legendRadio.innerText = "Priorytet przeczytania:"

const radio1 = document.createElement("input");
radio1.setAttribute("type", "radio");
radio1.setAttribute("id", "1");
radio1.setAttribute("value", "1");
radio1.setAttribute("name", "important");
const label1 = document.createElement("label");
label1.setAttribute("for", "1");
label1.innerText = "1";

const radio2 = document.createElement("input");
radio2.setAttribute("type", "radio");
radio2.setAttribute("id", "2");
radio2.setAttribute("value", "2");
radio2.setAttribute("name", "important");
const label2 = document.createElement("label");
label2.setAttribute("for", "2");
label2.innerText = "2";

const radio3 = document.createElement("input");
radio3.setAttribute("type", "radio");
radio3.setAttribute("id", "3");
radio3.setAttribute("value", "3");
radio3.setAttribute("name", "important");
const label3 = document.createElement("label");
label3.setAttribute("for", "3");
label3.innerText = "3";

const radio4 = document.createElement("input");
radio4.setAttribute("type", "radio");
radio4.setAttribute("id", "4");
radio4.setAttribute("value", "4");
radio4.setAttribute("name", "important");
const label4 = document.createElement("label");
label4.setAttribute("for", "4");
label4.innerText = "4";

const radio5 = document.createElement("input");
radio5.setAttribute("type", "radio");
radio5.setAttribute("id", "5");
radio5.setAttribute("value", "5");
radio5.setAttribute("name", "important");
const label5 = document.createElement("label");
label5.setAttribute("for", "5");
label5.innerText = "5";

const radioGroup = divRadio.querySelectorAll("input[name=important]");
const spanRadio = document.createElement("span");
spanRadio.setAttribute("id", "radioResult");

divRadio.append(legendRadio, radio1, label1, radio2, label2, radio3, label3, radio4, label4, radio5, label5, spanRadio);
form.append(divRadio);

const resultRadio = document.querySelector("#radioResult");

// for (const radio of radioGroup) {
//     radio.addEventListener("change", e => {
//         // for (const radio of radioGroup) {
//         //     if (radio.checked) {
//         //         // resultElement.innerText = radio.nextElementSibling.value;
//         //         spanRadio.innerText = radio.value
//         //         break;
//         //     }
//         // }
//     });
// }



//create checkbox
const divCheckbox = document.createElement("div");
form.append(divCheckbox);

const legendCheckbox = document.createElement("legend");
legendCheckbox.innerText = "Kategoria:";

const check1 = document.createElement("input");
check1.setAttribute("type", "checkbox");
check1.setAttribute("value", "kryminał");
check1.setAttribute("name", "bookCategory");
const labelCheck1 = document.createElement("label");
labelCheck1.setAttribute("class", "checkbox");
labelCheck1.innerText = "kryminał";

const check2 = document.createElement("input");
check2.setAttribute("type", "checkbox");
check2.setAttribute("value", "horror");
check2.setAttribute("name", "bookCategory");
const labelCheck2 = document.createElement("label");
labelCheck2.setAttribute("class", "checkbox");
labelCheck2.innerText = "horror";

const check3 = document.createElement("input");
check3.setAttribute("type", "checkbox");
check3.setAttribute("value", "romans");
check3.setAttribute("name", "bookCategory");
const labelCheck3 = document.createElement("label");
labelCheck3.setAttribute("class", "checkbox");
labelCheck3.innerText = "romans";

divCheckbox.append(legendCheckbox, check1, labelCheck1, check2, labelCheck2, check3, labelCheck3);

const spanCheckboxResult = document.createElement("span");
spanCheckboxResult.setAttribute("id", "checkResult");
divCheckbox.append(spanCheckboxResult);

const checkboxResult = document.querySelector("#checkResult");
// const divCh = document.querySelector(".check");
const checkboxGroup = form.querySelectorAll("input[name=bookCategory]");
// const spanCheckboxResult = document.createElement("span");
// spanCheckboxResult.setAttribute("id", "checkResult");
// const checkboxResult = document.querySelector("#checkResult");

//do naprawy:
for (const check of checkboxGroup) {
    check.addEventListener("change", e => {
        // let checkedCount = 0;
        // for (const check of checkboxGroup) {
        //     if (check.checked) {
        //         checkedCount++;
        //     }
        // }
        spanCheckboxResult.innerText = check.value;
    });
}

//create button submit
const button = document.createElement("button");
button.setAttribute("type", "submit");
button.innerText = "Dodaj książkę";
form.append(button);



//create table of book
const divTable = document.createElement("div");
root.append(divTable);

const table = document.createElement("table");
table.setAttribute("id", "bookTable");
divTable.append(table);

function tableTitles(fieldTitles) {
    fieldTitles.forEach((fieldTitle) => {
    let th = document.createElement('th');
    th.appendChild(document.createTextNode(fieldTitle));
    table.appendChild(th);
});
}

tableTitles(["Tytuł książki", "Autor", "Priorytet przeczytania", "Kategoria"]);

function addBook() {
    const tbl = document.querySelector("#bookTable");
    const row = tbl.insertRow();

    const book = row.insertCell();
    book.innerHTML = document.querySelector("#bookTitle").value;
    const author = row.insertCell();
    author.innerHTML = document.querySelector("#author").value;

    const cell3 = row.insertCell();
    cell3.innerText = "2";
    const cell4 = row.insertCell();
    cell4.innerText = "krym";
}

button.addEventListener("click", e => {
    e.preventDefault();
    // document.querySelector("#bookForm").sumbit();
    //dorobić funkcję dodawania do tabeli
    addBook();
})

