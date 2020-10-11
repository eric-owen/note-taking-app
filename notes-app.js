const notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)


document.querySelector('#create-note').addEventListener('click', function () {
    notes.push({
        title: '',
        body: ''
    })

    saveNotes(notes)
    renderNotes(notes, filters)
})


document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    e.target.value
})