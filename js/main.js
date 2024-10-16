(() => {

    //variables
    console.log("TenderTouch Start");
    let button = document.querySelector("#button");
    let burgerCon = document.querySelector(".navbar_menu");
    const btnHandle = document.querySelectorAll('.toggle-btn');

    //functions
    function hamburgerMenu() {
        burgerCon.classList.toggle("slide-toggle");
    };

    //event listeners

    btnHandle.forEach(button => {
      button.addEventListener('click', function() {
        const infoBox = this.closest('.info_box_hem').querySelector('.info_box');
  
        if (infoBox.classList.contains('hidden')) {
          infoBox.classList.remove('hidden');
          infoBox.classList.add('visible');
          this.textContent = '-';
        } else {
          infoBox.classList.remove('visible');
          infoBox.classList.add('hidden');
          this.textContent = '+';
        }
      });
    });

    button.addEventListener("click", hamburgerMenu, false);		



  })();