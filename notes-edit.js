const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function (note) {
    return note.id === noteId
})

//this doesnt seem to work
if (note === undefined) {
    setTimeout(() => {
        location.assign(`/mead/js/notes-app/index.html`)

    }, 1);
}

titleElement.value = note.title
bodyElement.value = note.body


// cant seem to get input events to save text to work.... 

titleElement.addEventListener('input', function (e) {
    notes.title = e.target.value
    saveNotes(notes)

})

bodyElement.addEventListener('input', function (e) {
    notes.body = e.target.value
    saveNotes(notes)

})


// removing a note click button
removeElement.addEventListener('click', function (e) {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/mead/js/notes-app/index.html')

})