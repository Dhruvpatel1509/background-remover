const imageInput = document.getElementById('imageInput');
const removeBtn = document.getElementById('removeBtn');
const resultImage = document.getElementById('resultImage');
const downloadLink = document.getElementById('downloadLink');

removeBtn.addEventListener("click", async() => {
    const file = imageInput.files[0];
    
    if (!file){
        return;
    }

    const formdata = new FormData();
    formdata.append("file",file);

    const response=await fetch("http://127.0.0.1:8000/remove-bg",{
        method:"POST",
        body:formdata
    });


    const blob = await response.blob();
    const imgUrl = URL.createObjectURL(blob);

    resultImage.src=imgUrl;
    downloadLink.href=imgUrl;
    downloadLink.style.display="inline";





});