import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import GithubIcon from '@material-ui/icons/GitHub'
import LanguageIcon from '@material-ui/icons/Language';
import { AssignmentIndRounded, WebOutlined } from '@material-ui/icons'
export default  {
        name: 'Md Jewel',
        title :'Full Stack Developer',
        address: "Moghbazar Dhaka-1217",
        birthday: '19 jan 1999',
        email: "jewelranar71@gmail.com",
        phone: '01954202136',
        about:"A talented graduate developer with a strong academic background and somecommercial experience. Ability to think through a problem coupled with theconfidence to make ideas heard. A proven ability to maintain and enhanc company software with the aim of improving operational functionality in line with business requirement. \n\nI Am currently looking for a software developer opportunity that will allow me to work alongside an expert team of developers. Thereby helping to drive me career progression to more senior roles in the future ",

        experience:[
                {
                        title: "Junior Software Developer",
                        date: "2020-2021",
                        description: "In 2020, january Started new journy with naztech as a intern and now leading a major project Cocola ERP Project."
                },
                {
                        title: "Web Resarcher",
                        date: "2020-2021",
                        description: "I have been working on upwork as Web Researcher And Lead Generation Expert. I have completed all the projects successfully. I have 100% job  sucess rate on upwork."
                }
               
        ],

        educations: [
                {
                        title: "Dhaka Polytechnic Institute",
                        date: "2016-2021",
                        description: "Dhaka Polytechnic Institute is a government technical institute in Dhaka, Bangladesh. It is the largest and the oldest polytechnic academia in modern Bangladesh. The polytechnic is ranked number one on the Bangladesh Polytechnic Ranking 2018"
                },
                {
                        title: "National Bank Public School And College",
                        date: "2010-2016",
                        description: "I passed My School Life In National Bank Public School And College. "
                },
                // {
                //         title: "Abc University of Los Angeles",
                //         date: "2015-2020",
                //         description: "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor."
                // }
        ],
        socials: {
                Facebook:{
                        link: "facebook.com/zovan",
                        text: "Ahamed Zovan",
                        icon: <FacebookIcon />
                },
                Twitter:{
                        link: "twiiter.com",
                        text: "Zovan_twitter",
                        icon: <TwitterIcon />
                },
                Instagram:{
                        link: "instagram.com",
                        text: "Ahamed_Zovan",
                        icon: <InstagramIcon />
                },
                Github:{
                        link: "github.com",
                        text: "Jewel73",
                        icon: <GithubIcon />
                }
        },
        services:[
                {
                        title: "Web Dev",
                        description: "I am here to help you craft a seamless and intuitive digital experience with quick and effective web software development.",
                        icon: <WebOutlined />,
                },
                {
                        title: "Web Design",
                        description: "We work closely with enterprise level customers to create outstanding high performing and secure custom websites with a focus on unique, professional web design.",
                        icon: <AssignmentIndRounded />,
                },
                {
                        title: "ERP Software Develop",
                        description: "I Developed Cocola Food Products Limited ERP Software. I mostly work with ERPNext Software.ERPNext is a free and open-source integrated Enterprise Resource Planning software developed by Frappé Technologies Pvt. ",
                        icon: <WebOutlined />,
                },
        ],

        skills:[
                {
                        title: "Front-End",
                        description:["Javascript", "React Js", "Material Ui", "Bootstrap", "Frappe"],  
                },
                {
                        title: "Database",
                        description:["MySql",, "SQL", "SqlLite"],
                        
                },
                {
                        title: "Backend",
                        description:["Java", "Python",  "Node  JS", "Spring Boot", "Django","Frappe"],
                        
                }
        ],

        projects: [
                {
                        tags: "React",
                        image: "https://reactjs.org/logo-og.png",
                        title: "Covid-19 Tracker ",
                        description: "This project will give you live covid-19 infected and died statatics",
                        links:[
                                {link: "https://google.com", icon: <GithubIcon />},
                                {link: "https://google.com", icon: <LanguageIcon />},
                                
                                
                        ]
                },
                {
                        tags: "Java",
                        image: "https://reactjs.org/logo-og.png",
                        title: "Java Project 1",
                        description: "This is the project will like it so much",
                        links:[
                                {link: "https://google.com", icon: <GithubIcon />},
                                {link: "https://google.com", icon: <LanguageIcon />},
                                
                                
                        ]
                },
                {
                        tags: "React",
                        image: "https://reactjs.org/logo-og.png",
                        title: "React Project 2",
                        description: "This is the project will like it so much",
                        links:[
                                {link: "https://google.com", icon: <GithubIcon />},
                                {link: "https://google.com", icon: <LanguageIcon />},
                     
                                
                        ]
                },
                {
                        tags: "Web Design",
                        image: "https://reactjs.org/logo-og.png",
                        title: "Web Design Project 1",
                        description: "This is the project will like it so much",
                        links:[
                                {link: "https://google.com", icon: <GithubIcon />},
                                {link: "https://google.com", icon: <LanguageIcon />},
                         
                                
                        ]
                },
                {
                        tags: "Django",
                        image: "https://reactjs.org/logo-og.png",
                        title: "Django Project 1",
                        description: "This is the project will like it so much",
                        links:[
                                {link: "https://google.com", icon: <GithubIcon />},
                                {link: "https://google.com", icon: <LanguageIcon />},
                        
                                
                        ]
                }
        ]
}