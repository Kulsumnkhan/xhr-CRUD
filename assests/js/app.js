const cl = console.log;

const postContainer = document.getElementById('postContainer');

const base_url = `https://jsonplaceholder.typicode.com`;
const post_url = `${base_url}/posts`;

const templating = (arr) => {
    let result = ``;
    arr.forEach(post => {
        result += `
            <div class="col-md-4 my-3">
                <div class="card mb-2 postCard h-100" id="${post.id}">
                    <div class="card-header">
                        <h3 class="m-0">${post.title}</h3>
                    </div>
                    <div class="card-body">
                        <p class="m-0">${post.body}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <button class="btn btn-outline-primary btn-sm">Edit</button>
                        <button class="btn btn-outline-danger btn-sm">Remove</button>
                    </div>
                </div>
            </div>
        `
    });
    postContainer.innerHTML = result;
}

const fetchPosts = () => {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", post_url);

    xhr.onload = function () {
        cl(xhr.status)
        if (xhr.status >= 200 && xhr.status < 300) {
            let data = JSON.parse(xhr.response)
            cl(data) //templating
            templating(data)
        }
    }

    xhr.send();
}

fetchPosts();

