const root = document.getElementById("libraryApp");
const div = document.createElement("div");
const form = document.createElement("form");
root.append(div,form);

const inputBook = document.createElement("input");
inputBook.addEventListener("input", e => {
    const val = input.value;
    const reg = /^[a-zA-Z0-9]{1,}$/g; 

    if (!reg.test(val)) {
        input.classList.add("field-error");
    } else {
        input.classList.remove("field-error");
    }
});

const inputAuthor = document.createElement("input");
inputAuthor.addEventListener("input", e => {
    const val = input.value;
    const reg = /^[a-zA-Z ]{3,}$/g; 

    if (!reg.test(val)) {
        input.classList.add("field-error");
    } else {
        input.classList.remove("field-error");
    }
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
const span = document.createElement("span");
span.setAttribute("id", "radioResult")
const resultElement = document.getElementById("radioResult");

// for (const radio of radioGroup) {
//     radio.addEventListener("change", e => {
//         for (const radio of radioGroup) {
//             if (radio.checked) {
//                 // resultElement.innerText = radio.nextElementSibling.value;
//                 resultElement.innerText = "kupa";
//                 break;
//             }
//         }
//     });
// }

divRadio.append(legendRadio, radio1, label1, radio2, label2, radio3, label3, radio4, label4, radio5, label5, span);
form.append(divRadio);

divCheck = document.createElement("div");

const check1 = document.createElement("input");
check1.setAttribute("type", "checkbox");
check1.setAttribute("value", "kryminał");
check1.setAttribute("name", "category");
const labelCheck1 = document.createElement("label");
labelCheck1.className("check")
labelCheck1.innerText = "kryminał";


const divCheck = document.querySelector(".check");
const checkboxGroup = form.querySelectorAll("input[name=category]");
const spanCheckboxResult = document.createElement("span");
spanCheckboxResult.setAttribute("id", "checkResult");
const checkboxResult = document.querySelector("#checkResult");

for (const chk of checkboxGroup) {
    chk.addEventListener("change", e => {
        let checkedCount = 0;
        for (const chk of checkboxGroup) {
            if (chk.checked) {
                checkedCount++;
            }
        }
        fruitsResult.innerText = checkedCount;
    });
}

divCheck.append(check1, labelCheck1, spanCheckboxResult);
form.append(divCheck);