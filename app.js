const imageInput = document.getElementById('imageInput');
const removeBtn = document.getElementById('removeBtn');
const resultImage = document.getElementById('resultImage');
const downloadLink = document.getElementById('downloadLink');

removeBtn.addEventListener("click", async () => {
    const file = imageInput.files[0];

    if (!file) {
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await fetch("https://background-remover-586033871669.europe-west1.run.app/", {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error("Server error");
        }

        const blob = await response.blob();
        const imgUrl = URL.createObjectURL(blob);

        resultImage.src = imgUrl;
        downloadLink.href = imgUrl;
        downloadLink.style.display = "inline";

    } catch (error) {
        console.error(error);
        alert("Background removal failed");
    }
});