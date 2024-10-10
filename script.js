document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mobile_btn').addEventListener('click', function() {
        document.getElementById('mobile_menu').classList.toggle('active');
    });

	window.addEventListener('scroll', function () {
		const header = document.querySelector('header');
		const scrollPosition = window.scrollY - header.offsetHeight;
	
		let activeSectionIndex = 0;
	
		if (scrollPosition <= 0) {
			header.style.boxShadow = 'none';
		} else {
			header.style.boxShadow = '5px 1px 5px rgba(0, 0, 0, 0.1)';
		}
	
		const sections = document.querySelectorAll('section');
		const navItems = document.querySelectorAll('.nav-item');
	
		sections.forEach(function (section, i) {
			const sectionTop = section.offsetTop - 96;
			const sectionBottom = sectionTop + section.offsetHeight;
	
			if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
				activeSectionIndex = i;
			}
		});
	
		navItems.forEach(function (navItem, index) {
			if (index === activeSectionIndex) {
				navItem.classList.add('active');
			} else {
				navItem.classList.remove('active');
			}
		});
	}); 
	ScrollReveal().reveal('#cta', {
		origin: 'left',
		duration: 2000,
		distance: '20%'
	  });
	  

	  ScrollReveal().reveal('.feedback', {
		origin: 'right',
		duration: 1000,
		distance: '20%'
	  });
	});

		
