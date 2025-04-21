export const buildpostDetailView = (post) => {

  const postType = post.isPurchase ? 'purchase' : 'sale';
  const imageSrc = post.photo ? post.photo : '../public/no-image-available.jpg';


  const date = new Date(post.updatedAt);

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  const formatted = `${hours}:${minutes} ${day}-${month}-${year}`;


  let postView = `
  <div class="post form">

        <div class='image-container'>
            <img src="${imageSrc}" alt="Product Image" class='post-image'>
            <p class='sale-label ${postType}'>${postType}</p>
        </div>

        <p class="title"><strong>${post.name} - €${post.price}</strong></p>

        <p><strong>Owner: </strong>${post.user.name}</p>

        <p><strong>Description:</strong></p>
        <p>${post.description}</p>

        <p><strong>Last update at: </strong>${formatted}</p>
        
        </div>
      `;

  return postView
}

export const buildRemovepostButton = () => {
  const removeButton = document.createElement("button");
  removeButton.textContent = 'Delete Post';

  return removeButton;
}
