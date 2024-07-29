async function blogsData() {
  try {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    let blogImage = await fetch(`https://jsonplaceholder.typicode.com/photos`);

    let data = await response.json();
    let image = await blogImage.json();
    console.log(image);
    data.map((d, i) => {
      let title = d.title,
        body = d.body;
      document.querySelector(".blogs").innerHTML += `
         <div class="blog_card">
          <div class="blog_image">
            <img src="${image[i].url}" alt="" />
          </div>
          <div class="blog-details">
            <h3>${title}</h3>
          <p>
            ${body}
          </p>
          <a href="">read more ...</a>
          </div>
        </div>
        
        `;
    });
  } catch {}
}
blogsData();
