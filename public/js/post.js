document.getElementById('new-post-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const newPost = {
      title: title,
      content: content
    };
    console.log("Form data: ", newPost);

    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
      });
      console.log("Response: ", response)
      if (response.ok) {
        console.log('Blog post created');
        window.location.href = '/';
      } else {
        console.error('Failed to create blog post');
      }
    } catch (error) {
      console.error('Error creating blog post:', error);
    }
  });