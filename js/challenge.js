// const comments = []
// const counter = () => document.querySelector("#counter")
// const minusButton = () => document.querySelector("#minus")
// const plusButton = () => document.querySelector("#plus")
// const heartButton = () => document.querySelector("#heart")
// const pauseButton = () => document.querySelector("#pause")
// const createCommentForm = () => document.getElementById('comment-form');
// const createCommentInput = () => document.getElementById('comment-input');


// function reverseClock () {
//   counter().innerHTML = parseInt(counter().innerHTML) -1
// };

// function increaseClock () {
//   counter().innerHTML = parseInt(counter().innerHTML) +1
// };

// function pauseClock () {
//   if (isRunning() === true) { 
//     pauseButton().innerHTML = 'resume'
//     minusButton().disabled = true
//     plusButton().disabled = true
//     heartButton().disabled = true
//   } else {
//     pauseButton().innerHTML = 'pause'
//     minusButton().disabled = false
//     plusButton().disabled = false
//     heartButton().disabled = false
//   }
// };

// function isRunning() {
//   return pauseButton().innerHTML === 'pause' ? true : false
// };

// function increaseHeart() {
   
//   amount = 1
//   amount += 1
//   return `${counter().innerHTML} has been liked ${amount} time(s).`
// };
 
// document.addEventListener('DOMContentLoaded', () => {
//     startCounter()
//     minusButton().addEventListener('click', reverseClock)
//     plusButton().addEventListener('click', increaseClock)
//     heartButton().addEventListener('click', increaseHeart)
//     pauseButton().addEventListener('click', pauseClock)
//     createCommentForm().addEventListener('submit', handleSubmit)
//   });

  

//   function startCounter() {
//     setInterval(() =>{
//       if (isRunning()) {
//         increaseClock()
//       }
//     }, 1000);

//   };

//   function handleSubmit(e) {
//     e.preventDefault();
//     comments.push({
//         title: createCommentInput().value
//     });
//     showComments();
//   };

  

//   const showComments = () => {
//         comments.forEach(comment => renderComment(comment))
      
//     }

//   const renderComment =(comment) => {
//      const li = document.createElement('li');
//      li.innerHTML = comment.title
//      document.getElementById('list').appendChild(li)
//   };

// -------------------------------------------------

  
const commentForm = () => document.getElementById("comment-form")
const commentInput = () => document.getElementById("comment-input")
const likesUl = () => document.querySelector("ul.likes")
const heartLikes = {}

document.addEventListener("DOMContentLoaded", () => {
    startCounter()
    minus.addEventListener("click", minusClick)
    plus.addEventListener("click", plusClick)
    heart.addEventListener("click", heartClick)
    pause.addEventListener("click", pauseClick)
    commentForm().addEventListener("submit", handleSubmit)
})

const isRunning = () => {
    return (pause.innerText === "pause") ? true : false
}

const startCounter = () => {
        setInterval(plusClick, 1000)
}
const plusClick = () => {
    if (isRunning()) {
        counter.innerText =  parseInt(counter.innerText) + 1
    }
}
const minusClick = () => {
    counter.innerText =  parseInt(counter.innerText) - 1
}
const heartClick = () => {
    const time = parseInt(counter.innerText)
    heartLikes[time] ? heartLikes[time] += 1 : heartLikes[time] = 1
    if (document.getElementById(`like-${time}`)) {
        document.getElementById(`like-${time}`).innerText = `${time} was clicked ${heartLikes[time]} times`
    } else {
        const li = document.createElement("li")
        li.id = `like-${time}`
        li.innerText = `${time} was clicked 1 time`
        likesUl().appendChild(li)
    }
}
const pauseClick = () => {
    pause.innerText = (pause.innerText === "pause") ? "resume" : "pause"
    const buttons = [plus, minus, heart]
    buttons.forEach((button) => {
        button.disabled = !button.disabled
    })
}

const handleSubmit = (e) => {
    e.preventDefault()
    const val = commentInput().value
    // const p = document.createElement("p")
    // p.innerHTML = val
    // list.appendChild(p)
    list.innerHTML += `<p>${val}</p>`
    commentForm().reset()
    // commentInput().value = ""
}
  
  
 

