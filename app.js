function calculateLove() {
    var firstName = document.getElementById("firstName").value.trim();
    var secondName = document.getElementById("secondName").value.trim();

    if(firstName === "" || secondName === "") {
        alert("Please enter names for both the girl and the boy.");
        return; // Exit the function if names are not entered
    }

    // Generate a random love score between 50 and 100
    var loveScore = 50 + Math.random() * 50;
    var loveScoreG = Math.floor(loveScore);

    var ResultElement = document.getElementById("resultNew");

    function clarityOfLove() {
        if (loveScoreG > 60 && loveScoreG <= 80) {
            return "Your love is in good Position";
        } else if (loveScoreG > 80 && loveScoreG <= 90) {
            return "Your love is great";
        } else if (loveScoreG > 90) {
            return "Your love is true love and you both are soulmates";
        } else {
            return "";
        }
    }

    function loveLost() {
        var loveLostMsg = "Your love is weak";
        ResultElement.innerHTML = loveLostMsg;
    }

    if (loveScoreG > 50) {
        ResultElement.innerHTML = clarityOfLove();
    } else {
        loveLost();
    }

    ResultElement.innerHTML += "<br>The percentage of love between " + firstName + " and " + secondName + " is " + loveScoreG + "%";
}
