
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

window.onload = function () {

    document.getElementById("grid-icon-1").classList.remove("grid-icon");
    document.getElementById("grid-icon-1").classList.add("grid-icon-click");
    document.getElementById("grid-icon-2").classList.remove("grid-icon-click");
    document.getElementById("grid-icon-2").classList.add("grid-icon");

    display_grid_layout_vertical();
}




function display_grid_layout_vertical() {

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


function display_grid_layout_horizontal() {

    var Course_card_flex = document.getElementsByClassName("Course-card-flex")[0];

    for (var i = 0; i < 6; i++) {
        var card = `  <div class="Course-card-horizontal mt-lg-3 mt-md-2 mt-1" onclick="singleCourse(${courses[i].id})">
        <img src="${courses[i].courseBanner}" class="Course-card-horizontal-img" alt="card">
        <div class="Course-card-horizontal-body">
            <div class="card-rating-row">
                <h5 class="horiozntal-Course-price mt-1">${courses[i].CoursePrice}</h5>
                <div class="horiozntal-Course-ratings d-lg-flex justify-content-center align-items-center gap-1">
                   <img src="./Asset/images/star.svg" alt="rating">
                   <img src="./Asset/images/star.svg" alt="rating">
                   <img src="./Asset/images/star.svg" alt="rating">
                   <img src="./Asset/images/star.svg" alt="rating">
                </div>
            </div>
            <span class="Course-name">${courses[i].CourseName}</span>
            <div class="d-flex justify-content-between align-items-center mt-2 gap-2">
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

//after filter category rander card vertical grid function

function filterDataVertical() {

    var Course_card_flex = document.getElementsByClassName("Course-card-flex")[0];

    for (var i = 0; i < Categories.length; i++) {
        var card = `<div class="Course-card mt-lg-4 mt-md-3 mt-4" onclick="singleCourse(${Categories[i].id})">
                        <img class="Course-card-img" src="${Categories[i].courseBanner}" alt="Course-card-img">
                        <button class="Course-categroies btn btn-danger">${Categories[i].CourseCategroies}</button>
                        <div class="Course-card-body">
                            <h5 class="Course-price">${Categories[i].CoursePrice}</h5>
                            <span class="Course-name">${Categories[i].CourseName}</span>
                            <div class="d-flex justify-content-between align-items-center mt-2">
                                <div class="d-flex justify-content-center align-items-center gap-2"><img class="cc-img" src="./Asset/images/cc1.svg">
                                    <h6 class="Course-lessons pt-2">${Categories[i].CourseLessons}</h6>
                                </div>
                                <div class="d-flex justify-content-center align-items-center gap-2"><img class="cc-img" src="./Asset/images/cc2.svg">
                                    <h6 class="Course-duration pt-2">${Categories[i].CourseDuration}</h6>
                                </div>
                                <div class="d-flex justify-content-center align-items-center gap-2"><img class="cc-img" src="./Asset/images/cc3.svg">
                                    <h6 class="Course-rating pt-2">${Categories[i].CourseRating}</h6>
                                </div>
                            </div>
                        </div>
                    </div>`;

        Course_card_flex.innerHTML += card;
    }

}


//after filter category rander card horizontal grid function

function filterDatahorizontal() {

    var Course_card_flex = document.getElementsByClassName("Course-card-flex")[0];

    for (var i = 0; i < Categories.length; i++) {
        var card = `<div class="Course-card-horizontal mt-lg-3 mt-md-2 mt-1" onclick="singleCourse(${Categories[i].id})">
        <img src="${Categories[i].courseBanner}" class="Course-card-horizontal-img" alt="card">
        <div class="Course-card-horizontal-body">
            <div class="card-rating-row">
                <h5 class="horiozntal-Course-price mt-1">${Categories[i].CoursePrice}</h5>
                <div class="horiozntal-Course-ratings d-lg-flex justify-content-center align-items-center gap-1">
                   <img src="./Asset/images/star.svg" alt="rating">
                   <img src="./Asset/images/star.svg" alt="rating">
                   <img src="./Asset/images/star.svg" alt="rating">
                   <img src="./Asset/images/star.svg" alt="rating">
                </div>
            </div>
            <span class="Course-name">${Categories[i].CourseName}</span>
            <div class="d-flex justify-content-between align-items-center mt-2 gap-2">
                <div class="d-flex justify-content-center align-items-center gap-2"><img class="cc-img" src="./Asset/images/cc1.svg">
                    <h6 class="Course-lessons pt-2">${Categories[i].CourseLessons}</h6>
                </div>
                <div class="d-flex justify-content-center align-items-center gap-2"><img class="cc-img" src="./Asset/images/cc2.svg">
                    <h6 class="Course-duration pt-2">${Categories[i].CourseDuration}</h6>
                </div>
                <div class="d-flex justify-content-center align-items-center gap-2"><img class="cc-img" src="./Asset/images/cc3.svg">
                    <h6 class="Course-rating pt-2">${Categories[i].CourseRating}</h6>
                </div>
            </div>
        </div> 
    </div>`;

        Course_card_flex.innerHTML += card;
    }
}


//filter categry data and store in categories array and call filterDataVertical and filterDatahorizontal

var Categories = [];


var categry = document.querySelectorAll(".courses-dropdown-item");

categry.forEach(item => {

    item.addEventListener("click", () => {

        document.getElementById('Categories-dropdown').innerHTML = item.innerHTML;

        var str = item.innerHTML;
        console.log("categories :" + str);

        var j = 0;

        for (var i = 0; i < courses.length; i++) {

            if (courses[i].CourseCategroies === str) {

                Categories[j++] = courses[i];
            }
        }

        const courses_grid = document.getElementById("courses-grid");

        while (courses_grid.hasChildNodes()) {
            courses_grid.removeChild(courses_grid.firstChild);
        }

        filterDataVertical();

        document.getElementById("grid-icon-1").addEventListener("click", () => {

            const courses_grid = document.getElementById("courses-grid");

            while (courses_grid.hasChildNodes()) {
                courses_grid.removeChild(courses_grid.firstChild);
            }

            filterDataVertical();
        })


        document.getElementById("grid-icon-2").addEventListener("click", () => {

            const courses_grid = document.getElementById("courses-grid");

            while (courses_grid.hasChildNodes()) {
                courses_grid.removeChild(courses_grid.firstChild);
            }

            filterDatahorizontal();
        })

    });

});



// function to change layout


document.getElementById("grid-icon-1").addEventListener("click", () => {

    document.getElementById("grid-icon-1").classList.remove("grid-icon");
    document.getElementById("grid-icon-1").classList.add("grid-icon-click");
    document.getElementById("grid-icon-2").classList.remove("grid-icon-click");
    document.getElementById("grid-icon-2").classList.add("grid-icon");

    const courses_grid = document.getElementById("courses-grid");

    while (courses_grid.hasChildNodes()) {
        courses_grid.removeChild(courses_grid.firstChild);
    }

    display_grid_layout_vertical();
});


document.getElementById("grid-icon-2").addEventListener("click", () => {

    document.getElementById("grid-icon-2").classList.remove("grid-icon");
    document.getElementById("grid-icon-2").classList.add("grid-icon-click");
    document.getElementById("grid-icon-1").classList.remove("grid-icon-click");
    document.getElementById("grid-icon-1").classList.add("grid-icon");

    const courses_grid = document.getElementById("courses-grid");

    while (courses_grid.hasChildNodes()) {
        courses_grid.removeChild(courses_grid.firstChild);
    }

    display_grid_layout_horizontal();
});


var singleCourseId = 0;

function singleCourse(id){
     
     singleCourseId = id
     localStorage.setItem('singleCourse',JSON.stringify(singleCourseId));
     window.location.href = "singleCourse.html";
}