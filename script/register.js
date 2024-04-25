function register(){
    const $name = $("#name").val();
    const $emailaddress = $("#email").val();
    const $Password = $("#password").val();
    const $confirmpassword = $("#confirm-password").val();
    const $checkbox = $("#checkbox").prop('checked');

    if($name == "" || $emailaddress == "" || $Password == "" || $confirmpassword == ""){
        alert('data harus diisi!');
        return;
    }
    if(!gmail($emailaddress)){
        alert('email address harus pakai format @email.com')
        return;
    }
    if($confirmpassword != $Password){
        alert('konfirmasi password tidak sama')
        return;
    }
    if(!$checkbox){
        alert('anda harus menyetujui syarat dan ketentuan yanng berlaku')
        return;
    }
}

function gmail($emailaddress){
    const emailSplit = email.split('@')
        if (emailSplit.length !== 2) {
            return false
        }
        if (emailSplit[1] !== 'gmail.com') {
            return false
        }
        return true
}