setTimeout(function() {
      document.querySelectorAll('.reveal').forEach(function(el) {
        el.classList.add('is-in');
      });
    }, 4000);

document.addEventListener('DOMContentLoaded', () => {
    // 1. REVEAL AL HACER SCROLL CON INTERSECTIONOBSERVER
    // La sección de grúa usa las mismas clases .reveal que el resto del sitio.
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            obs.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.1
      });
      reveals.forEach(el => observer.observe(el));
    } else {
      reveals.forEach(el => el.classList.add('is-in'));
    }

    // 2. SCROLL LISTENER PARA WHATSAPP FAB Y PARALLAX HERO
    const fabContainer = document.getElementById('whatsappFabContainer');
    const heroPhoto = document.getElementById('heroPhoto');
    const heroSection = document.getElementById('heroSection');
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.pageYOffset || document.documentElement.scrollTop;

          if (fabContainer) {
            if (scrollY > 350) {
              fabContainer.classList.add('is-visible');
            } else {
              fabContainer.classList.remove('is-visible');
            }
          }

          if (heroPhoto && scrollY < 900) {
            heroPhoto.style.transform = `scale(1.02) translateY(${scrollY * 0.12}px)`;
          }

          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // 3. DEPTH EFFECT EN HERO AL MOVER EL RATÓN
    if (heroSection && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        if (heroPhoto) {
          heroPhoto.style.transform = `scale(1.04) translate(${x * -14}px, ${y * -14}px)`;
        }
      }, { passive: true });

      heroSection.addEventListener('mouseleave', () => {
        if (heroPhoto) {
          heroPhoto.style.transform = 'scale(1.02) translate(0px, 0px)';
        }
      });
    }
  });
