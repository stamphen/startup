function comment() {
    const comment_input = document.createTextNode(document.getElementById("new_comment").value)
    const nw_cmnt = document.createElement('div')
    const old_comments = document.getElementById('old_comments')
    old_comments.appendChild(nw_cmnt)
    nw_cmnt.appendChild(comment_input)
    
}