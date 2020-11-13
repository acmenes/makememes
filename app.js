const submit = document.getElementById("submit")
const topTextInput = document.querySelector("input[name='toptext']")
const bottomTextInput = document.querySelector("input[name='bottomtext']")
const imgInput = document.querySelector("input[name='imglink']")
const imgDiv = document.querySelector("#meme")

//append your image to the div container, and the text to the image
//create a clear button like you did in the todolist
//is there a way you can be able to save the image you create?

submit.addEventListener("click", function(e){
    e.preventDefault();
    console.log("submit")

    const topText = document.createElement("p")
    topText.setAttribute('id', 'top')
    topText.innerText = `${topTextInput.value}`
    const bottomText = document.createElement("p")
    bottomText.setAttribute('id', 'bottom')
    bottomText.innerText = `${bottomTextInput.value}`

    const memePic = document.createElement("img")
    memePic.setAttribute('src', `${imgInput.value}`)

    const remove = document.createElement("button");
    remove.innerText = "Remove";

    // console.log(topText)
    // console.log(bottomText)
    // console.log(`${imgInput.value}`)

    imgDiv.appendChild(memePic)
    imgDiv.appendChild(topText)
    imgDiv.appendChild(bottomText)
    imgDiv.appendChild(remove)

})

//i need to figure out a way to remove the pic that also removes the text

imgDiv.addEventListener("click", function(e){
    if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
    }
})
