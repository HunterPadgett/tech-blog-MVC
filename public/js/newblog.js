const newBlog = async (event) => {
  event.preventDefault();

  const blog_title = document.getElementById('blog_title').value;
  const blog_body = document.getElementById('blog_body').value;

  if (blog_title && blog_body) {
    const response = await fetch('/api/blog', {
      method: 'POST',
      body: JSON.stringify({ blog_title, blog_body }),
      headers: { 'Content-Type': 'application/json' }
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
