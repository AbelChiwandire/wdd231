const navButton = document.querySelector('#nav-btn');
const navBar = document.querySelector('#nav-bar');

// Select navigation list items and the course filter buttons
const navLinks = document.querySelectorAll('nav ul li');
const courseBtns = document.querySelectorAll('.course-btn button');

const courses = document.getElementById('courses');
const credits = document.getElementById('credits');
const allCourses = document.getElementById('all');
const wddCourses = document.getElementById('wdd');
const cseCourses = document.getElementById('cse');

const courseDetails = document.querySelector('#course-details');
const currentYear = document.querySelector('#currentYear');
const lastMod = document.querySelector('#lastModified');

// Add copyright symbol and current year
const today = new Date();
currentYear.textContent = `©${today.getFullYear()}`;
lastMod.innerHTML = `Last Modification: ${document.lastModified}`

// Add/Remove show class on navigation
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});


// Array of courses
const coursesList = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// Function to create course cards 
function createCourseCards(courseList) {
    courses.innerHTML = '';

    courseList.forEach(course => {
        let card = document.createElement('div');
        card.classList.add('btn');
        card.classList.add('course-card');

        card.innerHTML = `${course.completed ?'✓':''} ${course.subject} <span class="course-num">${course.number}</span>`;

        // pass the specific course object for this card
        card.addEventListener('click', () => {
            displayCourseDetails(course);
        });

        courses.appendChild(card);
    });
}

function calculateCredits(courseList) {
    credits.innerHTML = '';

    let totalCredits = courseList.reduce((acc, course) => acc + course.credits, 0);

    credits.textContent = totalCredits;
}

// Add current class to currently selected item
function selectCurrentItem(elements) {
    elements.forEach(element => {
        element.addEventListener('click', () => {
            // remove the class from all elements
            elements.forEach(el => el.classList.remove('current'));

            // add the class to the clicked element
            element.classList.add('current');
        });
    });
}

// display course details modals
function displayCourseDetails(course) {
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p><strong>Credits</strong>: ${course.credits}</p>
        <p><strong>Certificate</strong>: ${course.certificate}</p>
        <p>${course.description}</p>
        <p><strong>Technologies</strong> ${course.technology}</p>
    `;
    courseDetails.showModal();

    const closeModal = courseDetails.querySelector('#closeModal');
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            courseDetails.close();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Display all the courses and their credits
    createCourseCards(coursesList);
    calculateCredits(coursesList);
});

allCourses.addEventListener('click', () => {
    createCourseCards(coursesList);
    calculateCredits(coursesList);
});

wddCourses.addEventListener('click', () => {
    let wdd = coursesList.filter(courses => courses.subject === 'WDD');
    createCourseCards(wdd);
    calculateCredits(wdd);
});

cseCourses.addEventListener('click', () => {
    let cse = coursesList.filter(courses => courses.subject === 'CSE');
    createCourseCards(cse);
    calculateCredits(cse);
});

// Highlight the current item
selectCurrentItem(navLinks);
selectCurrentItem(courseBtns);