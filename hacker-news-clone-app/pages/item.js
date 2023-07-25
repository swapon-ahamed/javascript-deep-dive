import Story from "../components/Story.js";
import Comment from "../components/Comment.js";
import view from "../utils/view.js";
import baseUrl from "../utils/baseUrl.js";

export default async function Item() {
    let story = null;
    let HasComments = false;
    let hasError = false;

    try {
         story = await getStory()
         HasComments = story.comments.length > 0;
    } catch (error) {
        hasError = true;
    }

    if(hasError){
        view.innerHTML =   `<div class="error"> Fetch error occured! </div>`;
    }

    view.innerHTML = `
        <div>${Story(story)}</div>
        <hr />
        ${HasComments ? story.comments.map( comment => Comment(comment)).join("") : "No comments" }
    `
}

async function getStory(){
    const storyId = window.location.hash.split('?id=')[1];
    const response = await fetch(`${baseUrl}/item/${storyId}`);
    const story = await response.json();
    return story;

}