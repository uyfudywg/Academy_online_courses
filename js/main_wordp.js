
//let H_lement = document.getElementById('H_lement');
let H_lement =document.querySelectorAll('#H_lement');
let H_atri = document.querySelectorAll('#H_atri');
let C_lement = document.querySelectorAll('#C_lement');
let C_atri = document.getElementById('C_atri');
let data = document.getElementById('data');
let content_css = document.getElementById('content_css');
console.log(C_lement[0]);
console.log(C_lement.length)
console.log(content_css)
let currentIndex = 0; // Initialize current index
const aside = document.querySelector('.asideee');
function toggleAside() {
    if (aside.style.display === 'none' || aside.style.display === '') {
        aside.style.display = 'block'; 
    } else {
        aside.style.display = 'none'; 
    }
}

let hide_btn =document.getElementById('hide_btn');
let show_button =document.getElementById('show_button')
console.log(show_button)
function apr(){
    aside.style.display = 'none'; 
    show_button.display = 'block';
}

hide_btn.addEventListener('click',apr)

let course = [
    {
    title: "What is WordPress",
    video:"video/vdo.mp4",
    paragraph1: "Nulla et ligula sit amet mauris pharetra semper et ut neque. Vivamus pretium diam id neque convallis viverra. Nullam rutrum lacus vel leo fermentum, non aliquam nisl mollis. Praesent dapibus justo ac suscipit imperdiet.",
    paragraph2: "Sed bibendum velit in elementum pulvinar. Praesent massa dui, faucibus ut ipsum eu, feugiat pretium tellus. Vestibulum pretium eros non lectus egestas, non facilisis felis blandit. Ut congue nunc sit amet erat aliquam, sit amet ornare nunc blandit.",
    paragraph3: "Nullam lacinia lacus ac neque iaculis, et ultrices nisl sagittis. Vivamus at ultrices neque, ac interdum ante. Maecenas est dolor, fermentum vel pulvinar ac, bibendum non elit.",
    },
    {
    title: "How WordPress Works",
    video:"video/vdo.mp4",
    paragraph1: "Nulla et ligula sit amet mauris pharetra semper et ut neque. Vivamus pretium diam id neque convallis viverra. Nullam rutrum lacus vel leo fermentum, non aliquam nisl mollis. Praesent dapibus justo ac suscipit imperdiet.",
    paragraph2: "Sed bibendum velit in elementum pulvinar. Praesent massa dui, faucibus ut ipsum eu, feugiat pretium tellus. Vestibulum pretium eros non lectus egestas, non facilisis felis blandit. Ut congue nunc sit amet erat aliquam, sit amet ornare nunc blandit.",
    paragraph3: "Nullam lacinia lacus ac neque iaculis, et ultrices nisl sagittis. Vivamus at ultrices neque, ac interdum ante. Maecenas est dolor, fermentum vel pulvinar ac, bibendum non elit.",
    },
    {
        title: "First Steps With WordPress",
        video:"video/vdo.mp4",
        paragraph1: "Nulla et ligula sit amet mauris pharetra semper et ut neque. Vivamus pretium diam id neque convallis viverra. Nullam rutrum lacus vel leo fermentum, non aliquam nisl mollis. Praesent dapibus justo ac suscipit imperdiet.",
        paragraph2: "Sed bibendum velit in elementum pulvinar. Praesent massa dui, faucibus ut ipsum eu, feugiat pretium tellus. Vestibulum pretium eros non lectus egestas, non facilisis felis blandit. Ut congue nunc sit amet erat aliquam, sit amet ornare nunc blandit.",
        paragraph3: "Nullam lacinia lacus ac neque iaculis, et ultrices nisl sagittis. Vivamus at ultrices neque, ac interdum ante. Maecenas est dolor, fermentum vel pulvinar ac, bibendum non elit.",
    },
    {
     title: "WordPress Semantics – Learning the Jargon",
         video:"video/vdo.mp4",
         paragraph1: "Nulla et ligula sit amet mauris pharetra semper et ut neque. Vivamus pretium diam id neque convallis viverra. Nullam rutrum lacus vel leo fermentum, non aliquam nisl mollis. Praesent dapibus justo ac suscipit imperdiet.",
         paragraph2: "Sed bibendum velit in elementum pulvinar. Praesent massa dui, faucibus ut ipsum eu, feugiat pretium tellus. Vestibulum pretium eros non lectus egestas, non facilisis felis blandit. Ut congue nunc sit amet erat aliquam, sit amet ornare nunc blandit.",
         paragraph3: "Nullam lacinia lacus ac neque iaculis, et ultrices nisl sagittis. Vivamus at ultrices neque, ac interdum ante. Maecenas est dolor, fermentum vel pulvinar ac, bibendum non elit.",
     },
     {
         title: "Post Formats",
         video:"video/vdo.mp4",
         paragraph1: "Nulla et ligula sit amet mauris pharetra semper et ut neque. Vivamus pretium diam id neque convallis viverra. Nullam rutrum lacus vel leo fermentum, non aliquam nisl mollis. Praesent dapibus justo ac suscipit imperdiet.",
         paragraph2: "Sed bibendum velit in elementum pulvinar. Praesent massa dui, faucibus ut ipsum eu, feugiat pretium tellus. Vestibulum pretium eros non lectus egestas, non facilisis felis blandit. Ut congue nunc sit amet erat aliquam, sit amet ornare nunc blandit.",
         paragraph3: "Nullam lacinia lacus ac neque iaculis, et ultrices nisl sagittis. Vivamus at ultrices neque, ac interdum ante. Maecenas est dolor, fermentum vel pulvinar ac, bibendum non elit.",
     },
];

function displayCourse(index) {
    if (course.length > index && index >= 0) {
        currentIndex = index; // Update the current index
        let selectedCourse = course[index];
        let output = `
            <h1>${selectedCourse.title}</h1>
            <div class="video">
                <video width="900" height="510" controls>
                    <source src="${selectedCourse.video}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <p>${selectedCourse.paragraph1}</p>
            <p>${selectedCourse.paragraph2}</p>
            <p>${selectedCourse.paragraph3}</p> 
            
        <div class="text_content" ${index === 2 ? 'style="display:block;"' : 'style="display:none;"'} >
        <div class="heading">
            <h5>Lesson Content</h5>
            <p>0% Complete <span>| 0/2 Steps</span></p>
        </div>
        <div class="element_list element ">
            <div class="item-one item">
             <span class="icon"></span>
             <a id="C_lement">WordPress Semantics</a>
            </div>
            <div class="item">
             <span class="icon"></span>
             <a id="C_atri">Post Formats</a>
            </div>
         </div>
    </div>




            
            <div class="ction">
                <a href="#" id="prevButton" ${index === 0 ? 'style="display:none;"' : ''}>
                    <span><i class="fa fa-arrow-left" aria-hidden="true"></i></span>
                    <span>Previous Lesson</span>
                </a>
                <a href="#" id="nextButton" ${index === course.length - 1 ? 'style="display:none;"' : ''}>
                    <span>Next Topic</span>
                    <span><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
                </a>
            </div>
        `;
        data.innerHTML = output;

        // Add event listeners for buttons
        if (index > 0) {
            document.getElementById('prevButton').addEventListener('click', () => displayCourse(currentIndex - 1));
        }
        if (index < course.length - 1) {
            document.getElementById('nextButton').addEventListener('click', () => displayCourse(currentIndex + 1));
        }
    }

   
    if(index==0){
        H_lement[0].style.color='#ffab5e'
        H_atri[0].style.color='#100b08'
        C_lement[0].style.color='#100b08'
        C_atri.style.color='#100b08'
    }
    if(index==1){
        H_lement[0].style.color='#100b08'
        H_atri[0].style.color='#ffab5e'
        C_lement[0].style.color='#100b08'
        C_atri.style.color='#100b08'
    }
    if(index==3){
        H_lement[0].style.color='#100b08'
        H_atri[0].style.color='#100b08'
        C_lement[0].style.color='#ffab5e'
        C_atri.style.color='#100b08'
    }
    if(index==4){
        H_lement[0].style.color='#100b08'
        H_atri[0].style.color='#100b08'
        C_lement[0].style.color='#100b08'
        C_atri.style.color='#ffab5e'
    }
    
    
}

// Add click event listeners for course selections
H_lement[0].addEventListener('click', () => displayCourse(0));
H_lement[1].addEventListener('click', () => displayCourse(0));

H_atri[0].addEventListener('click', () => displayCourse(1));
H_atri[1].addEventListener('click', () => displayCourse(1));

C_lement[0].addEventListener('click', () => displayCourse(3));
//C_lement[1].addEventListener('click', () => displayCourse(3));


content_css.addEventListener('click', () => displayCourse(2));

C_atri.addEventListener('click', () => displayCourse(4));











