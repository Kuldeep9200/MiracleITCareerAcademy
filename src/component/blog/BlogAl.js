import { useEffect } from "react";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { NavLink } from "react-router-dom";
const BlogAl = () => {
  useEffect(() => {
  
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="questions" style={{ padding: "5%" }}>
        <div className="imgunter text-center">
          <img
            src={require("../image/ai.png")}
            className="imglogoi"
            style={{ width: "100%" }}
            alt="imglogo"
          />
        </div>
        <div className="arrewicon" style={{marginTop:"20px"}}>
          <NavLink to="/blog"> <BsFillArrowLeftCircleFill style={{fontSize:"42px",color:"blue",cursor:"pointer"}}/></NavLink></div>
        <h1 className="maintext" style={{ textAlign: "center", margin: "30px" }}>
        What is the necessity of AI in the post-COVID-19 era?
        </h1>

        <div className="qusestionint">
          <h5 className="blogsmy" style={{textAlign:"justify"}}>
            The weakest link in cyber security, it's often said, is humans.
            Individuals are increasingly the targets of two types of attacks: 1)
            social engineering seeks to circumvent an existing process and
            exposes an individual’s lack of security awareness. 2) logical
            engineering targets a system or a technology and exposes the
            obsolete or vulnerable software or misconfiguration. The new normal
            of remote working has put the focus firmly on cyber security, trust
            and protecting data. COVID-19 has hampered the hand of companies in
            several sectors by requiring them to confront their digital
            preparedness in tackling cyber threats head on.
          </h5>
          <div className="headdingblog">
            <h2 className="blogheading "> Work Environment Changes</h2>
          </div>
          <h5 className="blogsmy" style={{textAlign:"justify"}}>
            Before the COVID-19 pandemic, mostly employees regular to the
            offices for their works, where the local area network (LAN) as well
            as the desktops, laptops were adequately secured. Sophisticated
            technologies could protect against cyber attacks that originated
            primarily from the internet and targeted the enterprise network.
            Enterprise protection technologies secure the employees’ computers
            from targeted phishing campaigns that lure them into clicking on
            unknown links and attachments. Offices also offer a further layer of
            security in the sense that employees can check-in with their
            colleague within the neighbouring cubicle or their manager and alert
            their IT security team when they notice any suspicious links or
            emails or threats.
            <br />
            Post pandemic, only support staff personnel or those who need direct
            system/hardware access e.g.: direct console, research labs, specific
            printing machines in banking environment, etc., are working from
            office. Where the rest workforce is operating from home, and
            connected to more vulnerable networks when compared to the ones at
            the office.
          </h5>
          <div className="headdingblog">
            <h2 className="blogheading ">
              {" "}
              SECURITY CHALLENGES OF WORK FROM HOME
            </h2>
          </div>
          <h5 className="blogsmy" style={{textAlign:"justify"}}>
            While organisations are offering secure virtual private network
            (VPN) access to employees, the primary point of interface for the
            employee’s laptop or desktop is usually a shared wireless network,
            mobile hotspot or broadband network. Many of the employees are
            connecting via home wireless routers, which have rudimentary
            security for encryption of traffic. Some of these devices have
            default passwords for administration that are left unchanged by the
            users. These wireless routers are a shared asset with the family and
            neighbours. The data traffic flow isn’t controlled and it covers a
            good range of activities including personal email and educational
            needs. Employees in the age group of 25 to 35 in cities lean towards
            shared accommodation to reduce the travel and costs of living. They
            usually have flat mates who also are working from home and have weak
            protection on their laptops too. A corporate user working from home
            network can access unfiltered internet, personal email and drives
            unlike in the past, where the user was governed by the IT security
            team and has now become COVID-19 specific phishing theme target. A
            user by clicking on an unsuspecting link or redirected to a
            malicious website could end up loading malicious codes into the
            browser of the corporate user’s laptop which unsuspectingly gets
            executed in the background and start proceeding towards compromise
            of the enterprise network. This malicious code could also extract
            the valued corporate credentials when the home user logs into the
            enterprise portal or VPN via key logging or tab-nabbing, thereby
            compromising the security of the entire organisation. Also there is
            a huge risk of IP theft and leakages, especially for work-from-home
            users operating for organisations in research and development. There
            are several COVID-19 phishing themes that are actively targeting the
            corporate work-from-home users. The most prominent phishing theme is
            majorly related to how employees can claim an additional benefit
            related to work from home. This specific theme never compromise the
            computer or technology, instead spoofs the origin of a government
            email address with an excel attachment claiming to help compute work
            from home expenses that can be claimed for a tax exemption in the
            light of the pandemic. The targeted users simply open the attachment
            and a malicious code gets injected within the system. A more
            sophisticated COVID-19 theme is to focus on system and network
            administrators who are performing from home. This kind of attack
            requires a deeper understanding of the target to be successful.
            Professional database sources are always traced for profiles of
            individuals who have significant technical privileges at the
            organisation.
            <br />
            You may address the Cyber Security issues and prevent them with
            below mentioned methods:
          </h5>
          <div className="headdingblog">
            <h2 className="blogheading ">
              {" "}
              PART I: Organization Culture and Awareness is key to Cyber
              prevention in Post COVID-19 Era
            </h2>
          </div>
          <h5 className="blogsmy" style={{textAlign:"justify"}}>
            Most folks have heard the quote about cyber breaches, “There are two
            types of companies – one those know they’ve been breached and second
            who don’t know.” And while this line is quickly moving into the
            realm of cliché, its core message unfortunately becomes truer than
            we had all wish. What also is true is that, despite the fact most
            CEOs and Boards are now meaningfully ramping up investment in cyber
            security, the frequency and severity of attacks will continue to
            increase post-pandemic. To best equip businesses to work during this
            environment of elevated risk, it's helpful to first create awareness
            around what one means by a breach. Cyber security incidents are
            often thought of monolithically, but at Infosys Consulting we
            discover it instructive to seem at breaches through the lens of the
            varied things bad actors are trying to accomplish. Often, this is
            often one among two things: stealing information or extorting money.
            Understanding how each of these could play out at your organization
            has meaningful implications to both upstream prevention and
            downstream consequences. Information theft can are available various
            forms, but generally entails either the acquisition of private (e.g.
            credit card data) or competitive data (e.g. engineering designs). In
            these breaches, bad actors often gain access to a network and
            quietly lurk, acquiring data over Cyber security in the Covid-19
            Era,a long period of time in the form of batch data downloads or
            hijacked email communications. Naturally, the businesses most in
            danger of those attacks are those storing competitive or personal
            data, with medical and financial data topping the list. With that
            said, many companies underestimate their risk level relative to
            those incidents. Information that the majority firms possess, like
            employee passwords and SSNs, are valuable to bad actors which can
            monetize this information on the deep and dark web. The second
            attack objective – extorting money – has become something of a
            popular pastime among groups like the Russian mafia. In these
            scenarios, attackers gain the direct access to the network, encrypt
            operational data (e.g. databases, file servers ,app servers) and,
            whenever it is possible, delete all backups. They then contact the
            corporate with a ransom note and a requirement to be paid in Bitcoin
            in exchange for a decryption key, a requirement most
            businesses suits. Unfortunately, the list of companies this risk
            vector applies to is exhaustive – it’s a rare business indeed that
            doesn't run on a foundation of software applications today and even
            more so with the shift to remote working. And because this has
            proven to be a profitable business for gangland, the extent of
            sophistication of those groups continues to rapidly improve. Step
            one to counteracting these threats may be awareness: companies got
            to acknowledge that they’re in danger which everyone who works at a
            corporation is a potential threat vector. Because of this, everyone
            at companies should play a lively role in breach prevention.
          </h5>

          <div className="headdingblog">
            <h2 className="blogheading ">
              {" "}
              PART II: A CEO Mandate for Basic Cyber Security Hygine
            </h2>
          </div>
          <h5 className="blogsmy"style={{textAlign:"justify"}}>
            We have discussed the two primary objectives of cyber hackers:
            information theft and the extortion of money. What is interesting
            about both of these goals is that they start in similar ways. Bad
            actors either find a vulnerable technology via an external
            technology scan that they use to penetrate a company’s network, or
            they leverage human-centric tactics, like phishing, to open the
            front door. What is surprising to several executives is that, while
            cyber risk is usually thought of more in terms of technology
            vulnerabilities, it's often the human dimension that results
            in breaches. And the individuals most often at fault, partially
            because they’re also the most targeted, are the c-suite executives
            themselves. To reduce this risk of security incidents, Company CEOs
            should first ensure their businesses are both prescribing, and, more
            importantly, adopting basic cyber security hygiene:
            <li>Multi-factor authentication (MFA)</li>
            <li>
              {" "}
              Ongoing phishing training Cyber security in the Covid-19 Era.
            </li>
            Strict adherence to patching These three things, which are both
            simple and cheap , are far and away the foremost important actions
            companies can fancy protect themselves. Regrettably, because some of
            them (e.g. multi-factor authentication) can sometimes be observed as
            a nuisance to time strapped employees, these are often deterrents
            that suffer from partial adoption. Fortunately, the tools available
            to drive these security deterrents have continued to enhance, making
            them less onerous to both administer and use. As an
            example, variety of phishing training businesses have emerged which
            will automatically increase the extent of sophistication of
            simulated attacks periodically to progressively raise the extent of
            maturity within organizations. Beyond the basic hygiene, there is a
            deeper set of practices and tools firms should implement, including:
            <li>Annual pen tests</li>
            <li>Monitoring tools to scan systems for breaches</li>
            <li>Table-top exercises to organize for incident response</li>
            <li>
              {" "}
              External vulnerability scans to spot at-risk technology From a
              staffing perspective, the model We even have seen work best,
              through the personal advisory work with large organizations, is to
              possess a named, dedicated CSO (Chief Security Officer) who
              leverages a mixture of in-house and third-party
              resources providers. This combination enables companies to benefit
              from the expertise of specialists while keeping a healthy degree
              of ownership inside the business, something is observed as
              critically important. Even with the proper staffing model and
              tools, however, it’s worth reiterating those folks, not
              technology, are often at the guts of breaches. And the common
              denominator of the many of the incidents firms either did not take
              risks seriously or acted as if cyber security was solely the
              responsibility of IT instead of fully integrating the subject
              within the business. Looking to the future post-pandemic, it is
              helpful to remember that culture is shaped by executive action.
              For this reason, it is vital for cyber security to be included in
              both the dialogue and actions of C-level executives, providing a
              natural way for employees to understand that security is a company
              priority.
            </li>
          </h5>
          <div className="headdingblog">
            <h2 className="blogheading ">
              {" "}
              PART III: Managing Incident Response and the role of Insurance
            </h2>
          </div>
          <h5 className="blogsmy"style={{textAlign:"justify"}}>
            In last two headings we have explored general awareness related to
            cyber security and ways to prevent breaches, two foundational
            elements of overall corporate health and risk management. As many of
            us know, however, it’s impossible to fully Cyber security in the
            Post Covid-19 Era From an incident perspective, the two most common
            varieties of breaches involve either the theft of information or
            attempts to generate ransom payments. Despite the important
            differences between these two sorts of breaches, the first step in
            incident response is actually the same: <br />
            Conduct initial forensics to spot the opening employed by the bad
            actor and get it closed. From a talent perspective, day zero
            forensics may be a highly specialized skill, and is one that, for
            many firms, is best outsourced to a personal sector security firm.
            If a breach poses a risk to an individual’s rights and freedoms, you
            wish to notify the acceptable supervisory authority without undue
            delay. Once you have recognised the source of the breach and have it
            contained, you can move on to dealing with the implications of the
            incident. At this juncture, the sort of breach features a large
            impact on what must be done. If the incident was
            primarily associated with the loss of data, incident response should
            be focused on mitigating the downstream impact of this data loss.
            For corporate information, this often includes an assessment of the
            competitive impacts of the lost data. If customer / personal data
            was also taken the task becomes much larger and will includes a
            fullblown incident management team to handle the internal and the
            external communications, identity protection services, customer
            service, etc. For ransomware incidents, the most
            important short-term risk is usually the power to continue operating
            your business. The folks who conduct these attacks are looking for
            leverage, something that is maximized when a company is not able to
            conduct business until paying for a decryption key. For this reason,
            hackers will plan to both encrypt / delete primary data
            stores also as backups stored locally or within the cloud. If
            successful, they’ll have done their homework and can establish a
            ransom payment request large enough to actually hurt,
            but sufficiently small to still get paid. If you have availed the IT
            Security insurance – and at this point, every company should – your
            insurance provider will be closely involved with both the ransom
            negotiation and corresponding Cyber security in the Covid-19 Era. It
            is important to notice that the bad actors who conduct ransomware
            incidents don't concentrate on customer support, and therefore
            the decryption keys often only add a partial manner. In many
            situations, we've seen firms recover only 40 – 60% of their
            encrypted IP. Also, because encrypted systems are typically infected
            by breaches, firms will got to get up new systems to run their
            business going forward, something which will be an onerous,
            long-term task. And very costly! From a financial perspective, the
            great news is that firms can expect an honest portion of the ransom
            to be paid by their cyber insurer. The bad news, however, is that
            when assessing the complete cost of the incident, insurance will
            cover only 30 – 50% of the complete financial impact of the
            incident. So, while it’s vital to hold insurance, it’s even more
            important to scale back the likelihood of a breach. As with many
            situations, in the world of cyber security post Covid-19, an ounce
            of prevention is worth a pound of cure and recovers in time. In
            conclusion
            <br /> <br />
            In the post-COVID-19 world, cyber attackers are increasingly
            seeking to take advantage of vulnerabilities in an organisation’s
            security infrastructure that the shift to remote working has
            exposed. It is time for cyber security leaders to re-visit their
            security measures and focus on deploying new processes and
            technologies to fortify their digital architecture going forward.
          </h5>
        </div>
        <div className="other" style={{textAlign:"end"}}>
          <h2 style={{fontFamily: "auto",marginTop:"29px"}}> Author : <span> Amit Dubey</span></h2>
        </div>
      </div>
    </>
  );
};

export default BlogAl;
