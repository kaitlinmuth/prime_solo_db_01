/**
 * Created by kaitlinmuth on 5/16/15.
 */
function getUsers(){
    $.ajax({
        url: '/users/list',
        data: {},
        method: 'get',
        dataType: 'json',
        success: function(data, textStatus, jqXHR){
            clearData();
            writeData(data);
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log(textStatus,errorThrown);
        },
        complete: function(jqXHR, textStatus){
            console.log("getData() Ajax Get Complete:", textStatus);
        }
    });
}

function clearData(){
    $('#userList').empty();
}

function writeData(data){
    for (var i=0; i<data.length; i++) {
        var username, firstName, lastName, email;
        var dataString = "";
        if (data[i].username)
            username = data[i].username;
        dataString += ("<strong>" + username + "</strong>, ");
        if (data[i].firstName)
            firstName = data[i].firstName;
        dataString += (firstName + " ");
        if (data[i].lastName)
            lastName = data[i].lastName;
        dataString += (lastName + ", ");
        if (data[i].email)
            email = data[i].email;
        dataString += ("<a href='mailto:"+email+"'>"+email+"</a>");
        $('#userList').append("<li>"+dataString+"</li>");
    }
}


$(document).ready(function(){
    getUsers();
});