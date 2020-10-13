const notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)


document.querySelector('#create-note').addEventListener('click', function () {
    const id = uuidv4()

    notes.push({
        id: id,
        title: '',
        body: ''
    })

    saveNotes(notes)

    setTimeout(() => {
        location.assign(`/mead/js/notes-app/edit.html#${id}`)

    }, 1);
})


document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    e.target.value
})