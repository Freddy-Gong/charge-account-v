let id: number = parseInt(window.localStorage.getItem('maxID') || '0') || 0
function createID() {
    id++
    window.localStorage.setItem('maxID', id.toString())
    return id
}
export default createID