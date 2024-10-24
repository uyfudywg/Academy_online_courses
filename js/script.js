let input =document.getElementById('input')
let button =document.getElementById('btn')
let p =document.getElementById("p")
let valided =document.getElementById("valided")
let valid_true =document.getElementById("valid-true")

button.onclick = function() {
    const emailInput = input.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput)) {
        p.classList.remove("d-none");
        p.classList.add("d-block");
    }else{
        valided.classList.remove("d-block");
        valided.classList.add("d-none")
        valid_true.classList.remove("d-none");
        valid_true.classList.add("d-block");
    }
  };

let i = 0; 
const numbersDiv = document.getElementById('numbers');
const intervalId = setInterval(() => {
numbersDiv.innerHTML = i.toFixed(1); 
i += 0.4; 
if (i > 4.8) { clearInterval(intervalId); }
}, 500); //

/*
const courses = [
    {
        img: "img/html-400x223.jpg",
        title: "HTML5/CSS3 Essentials",
        description: "Lorem ipsum dolor sit amet consectetur."
    },
    {
        img: "img/wordpress-400x223.jpg",
        title: "WordPress Basic Tutorial",
        description: "Repellat perspiciatis cum! Doloremque ea viverra."
    },
    {
        img: "img/ecommerce-400x223.jpg",
        title: "E-Commerce Course",
        description: "Ut ullamcorper viverra neque a porttitor."
    }
];

const container = document.getElementById('course-container');

courses.forEach(course => {
    const col = document.createElement('div');
    col.className = 'col-md-4 py-2';

    col.innerHTML = `
        <img src="${course.img}" alt="" class="w-100">
        <div class="item">
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <button class="btn">see more...</button>
        </div>
    `;

    container.appendChild(col);
});

const opinions = [
    {
        img: "img/online-programming-course-review-01.jpg",
        text: "“Massa amet, at dolor tellus pellentesque aenean in eget massa tincidunt habitasse volutpat adipiscing sed id sit auctor eu vivamus nulla.”",
        name: "Emma Hart",
        stars: 5
    },
    {
        img: "img/online-programming-course-review-02.jpg",
        text: "“Ut morbi felis, felis massa quam sit massa, amet, bibendum pulvinar elit in adipiscing amet imperdiet ac felis congue enim, elementum orci.”",
        name: "Eddie Johnson",
        stars: 5
    },
    {
        img: "img/online-programming-course-review-03.jpg",
        text: "“Donec in varius facilisis justo, curabitur aliquet sit justo sed sit interdum diam dolor ornare quis a felis adipiscing hendrerit quisque enim.”",
        name: "Jonathan Doe",
        stars: 5
    },
    {
        img: "img/online-programming-course-review-04.jpg",
        text: "“Pulvinar dui vitae enim, diam et nulla elit nam leo lacinia et, a, pulvinar gravida enim in blandit mauris vitae volutpat urna، sed justo hendrerit.”",
        name: "Mike Edward",
        stars: 5
    }
];

const opinion = document.getElementById('opinion-container');

opinions.forEach(opinions => {
    const col = document.createElement('div');
    col.className = 'col-md-6';

    col.innerHTML = `
        <div class="opinion">
            <img src="${opinions.img}" alt="">
            <p>${opinions.text}</p>
            <h5>${opinions.name}</h5>
            <div class="stars">
                ${'★'.repeat(opinions.stars)}
            </div>
        </div>
    `;

    opinions.appendChild(col);
});

*/

const courses = [
    {
        img: "img/html-400x223.jpg",
        title: "HTML5/CSS3 Essentials",
        description: "Lorem ipsum dolor sit amet consectetur."
    },
    {
        img: "img/wordpress-400x223.jpg",
        title: "WordPress Basic Tutorial",
        description: "Repellat perspiciatis cum! Doloremque ea viverra."
    },
    {
        img: "img/ecommerce-400x223.jpg",
        title: "E-Commerce Course",
        description: "Ut ullamcorper viverra neque a porttitor."
    }
];

const containers = document.getElementById('course-container');

let url = {
    href_one: "Html&csscource.html",
    href_two: "WordPresscource.html",
    href_three: "E-Commerce Course.html"
};

courses.forEach((course, i) => {
    const col = document.createElement('div');
    col.className = 'col-md-4 py-2';

    // Access the URL based on the index
    const courseUrl = Object.values(url)[i];

    col.innerHTML = `
        <img src="${course.img}" alt="" class="w-100">
        <div class="item">
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <a class="btn" href="${courseUrl}">see more...</a>
        </div>
    `;

    containers.appendChild(col);
});

const opinions = [
    {
        img: "img/online-programming-course-review-01.jpg",
        text: "“Massa amet, at dolor tellus pellentesque aenean in eget massa tincidunt habitasse volutpat adipiscing sed id sit auctor eu vivamus nulla.”",
        name: "Emma Hart",
        stars: 5
    },
    {
        img: "img/online-programming-course-review-02.jpg",
        text: "“Ut morbi felis, felis massa quam sit massa, amet, bibendum pulvinar elit in adipiscing amet imperdiet ac felis congue enim, elementum orci.”",
        name: "Eddie Johnson",
        stars: 5
    },
    {
        img: "img/online-programming-course-review-03.jpg",
        text: "“Donec in varius facilisis justo, curabitur aliquet sit justo sed sit interdum diam dolor ornare quis a felis adipiscing hendrerit quisque enim.”",
        name: "Jonathan Doe",
        stars: 5
    },
    {
        img: "img/online-programming-course-review-04.jpg",
        text: "“Pulvinar dui vitae enim, diam et nulla elit nam leo lacinia et, a, pulvinar gravida enim in blandit mauris vitae volutpat urna، sed justo hendrerit.”",
        name: "Mike Edward",
        stars: 5
    }
];

const opinionContainer = document.getElementById('opinion-container');

opinions.forEach(opinion => {
    const col = document.createElement('div');
    col.className = 'col-md-6 py-5';

    col.innerHTML = `
        <div class="opinion">
            <img src="${opinion.img}" alt="">
            <p>${opinion.text}</p>
            <h5>${opinion.name}</h5>
            <div class="stars">
                ${'★'.repeat(opinion.stars)}
            </div>
        </div>
    `;

    opinionContainer.appendChild(col);
});
