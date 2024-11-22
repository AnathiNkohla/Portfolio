// Select all accordion headers
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    // Toggle the active state for this header
    const content = header.nextElementSibling;

    // Check if this section is already open
    if (content.classList.contains('open')) {
      content.classList.remove('open');
      content.style.maxHeight = null; // Collapse the content
    } else {
      // Close other open sections
      const openContents = document.querySelectorAll('.accordion-content.open');
      openContents.forEach(openContent => {
        openContent.classList.remove('open');
        openContent.style.maxHeight = null;
      });

      // Open the clicked section
      content.classList.add('open');
      content.style.maxHeight = content.scrollHeight + 'px'; // Expand the content
    }
  });
});
