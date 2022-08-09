const newBlog = async (event) => {
  event.preventDefault();

  const blog_title = document.getElementById('blogTitle').value.trim();
  const blog_body = document.getElementById('blogBody').value.trim();
  console.log('resposdfsfsfsdfdsfsfnse');

  if (blog_title && blog_body) {
    console.log(blog_body);
    const response = await fetch('/api/blog', {
      method: 'POST',
      body: JSON.stringify({ blog_title, blog_body }),
      headers: { 'Content-type': 'application/json' }
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document.getElementById('blogSubmit').addEventListener('submit', newBlog);
