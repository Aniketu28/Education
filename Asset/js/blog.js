
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
    displayGridVertical();
}

function displayGridVertical() {
    renderCourses("Course-card", courses.slice(0, 6));
}

function displayGridHorizontal() {
    renderCourses("Course-card-horizontal", courses.slice(0, 6));
}

function renderCourses(cardClass, coursesArray) {
    var CourseCardFlex = document.getElementsByClassName("Course-card-flex")[0];
    CourseCardFlex.innerHTML = "";
    coursesArray.forEach(course => {
        var card = `
            <div class="${cardClass}" onclick="location.href='index.html';">
                <img src="${course.courseBanner}" class="${cardClass}-img" alt="Course-card-img">
                <button class="Course-categroies btn btn-danger">${course.CourseCategroies}</button>
                <div class="Course-card-body">
                    <h5 class="Course-price">${course.CoursePrice}</h5>
                    <span class="Course-name">${course.CourseName}</span>
                    <div class="d-flex justify-content-between align-items-center mt-2">
                        <div class="d-flex justify-content-center align-items-center gap-2">
                            <img class="cc-img" src="./Asset/images/cc1.svg">
                            <h6 class="Course-lessons pt-2">${course.CourseLessons}</h6>
                        </div>
                        <div class="d-flex justify-content-center align-items-center gap-2">
                            <img class="cc-img" src="./Asset/images/cc2.svg">
                            <h6 class="Course-duration pt-2">${course.CourseDuration}</h6>
                        </div>
                        <div class="d-flex justify-content-center align-items-center gap-2">
                            <img class="cc-img" src="./Asset/images/cc3.svg">
                            <h6 class="Course-rating pt-2">${course.CourseRating}</h6>
                        </div>
                    </div>
                </div>
            </div>`;
        CourseCardFlex.innerHTML += card;
    });
}

// Event listeners for layout change
document.getElementById("grid-icon-1").addEventListener("click", displayGridVertical);
document.getElementById("grid-icon-2").addEventListener("click", displayGridHorizontal);
