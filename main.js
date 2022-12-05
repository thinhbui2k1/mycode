


function checkEmail(email){
    //Kiểm tra tính đúng sai của email
    return   /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


function save(){
    let hovaten = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let dienthoai= document.getElementById('phone').value;
    let quequan= document.getElementById('quequan').value;
    let gender = '';


    if(document.getElementById('nam').checked){
        gender = document.getElementById('nam').value;

    }else if(document.getElementById('nu').checked){
        gender = document.getElementById('nu').value;
    }


            
    if(_.isEmpty(hovaten)){
        hovaten = '';
        document.getElementById('ten_loi').innerHTML = 'Lỗi!!!';
    }else if(hovaten.trim().length <= 5){
        document.getElementById('ten_loi').innerHTML = 'Lỗi!!!';
    }
    
    else{
        document.getElementById('ten_loi').innerHTML = '';
    }



    if(_.isEmpty(email)){
        email = '';
        document.getElementById('email_loi').innerHTML = 'Lỗi!!!';
    }else if(!checkEmail(email)){
        document.getElementById('email_loi').innerHTML = 'Không đúng định dạng';
    }else{
        document.getElementById('email_loi').innerHTML = '';
    }

     if(_.isEmpty(dienthoai)){
        dienthoai = '';
        document.getElementById('phone_loi').innerHTML = 'Lỗi!!!';
    }else if(dienthoai.trim().length <= 5){
        document.getElementById('phone_loi').innerHTML = 'Lỗi!!!';
    }else if(dienthoai.trim().length > 10){
        document.getElementById('phone_loi').innerHTML = 'Lỗi!!!';
    }else{
        document.getElementById('phone_loi').innerHTML = '';
    }



     if(_.isEmpty(quequan)){
        quequan = '';
        document.getElementById('quequan_loi').innerHTML = 'Lỗi!!!';
    }else if(quequan.trim().length <= 5){
        document.getElementById('quequan_loi').innerHTML = 'Lỗi!!!';
    }else if(quequan.trim().length > 50){
        document.getElementById('quequan_loi').innerHTML = 'Lỗi!!!';
    }else{
        document.getElementById('quequan_loi').innerHTML = '';
    }


    if(_.isEmpty(gender)){
        gender = '';
        document.getElementById('gender_loi').innerHTML = 'Lỗi!!!!';
    }else{
        document.getElementById('gender_loi').innerHTML = '';
    }


    if(hovaten && email && dienthoai && quequan && gender){
        //lưu thông tin sinh viên
        let student = localStorage.getItem('student') ? JSON.parse(localStorage.getItem('student')) : [] ;
        
        student.push({
            fullname: hovaten,
            email: email,
            phone: dienthoai,
            address: quequan,
            gender: gender,
        });
        localStorage.setItem('student', JSON.stringify(student));
        this.render();

       
      

    }
}

function render(){
    let student = localStorage.getItem('student') ? JSON.parse(localStorage.getItem('student')) : [] ;
    console.log(student.length);
    if (student.length ===  0) return false; 
    let table = `<tr>
        <td>#</td>
        <td>Họ và tên</td>
        <td>Email</td>
        <td>Điện thoại</td>
        <td>Giới Tính</td>
        <td>Địa chỉ</td>
        <td>Hành động</td></tr>`;
              
    student.forEach((student, index) => {
        index++;
        table += `<tr>
            <td>${index}</td>
            <td>${student.fullname}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${student.gender}</td>
            <td>${student.address}</td>
             <td>
                <a href='#'>Edit</a> | <a href=''#>Delete</a>
            </td>
            </tr>`;
        })

    document.getElementById('bang').innerHTML = table;   
}