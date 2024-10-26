
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