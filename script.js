/* MECHALOMANIA SYSTEM CORE
    VERSION: 2.1.7.7
*/

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. EFFET MACHINE A ECRIRE (ACCUEIL) ---
    const typewriterElement = document.getElementById("typing-text");
    
    if (typewriterElement) {
        // Le texte à écrire
        const textToType = "AN 2177. L'HUMANITÉ A DISPARU. LES MACHINES RÈGNENT.";
        let i = 0;
        
        // On vide l'élément par sécurité
        typewriterElement.textContent = "";

        function typeWriter() {
            if (i < textToType.length) {
                typewriterElement.textContent += textToType.charAt(i);
                i++;
                // Vitesse variable pour un effet plus naturel (entre 50ms et 100ms)
                setTimeout(typeWriter, Math.random() * 50 + 50);
            }
        }
        // Petit délai avant de commencer
        setTimeout(typeWriter, 500);
    }

    // --- 2. FILTRE DES CARTES (DATABASE) ---
    const filterButtons = document.querySelectorAll(".filter-btn");
    const allCards = document.querySelectorAll(".card");

    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                
                // A. Gestion visuelle des boutons (lequel est actif ?)
                filterButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                // B. Récupération du filtre choisi (all, red, blue, yellow)
                const filterValue = btn.getAttribute("data-filter");

                // C. Logique d'affichage
                allCards.forEach(card => {
                    if (filterValue === "all") {
                        // Si 'tout voir', on affiche tout
                        card.style.display = "block";
                    } else {
                        // Sinon, on vérifie si la carte a la classe demandée
                        if (card.classList.contains(filterValue)) {
                            card.style.display = "block";
                        } else {
                            card.style.display = "none";
                        }
                    }
                });
            });
        });
    }

    // --- 3. INJECTION DU BANDEAU "SOUTENIR" (GLOBAL) ---
    // On vérifie qu'on n'est pas déjà sur la page crowdfunding
    if (!window.location.href.includes("crowdfunding.html")) {
        
        const footer = document.querySelector('footer');
        
        if (footer) {
            // Création de la section
            const ctaSection = document.createElement('section');
            ctaSection.classList.add('container', 'cta-banner-container');
            
            // Le contenu HTML du bandeau (Version Professionnelle)
            ctaSection.innerHTML = `
                <div class="cta-banner">
                    <div class="cta-content">
                        <h3 class="blink-warning">CAMPAGNE DE FINANCEMENT EN COURS</h3>
                        <p>Mechalomania est un projet indépendant qui a besoin de votre soutien pour voir le jour.</p>
                        <p class="cta-sub">Participez à notre levée de fonds et obtenez des éditions exclusives du jeu.</p>
                    </div>
                    <div class="cta-action">
                        <a href="crowdfunding.html" class="btn cta-btn">
                            ACCÉDER À LA CAMPAGNE
                        </a>
                    </div>
                </div>
            `;
            
            // On l'insère juste AVANT le footer
            footer.parentNode.insertBefore(ctaSection, footer);
        }
    }

}); // Fin du DOMContentLoaded
