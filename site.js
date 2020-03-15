

	function myFunction() {
	 //document.getElementById("demo").innerHTML = "Paragraph changed.";
	 location.reload();
	}

// Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        if(questionNumber < introNum){
			output.push(
          `<div class="slide">
            <div class="answers" align="center"> ${currentQuestion.question} </div>
          </div>`);
		}
		else 
		{
		
		// variable to store the list of possible answers
        const answers = [];
		

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}" id="anss">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers" align="left"> ${answers.join("")} </div>
          </div>`
        );
		//<div class="footnote" name="fn"> ${currentQuestion.footnote}  </div>
		}
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
	
  }

function showResults(){



    // show number of correct answers out of total
    //resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
	//quizContainer.style.display = 'none';
	myText.innerHTML = "";
	face.src="male.gif"
	submitButton.style.display = 'none';
	quizContainer.innerHTML = `Em trả lời đúng được ${numCorrect-1} câu trên ${myQuestions.length-introNum-1} câu hỏi! <br><br>Và quan trọng hơn là...<br><br>Chúc mừng sinh nhật tuổi 26 của vợ yêu!<br>Qua tuổi mới anh sẽ yêu em thêm nhiều hơn nữa! Làm em cười vui hơn nữa! <br>Cho em hạnh phúc hơn nữa! Ỡ bên cạnh em và chăm sóc em hoài lunnnnn!<br><br>Giống như bài trắc nghiệm này, anh lúc nào cũng nghĩ và nhớ tới em yêu hết! <br><br><b style=\"color:#FA7B7B;\">Anh yêu em nhiều lắm! </b><br>`;
	foot.innerHTML = `<i><small>Liên hệ với chồng em để được nhận thưởng</small><\i>`;
  }

  /*function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
	//quizContainer.style.display = 'none';
	quizContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }
  /*
  function showFooter(n) {
	  myQuestions.forEach( (currentQuestion, questionNumber) => {

      
      if(n === questionNumber){
        currentQuestion.
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  }*/


function checkCorrect(n) {
	// gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    //let numCorrect = 0;

	const answerContainer = answerContainers[n];
    const selector = `input[name=question${n}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
	console.log(myQuestions.length-introNum);

	if(userAnswer === undefined){
		myText.innerHTML = "Em phải chọn câu trả lời đi chứ!";
		myText.style.color = 'red';
		return false;
	}

	
	if(myQuestions[n].correctAnswer === "z" || userAnswer === myQuestions[n].correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[n].style.color = 'lightgreen';
		myText.innerHTML =  myQuestions[currentSlide].textCorrect;
		myText.style.color = '#00D15C';
		score = score + 30;
		face.src="suprise.gif"
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        //answerContainers[n].style.color = 'red';
		myText.innerHTML =  myQuestions[currentSlide].textIncorrect;
		myText.style.color = 'red';
		score = score -50;
		face.src="angry.gif"
      }
	if(score <0){
		scoreText.innerHTML = `Em nợ -$ ${score*-1}`;
		scoreText.style.color = 'red';
	}
	else {
		scoreText.innerHTML = `Em đang có $ ${score}`;
		scoreText.style.color = '#00D15C';
	}		
	  
	
	return true;

    
	
}

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    /*
	if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }*/
	
	if(currentSlide < introNum) {
		if(currentSlide == 1)
			scoreText.innerHTML = `Em đang có $ ${score}`;
		if(currentSlide == 2){
			score += 2;
			scoreText.innerHTML = `Em đang có $ ${score}`; 
			face.src="suprise.gif"
		}
		nextButton.style.display = 'inline-block';
		agreeButton.style.display = 'none';
		submitButton.style.display = 'none';
		return;
	}
	demo.style.display='inline-block';
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
	  agreeButton.style.display = 'inline-block';
      
    }
    else{
      
	  if(isAnswer === true){
		  nextButton.style.display = 'inline-block';
	  }
	  else {
		  agreeButton.style.display = 'inline-block';
		  nextButton.style.display = 'none';
	  }
	  
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
	isAnswer = false;
	myText.innerHTML = "";
	face.src="female.gif"
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  function showAgree() {
	
	if(checkCorrect(currentSlide) === false){
		return;
	}
	if(currentSlide === slides.length-1){
		
		//footNoteField[currentSlide].style.visibility = 'visible';
		//checkCorrect(currentSlide);
		agreeButton.style.display = 'none';
		submitButton.style.display = 'inline-block';
		return;
	}
	  
		
	isAnswer = true
	nextButton.style.display = 'inline-block';
	agreeButton.style.display = 'none';
	//footNoteField[currentSlide].style.visibility = 'visible';
	//myText.innerHTML =  myQuestions[currentSlide].footnote;
	
  }
  
  function shuffleArray() {
	for(let i = myQuestions.length - 2; i > introNum+1; i--){
		//const j = Math.floor(Math.random() * i);
		let j =0;
		do{
			j = Math.floor(Math.random() * i);
		}while(j< introNum+1);
		
		const temp = myQuestions[i];
		myQuestions[i] = myQuestions[j];
		myQuestions[j] = temp;
	}
  }



  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const face = document.getElementById("face");
  const foot = document.getElementById("foot");
  const introNum = 3;
  const myQuestions = [
	{
      question: "Hello em iu, chào mừng em đến với chương trình <b style=\"color:#FF4A73;\">Ai Là Vợ Yêu</b>.<br> Hôm nay, em sẽ được chơi 1 trò chơi hết sức ly kỳ và hấp dẫn.<br><br> Đó chính là: <br><b style=\"color:#BB7AFF;\"> Trả lời câu hỏi trắc nghiệm!</b>",
    },
	{
      question: "Đây là em yêu. Và bên dưới là số tiền em hiện có.<br>Mỗi lần em trả lời đúng, em sẽ được thưởng <b style=\"color:green;\">$30</b>. Mỗi lần em trả lời sai, em sẽ bị trừ <b style=\"color:red;\">$50</b>.<br><br>Mục tiêu của em là gom đủ tiền để anh đi Hàn Quốc ăn kimchi.",

    },
	{
      question: "Và để ủng hộ và cổ vũ em iu, anh sẽ lì xì cho em <b style=\"color:green;\">$2</b> làm vốn.<br><br>Em yêu đã sẵn sàng chưa?",
    },
	{
      		question: "Như anh đã nói, nếu em trả lời đúng thì em sẽ được thưởng bao nhiêu? Còn sai thì trừ bao nhiêu?",
      		answers: {
        			a: "Đúng: +50, Sai: -50",
        			b: "Đúng: +50, Sai: -30",
        			c: "Đúng: +30, Sai: -50",
        			d: "Đúng: +30, Sai: -30"
		},
	  	textCorrect: "+30<br>Em đã trả lời đúng câu đầu tiên! Thưởng cho em iu nè <3",
	  	textIncorrect: "-50<br>Mới mỡ hàng mà em trả lời sai là chết rồi. Trừ tiềnnnnnn!",
      		correctAnswer: "c"
	},
	{
      		question: "Anh tặng em món gì đầu tiên?",
      		answers: {
        			a: "Nước bông",
        			b: "Chocolate",
        			c: "Tôm lột vỏ",
        			d: "Son môi"
		},
	  	textCorrect: "+30<br>Em thix món nào nhất?",
	  	textIncorrect: "-50<br>Không nhớ là anh đòi lại đó nha.",
      		correctAnswer: "b"
	},
	{
      		question: "Anh thix nhất phần nào trên cơ thể em?",
      		answers: {
        			a: "Mặt hài hài",
        			b: "Mông tròn tròn",
        			c: "Bụng thon thon",
        			d: "Ngực mềm mềm"
		},
	  	textCorrect: "+30<br>Anh yêu em",
	  	textIncorrect: "-50<br>Sai rồi! Anh yêu em từ trên xún dưới lun!!",
      		correctAnswer: "e"
	},
	{
      		question: "App học English mà em đang xài tên gì?",
      		answers: {
        			a: "Doulingo",
        			b: "Dolingo",
        			c: "Duolingo",
        			d: "Tiktok"
		},
	  	textCorrect: "+30<br>Đúng rồi. Em đã tới chapter mấy rồi nè?",
	  	textIncorrect: "-50<br>Bữa giờ em không xài nữa phải khooonnggg?",
      		correctAnswer: "c"
	},

	{
      		question: "Chúng ta đã đi du lịch những chỗ nào?",
      		answers: {
        			a: "Hà Nụi",
        			b: "Nin Pìn",
        			c: "Phan Thiết",
        			d: "Vũng Tào"
		},
	  	textCorrect: "+30<br>Cám ơn em iu đã nấu ăn, chuẩn bị birthday cho anh <3",
	  	textIncorrect: "-50<br>Mình có ra chỗ này sao????",
      		correctAnswer: "d"
	},

	{
      		question: "Cái túi đựng condom mào gì?",
      		answers: {
        			a: "Trắng",
        			b: "Đen",
        			c: "Xám",
        			d: "Nâu"
		},
	  	textCorrect: "+30<br>Em iu toàn nhớ cái gì đâu không ah nhaaaa.",
	  	textIncorrect: "-50<br>Để lần sau anh híp em nhiều hơn nữa cho em nhớ!",
      		correctAnswer: "c"
	},

	{
      		question: "Cuốn sách anh tặng em có tựa là gì?",
      		answers: {
        			a: "The Big Bad Fox",
        			b: "Bad Big Fox",
        			c: "Big Bad Fox",
        			d: "The Big Bad Wolf"
		},
	  	textCorrect: "+30<br>Lần sau anh mua sách có chữ only, không có hình cho em nha!",
	  	textIncorrect: "-50<br>Ôi em iu lấy ra trả bài cho anh maooooo.",
      		correctAnswer: "a"
	},

	{
      		question: "Mắt kính anh đang xài mào gì?",
      		answers: {
        			a: "Trắng",
        			b: "Đen",
        			c: "Xám",
        			d: "Xanh"
		},
	  	textCorrect: "+30<br>Không phải mào xanh sao? Anh thix mào xanh mà",
	  	textIncorrect: "-50<br>Em iu quên anh rồi T.T",
      		correctAnswer: "b"
	},

	{
      		question: "Lần gần đây nhất chúng ta cãi nhao vì lý do gì?",
      		answers: {
        			a: "Em không yêu anh",
        			b: "Em không quan tâm anh",
        			c: "Em không hiểu anh",
        			d: "Em không nhớ anh"
		},
	  	textCorrect: "+30<br>Chúng ta có cãi nhao sao?",
	  	textIncorrect: "-50<br>Chúng ta cãi nhao khi nào nhỉ?",
      		correctAnswer: "e"
	},

	{
      		question: "Anh đã send cho em bao nhiêu radio 2 con mèo?",
      		answers: {
        			a: "1",
        			b: "2",
        			c: "3",
        			d: "4"
		},
	  	textCorrect: "+30<br>Em iu có muốn nghe radio nữa không?",
	  	textIncorrect: "-50<br>Tắt đài radio lunnnnnn. Không phát sóng nưaaaa!",
      		correctAnswer: "b"
	},

	{
      		question: "Nãy giờ em khát nước chưa, em iu nghĩ tay ún nước xíu đi.",
      		answers: {
        			a: "Em uốn rồi",
        			b: "Em đang uốn",
        			c: "Em không khát",
        			d: "Chút nữa em uốn"
		},
	  	textCorrect: "+30<br>Giỏi chưa nè. Ngoan vậy anh yêu em nhiều lắm.",
	  	textIncorrect: "-50<br>Em iu đi uốn nước điiiii, không cho ngồi xem nữa!",
      		correctAnswer: "b"
	},

	{
      		question: "Hôm nay em đã thoa môi chưa, em đang bóc môi phải khoooongggg?",
      		answers: {
        			a: "Chút nữa em thoa",
        			b: "Em thoa rồi",
        			c: "Em không bóc môi",
        			d: "Em mới thoa"
		},
	  	textCorrect: "+30<br>Đưa môi đây anh hun chục cái nè <3",
	  	textIncorrect: "-50<br>Xạo điiiiii, em iu đi thoa môi ngayyyyy!",
      		correctAnswer: "d"
	},

	{
      		question: "Bây giờ em đang mặc quần lót mào gì?",
      		answers: {
        			a: "Trắng",
        			b: "Đen",
        			c: "Xám",
        			d: "Không mặc"
		},
	  	textCorrect: "+30<br>Vậy ahhhhh anh cũng muốn xemmmmm",
	  	textIncorrect: "-50<br>Vậy ahhhhh, anh cũng muốn xemmmmm",
      		correctAnswer: "z"
	},

	{
      		question: "Anh đã gửi em bao nhiêu clip quyến gủ?",
      		answers: {
        			a: "1",
        			b: "2",
        			c: "3",
        			d: "4"
		},
	  	textCorrect: "+30<br>Nhiều vậy ah? Sao anh phá em thế",
	  	textIncorrect: "-50<br>Vậy ah, anh cũng muốn xemmmmm",
      		correctAnswer: "z"
	},

	{
      		question: "Em được anh tặng bao nhiêu cây son?",
      		answers: {
        			a: "2",
        			b: "3",
        			c: "4",
        			d: "5"
		},
	  	textCorrect: "+30<br>Rồi em iu còn bốc môi nữa khooonggg?",
	  	textIncorrect: "-50<br>Em nhớ lầm hay là anh nhớ lầm nhỉ :))",
      		correctAnswer: "d"
	},
	{
      		question: "Anh tặng em bao nhiêu chocolate?",
      		answers: {
        			a: "2",
        			b: "3",
        			c: "4",
        			d: "5"
		},
	  	textCorrect: "+30<br>Em iu có thix chocolate nữa không? Miệng em iu ngọt như chocolate.",
	  	textIncorrect: "-50<br>Em ăn nhiều quá quên hết rồi saoooo!",
      		correctAnswer: "c"
	},

	{
      		question: "Lần đầu chúng ta nắm tay là khi nào?",
      		answers: {
        			a: "Trong quán nước",
        			b: "Trong taxi",
        			c: "Băng qua đường",
        			d: "Lúc anh lột đồ em"
		},
	  	textCorrect: "+30<br>Anh nhớ em iu quá đi. Muốn quay lại nắm tay em hoài lun",
	  	textIncorrect: "-50<br>Em iu trí nhớ kém quá là sao?",
      		correctAnswer: "c"
	},

	{
      		question: "Khi em đang rửa chén thì anh thường làm gì?",
      		answers: {
        			a: "Rửa phụ em",
        			b: "Kéo quần em",
        			c: "Ôm em",
        			d: "Sờ ngực em"
		},
	  	textCorrect: "+30<br>Anh muốn vừa kéo quần vừa kéo áo lun cơ!",
	  	textIncorrect: "-50<br>Anh nhớ là khác mà.",
      		correctAnswer: "b"
	},
	{
      		question: "Khi em đang xếp đồ thì anh thường làm gì?",
      		answers: {
        			a: "Phá đồ lót của em",
        			b: "Sờ mó em",
        			c: "Cất đồ phụ em",
        			d: "Treo đồ phụ em"
		},
	  	textCorrect: "+30<br>Lần sau anh phải trộm đồ lót của em đem về mới được!",
	  	textIncorrect: "-50<br>Em đừng hòng anh làm.",
      		correctAnswer: "a"
	},

	{
      		question: "Chúng ta tắm chung bao nhiêu lần?",
      		answers: {
        			a: "1",
        			b: "2",
        			c: "3",
        			d: "4"
		},
	  	textCorrect: "+30<br>Anh muốn tắm với em iu quá đi. Anh nhớ em lắm lắm lun rồi nè.",
	  	textIncorrect: "-50<br>Ít vậy sao em?",
      		correctAnswer: "b"
	},

	{
      		question: "Khi anh híp em thì anh thix lúc nào nhất?",
      		answers: {
        			a: "Lúc em quỳ bò bò",
        			b: "Lúc em nằm sấp",
        			c: "Lúc em nằm ngữa",
        			d: "Lúc em nằm nghiêng"
		},
	  	textCorrect: "+30<br>Chạm vào mông em iu <3 Lấy con vịt đánh em càng đã.",
	  	textIncorrect: "-50<br>Sao em iu làm lắm kiểu thế, sao mà nhớ hết được.",
      		correctAnswer: "b"
	},
	{
      		question: "Lần đầu tiên anh hun em là ỡ đâu?",
      		answers: {
        			a: "Ỡ má",
        			b: "Ỡ môi",
        			c: "Ỡ cỗ",
        			d: "Ỡ dưới"
		},
	  	textCorrect: "+30<br>Môi em iu mềm. Hun cả đêm tới sáng lunnnnnn.",
	  	textIncorrect: "-50<br>Anh hun nhiều chỗ quá rồi em quên lun rồi sao?",
      		correctAnswer: "b"
	},
	{
      		question: "Anh giúp em cột giày bao nhiêu lần?",
      		answers: {
        			a: "2",
        			b: "3",
        			c: "4",
        			d: "5"
		},
	  	textCorrect: "+30<br>Sao em yêu hành anh nhiều lần thế?",
	  	textIncorrect: "-50<br>Nhiều vậy ah?",
      		correctAnswer: "z"
	},
	{
      		question: "Anh thix cái gì dưới đây nhất?",
      		answers: {
        			a: "Chơi game",
        			b: "Ráp robo",
        			c: "Đi chơi",
        			d: "Đi ăn"
		},
	  	textCorrect: "+30<br>Anh còn thix chơi với em iu nữa <3",
	  	textIncorrect: "-50<br>Sai rồiiiiiii!",
      		correctAnswer: "a"
	},
	{
      		question: "Trên bàn tay anh, ngón trỏ hay ngón đeo nhẫn dài hơn?",
      		answers: {
        			a: "Ngón út",
        			b: "Ngón trỏ",
        			c: "Ngón giữa",
        			d: "Ngón đeo nhẫn"
		},
	  	textCorrect: "+30<br>Ghê vậy, trí nhớ tốt vậy saoooo.",
	  	textIncorrect: "-50<br>Em iu quên mất tiêu anh rồiiiii.",
      		correctAnswer: "d"
	},
	{
      		question: "Em với anh uống bia chung bao nhiêu lần?",
      		answers: {
        			a: "2",
        			b: "3",
        			c: "4",
        			d: "5"
		},
	  	textCorrect: "+30<br>Lần sau cho anh móm cho em iu ún thôiiii, để cho em sayyyy..",
	  	textIncorrect: "-50<br>Em nhớ kỹ chưa đó.",
      		correctAnswer: "c"
	},
	{
      		question: "Nãy giờ em đã trả lời bao nhiêu câu hỏi?",
      		answers: {
        			a: "20",
        			b: "25",
        			c: "30",
        			d: "35"
		},
	  	textCorrect: "+30<br>Và đây là câu 26!!!! Sao lại là 26 nhỉ...",
	  	textIncorrect: "-50<br>Chia bùn cùng em, em phải trả lời thêm 50 câu nữa!",
      		correctAnswer: "b"
	}
			
  ];


	shuffleArray();
  // Kick things off
  buildQuiz();

  // Pagination
  //const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const agreeButton = document.getElementById("agree");
  //const submitButton = document.getElementById("submit");
  //const footNoteField = document.getElementsByName("fn");
  const slides = document.querySelectorAll(".slide");
  const myText = document.getElementById("myText");
  const scoreText = document.getElementById("score");
  const demo = document.getElementById("demo");
  
  let score = 0;
  let numCorrect = 0;
  let currentSlide = 0;
  let isAnswer = false;
  
  demo.style.display='none';
  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  //previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
  agreeButton.addEventListener("click", showAgree);