import createBookPreview from './bookPreview';

class View {
  constructor() {
    this.elements = {
      searchOverlay: document.querySelector('[data-search-overlay]'),
      searchTitle: document.querySelector('[data-search-title]'),
    };
  }

  populateSelect(selectElement, data, defaultOptionText) {
    // ... (similar to previous implementation)
  }

  updateBookList(filteredBooks) {
    // ... (similar to previous implementation)
  }

  createPreviewButton(book, authors) {
    return createBookPreview(book, authors);
  }

  showSearchOverlay() {
    this.elements.searchOverlay.open = true;
  }

  closeSearchOverlay() {
    this.elements.searchOverlay.open = false;
  }

  focusOnSearchTitle() {
    this.elements.searchTitle.focus();
  }

  // Add methods for handling settings overlay and other UI elements as needed
}

export default View;
