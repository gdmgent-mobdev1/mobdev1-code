/**
 * The History API
 */

// Get the navigation links
const navLinks = document.querySelectorAll('.nav-link');

/**
 * When clicking the navigation links
 * @param {*} e
 */
const navLinkClicked = (e) => {
  e.preventDefault();
  const contentId = e.target.dataset.contentid;
  showContent(contentId);
  history.pushState(
    { contentId },
    null,
    `content-${contentId}`
  )
}

/**
 * Showing the content
 * @param {*} name
 */

const contents = document.querySelectorAll('main div');
const showContent = (id) => {
  // ---
  // Hide and show contents
  // ---
  contents.forEach(content => {
    if(content.classList.contains(`content-${id}`)) {
      content.classList.remove('hide')
    } else {
      content.classList.add('hide');
    }
  });

  // ---
  // Change link selected states
  // ---
  navLinks.forEach(navLink => {
    if(navLink.dataset.contentid === id) navLink.classList.add('selected');
    else navLink.classList.remove('selected');
  })
}

// when we click a navigation link
navLinks.forEach((navLink) => navLink.addEventListener('click', navLinkClicked));

// when the pop state changed
window.addEventListener('popstate', (e) => showContent(e.state.contentId));

// immediatly when the page fires, set the initial state to first content
history.replaceState(
  { contentId: navLinks[0].dataset.contentid },
  null,
  `content-${navLinks[0].dataset.contentid}`
)