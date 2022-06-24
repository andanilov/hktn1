// Model (all data)
import * as Posts from './model/Posts';

// Components controllers (components)
import * as AddPost from './controller/AddPost';
import * as OutputPost from './controller/OutputPost';

// Application logic (components - data relationship)
// Called by components controllers
export function addPost(newPost) {
  Posts.addPost(newPost); // Add data by model post methods
  OutputPost.output(Posts.getPosts()); // Output data by modul OutputPost
}

// Initialization
AddPost.init(); // render add form and set listener
