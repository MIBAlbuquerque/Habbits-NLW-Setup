const form = document.querySelector('#form-habits')

const nlwSetup = new NLWSetup(form);

const button = document.querySelector('header button')

button.addEventListener('click', addHabit)
form.addEventListener("change", saveChange)



function addHabit() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
let itsNewDay = nlwSetup.dayExists(today)
    if (itsNewDay === true) {
        alert("🛑 Dia já incluso 🛑")
        return
    }else {
        nlwSetup.addDay(today)
        alert("Dia incluído com sucesso ✅")
    }
}

function saveChange() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))

}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()