// console.group('Main.js loaded');

var questions = [
/* Category 1 Questions */
  {
    prompt: "What generic data type should we use when we want to use varying data types in a list?",
    correctAnswer: "Object",
     },
    {
      prompt: "Rewrite the following Javascript statment in C#: </br> var flag = true;",
      correctAnswer: "bool flag = true;"
    },
    {
      prompt: "double num1 = 9.34534910;</br>int num2 = (int)num1;</br>System.Console.WriteLine(num2);",
      correctAnswer: "9"
    },
    {
      prompt: "string greeting = 'hello';</br> System.Console.WriteLine(greeting);",
      correctAnswer: "error CS1012: Too many characters in character literal"
    },
    {
      prompt: "int num1 = 74;</br>double num2= num1;</br>This is an example of what type of casting?",
      correctAnswer: "Implicit casting"
    },
    {
      prompt: "What 'using' statement must be added to the top of our Program.cs file in order to use lists?",
      correctAnswer: "using System.Collections.Generic;"
    },
    {
      prompt: "Create an empty list called 'students', that will store a collection of names (syntax should be exact!)",
      correctAnswer: "List\&lt;\string\&gt; students = new List&lt;\string&gt;\();"
    },
    {
      prompt: "What built-in method do we use to determine a list's length?",
      correctAnswer: ".Count()"
    },
    {
      prompt: "Given a list of integers, write a function that will iterate through it and print all its values",
      correctAnswer: "function printVals(int[] arr)</br>{ </br>&nbsp;&nbsp;&nbsp;&nbsp;foreach(int x in arr)</br>&nbsp;&nbsp;&nbsp;&nbsp;{</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(x);<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}"
    },
    {
      prompt: "Write a function that takes in a list of ints and a number n, and removes the nth element of the list",
      correctAnswer: "static void removeNthElement(List\&lt;int\&gt; nums, int n)</br>{</br>&nbsp;&nbsp;&nbsp;&nbsp;nums.RemoveAt(n-1);</br>}"
    },
    {
      prompt: "What is the alternative to the 'public' keyword?",
      correctAnswer: "private"
    },
    {
      prompt: "True or false: when declaring a function, the static keyword is optional",
      correctAnswer: "True"
    },
    {
      prompt: "In our Program.cs file, where do we call or invoke our functions?",
      correctAnswer: "In the 'Main' function"
    },

    {
      prompt: `What is the output of the following function?:</br> public static string sayName(string name)</br>{</br>&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(name);</br>}</br> sayName("Bob");`,
      correctAnswer: "error CS0161: 'Program.sayName(string)': not all code paths return a value"
    },
    {
      prompt: `What is the output of the following function?:</br> public static void sayName(string name="+"Bob"+")</br>{</br>&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(name);</br>}</br>sayName("Tom");`,
      correctAnswer: "Tom"
    },
    { 
      prompt: "What is the output of the following code?</br> int[] arr = {2,4,6,8};</br> Console.WriteLine(arr[2]);",
      answer: "6"
    },
    {
      prompt: "Create an empty array to hold numbers, called numArray, with a length of 7",
      correctAnswer: "int[] numArray = new int[7];"
    },
    {
      prompt: "What is the output of the following code?</br>int[] arr = {1,2,3,4,5}; </br>arr[0] = 8;</br>foreach(int num in arr)</br>{</br>&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(num);</br>}",
      correctAnswer: "int[] numArray = new int[]{1,2,3,4,5};</br> OR </br>int[] numArray = {1,2,3,4,5};"
    },
    {
      prompt: "Create an empty three-dimensional array, called 3DArray, which holds 5 inner arrays, each of which holds 3 inner arrays, each of which has a length of 7",
      correctAnswer: "int[,,] 3DArray = new int[5,3,7];"
    },
    {
      prompt: "Create an empty jagged array, called jaggedArray, which holds 4 subarrays of varying lengths",
      correctAnswer: "int[][,] jaggedArray = new int[3][,];"
    },
    {
      prompt: "True or false? C# is heavily object-oriented",
      correctAnswer:"true"
    },
    {
      prompt: "Is C# typing dynamic or static?",
      correctAnswer: "Static"
    },
    {
      prompt: "What is the output of the following code?</br> int num = 0; </br>if(num === 0)</br>{</br>&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(num);</br>}",
      correctAnswer: "error CS1525: Invalid expression term '='"
    },
    {
      prompt: `What is the output of the following code? </br>Console.WriteLine($"Hello my name is {0}", "Sara");`,
      correctAnswer: "Hello my name is 0."
    },
    {
      prompt: "Write code that prints a random floating-point number between 0.0 and 1.0",
      correctAnswer: "Random rand = new Random();</br> Console.WriteLine(rand.NextDouble()); "
    }

];
// Buzzer & Chaching sounds
var buzzer = document.getElementById("buzzer");
buzzer = window.buzzer;
function playbuzzer() {
    buzzer.play();
}
function pausebuzzer() {
    buzzer.pause();
}
var chaching = document.getElementById("chaching");
chaching = window.chaching;
function playchaching() {
    chaching.play();
}
function pausechaching() {
    chaching.pause();
}
var theme = document.getElementById("theme")



$(function() {
   // Hide the Modal after submit
    $("#getanswer").click(function(){
      var num = $(this.data-num);
      console.log(num)
    });
});
$(function() {
  // Remove Element after click
  $(".gridbtn").click(function() {
    $(this).addClass("disabled");
    $(this).remove();
    });

});

 function showQuestion(event, $modal) {
   theme.play();
  var button = $(event.relatedTarget);  
  var num = parseInt(button.data('num'));
  var question = questions[num];
  window.currentQuestion = num;
  $modal.find('.modal-body').css('overflow-y', 'auto'); 
  $modal.find('.modal-body').css('height', $(window).height() * 0.7);
  $modal.find('.modal-title').html(`<p class='modal-title' data-answer=''>${question.prompt}</p>`);
  $modal.find('.modal-body button').attr('data-num', num)

 } 


  $("#myModal").on('show.bs.modal', function(event) {
    showQuestion(event, $(this));
    });

$("#myModal").on('hidden.bs.modal', function () {
  $('#myModal').removeData('bs.modal');
            console.log('The modal is now hidden.');
    });

  $("#getanswer").click(function(){
    var num = ($(this).attr('data-num'));
    console.log(num)

     chaching.play();

    $("#myModal").find('.modal-title').html(`<p class='modal-title'>${questions[num].correctAnswer}</p>`)
  })
    
