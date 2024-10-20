
// Fonction pour ajouter un message dans le livre d'or
function addMessage() {
    const message = document.getElementById("message").value;
    if (message.trim()) {
        const messageContainer = document.createElement("div");
        messageContainer.textContent = message;
        document.getElementById("messages").appendChild(messageContainer);
        document.getElementById("message").value = "";
    }
}

// Gestion du téléversement de photos
document.getElementById("photo-upload").addEventListener("change", function() {
    const files = this.files;
    const gallery = document.getElementById("photo-gallery");

    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const img = document.createElement("img");
            img.src = event.target.result;
            gallery.appendChild(img);
        };
        reader.readAsDataURL(files[i]);
    }
});
