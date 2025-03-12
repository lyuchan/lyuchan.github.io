new Vue({
    el: '#app',
    data: {
        config: config,
        selectedImages: [],
        showingImages: false,
        currentIndex: 0
    },
    computed: {
        currentImage() {
            if (this.selectedImages.length === 0) return null;
            return this.selectedImages[this.currentIndex];
        }
    },
    methods: {
        toggleImageSelection(image) {
            const index = this.selectedImages.findIndex(img => img.id === image.id);
            if (index === -1) {
                this.selectedImages.push(image);
            } else {
                this.selectedImages.splice(index, 1);
            }
        },
        isSelected(image) {
            return this.selectedImages.some(img => img.id === image.id);
        },
        startDisplay() {
            if (this.selectedImages.length === 0) {
                alert(this.config.settings.noSelectionWarning);
                return;
            }
            this.showingImages = true;
            this.currentIndex = 0;
        },
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.selectedImages.length;
        },
        resetSelection() {
            this.showingImages = false;
            this.currentIndex = 0;
        }
    }
}); 