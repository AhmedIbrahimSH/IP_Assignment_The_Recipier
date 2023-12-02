document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('form_elements').addEventListener('submit', function(e) {
        e.preventDefault(); 
        Ensure_Password();
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('rate_click').addEventListener('click', function(e) {
        e.preventDefault(); 
        rate();
        show_gif("rating_gif.gif");
    });
});



document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('submitBtn').addEventListener('click', function(e) {
        e.preventDefault();
        if((document.getElementById('suggest_email').value != "")  && (document.getElementById('suggestion').value != "")){   
            show_gif("suggestion_gif.gif");
            alert('Suggestion sent successfully');
            document.getElementById('suggestion').value = "";
            document.getElementById('suggest_email').value = "";
        }
        else if(document.getElementById('suggest_email').value == "")
            alert('Please enter your email');
        else if(document.getElementById('suggestion').value == "")
            alert('Please enter your suggestion');
    });
});




document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('signupForm').addEventListener('submit', function() {
        e.preventDefault(); 
        alert('Signed up successfully');
        redirectToHome();
    });
});

function redirectToHome() {
    window.location.href = 'home.html';
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('enable_nots').addEventListener('change', function(e) {

        if(document.getElementById('suggest_email').value == ""){
            event.preventDefault();
        }
        enable_notifications();
    });
});



document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('disable_nots').addEventListener('change', function(e) {
        e.preventDefault(); 
        enable_notifications();
    });
});



function Ensure_Password() {
    if((document.getElementById('password').value != "1234") || (document.getElementById('username').value != "ahmed")) {
        show_gif("nope-no.gif");
    }
    else{
        window.location.href = "home.html";
    }

}




function enable_notifications (){
    var img = document.getElementById('image');
    if(document.getElementById('suggest_email').value == ""){
        
        alert("Please Enter your email to complete the process");
        event.preventDefault();
    
    }
    else{

        if(document.getElementById('enable_nots').checked == true){
            alert("Congratulations , Notifications Enabled to " + document.getElementById('suggest_email').value);
            img.style.display = 'block';
            
        }

        if(document.getElementById('disable_nots').checked == true){
            alert("Notifications disabled to " + document.getElementById('suggest_email').value);
            img.style.display = 'none';
        }
    }
}



function show_gif(gif_name){

    var gifUrl = gif_name;

    var width = 400;
    var height = 400;

    var left = (screen.width / 2) - (width / 2);
    var top = (screen.height / 2) - (height / 2);

    var gifWindow = window.open("", "gifWindow", "width=" + width + ",height=" + height + ",top=" + top + ",left=" + left);

    gifWindow.document.write("<img src='" + gifUrl + "' alt='Loading...' width='" + width + "' height='" + height + "'>");

    setTimeout(function() {
        gifWindow.close();
    }, 1000);

}

function rate(){
    document.querySelector('.rating').addEventListener('click', function(e) {
        if (e.target.matches('span')) {
            let stars = document.querySelectorAll('.rating span');
            stars.forEach(star => star.style.color = 'darkgrey');
            let clickedStarIndex = Array.from(stars).indexOf(e.target);
            for (let i = 0; i <= clickedStarIndex; i++) {
                stars[i].style.color = 'gold'; 
            }
        }
    });
}

function confirmNavigation(url) {
    if (confirm("Do you want to go to the food page?")) {
        window.location.href = url;
    }
}

function show_sign_up(){
    document.body.style.backgroundColor = peru;
}
