
const courses =[
    {
      "id": 0,
      "courseBanner": "./Asset/images/c1.png",
      "CourseCategroies": "Art & Design",
      "CoursePrice": "$29.28",
      "CourseName":"Basic Fundamentals of Interior & Graphics Design",
      "CourseLessons":"2 Lessons",
      "CourseDuration":"4h 30m",
      "CourseRating":"4.8"
    },

    {
      "id":1,
      "courseBanner": "./Asset/images/c2.png",
      "CourseCategroies": "Digital marketing",
      "CoursePrice": "Free",
      "CourseName":"Increasing Engagement with Instagram & Facebook",
      "CourseLessons":"2 Lessons",
      "CourseDuration":"4h 30m",
      "CourseRating":"4.8"
    },

    {
      "id":2,
      "courseBanner": "./Asset/images/c3.png",
      "CourseCategroies": "Drawing",
      "CoursePrice": "$72.39",
      "CourseName":"Introduction to Color Theory & Basic UI/UX",
      "CourseLessons":"2 Lessons",
      "CourseDuration":"4h 30m",
      "CourseRating":"4.8"
    },

    {
        "id":3,
        "courseBanner": "./Asset/images/c4.png",
        "CourseCategroies": "Finance",
        "CoursePrice": "$72.39",
        "CourseName":"Financial Security Thinking and Principles Theory",
        "CourseLessons":"2 Lessons",
        "CourseDuration":"4h 30m",
        "CourseRating":"4.8"
      },

      {
        "id":4,
        "courseBanner": "./Asset/images/c5.png",
        "CourseCategroies": "Graphics",
        "CoursePrice": "Free",
        "CourseName":"Logo Design: From Concept to Presentation",
        "CourseLessons":"2 Lessons",
        "CourseDuration":"4h 30m",
        "CourseRating":"4.8"
      },

      {
        "id":5,
        "courseBanner": "./Asset/images/c6.png",
        "CourseCategroies": "Developemet",
        "CoursePrice": "$29.82",
        "CourseName":"Professional Ceramic Moulding for Beginners",
        "CourseLessons":"2 Lessons",
        "CourseDuration":"4h 30m",
        "CourseRating":"4.8"
      }

    ]
  


window.onload = function () {
    display_course();
};


function display_course() {
    var Course_card_flex = document.getElementsByClassName("Course-card-flex")[0]; 

    for (var i = 0; i < 6; i++) {
        var card = `<div class="Course-card mt-lg-4 mt-md-3 mt-4" onclick="singleCourse(${courses[i].id})">
                        <img class="Course-card-img" src="${courses[i].courseBanner}" alt="Course-card-img">
                        <button class="Course-categroies btn btn-danger">${courses[i].CourseCategroies}</button>
                        <div class="Course-card-body">
                            <h5 class="Course-price">${courses[i].CoursePrice}</h5>
                            <span class="Course-name">${courses[i].CourseName}</span>
                            <div class="d-flex justify-content-between align-items-center mt-2">
                                <div class="d-flex justify-content-center align-items-center gap-2"><img class="cc-img" src="./Asset/images/cc1.svg">
                                    <h6 class="Course-lessons pt-2">${courses[i].CourseLessons}</h6>
                                </div>
                                <div class="d-flex justify-content-center align-items-center gap-2"><img class="cc-img" src="./Asset/images/cc2.svg">
                                    <h6 class="Course-duration pt-2">${courses[i].CourseDuration}</h6>
                                </div>
                                <div class="d-flex justify-content-center align-items-center gap-2"><img class="cc-img" src="./Asset/images/cc3.svg">
                                    <h6 class="Course-rating pt-2">${courses[i].CourseRating}</h6>
                                </div>
                            </div>
                        </div>
                    </div>`;
                    

        Course_card_flex.innerHTML += card; 
    }
}

var singleCourseId = 0;

function singleCourse(id){
     
     singleCourseId = id
     localStorage.setItem('singleCourse',JSON.stringify(singleCourseId));
     window.location.href = "singleCourse.html";
}