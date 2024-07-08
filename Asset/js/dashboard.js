
var courses = [
    {
        id: 0,
        courseBanner: "./Asset/images/c1.png",
        CourseCategroies: "Art & Design",
        CoursePrice: "$29.28",
        CourseName: "Basic Fundamentals of Interior & Graphics Design",
        CourseLessons: "2 Lessons",
        CourseDuration: "4h 30m",
        CourseRating: "4.8"
    },

    {
        id: 1,
        courseBanner: "./Asset/images/c2.png",
        CourseCategroies: "Digital marketing",
        CoursePrice: "Free",
        CourseName: "Increasing Engagement with Instagram & Facebook",
        CourseLessons: "2 Lessons",
        CourseDuration: "4h 30m",
        CourseRating: "4.8"
    },

    {
        id: 2,
        courseBanner: "./Asset/images/c3.png",
        CourseCategroies: "Drawing",
        CoursePrice: "$72.39",
        CourseName: "Introduction to Color Theory & Basic UI/UX",
        CourseLessons: "2 Lessons",
        CourseDuration: "4h 30m",
        CourseRating: "4.8"
    },

    {
        id: 3,
        courseBanner: "./Asset/images/c4.png",
        CourseCategroies: "Finance",
        CoursePrice: "$72.39",
        CourseName: "Financial Security Thinking and Principles Theory",
        CourseLessons: "2 Lessons",
        CourseDuration: "4h 30m",
        CourseRating: "4.8"
    },

    {
        id: 4,
        courseBanner: "./Asset/images/c5.png",
        CourseCategroies: "Graphics",
        CoursePrice: "Free",
        CourseName: "Logo Design: From Concept to Presentation",
        CourseLessons: "2 Lessons",
        CourseDuration: "4h 30m",
        CourseRating: "4.8"
    },

    {
        id: 5,
        courseBanner: "./Asset/images/c6.png",
        CourseCategroies: "Developemet",
        CoursePrice: "$29.82",
        CourseName: "Professional Ceramic Moulding for Beginners",
        CourseLessons: "2 Lessons",
        CourseDuration: "4h 30m",
        CourseRating: "4.8"
    },

    {
        id: 6,
        courseBanner: "./Asset/images/c1.png",
        CourseCategroies: "Art & Design",
        CoursePrice: "$29.28",
        CourseName: "Basic Fundamentals of Interior & Graphics Design",
        CourseLessons: "2 Lessons",
        CourseDuration: "4h 30m",
        CourseRating: "4.8"
    },

    {
        id: 7,
        courseBanner: "./Asset/images/c2.png",
        CourseCategroies: "Digital marketing",
        CoursePrice: "Free",
        CourseName: "Increasing Engagement with Instagram & Facebook",
        CourseLessons: "2 Lessons",
        CourseDuration: "4h 30m",
        CourseRating: "4.8"
    },

    {
        id: 8,
        courseBanner: "./Asset/images/c3.png",
        CourseCategroies: "Drawing",
        CoursePrice: "$72.39",
        CourseName: "Introduction to Color Theory & Basic UI/UX",
        CourseLessons: "2 Lessons",
        CourseDuration: "4h 30m",
        CourseRating: "4.8"
    },

    {
        id: 9,
        courseBanner: "./Asset/images/c4.png",
        CourseCategroies: "Finance",
        CoursePrice: "$72.39",
        CourseName: "Financial Security Thinking and Principles Theory",
        CourseLessons: "2 Lessons",
        CourseDuration: "4h 30m",
        CourseRating: "4.8"
    },

    {
        id: 10,
        courseBanner: "./Asset/images/c5.png",
        CourseCategroies: "Graphics",
        CoursePrice: "Free",
        CourseName: "Logo Design: From Concept to Presentation",
        CourseLessons: "2 Lessons",
        CourseDuration: "4h 30m",
        CourseRating: "4.8"
    },

    {
        id: 11,
        courseBanner: "./Asset/images/c6.png",
        CourseCategroies: "Developemet",
        CoursePrice: "$29.82",
        CourseName: "Professional Ceramic Moulding for Beginners",
        CourseLessons: "2 Lessons",
        CourseDuration: "4h 30m",
        CourseRating: "4.8"
    },

]


var coursetab = document.getElementById('courses');
var courseContainer = document.getElementById('courses-container');
var profiletab = document.getElementById('profiletab');
var profileContainer = document.getElementById('profile-container');
var enrollcourses = [];
var currentuser = {};
var courseslength = 0;


window.onload = ()=>{

     enrollcourses = JSON.parse(localStorage.getItem('enrollcourses'));
     currentuser = JSON.parse(localStorage.getItem('currentuser'));

     document.getElementById('username').innerText = currentuser.username;

    courseslength = enrollcourses.length;

    console.log(enrollcourses);

    courselist()
    Enrollcourses();
}

document.getElementById('logout').addEventListener('click',()=>{
    
    currentuser = {};

    localStorage.setItem('currentuser',JSON.stringify(currentuser));

    window.location.href ="index.html";

});


coursetab.addEventListener('click',courselist);

profiletab.addEventListener('click',profile);


function courselist(){
    profileContainer.style.display='none';
    courseContainer.style.display='flex';
}
function profile(){
   
    courseContainer.style.display='none';
    profileContainer.style.display='flex';

}

function Enrollcourses() {

    var Course_card_flex = document.getElementsByClassName("Course-card-flex")[0];

    for (var i = 0; i < courseslength; i++) {
        
        var id = enrollcourses[i].buycourse;

        var card = `  <div class="Course-card-horizontal enrollcoursecard mt-lg-3 mt-md-2 mt-1" onclick="singleCourse(${courses[id].id})">
        <div class="Course-card-horizontal-body">
            <span class="Course-name">${courses[id].CourseName}</span>
            <div class="d-flex justify-content-start align-items-center mt-2 gap-4">
                <div class="d-flex justify-content-center align-items-center gap-2"><img class="cc-img" src="./Asset/images/cc1.svg">
                    <h6 class="Course-lessons pt-2">${courses[id].CourseLessons}</h6>
                </div>
                <div class="d-flex justify-content-center align-items-center gap-2"><img class="cc-img" src="./Asset/images/cc2.svg">
                    <h6 class="Course-duration pt-2">${courses[id].CourseDuration}</h6>
                </div>
                <div class="d-flex justify-content-center align-items-center gap-2"><img class="cc-img" src="./Asset/images/cc3.svg">
                    <h6 class="Course-rating pt-2">${courses[id].CourseRating}</h6>
                </div>
            </div>
        </div> 
    </div>`;

        Course_card_flex.innerHTML += card;
    }
}





