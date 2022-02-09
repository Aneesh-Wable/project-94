function addUser()
{
    username = document.getElementById("userName").value;
    localStorage.setItem("Username:",username);
    window.location = "kwitter_room.html"
}