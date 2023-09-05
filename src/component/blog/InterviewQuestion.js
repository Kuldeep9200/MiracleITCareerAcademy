import { useEffect } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Interviewque = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="questions" style={{ padding: "5%" }}>
        <div className="imgunter text-center">
          <img
            src={require("../image/interview.png")}
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
            <strong>Question 1: </strong>Tell me about yourself{" "}
          </h5>
          <h5 className="blogsmy">
            TRAPS: Beware, about 80% of all interviews begin with this
            "innocent" question. Many candidates, unprepared for the question,
            skewer themselves by rambling, recapping their life story, delving
            into ancient work history or personal matters. BEST ANSWER: Start
            with the present and tell why you are well qualified for the
            position. Remember that the key to all successful interviewing is to
            match your qualifications to what the interviewer is looking for. In
            other words you must sell what the buyer is buying. This is the
            single most important strategy in job hunting. So, before you answer
            this or any question it's imperative that you try to uncover your
            interviewer's greatest need, want, problem or goal. To do so, make
            you take these two steps:
            <br />
            <br />
            <li>
              1. Do all the homework you can before the interview to uncover
              this person's wants and needs (not the generalized needs of the
              industry or company){" "}
            </li>
            <li>
              2. As early as you can in the interview, ask for a more complete
              description of what the position entails. You might say: "I have a
              number of accomplishments I'd like to tell you about, but I want
              to make the best use of our time together and talk directly to
              your needs. To help me do, that, could you tell me more about the
              most important priorities of this position? All I know is what I
              (heard from the recruiter, read in the classified ad, etc.)" 
            </li>
            <br />
            Then, ALWAYS follow-up with a second and possibly, third question,
            to draw out his needs even more. Surprisingly, it's usually this
            second or third question that unearths what the interviewer is most
            looking for. <br />
            You might ask simply, "And in addition to that?..." or, "Is there
            anything else you see as essential to success in this position?:
            <br />
            This process will not feel easy or natural at first, because it is
            easier simply to answer questions, but only if you uncover the
            employer's wants and needs will your answers make the most sense.
            Practice asking these key questions before giving your answers, the
            process will feel more natural and you will be light years ahead of
            the other job candidates you're competing with.
            <br />
            After uncovering what the employer is looking for, describe why the
            needs of this job bear striking parallels to tasks you've succeeded
            at before. Be sure to illustrate with specific examples of your
            responsibilities and especially your achievements, all of which are
            geared to present yourself as a perfect match for the needs he has
            just described.
          </h5>
        </div>
        <div className="qusestionint">
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 2: </strong> What are your greatest strengths?
          </h5>
          <h5 className="blogsmy">
            TRAPS: This question seems like a softball lob, but be prepared. You
            don't want to come across as egotistical or arrogant. Neither is
            this a time to be humble. BEST ANSWER: You know that your key
            strategy is to first uncover your interviewer's greatest wants and
            needs before you answer questions. And from Question 1, you know how
            to do this.
            <br /> <br />
            Prior to any interview, you should have a list mentally prepared of
            your greatest strengths. You should also have, a specific example or
            two, which illustrates each strength, an example chosen from your
            most recent and most impressive achievements. <br />
            You should, have this list of your greatest strengths and
            corresponding examples from your achievements so well committed to
            memory that you can recite them cold after being shaken awake at
            2:30AM.
            <br />
            Then, once you uncover your interviewer's greatest wants and needs,
            you can choose those achievements from your list that best match up.
             As a general guideline, the 10 most desirable traits that all
            employers love to see in their employees are:
            <br />
            <br />
            1. A proven track record as an achiever...especially if your
            achievements match up with the employer's greatest wants and needs.{" "}
            <br />
            2. Intelligence...management "savvy".
            <br />
            3. Honesty...integrity...a decent human being.
            <br />
            4. Good fit with corporate culture...someone to feel comfortable
            with...a team player who meshes well with interviewer's team.
            <br />
            5. Likeability...positive attitude...sense of humor.
            <br />
            6. Good communication skills.
            <br />
            7. Dedication...willingness to walk the extra mile to achieve
            excellence.
            <br />
            8. Definiteness of purpose...clear goals.
            <br />
            9. Enthusiasm...high level of motivation.
            <br />
            10. Confident...healthy...a leader.
            <br />
          </h5>
        </div>
        <div className="qusestionint">
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 3: </strong> What are your greatest weaknesses?
          </h5>
          <h5 className="blogsmy">
            TRAPS: Beware - this is an eliminator question, designed to shorten
            the candidate list. Any admission of a weakness or fault will earn
            you an "A" for honesty, but an "F" for the interview.
            <br /> <br />
            PASSABLE ANSWER: Disguise a strength as a weakness.
            <br />
            Example: "I sometimes push my people too hard. I like to work with a
            sense of urgency and everyone is not always on the same wavelength."
            <br />
            Drawback: This strategy is better than admitting a flaw, but it's so
            widely used, it is transparent to any experienced interviewer.
            <br />
            EST ANSWER: (and another reason it's so important to get a thorough
            description of your interviewer's needs before you answer
            questions): Assure the interviewer that you can think of nothing
            that would stand in the way of your performing in this position with
            excellence. Then, quickly review you strongest qualifications.{" "}
            <br />
            Example: "Nobody's perfect, but based on what you've told me about
            this position, I believe I' d make an outstanding match. I know that
            when I hire people, I look for two things most of all. Do they have
            the qualifications to do the job well, and the motivation to do it
            well? Everything in my background shows I have both the
            qualifications and a strong desire to achieve excellence in whatever
            I take on. So I can say in all honesty that I see nothing that would
            cause you even a small concern about my ability or my strong desire
            to perform this job with excellence." <br />
            Alternate strategy (if you don't yet know enough about the position
            to talk about such a perfect fit):
            <br />
            <br />
            Instead of confessing a weakness, describe what you like most and
            like least, making sure that what you like most matches up with the
            most important qualification for success in the position, and what
            you like least is not essential. <br />
            Example: Let's say you're applying for a teaching position. "If
            given a choice, I like to spend as much time as possible in front of
            my prospects selling, as opposed to shuffling paperwork back at the
            office. Of course, I long ago learned the importance of filing
            paperwork properly, and I do it conscientiously. But what I really
            love to do is sell (if your interviewer were a sales manager, this
            should be music to his ears.) <br />
          </h5>
        </div>
        <div className="qusestionint">
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 4: </strong> Tell me about something you did – or
            failed to do – that you now feel a little ashamed of.
          </h5>
          <h5 className="blogsmy">
            TRAPS: There are some questions your interviewer has no business
            asking, and this is one. But while you may feel like answering,
            "none of your business," naturally you can't. Some interviewers ask
            this question on the chance you admit to something, but if not, at
            least they'll see how you think on your feet. <br />
            Some unprepared candidates, flustered by this question, unburden
            themselves of guilt from their personal life or career, perhaps
            expressing regrets regarding a parent, spouse, child, etc. All such
            answers can be disastrous.
            <br /> <br />
            BEST ANSWER: As with faults and weaknesses, never confess a regret.
            But don't seem as if you're stonewalling either.
            <br />
            Best strategy: Say you harbor no regrets, then add a principle or
            habit you practice regularly for healthy human relations.
            <br />
            <br />
            Example: Pause for reflection, as if the question never occurred to
            you. Then say, "You know, I really can't think of anything." (Pause
            again, then add): "I would add that as a general management
            principle, I've found that the best way to avoid regrets is to avoid
            causing them in the first place. I practice one habit that helps me
            a great deal in this regard. At the end of each day, I mentally
            review the day's events and conversations to take a second look at
            the people and developments I'm involved with and do a doublecheck
            of what they're likely to be feeling. Sometimes I'll see things that
            do need more follow-up, whether a pat on the back, or maybe a five
            minute chat in someone's office to make sure we're clear on
            things…whatever." 
            <br />
            <br />
            "I also like to make each person feel like a member of an elite
            team, like the Boston Celtics or LA Lakers in their prime. I've
            found that if you let each team member know you expect excellence in
            their performance…if you work hard to set an example yourself…and if
            you let people know you appreciate and respect their feelings, you
            wind up with a highly motivated group, a team that's having fun at
            work because they're striving for excellence rather than brooding
            over slights or regrets."
          </h5>
        </div>
        <div className="qusestionint">
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 5: </strong> Why are you leaving (or did you leave)
            this position?
          </h5>
          <h5 className="blogsmy">
            TRAPS: Never badmouth your previous industry, company, board, boss,
            staff, employees or customers. This rule is inviolable: never be
            negative. Any mud you hurl will only soil your suit.
            <br /> <br />
            Especially avoid words like "personality clash", "didn't get along",
            or others which cast a shadow on your competence, integrity, or
            temperament.
            <br />
            <br />
            BEST ANSWER:
            <br />
            (If you have a job presently)
            <br />
            If you're not yet 100% committed to leaving your present post, don't
            be afraid to say so. Since you have a job, you are in a stronger
            position than someone who does not. But don't be coy either. State
            honestly what you'd be hoping to find in a new spot. Of course, as
            stated often before, you answer will all the stronger if you have
            already uncovered what this position is all about and you match your
            desires to it.
            <br />
            <br />
            (If you do not presently have a job.)
            <br />
            Never lie about having been fired. It's unethical – and too easily
            checked. But do try to deflect the reason from you personally. If
            your firing was the result of a takeover, merger, division wide
            layoff, etc., so much the better. <br />
            But you should also do something totally unnatural that will
            demonstrate consummate professionalism. Even if it hurts , describe
            your own firing – candidly, succinctly and without a trace of
            bitterness – from the company's point-of-view, indicating that you
            could understand why it happened and you might have made the same
            decision yourself. 
            <br />
            <br />
            Your stature will rise immensely and, most important of all, you
            will show you are healed from the wounds inflicted by the firing.
            You will enhance your image as first-class management material and
            stand head and shoulders above the legions of firing victims who, at
            the slightest provocation, zip open their shirts to expose their
            battle scars and decry the unfairness of it all.
            <br />
            For all prior positions:
          </h5>
        </div>
        <div className="qusestionint">
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 6: </strong> The "Silent Treatment"
          </h5>
          <h5 className="blogsmy">
            TRAPS: Beware – if you are unprepared for this question, you will
            probably not handle it right and possibly blow the interview. Thank
            goodness most interviewers don't employ it. It's normally used by
            those determined to see how you respond under stress. Here's how it
            works:
            <br /> <br />
            You answer an interviewer's question and then, instead of asking
            another, he just stares at you in a deafening silence.
            <br />
            <br />
            You wait, growing a bit uneasy, and there he sits, silent as Mt.
            Rushmore, as if he doesn't believe what you've just said, or perhaps
            making you feel that you've unwittingly violated some cardinal rule
            of interview etiquette. <br />
            When you get this silent treatment after answering a particularly
            difficult question , such as "tell me about your weaknesses", its
            intimidating effect can be most disquieting, even to polished job
            hunters.
            <br />
            <br />
            Most unprepared candidates rush in to fill the void of silence,
            viewing prolonged, uncomfortable silences as an invitation to clear
            up the previous answer which has obviously caused some problem. And
            that's what they do – ramble on, sputtering more and more
            information, sometimes irrelevant and often damaging, because they
            are suddenly playing the role of someone who's goofed and is now
            trying to recoup. But since the candidate doesn't know where or how
            he goofed, he just keeps talking, showing how flustered and confused
            he is by the interviewer's unmovable silence. 
            <br />
            BEST ANSWER: Like a primitive tribal mask, the Silent Treatment
            loses all it power to frighten you once you refuse to be
            intimidated. If your interviewer pulls it, keep quiet yourself for a
            while and then ask, with sincere politeness and not a trace of
            sarcasm, "Is there anything else I can fill in on that point?"
            That's all there is to it. <br /> <br />
            Whatever you do, don't let the Silent Treatment intimidate you into
            talking a blue streak, because you could easily talk yourself out of
            the position.
          </h5>
        </div>
        <div className="qusestionint">
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 7: </strong> Why should I hire you?
          </h5>
          <h5 className="blogsmy">
            TRAPS: Believe it or not, this is a killer question because so many
            candidates are unprepared for it. If you stammer or adlib you've
            blown it.
            <br /> <br />
            BEST ANSWER: By now you can see how critical it is to apply the
            overall strategy of uncovering the employer's needs before you
            answer questions. If you know the employer's greatest needs and
            desires, this question will give you a big leg up over other
            candidates because you will give him better reasons for hiring you
            than anyone else is likely to…reasons tied directly to his needs.
            <br />
            <br />
            Whether your interviewer asks you this question explicitly or not,
            this is the most important question of your interview because he
            must answer this question favorably in is own mind before you will
            be hired. So help him out! Walk through each of the position's
            requirements as you understand them, and follow each with a reason
            why you meet that requirement so well.
            <br />
            <br />
            Example: "As I understand your needs, you are first and foremost
            looking for someone who can manage the sales and marketing of your
            book publishing division. As you've said you need someone with a
            strong background in trade book sales. This is where I've spent
            almost all of my career, so I've chalked up 18 years of experience
            exactly in this area. I believe that I know the right contacts,
            methods, principles, and successful management techniques as well as
            any person can in our industry."
            <br />
            <br />
            "You also need someone who can expand your book distribution
            channels. In my prior post, my innovative promotional ideas doubled,
            then tripled, the number of outlets selling our books. I'm confident
            I can do the same for you." <br />
            "You need someone to give a new shot in the arm to your mail order
            sales, someone who knows how to sell in space and direct mail media.
            Here, too, I believe I have exactly the experience you need. In the
            last five years, I've increased our mail order book sales from
            $600,000 to $2,800,000, and now we're the country's second leading
            marketer of scientific and medical books by mail." Etc., etc., etc.,
            <br />
            Every one of these selling "couplets" (his need matched by your
            qualifications) is a touchdown that runs up your score. IT is your
            best opportunity to outsell your competition.
          </h5>
        </div>
        <div className="qusestionint">
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 8: </strong> Aren't you overqualified for this
            position?
          </h5>
          <h5 className="blogsmy">
            TRAPS: The employer may be concerned that you'll grow dissatisfied
            and leave.
            <br />
            BEST ANSWER: As with any objection, don't view this as a sign of
            imminent defeat. It's an invitation to teach the interviewer a new
            way to think about this situation, seeing advantages instead of
            drawbacks.
            <br /> <br />
            Example: "I recognize the job market for what it is – a marketplace.
            Like any marketplace, it's subject to the laws of supply and demand.
            So 'overqualified' can be a relative term, depending on how tight
            the job market is. And right now, it's very tight. I understand and
            accept that." <br />
            "I also believe that there could be very positive benefits for both
            of us in this match."
            <br />
            "Because of my unusually strong experience in ________________ , I
            could start to contribute right away, perhaps much faster than
            someone who'd have to be brought along more slowly."
            <br />
            <br />
            "There's also the value of all the training and years of experience
            that other companies have invested tens of thousands of dollars to
            give me. You'd be getting all the value of that without having to
            pay an extra dime for it. With someone who has yet to acquire that
            experience, he'd have to gain it on your nickel." <br />
            "I could also help you in many things they don't teach at the
            Harvard Business School. For example…(how to hire, train, motivate,
            etc.) When it comes to knowing how to work well with people and
            getting the most out of them, there's just no substitute for what
            you learn over many years of front-line experience. You company
            would gain all this, too." 
            <br />
            <br />
            "From my side, there are strong benefits, as well. Right now, I am
            unemployed. I want to work, very much, and the position you have
            here is exactly what I love to do and am best at. I'll be happy
            doing this work and that's what matters most to me, a lot more that
            money or title."
            <br />
            <br />
            "Most important, I'm looking to make a long term commitment in my
            career now. I've had enough of job-hunting and want a permanent spot
            at this point in my career. I also know that if I perform this job
            with excellence, other opportunities cannot help but open up for me
            right here. In time, I'll find many other ways to help this company
            and in so doing, help myself. I really am looking to make a
            long-term commitment." <br />
            <br />
            NOTE: The main concern behind the "overqualified" question is that
            you will leave your new employer as soon as something better comes
            your way. Anything you can say to demonstrate the sincerity of your
            commitment to the employer and reassure him that you're looking to
            stay for the long-term will help you overcome this objection.
            <br /> <br />
          </h5>
        </div>
        <div className="qusestionint">
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 9: </strong>Where do you see yourself five years
            from now?
          </h5>
          <h5 className="blogsmy">
            TRAPS: One reason interviewers ask this question is to see if you're
            settling for this position, using it merely as a stopover until
            something better comes along. Or they could be trying to gauge your
            level of ambition.
            <br />
            <br />
            If you're too specific, i.e., naming the promotions you someday hope
            to win, you'll sound presumptuous. If you're too vague, you'll seem
            rudderless.
            <br /> <br />
            BEST ANSWER: Reassure your interviewer that you're looking to make a
            long-term commitment…that this position entails exactly what you're
            looking to do and what you do extremely well. As for your future,
            you believe that if you perform each job at hand with excellence,
            future opportunities will take care of themselves. <br />
            Example: "I am definitely interested in making a long-term
            commitment to my next position. Judging by what you've told me about
            this position, it's exactly what I'm looking for and what I am very
            well qualified to do. In terms of my future career path, I'm
            confident that if I do my work with excellence, opportunities will
            inevitable open up for me. It's always been that way in my career,
            and I'm confident I'll have similar opportunities here."
          </h5>
        </div>
        <div className="qusestionint">
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 10: </strong>Describe your ideal company, location
            and job.
          </h5>
          <h5 className="blogsmy">
            TRAPS: This is often asked by an experienced interviewer who thinks
            you may be overqualified, but knows better than to show his hand by
            posing his objection directly. So he'll use this question instead,
            which often gets a candidate to reveal that, indeed, he or she is
            looking for something other than the position at hand.
            <br />
            <br />
            BEST ANSWER: The only right answer is to describe what this company
            is offering, being sure to make your answer believable with specific
            reasons, stated with sincerity, why each quality represented by this
            opportunity is attractive to you. <br />
            Remember that if you're coming from a company that's the leader in
            its field or from a glamorous or much admired company, industry,
            city or position, your interviewer and his company may well have an
            "Avis" complex. That is, they may feel a bit defensive about being
            "second best" to the place you're coming from, worried that you may
            consider them bush league.
            <br /> <br />
            This anxiety could well be there even though you've done nothing to
            inspire it. You must go out of your way to assuage such anxiety,
            even if it's not expressed, by putting their virtues high on the
            list of exactly what you're looking for, providing credible reason
            for wanting these qualities.
            <br />
            <br />
            If you do not express genuine enthusiasm for the firm, its culture,
            location, industry, etc., you may fail to answer this "Avis" complex
            objection and, as a result, leave the interviewer suspecting that a
            hot shot like you, coming from a Fortune 500 company in New York,
            just wouldn't be happy at an unknown manufacturer based in Topeka,
            Kansas.
          </h5>
        </div>
        <div className="qusestionint">
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 11: </strong>Why do you want to work at our
            company?
          </h5>
          <h5 className="blogsmy">
            TRAPS: This question tests whether you've done any homework about
            the firm. If you haven't, you lose. If you have, you win big.
            <br />
            <br />
            BEST ANSWER: This question is your opportunity to hit the ball out
            of the park, thanks to the in-depth research you should do before
            any interview.  Best sources for researching your target company:
            annual reports, the corporate newsletter, contacts you know at the
            company or its suppliers, advertisements, articles about the company
            in the trade press.
          </h5>
        </div>
        <div className="qusestionint">
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 12: </strong>What are your career options right
            now?
          </h5>
          <h5 className="blogsmy">
            TRAPS: The interviewer is trying to find out, "How desperate are
            you?"
            <br /> BEST ANSWER: Prepare for this question by thinking of how you
            can position yourself as a desired commodity. If you are still
            working, describe the possibilities at your present firm and why,
            though you're greatly appreciated there, you're looking for
            something more (challenge, money, responsibility, etc.). Also
            mention that you're seriously exploring opportunities with one or
            two other firms.
            <br />
            If you're not working, you can talk about other employment
            possibilities you're actually exploring. But do this with a light
            touch, speaking only in general terms. You don't want to seem
            manipulative or coy.
          </h5>
        </div>
        <div className="qusestionint">
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 13: </strong>Why have you been out of work so long?
          </h5>
          <h5 className="blogsmy">
            TRAPS: A tough question if you've been on the beach a long time. You
            don't want to seem like damaged goods.
            <br />
            <br /> BEST ANSWER: You want to emphasize factors which have
            prolonged your job search by your own choice.
            <br />
            Example: "After my job was terminated, I made a conscious decision
            not to jump on the first opportunities to come along. In my life,
            I've found out that you can always turn a negative into a positive
            IF you try hard enough. This is what I determined to do. I decided
            to take whatever time I needed to think through what I do best, what
            I most want to do, where I'd like to do it…and then identify those
            companies that could offer such an opportunity." <br />
            "Also, in all honesty, you have to factor in the recession
            (consolidation, stabilization, etc.) in the (banking, financial
            services, manufacturing, advertising, etc.) industry."
            <br />
            <br />
            "So between my being selective and the companies in our industry
            downsizing, the process has taken time. But in the end, I'm
            convinced that when I do find the right match, all that careful
            evaluation from both sides of the desk will have been well
            worthwhile for both the company that hires me and myself. 
          </h5>
        </div>
        <div className="qusestionint">
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 14: </strong>Tell me honestly about the strong
            points and weak points of your boss (company, management team,
            etc.)…
          </h5>
          <h5 className="blogsmy">
            TRAPS: Skillfull interviewers sometimes make it almost irresistible
            to open up and air a little dirty laundry from your previous
            position. DON'T BEST ANSWER: Remember the rule: Never be negative.
            Stress only the good points, no matter how charmingly you're invited
            to be critical.
            <br />
            <br /> Your interviewer doesn't care a whit about your previous
            boss. He wants to find out how loyal and positive you are, and
            whether you'll criticize him behind his back if pressed to do so by
            someone in this own company. This question is your opportunity to
            demonstrate your loyalty to those you work with.
          </h5>
        </div>
        <div className="qusestionint">
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 15: </strong> What good books have you read lately?
          </h5>
          <h5 className="blogsmy">
            TRAPS: Skillfull interviewers sometimes make it almost irresistible
            to open up and air a little dirty laundry from your previous
            position. DON'T BEST ANSWER: Remember the rule: Never be negative.
            Stress only the good points, no matter how charmingly you're invited
            to be critical.
            <br />
            <br /> Your interviewer doesn't care a whit about your previous
            boss. He wants to find out how loyal and positive you are, and
            whether you'll criticize him behind his back if pressed to do so by
            someone in this own company. This question is your opportunity to
            demonstrate your loyalty to those you work with.
          </h5>
        </div>
        <div className="qusestionint">
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 16: </strong> Tell me about a situation when your
            work was criticized
          </h5>
          <h5 className="blogsmy">
            TRAPS: This is a tough question because it's a more clever and
            subtle way to get you to admit to a weakness. You can't dodge it by
            pretending you've never been criticized. Everybody has been. Yet it
            can be quite damaging to start admitting potential faults and
            failures that you'd just as soon leave buried. <br />
            This question is also intended to probe how well you accept
            criticism and direction.
            <br /> <br />
            BEST ANSWERS: Begin by emphasizing the extremely positive feedback
            you've gotten throughout your career and (if it's true) that your
            performance reviews have been uniformly excellent.
            <br />
            <br />
            Of course, no one is perfect and you always welcome suggestions on
            how to improve your performance. Then, give an example of a
            not-too-damaging learning experience from early in your career and
            relate the ways this lesson has since helped you. This demonstrates
            that you learned from the experience and the lesson is now one of
            the strongest breastplates in your suit of armor.
            <br />
            <br />
            If you are pressed for a criticism from a recent position, choose
            something fairly trivial that in no way is essential to your
            successful performance. Add that you've learned from this, too, and
            over the past several years/months, it's no longer an area of
            concern because you now make it a regular practice to…etc.
            <br />
            <br /> Another way to answer this question would be to describe your
            intention to broaden your master of an area of growing importance in
            your field. For example, this might be a computer program you've
            been meaning to sit down and learn… a new management technique
            you've read about…or perhaps attending a seminar on some
            cutting-edge branch of your profession.
            <br />
            <br />
            Again, the key is to focus on something not essential to your
            brilliant performance but which adds yet another dimension to your
            already impressive knowledge base.
          </h5>
        </div>
        <div className="qusestionint">
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 17: </strong> What are your outside interests?
          </h5>
          <h5 className="blogsmy">
            TRAPS: You want to be a well-rounded, not a drone. But your
            potential employer would be even more turned off if he suspects that
            your heavy extracurricular load will interfere with your commitment
            to your work duties.
            <br />
            <br /> BEST ANSWERS: Try to gauge how this company's culture would
            look upon your favorite outside activities and be guided
            accordingly.
            <br />
            <br />
            You can also use this question to shatter any stereotypes that could
            limit your chances. If you're over 50, for example, describe your
            activities that demonstrate physical stamina. If you're young,
            mention an activity that connotes wisdom and institutional trust,
            such as serving on the board of a popular charity.  But above all,
            remember that your employer is hiring your for what you can do for
            him, not your family, yourself or outside organizations, no matter
            how admirable those activities may be.
          </h5>
        </div>
        <div className="qusestionint">
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 18: </strong> The "Fatal Flaw" question
          </h5>
          <h5 className="blogsmy">
            TRAPS: If an interviewer has read your resume carefully, he may try
            to zero in on a "fatal flaw" of your candidacy, perhaps that you
            don't have a college degree…you've been out of the job market for
            some time…you never earned your CPA, etc. <br />
            <br />
            A fatal flaw question can be deadly, but usually only if you respond
            by being overly defensive.
            <br />
            <br /> Your interviewer doesn't care a whit about your previous
            boss. He wants to find out how loyal and positive you are, and
            whether you'll criticize him behind his back if pressed to do so by
            someone in this own company. This question is your opportunity to
            demonstrate your loyalty to those you work with.
            <br />
            <br />
            BEST ANSWERS: As every master salesperson knows, you will encounter
            objections (whether stated or merely thought) in every sale. They're
            part and parcel of the buyer's anxiety. The key is not to exacerbate
            the buyer's anxiety but diminish it. Here's how…
            <br />
            <br />
            Whenever you come up against a fatal flaw question:
            <br />
            1. Be completely honest, open and straightforward about admitting
            the shortcoming. (Showing you have nothing to hide diminishes the
            buyer's anxiety.)
            <br />
            3. Add that as desirable as such a qualification might be, its lack
            has made you work all the harder throughout your career and has not
            prevented you from compiling an outstanding tack record of
            achievements. You might even give examples of how, through a
            relentless commitment to excellence, you have consistently
            outperformed those who do have this qualification.
            <br />
            Of course, the ultimate way to handle "fatal flaw" questions is to
            prevent them from arising in the first place. You will do that by
            following the master strategy described in Question 1, i.e.,
            uncovering the employers needs and them matching your qualifications
            to those needs.
            <br />
            Once you've gotten the employer to start talking about his most
            urgently-felt wants and goals for the position, and then help him
            see in step-by-step fashion how perfectly your background and
            achievements match up with those needs, you're going to have one
            very enthusiastic interviewer on your hands, one who is no longer
            looking for "fatal flaws".
          </h5>
        </div>
        <div className="qusestionint">
          <h5
            className="blogheading"
            style={{ fontSize: "25px", fontWeight: "700" }}
          >
            <strong>Question 19: </strong> How do you feel about reporting to a
            younger person (minority, woman, etc)?
          </h5>
          <h5 className="blogsmy">
            TRAPS: It's a shame that some interviewers feel the need to ask this
            question, but many understand the reality that prejudices still
            exist among some job candidates, and it's better to try to flush
            them out beforehand.
            <br /> The trap here is that in today's politically sensitized
            environment, even a well-intentioned answer can result in planting
            your foot neatly in your mouth. Avoid anything which smacks of a
            patronizing or an insensitive attitude, such as "I think they make
            terrific bosses" or "Hey, some of my best friends are…"
            <br />
            Of course, since almost anyone with an IQ above room temperature
            will at least try to steadfastly affirm the right answer here, your
            interviewer will be judging your sincerity most of all. "Do you
            really feel that way?" is what he or she will be wondering.
            <br />
            So you must make your answer believable and not just automatic. If
            the firm is wise enough to have promoted peopled on the basis of
            ability alone, they're likely quite proud of it, and prefer to hire
            others who will wholeheartedly share their strong sense of fair
            play.
            <br />
            <br />
            BEST ANSWER: You greatly admire a company that hires and promotes on
            merit alone and you couldn't agree more with that philosophy. The
            age (gender, race, etc.) of the person you report to would certainly
            make no difference to you. <br />
            Whoever has that position has obviously earned it and knows their
            job well. Both the person and the position are fully deserving of
            respect. You believe that all people in a company, from the
            receptionist to the Chairman, work best when their abilities,
            efforts and feelings are respected and rewarded fairly, and that
            includes you. That's the best type of work environment you can hope
            to find.
          </h5>
        </div>
      </div>
      <div className="other" style={{textAlign:"end"}}>
          <h2 style={{fontFamily: "auto",marginTop:"29px"}}> Author : <span> Amit Dubey</span></h2>
        </div>
    </>
  );
};

export default Interviewque;
