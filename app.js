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

    const response=await fetch("curl https://background-remover-586033871669.europe-west1.run.app/",{
        method:"POST",
        body:formdata
    });


    const blob = await response.blob();
    const imgUrl = URL.createObjectURL(blob);

    resultImage.src=imgUrl;
    downloadLink.href=imgUrl;
    downloadLink.style.display="inline";





});