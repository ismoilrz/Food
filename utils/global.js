document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    const menuBtn = document.getElementById('menuBtn');
    const menuPage = document.getElementById('menuPage');
    const closeMenu = document.getElementById('closeMenu');

    const overlay = document.getElementById('overlay');
    const reservationCloseBtn = document.getElementById('reservationCloseBtn');
    const reservationModal = document.getElementById('reservationModal');

    menuBtn?.addEventListener('click', () => {
        body.classList.add('sc');
        menuPage?.classList.remove('hidden');
        menuPage?.classList.add('active');
    });

    closeMenu?.addEventListener('click', () => {
        body.classList.remove('sc');
        menuPage?.classList.remove('active');
        menuPage?.classList.add('hidden');
    });

    const openReservationModal = () => {
        body.classList.add('sc');
        overlay?.classList.remove('hidden');
        overlay?.classList.add('active');
    };

    const closeReservationModal = () => {
        body.classList.remove('sc');
        overlay?.classList.remove('active');
        overlay?.classList.add('hidden');
    };

    document.addEventListener('click', (e) => {
        if (e.target.closest('#reservationBtnMenu')) {
            menuPage?.classList.remove('active');
            menuPage?.classList.add('hidden');
            openReservationModal();
            return;
        }

        if (e.target.closest('#reservationBtn') || e.target.closest('.reservation-btn')) {
            openReservationModal();
            return;
        }

        if (e.target === overlay || e.target.closest('#reservationCloseBtn')) {
            closeReservationModal();
            return;
        }
    });

    reservationModal?.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    const MenuBtns = [
        {
            id: 1,
            label: 'Breakfast',
        },
        {
            id: 2,
            label: 'Raw',
        },
        {
            id: 3,
            label: 'Bruschetts',
        },
        {
            id: 4,
            label: 'Salads',
        },
        {
            id: 5,
            label: 'Meat',
        },
        {
            id: 6,
            label: 'Fish',
        }
    ]

    const MenuData = [
        {
            id: 1,
            url: "../assets/menufood1.png",
            title: "Fried eggs from three eggs",
            price: "250₽",
            type: "Breakfast",
        },
        {
            id: 2,
            url: "../assets/menufood2.png",
            title: "Omelet from three eggs",
            price: "250₽",
            type: "Breakfast",
        },
        {
            id: 3,
            url: "../assets/menufood3.png",
            title: "Homemade syrniki",
            price: "490₽",
            type: "Breakfast"

        },
        {
            id: 4,
            url: "../assets/menufood4.png",
            title: "Pancakes",
            price: "190₽",
            type: "Breakfast",
        },
        {
            id: 5,
            url: "../assets/menufood5.png",
            title: "Porridge with berries and pine nuts",
            price: "450₽",
            type: "Breakfast",
        },
        {
            id: 6,
            url: "../assets/menufood6.png",
            title: "Scramble",
            price: "290₽",
            type: "Raw",
        },
        {
            id: 7,
            url: "../assets/menufood7.png",
            title: "Eggs Benedict with salmon",
            price: "850₽",
            type: "Raw",
        },
        {
            id: 8,
            url: "../assets/menufood8.png",
            title: "Eggs Benedict with bacon",
            price: "650₽",
            type: "Raw",
        },
        {
            id: 9,
            url: "../assets/menufood9.png",
            title: "Buckwheat porridge with avocado, poached egg and parmesan",
            price: "490₽",
            type: "Raw"
        },
        {
            id: 10,
            url: "../assets/menufood10.png",
            title: "Cobb salad with salmon",
            price: "890₽",
            type: "Raw",
        },
        {
            id: 11,
            url: "../assets/menufood1.png",
            title: "Fried eggs from three eggs",
            price: "250₽",
            type: "Bruschetts",
        },
        {
            id: 12,
            url: "../assets/menufood2.png",
            title: "Omelet from three eggs",
            price: "250₽",
            type: "Bruschetts",
        },
        {
            id: 13,
            url: "../assets/menufood3.png",
            title: "Homemade syrniki",
            price: "490₽",
            type: "Bruschetts",
        },
        {
            id: 14,
            url: "../assets/menufood4.png",
            title: "Pancakes",
            price: "190₽",
            type: "Bruschetts"
        },
        {
            id: 15,
            url: "../assets/menufood5.png",
            title: "Porridge with berries and pine nuts",
            price: "450₽",
            type: "Bruschetts"
        },
        {
            id: 16,
            url: "../assets/menufood6.png",
            title: "Scramble",
            price: "290₽",
            type: "Salads"
        },
        {
            id: 17,
            url: "../assets/menufood7.png",
            title: "Eggs Benedict with salmon",
            price: "850₽",
            type: "Salads",
        },
        {
            id: 18,
            url: "../assets/menufood8.png",
            title: "Eggs Benedict with bacon",
            price: "650₽",
            type: "Salads"
        },
        {
            id: 19,
            url: "../assets/menufood9.png",
            title: "Buckwheat porridge with avocado, poached egg and parmesan",
            price: "490₽",
            type: "Salads"
        },
        {
            id: 20,
            url: "../assets/menufood10.png",
            title: "Cobb salad with salmon",
            price: "890₽",
            type: "Salads"
        },
        {
            id: 21,
            url: "../assets/menufood1.png",
            title: "Fried eggs from three eggs",
            price: "250₽",
            type: "Meat"
        },
        {
            id: 22,
            url: "../assets/menufood2.png",
            title: "Omelet from three eggs",
            price: "250₽",
            type: "Meat"
        },
        {
            id: 23,
            url: "../assets/menufood3.png",
            title: "Homemade syrniki",
            price: "490₽",
            type: "Meat"
        },
        {
            id: 24,
            url: "../assets/menufood4.png",
            title: "Pancakes",
            price: "190₽",
            type: "Meat"
        },
        {
            id: 25,
            url: "../assets/menufood5.png",
            title: "Porridge with berries and pine nuts",
            price: "450₽",
            type: "Meat"
        },
        {
            id: 26,
            url: "../assets/menufood6.png",
            title: "Scramble",
            price: "290₽",
            type: "Fish"
        },
        {
            id: 27,
            url: "../assets/menufood7.png",
            title: "Eggs Benedict with salmon",
            price: "850₽",
            type: "Fish"
        },
        {
            id: 28,
            url: "../assets/menufood8.png",
            title: "Eggs Benedict with bacon",
            price: "650₽",
            type: "Fish"
        },
        {
            id: 29,
            url: "../assets/menufood9.png",
            title: "Buckwheat porridge with avocado, poached egg and parmesan",
            price: "490₽",
            type: "Fish"
        },
        {
            id: 30,
            url: "../assets/menufood10.png",
            title: "Cobb salad with salmon",
            price: "890₽",
            type: "Fish"
        },
    ]

    const menuButtons = document.getElementById('menuButtons');
    const menuCon = document.getElementById('menuCon');

function renderMenuItems(category) {
    const filteredData = MenuData.filter(item => item.type === category);

    if (filteredData.length === 0) {
        menuCon.innerHTML = `<p class="text-gray-500">Ushbu kategoriyada taomlar mavjud emas.</p>`;
        return;
    }

    menuCon.innerHTML = filteredData.map(item => `
        <div class="w-[300px] max-sm:w-full border border-[#3333337c] flex flex-col items-center justify-between">
            <img class="w-full h-[220px]" src="${item.url}" alt="${item.type}" />
            <h5 class="py-[30px] text-[20px] font-bold text-[#333] text-center max-w-[80%]">${item.title}</h5>
            <div class="w-[80%] flex justify-between mb-[30px]">
                <strong class="text-[32px] font-bold text-[#333]">${item.price}</strong>
                <butoon class="py-[10px] px-5 bg-[#B59571] font-bold text-[#fff]">Add to cart</butoon>
            </div>
        </div>
    `).join("");
}

function renderMenuButtons() {
    let activeCategory = 'Breakfast'; 

    menuButtons.innerHTML = MenuBtns.map(item => {
        const isActive = item.label === activeCategory;
        return `
            <button 
                data-category="${item.label}" 
                class="menu-btn transition-colors duration-200 font-medium hover:text-[#b59571] ${
                    isActive ? 'border-b-2 border-[#B59571]' : 'text-[#333]'
                }"
            >
                ${item.label}
            </button>
        `;
    }).join("");

    renderMenuItems(activeCategory);

    menuButtons.addEventListener('click', (e) => {
        const btn = e.target.closest('.menu-btn');
        if (!btn) return;

        const category = btn.getAttribute('data-category');

        document.querySelectorAll('.menu-btn').forEach(b => {
            b.classList.remove('border-b-2', 'border-[#B59571]');
            b.classList.add('text-[#333]');
        });

        btn.classList.remove('text-[#333]');
        btn.classList.add('border-b-2', 'border-[#B59571]');

        renderMenuItems(category);
    });
}

renderMenuButtons();










    const langDropdownBtn = document.getElementById('langDropdownBtn');
    const langMenu = document.getElementById('langMenu');
    const dropdownArrow = document.getElementById('dropdownArrow');
    const currentLangSpan = document.getElementById('currentLang');
    const currentFlagSpan = document.getElementById('currentFlag');

    const mobileLangDropdownBtn = document.getElementById('mobileLangDropdownBtn');
    const mobileLangMenu = document.getElementById('mobileLangMenu');
    const mobileDropdownArrow = document.getElementById('mobileDropdownArrow');
    const mobileCurrentLang = document.getElementById('mobileCurrentLang');
    const mobileCurrentFlag = document.getElementById('mobileCurrentFlag');

    const flagMap = {
        en: 'fi-gb',
        ru: 'fi-ru',
        uz: 'fi-uz'
    };

    let translations = {};
    let currentLang = localStorage.getItem('appLang') || 'en';

    async function loadTranslations() {
        try {
            const response = await fetch('./data/lang.json');
            if (!response.ok) return;
            translations = await response.json();
            changeLanguage(currentLang);
        } catch (error) {
            console.error("Language file loading error:", error);
        }
    }

    function changeLanguage(lang) {
        if (!translations[lang]) return;

        currentLang = lang;
        localStorage.setItem('appLang', lang);

        if (currentLangSpan && currentFlagSpan) {
            currentLangSpan.textContent = lang.toUpperCase();
            currentFlagSpan.className = `fi ${flagMap[lang]} text-base rounded-[2px]`;
        }

        if (mobileCurrentLang && mobileCurrentFlag) {
            mobileCurrentLang.textContent = lang.toUpperCase();
            mobileCurrentFlag.className = `fi ${flagMap[lang]} text-base rounded-[2px]`;
        }

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    function setupDropdown(btn, menu, arrow) {
        if (!btn || !menu) return;
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isHidden = menu.classList.contains('hidden');
            menu.classList.toggle('hidden');
            if (arrow) arrow.classList.toggle('rotate-180', isHidden);
        });
    }

    setupDropdown(langDropdownBtn, langMenu, dropdownArrow);
    setupDropdown(mobileLangDropdownBtn, mobileLangMenu, mobileDropdownArrow);

    document.addEventListener('click', (e) => {
        const option = e.target.closest('.lang-option, .mobile-lang-option');
        if (option) {
            const selectedLang = option.getAttribute('data-lang');
            changeLanguage(selectedLang);
        }

        // Barcha dropdown menyularini yopish
        langMenu?.classList.add('hidden');
        dropdownArrow?.classList.remove('rotate-180');
        mobileLangMenu?.classList.add('hidden');
        mobileDropdownArrow?.classList.remove('rotate-180');
    });

    loadTranslations();
});