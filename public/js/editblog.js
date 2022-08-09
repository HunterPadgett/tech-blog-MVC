const editBlog = async (event) => {
  event.preventDefault();

  const blog_title = document.getElementById('editBlogTitle').value.trim();
  const blog_body = document.getElementById('editBlogBody').value.trim();
  const editBlogg = document.getElementById('editBlog');
  const id = editBlogg.getAttribute('class');

  if (blog_title && blog_body) {
    const response = await fetch(`/api/blog/${id}`, {
      method: 'PUT',
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

document.getElementById('editBlogForm').addEventListener('submit', editBlog);
