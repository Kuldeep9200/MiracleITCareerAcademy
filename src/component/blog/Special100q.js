import { useEffect } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Special100q = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="questions" style={{ padding: "5%" }}>
        <div className="imgunter text-center">
          <img
            src={require("../image/potensial.png")}
            className="imglogoi"
            style={{ width: "100%" }}
            alt="imglogo"
          />
        </div>
        <div className="arrewicon" style={{marginTop:"20px"}}>
          <NavLink to="/blog">
            {" "}
            <BsFillArrowLeftCircleFill
              style={{ fontSize: "42px", color: "blue", cursor: "pointer" }}
            />
          </NavLink>
        </div>
        <h1
          className="maintext"
          style={{ textAlign: "center", margin: "30px" }}
        >
          General Guidelines for answering the interview questions
        </h1>

        <div className="qusestionint">
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 1: </strong>Tell me about yourself.
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 2: </strong>TWhat are your strengths?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 3: </strong>What are your weaknesses?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 4: </strong>Why do you want this job?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 5: </strong>Where would you like to be in your
            career five years from now?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 6: </strong>What's your ideal company?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 7: </strong>What attracted you to this company?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 8: </strong>Why should we hire you?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 9: </strong>What did you like least about your last
            job?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 10: </strong>When were you most satisfied in your
            job?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 11: </strong>What can you do for us that other
            candidates can't? 
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 12: </strong>What were the responsibilities of your
            last position?  
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 13: </strong>Why are you leaving your present job?
              
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 14: </strong>What do you know about this
            industry?  
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 15: </strong>What do you know about our company? 
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 16: </strong>Are you willing to relocate?  
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 17: </strong>Do you have any questions for me?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 18: </strong>Behavioral Interview Questions:
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 19: </strong>What was the last project you headed
            up, and what was its outcome? 
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 20: </strong>Give me an example of a time that you
            felt you went above and beyond the call of duty at work. 
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 21: </strong>Can you describe a time when your work
            was criticized?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 22: </strong>Have you ever been on a team where
            someone was not pulling their own weight? How did you handle it? 
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 23: </strong>Have you ever been on a team where
            Tell me about a time when you had to give someone difficult
            feedback. How did you handle it? 
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 24: </strong>What is your greatest failure, and
            what did you learn from it? 
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 25: </strong>What irritates you about other people,
            and how do you deal with it? 
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 26: </strong>
            If I were your supervisor and asked you to do something that you
            disagreed with, what would you do?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 27: </strong>
            What was the most difficult period in your life, and how did you
            deal with it? 
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 28: </strong>
            Give me an example of a time you did something wrong. How did you
            handle it? 
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 29: </strong>
            What irritates you about other people, and how do you deal with it? 
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 30: </strong>
            Tell me about a time where you had to deal with conflict on the
            job. 
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 31: </strong>
            If you were at a business lunch and you ordered a rare steak and
            they brought it to you well done, what would you do?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 32: </strong>
            If you found out your company was doing something against the law,
            like fraud, what would you do? 
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 33: </strong>
            What assignment was too difficult for you, and how did you resolve
            the issue?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 34: </strong>
            What's the most difficult decision you've made in the last two years
            and how did you come to that decision?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 35: </strong>
            Describe how you would handle a situation if you were required to
            finish multiple tasks by the end of the day, and there was no
            conceivable way that you could finish them. 
          </h5>

          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700", textAlign: "center" }}
          >
            Salary Questions:
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 36: </strong>
            What salary are you seeking?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 37: </strong>
            What's your salary history?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 38: </strong>
            If I were to give you this salary you requested but let you write
            your job description for the next year, what would it say?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 39: </strong>
            What assignment was too difficult for you, and how did you resolve
            the issue? 
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700", textAlign: "center" }}
          >
            Career Development Questions:
          </h5>

          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 40: </strong>
            What are you looking for in terms of career development? 
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 41: </strong>
            How do you want to improve yourself in the next year?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 42: </strong>
            What kind of goals would you have in mind if you got this job?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 43: </strong>
            If I were to ask your last supervisor to provide you additional
            training or exposure, what would she suggest?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700", textAlign: "center" }}
          >
            {" "}
            Getting Started Questions:{" "}
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 44: </strong>
            How would you go about establishing your credibility quickly with
            the team?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 45: </strong>
            How long will it take for you to make a significant contribution?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 46: </strong>
            What do you see yourself doing within the first 30 days of this job?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 47: </strong>
            If selected for this position, can you describe your strategy for
            the first 90 days?
          </h5>

          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            More About You:{" "}
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 48: </strong>
            How would you describe your work style?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 49: </strong>
            What would be your ideal working situation? 
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 50: </strong>
            What do you look for in terms of culture -- structured or
            entrepreneurial? 
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 51: </strong>
            Give examples of ideas you've had or implemented.
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 52: </strong>
            What techniques and tools do you use to keep yourself organized?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 53: </strong>
            If you had to choose one, would you consider yourself a big-picture
            person or a detail-oriented person?  
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 54: </strong>
            Tell me about your proudest achievement.  
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 55: </strong>
            Who was your favorite manager and why?  
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 56: </strong>
            What do you think of your previous boss?   
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 57: </strong>
            Was there a person in your career who really made a difference? 
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 58: </strong>
            What kind of personality do you work best with and why?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 59: </strong>
            What are you most proud of?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 60: </strong>
            What do you like to do?  
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 61: </strong>
            What are your lifelong dreams?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 62: </strong>
            What do you ultimately want to become?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 63: </strong>
            What is your personal mission statement?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 64: </strong>
            What are three positive things your last boss would say about you?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 65: </strong>
            What negative thing would your last boss say about you? 
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 66: </strong>
            What three character traits would your friends use to describe you?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 67: </strong>
            What are three positive character traits you don't have?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 68: </strong>
            If you were interviewing someone for this position, what traits
            would you look for?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 69: </strong>
            List five words that describe your character.
          </h5>

          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 70: </strong>
            Who has impacted you most in your career and how?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 71: </strong>
            What is your greatest fear?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 72: </strong>
            What is your biggest regret and why?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 73: </strong>
            What's the most important thing you learned in school?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 74: </strong>
            Why did you choose your major?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 75: </strong>
            What will you miss about your present/last job?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 76: </strong>
            What is your greatest achievement outside of work?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 77: </strong>
            What are the qualities of a good leader? A bad leader?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 78: </strong>
            Do you think a leader should be feared or liked?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 79: </strong>
            How do you feel about taking no for an answer?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 80: </strong>
            How would you feel about working for someone who knows less than
            you?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 81: </strong>
            How do you think I rate as an interviewer?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 82: </strong>
            Tell me one thing about yourself you wouldn't want me to know.
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 83: </strong>
            Who has impacted you most in your career and how?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 84: </strong>
            Tell me the difference between good and exceptional.
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 85: </strong>
            Who has impacted you most in your career and how?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 86: </strong>
            What kind of car do you drive?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 87: </strong>
            There's no right or wrong answer, but if you could be anywhere in
            the world right now, where would you be?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 88: </strong>
            What's the last book you read?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 89: </strong>
            What magazines do you subscribe to?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 90: </strong>
            What's the best movie you've seen in the last year?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 91: </strong>
            What would you do if you won the lottery?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 92: </strong>
            Who are your heroes?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 93: </strong>
            What do you like to do for fun?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 94: </strong>
            What do you do in your spare time?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 95: </strong>
            What is your favorite memory from childhood?
          </h5>

          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700", textAlign: "center" }}
          >
            Brainteaser Questions:
          </h5>

          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 96: </strong>
            How many times do a clock's hands overlap in a day?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 97: </strong>
            How would you weigh a plane without scales?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 96: </strong>
            Tell me 10 ways to use a pencil other than writing.
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 97: </strong>
            Sell me this pencil.
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 98: </strong>
            If you were an animal, which one would you want to be?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 99: </strong>
            Why is there fuzz on a tennis ball?
          </h5>
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 100: </strong>
            If you could choose one superhero power, what would it be and why?
          </h5>
        </div>
        <div className="other" style={{ textAlign: "end" }}>
        <h2 style={{ fontFamily: "auto", marginTop: "29px" }}>
          {" "}
          Author : <span> Amit Dubey</span>
        </h2>
      </div>
      </div>
     
    </div>
  );
};

export default Special100q;
