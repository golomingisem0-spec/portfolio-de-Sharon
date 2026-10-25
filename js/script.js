/* ==========================================================================
   PORTFOLIO — SHARON MBUYI BADIBANGA
   Interactions légères, sans dépendance externe.
   ---------------------------------------------------------------------------
   • En-tête : état « scrollé » + lien de navigation actif
   • Menu mobile : <dialog> natif (focus, Échap) + verrouillage du défilement
   • Apparitions : IntersectionObserver, désactivées si mouvement réduit
   • Portrait : bascule automatique du placeholder vers la photo si présente
   • Formulaire : préparation d'un e-mail (repli mailto, aucun serveur)
   ========================================================================== */

(() => {
  'use strict';

  const root = document.documentElement;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----------------------------------------------------------------------
     Année du pied de page
     ---------------------------------------------------------------------- */
  const year = new Date().getFullYear();
  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = String(year);
  });

  /* ----------------------------------------------------------------------
     En-tête : fond au défilement + section active
     ---------------------------------------------------------------------- */
  const header = document.querySelector('[data-header]');
  const navLinks = Array.from(document.querySelectorAll('[data-nav-link]'));
  const scrollSections = Array.from(document.querySelectorAll('main section[id]'));

  let scrollFrame = null;

  const updateOnScroll = () => {
    scrollFrame = null;

    if (header) {
      header.classList.toggle('is-scrolled', window.scrollY > 20);
    }

    if (!scrollSections.length) return;

    const offset = (header ? header.offsetHeight : 0) + 140;
    let activeId = '';

    scrollSections.forEach((section) => {
      if (section.getBoundingClientRect().top <= offset) {
        activeId = section.id;
      }
    });

    navLinks.forEach((link) => {
      if (link.getAttribute('href') === `#${activeId}`) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  const requestScrollUpdate = () => {
    if (scrollFrame !== null) return;
    scrollFrame = window.requestAnimationFrame(updateOnScroll);
  };

  updateOnScroll();
  window.addEventListener('scroll', requestScrollUpdate, { passive: true });
  window.addEventListener('resize', requestScrollUpdate);

  /* ----------------------------------------------------------------------
     Menu mobile
     ---------------------------------------------------------------------- */
  const menu = document.querySelector('#menu-mobile');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const menuClose = menu ? menu.querySelector('.menu__close') : null;
  const desktopQuery = window.matchMedia('(min-width: 1160px)');

  const openMenu = () => {
    if (!menu || menu.open) return;
    menu.showModal();
    document.body.classList.add('menu-open');
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', 'true');
      menuToggle.setAttribute('aria-label', 'Fermer le menu de navigation');
    }
    if (menuClose) menuClose.focus();
  };

  const closeMenu = () => {
    if (menu && menu.open) menu.close();
  };

  if (menu && menuToggle) {
    menuToggle.addEventListener('click', () => {
      if (menu.open) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    menu.querySelectorAll('[data-menu-close]').forEach((trigger) => {
      trigger.addEventListener('click', closeMenu);
    });

    menu.addEventListener('click', (event) => {
      if (event.target === menu) closeMenu();
    });

    menu.addEventListener('close', () => {
      document.body.classList.remove('menu-open');
      if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Ouvrir le menu de navigation');
      }
    });

    // Refermer le menu si la fenêtre passe en affichage bureau.
    desktopQuery.addEventListener('change', (event) => {
      if (event.matches) closeMenu();
    });
  }

  /* ----------------------------------------------------------------------
     Apparitions au défilement
     ---------------------------------------------------------------------- */
  const revealItems = Array.from(document.querySelectorAll('[data-reveal]'));

  if (revealItems.length) {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
      );

      revealItems.forEach((item) => revealObserver.observe(item));
      root.classList.add('reveal-enabled');

      // Un élément qui reçoit le focus clavier devient immédiatement visible.
      document.addEventListener('focusin', (event) => {
        const item = event.target.closest('[data-reveal]');
        if (item) item.classList.add('is-visible');
      });
    }
  }

  /* ----------------------------------------------------------------------
     Photo du portrait
     Dépose simplement le fichier attendu dans assets/images/profile/ :
     le placeholder disparaît automatiquement dès que l’image est chargée.
     ---------------------------------------------------------------------- */
  document.querySelectorAll('[data-photo]').forEach((frame) => {
    const image = frame.querySelector('img');
    if (!image) return;

    const showPhoto = () => {
      if (image.naturalWidth > 0) {
        frame.classList.add('has-photo');
        image.alt = 'Portrait professionnel de Sharon MBUYI BADIBANGA';
      }
    };

    if (image.complete) {
      showPhoto();
    } else {
      image.addEventListener('load', showPhoto, { once: true });
      image.addEventListener(
        'error',
        () => frame.classList.remove('has-photo'),
        { once: true }
      );
    }
  });

  /* ----------------------------------------------------------------------
     Formulaire de contact
     Aucun backend : le formulaire prépare un e-mail via le client de
     messagerie. Voir le commentaire dans index.html pour brancher un service.
     ---------------------------------------------------------------------- */
  const contactForm = document.querySelector('[data-contact-form]');

  if (contactForm) {
    const status = contactForm.querySelector('.form__status');

    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      const data = new FormData(contactForm);
      const name = String(data.get('name') || '').trim();
      const email = String(data.get('email') || '').trim();
      const subject = String(data.get('subject') || '').trim();
      const message = String(data.get('message') || '').trim();
      const address = (contactForm.getAttribute('action') || '')
        .replace(/^mailto:/i, '')
        .split('?')[0];

      const body = [
        `Nom : ${name}`,
        `E-mail : ${email}`,
        '',
        message
      ].join('\r\n');

      const mailto = `mailto:${address}?subject=${encodeURIComponent(`[Portfolio] ${subject}`)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;

      if (status) {
        status.textContent = `Votre messagerie va s’ouvrir avec le message prérempli. Vous pouvez aussi écrire directement à ${address}.`;
      }
    });
  }
})();
