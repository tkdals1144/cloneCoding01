function validateForm() {
    let valid = true;
    const username = document.getElementById('username').value;
    const nickname = document.getElementById('nickname').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('service-terms').checked;
    const privacy = document.getElementById('privacy-policy').checked;
    const marketing = document.getElementById('third-party').checked;
    const ageConfirmation = document.getElementById('age-confirmation').checked;
    if (nickname === "existingNickname") { 
        document.getElementById('nicknameError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('nicknameError').style.display = 'none';
    }
    if (password.length < 6) {
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('confirmPasswordError').style.display = 'none';
    }
    if (!terms || !privacy || !marketing || !ageConfirmation) {
        alert('모든 필수 항목을 확인해주세요.');
        valid = false;
    }
    if (valid) {
        alert('가입이 완료되었습니다!');
        event.preventDefault();
        window.location.href = 'MyPage.html';
    }
    return valid;
}
