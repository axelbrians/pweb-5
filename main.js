function submitForm() {
    const res = validateForm();
    if (res) {
        // alert("Berhasil terdaftar");
        console.log('redirecting to success');
        window.location.href = "./success.html";
    } else {
        // alert("Ada field yang belum terisi");
    }
}

function validateForm() {
    console.log(`jurusan value ${parseInt(document.forms["formPendaftaran"]["jurusan"].value)}`);
    console.log(`vaksi value ${parseInt(document.forms["formPendaftaran"]["status_vaksin"].value)}`)

    if (document.forms["formPendaftaran"]["nama"].value == "") {
        alert("Nama Harus Diisi.");
        document.forms["formPendaftaran"]["nama"].focus();
        return false;
    }

    if (document.forms["formPendaftaran"]["nrp"].value == "") {
        alert("NRP Harus Diisi.");
        document.forms["formPendaftaran"]["nrp"].focus();
        return false;
    } else if (
        document.forms["formPendaftaran"]["nrp"].value.length > 16 || 
        document.forms["formPendaftaran"]["nrp"].value.length < 10 
    ) {
        alert("NRP hanya boleh 10-16 digit.");
        document.forms["formPendaftaran"]["nrp"].focus();
        return false;
    }
    
    if (document.forms["formPendaftaran"]["email"].value == "") {
        alert("Email Harus Diisi.");
        document.forms["formPendaftaran"]["email"].focus();
        return false;
    }
    
    if (parseInt(document.forms["formPendaftaran"]["jurusan"].value) < 1) {
        alert("Harap Pilih Jurusan.");
        document.forms["formPendaftaran"]["jurusan"].focus();
        return false;
    }

    if (parseInt(document.forms["formPendaftaran"]["status_vaksin"].value) < 1) {
        alert("Harap Pilih Status.");
        document.forms["formPendaftaran"]["status_vaksin"].focus();
        return false;
    }

    return true;
}