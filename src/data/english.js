import {
  // Contact
  FaGlobe,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,

  // Interests
  FaChessKnight,
  FaReact,
  FaRegCalendarCheck,
  FaBook,
  FaRunning,
} from 'react-icons/fa';

const data = {
  /**
   * Full name
   */
  fullName: 'Juan Paolo Legaspi',

  /**
   * Summary - short "about me" paragraph
   */
  summary: {
    title: 'Summary',
    text: `
      A self-motivated student with proven and tested negotiation, sales and marketing skills along with knowledge of select programming languages and information technology`,
  },

  /**
   * Contact details
   */
  contact: {
    title: 'Contact',
    list: [

      {
        text: 'github.com/PaoloLegaspi',
        url: 'https://github.com/PaoloLegaspi',
        icon: <FaGithub />,
      },
      {
        text: 'jplegaspi3000@gmail.com',
        icon: <FaEnvelope />,
      },
      {
        text: '+63 905-911-7928',
        icon: <FaPhoneAlt />,
      },
      {
        text: 'Manila, Philippines',
        icon: <FaMapMarkerAlt />,
      },
    ],
  },

  /**
   * Key skills
   */
  keySkills: {
    title: 'Key skills',
    list: [
      { text: 'Hardware: Computer Assembly,Maintenance, Printers, Troubleshooting, Drivers, Network ' },
      { text: 'Programming Languages: PHP, Java, HTML, Angular, Typescript, mySQL, CSS, Python, Android' },
      { text: 'Operating Systems: Windows, macOS, Android, iOS, Linux' },
    ],
  },

  /**
   * Additional skills
   */
  additionalSkills: {
    title: 'Additional skills',
    list: [
      { text: 'Node.js' },
      { text: 'Firebase' },
      { text: 'GitHub, Git' },
      { text: 'Django, Nginx' },
    ],
  },

  /**
   * Languages I speak
   */
  languages: {
    title: 'Languages',
    list: [
      { text: 'Filipino - Native' },
      { text: 'English - Fluent' },
    ],
  },

  /**
   * Hobbies and interests
   */
  interests: {
    title: 'Interests',
    list: [
      { text: 'Playing chess', icon: <FaChessKnight /> },
      { text: 'Learning new things', icon: <FaReact /> },
      { text: 'Building habits', icon: <FaRegCalendarCheck /> },
      { text: 'Reading', icon: <FaBook /> },
      { text: 'Being active', icon: <FaRunning /> },
    ],
  },

  projects: {
    title: 'Projects',
    list: [
      {
        name: 'MerchUSTe',
        techList: [
          'Angular',
          'Firebase',
          'HTML',
        ],
        description: `
          MerchUSTe is my final project for my course. It's 
          built as a e-store for Thomasian Merchandise. Its core functionality is to 
          manage sales and inventory`,
        url: 'https://tiger-apparel-81720.web.app/',
      },
    ],
  },

  /**
   * Work experience
   *
   * Acceptable date format: `YYYY-MM`
   */
  workExperience: {
    title: 'Work experience',
    list: [
      {
        company: 'Flowers of May and Event Styling',
        location: 'Manila, Philippines',
        date: {
          start: '2018-01',
          end: '2019-12',
        },
        jobTitle: 'Customer Sales Representitive (Part-Time)',
        description: `
          The job is to get clients that are willing to book their own event on the company. I improved my social skills. 
          Additionally, it was a great opportunity to gain decent work experience and further improve my English.`,
      },
    ],
  },

  /**
   * Certificates and courses
   */
  certificates: {
    title: 'Certificates',
    list: [
      {
        name: 'Switching, Routing, and Wireless Essentials',
        provider: 'Netacad',
      },
      {
        name: 'Your Target Audience ',
        provider: ' HP Life',
      },
      {
        name: 'Social Entrepreneurship ',
        provider: ' HP Life',
      },
      {
        name: 'Unique Value Proposition ',
        provider: ' HP Life',
      },
    ],
  },

  /**
   * Education, school, etc
   */
  education: {
    title: 'Education',
    list: [
      {
        institution: 'University of Santo Tomas',
        description: 'Bachelor of Science in Information Technology',
        date: {
          start: '2016-08',
          end: '2022-06',
        },
      },
    ],
  },
};

export default data;
