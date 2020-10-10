const notes = [{
    title: 'next trip',
    body: 'go to spain'
}, {
    title: 'habbits to obtain',
    body: 'exercise, eat better'

}, {
    title: 'office mods',
    body: 'new seat'

}]

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)

    })
}

renderNotes(notes, filters)


document.querySelector('#create-note').addEventListener('click', function () {
    console.log('did this work')
})

document.querySelector('#remove-all').addEventListener('click', function (e) {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()
    })
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})