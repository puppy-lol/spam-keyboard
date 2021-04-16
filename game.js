player1_name = localStorage.getItem("player_1_name");
player2_name = localStorage.getItem("player_2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player_1_user").innerHTML = player1_name + ":";
document.getElementById("player_2_user").innerHTML = player2_name + ":";
document.getElementById("player_1_score").innerHTML = player1_score;
document.getElementById("player_2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    product = (number1) * (number2);

    question_word = "<h4>" + number1 + " x " + number2 + "</h4>"
    input_box = "<br> Answer: <input type='number' id='input_check_box'> ";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

question_turn = "player_1_name";
answer_turn = "player_2_name";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    console.log("Answer: " + product);
    if (get_answer == product) {
        if (answer_turn == "player_1_name") {
            player1_score = player1_score + 1;
            document.getElementById("player_1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player_2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player_1_name") {
        question_turn = "player_2_name";
        document.getElementById("player_question").innerHTML = "Question turn - " + player2_name;     
    }
    else {
        question_turn = "player_1_name";
        document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
    }
    if (answer_turn == "player_1_name") {
        answer_turn = "player_2_name";
        document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;
    }
    else {
        answer_turn = "player_1_name";
        document.getElementById("player_answer").innerHTML = "Answer turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}