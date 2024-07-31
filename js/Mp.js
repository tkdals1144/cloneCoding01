// 내상품 탭 영역
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
            tab.addEventListener('click', function() {
            const target = this.getAttribute('data-tab');                    
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            const activeContent = document.querySelector(`.tab-content.${target}`);
            activeContent.classList.add('active');
        });
    });
});

// 모달창 부분
document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById("modal");
  var btn = document.getElementById("showModal");
  var span = document.getElementsByClassName("close")[0];
  if (btn) {
      btn.onclick = function() {
          modal.style.display = "block";
          modal.classList.add('fade-in');
      }
  }
  if (span) {
      span.onclick = function() {
          modal.style.display = "none";
          modal.classList.remove('fade-in');
      }
  }
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
          modal.classList.remove('fade-in');
      }
  }
});

// sort 부분
document.addEventListener('DOMContentLoaded', function() {
    const sortOptions = document.querySelectorAll('.filter .sort div');
    
    sortOptions.forEach(option => {
        option.addEventListener('click', function() {            
            sortOptions.forEach(opt => opt.classList.remove('active'));           
            this.classList.add('active');
        });
    });
});

