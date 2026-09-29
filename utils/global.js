document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // --- DOM Elements ---
    const menuBtn = document.getElementById('menuBtn');
    const menuPage = document.getElementById('menuPage');
    const closeMenu = document.getElementById('closeMenu');

    const overlay = document.getElementById('overlay');
    const reservationModal = document.getElementById('reservationModal');
    const reservationCloseBtn = document.getElementById('reservationCloseBtn');

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

    const menuButtons = document.getElementById('menuButtons');
    const menuCon = document.getElementById('menuCon');

    // --- Data ---
    const flagMap = {
        en: 'fi-gb',
        ru: 'fi-ru',
        uz: 'fi-uz'
    };

    const MenuBtns = [
        { id: 1, label: 'Breakfast' },
        { id: 2, label: 'Raw' },
        { id: 3, label: 'Bruschetts' },
        { id: 4, label: 'Salads' },
        { id: 5, label: 'Meat' },
        { id: 6, label: 'Fish' }
    ];

    const MenuData = [
        { id: 1, url: "./assets/menufood1.png", title: "Fried eggs from three eggs", price: "250₽", type: "Breakfast" },
        { id: 2, url: "./assets/menufood2.png", title: "Omelet from three eggs", price: "250₽", type: "Breakfast" },
        { id: 3, url: "./assets/menufood3.png", title: "Homemade syrniki", price: "490₽", type: "Breakfast" },
        { id: 4, url: "./assets/menufood4.png", title: "Pancakes", price: "190₽", type: "Breakfast" },
        { id: 5, url: "./assets/menufood5.png", title: "Porridge with berries and pine nuts", price: "450₽", type: "Breakfast" },
        { id: 6, url: "./assets/menufood6.png", title: "Scramble", price: "290₽", type: "Raw" },
        { id: 7, url: "./assets/menufood7.png", title: "Eggs Benedict with salmon", price: "850₽", type: "Raw" },
        { id: 8, url: "./assets/menufood8.png", title: "Eggs Benedict with bacon", price: "650₽", type: "Raw" },
        { id: 9, url: "./assets/menufood9.png", title: "Buckwheat porridge with avocado", price: "490₽", type: "Raw" },
        { id: 10, url: "./assets/menufood10.png", title: "Cobb salad with salmon", price: "890₽", type: "Raw" },
        { id: 11, url: "./assets/menufood1.png", title: "Fried eggs from three eggs", price: "250₽", type: "Bruschetts" },
        { id: 12, url: "./assets/menufood2.png", title: "Omelet from three eggs", price: "250₽", type: "Bruschetts" },
        { id: 13, url: "./assets/menufood3.png", title: "Homemade syrniki", price: "490₽", type: "Bruschetts" },
        { id: 14, url: "./assets/menufood4.png", title: "Pancakes", price: "190₽", type: "Bruschetts" },
        { id: 15, url: "./assets/menufood5.png", title: "Porridge with berries and pine nuts", price: "450₽", type: "Bruschetts" },
        { id: 16, url: "./assets/menufood6.png", title: "Scramble", price: "290₽", type: "Salads" },
        { id: 17, url: "./assets/menufood7.png", title: "Eggs Benedict with salmon", price: "850₽", type: "Salads" },
        { id: 18, url: "./assets/menufood8.png", title: "Eggs Benedict with bacon", price: "650₽", type: "Salads" },
        { id: 19, url: "./assets/menufood9.png", title: "Buckwheat porridge with avocado", price: "490₽", type: "Salads" },
        { id: 20, url: "./assets/menufood10.png", title: "Cobb salad with salmon", price: "890₽", type: "Salads" },
        { id: 21, url: "./assets/menufood1.png", title: "Fried eggs from three eggs", price: "250₽", type: "Meat" },
        { id: 22, url: "./assets/menufood2.png", title: "Omelet from three eggs", price: "250₽", type: "Meat" },
        { id: 23, url: "./assets/menufood3.png", title: "Homemade syrniki", price: "490₽", type: "Meat" },
        { id: 24, url: "./assets/menufood4.png", title: "Pancakes", price: "190₽", type: "Meat" },
        { id: 25, url: "./assets/menufood5.png", title: "Porridge with berries and pine nuts", price: "450₽", type: "Meat" },
        { id: 26, url: "./assets/menufood6.png", title: "Scramble", price: "290₽", type: "Fish" },
        { id: 27, url: "./assets/menufood7.png", title: "Eggs Benedict with salmon", price: "850₽", type: "Fish" },
        { id: 28, url: "./assets/menufood8.png", title: "Eggs Benedict with bacon", price: "650₽", type: "Fish" },
        { id: 29, url: "./assets/menufood9.png", title: "Buckwheat porridge with avocado", price: "490₽", type: "Fish" },
        { id: 30, url: "./assets/menufood10.png", title: "Cobb salad with salmon", price: "890₽", type: "Fish" }
    ];

    let activeCategory = 'Breakfast';
    let translations = {};
    let currentLang = localStorage.getItem('appLang') || 'en';

    const openReservationModal = () => {
        body.classList.add('overflow-hidden');
        overlay?.classList.remove('hidden');
        overlay?.classList.add('flex');
    };

    const closeReservationModal = () => {
        body.classList.remove('overflow-hidden');
        overlay?.classList.remove('flex');
        overlay?.classList.add('hidden');
    };

    function renderMenuItems(category) {
        if (!menuCon) return;
        const filteredData = MenuData.filter(item => item.type === category);

        if (filteredData.length === 0) {
            menuCon.innerHTML = `<p class="text-gray-500 py-10">Ushbu kategoriyada taomlar topilmadi.</p>`;
            return;
        }

        menuCon.innerHTML = filteredData.map(item => `
            <div class="w-[300px] max-sm:w-full border border-[#3333337c] flex flex-col items-center justify-between">
                <img class="w-full h-[220px] object-cover" src="${item.url}" alt="${item.title}" />
                <h5 class="py-[20px] text-[18px] font-bold text-[#333] text-center max-w-[90%]">${item.title}</h5>
                <div class="w-[90%] flex justify-between items-center mb-[15px]">
                    <strong class="text-[24px] font-bold text-[#333]">${item.price}</strong>
                    <button class="py-[8px] px-4 bg-[#B59571] font-bold text-[#fff] text-sm hover:opacity-90 transition-opacity">Add to cart</button>
                </div>
            </div>
        `).join("");
    }

    function renderMenuButtons() {
        if (!menuButtons) return;

        menuButtons.innerHTML = MenuBtns.map(item => {
            const isActive = item.label === activeCategory;
            return `
                <button 
                    data-category="${item.label}" 
                    class="menu-btn transition-colors duration-200 font-medium hover:text-[#b59571] pb-1 ${
                        isActive ? 'border-b-2 border-[#B59571] text-[#B59571]' : 'text-[#333]'
                    }"
                >
                    ${item.label}
                </button>
            `;
        }).join("");

        renderMenuItems(activeCategory);
    }

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

        if (translations[lang]) {
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[lang][key]) {
                    element.textContent = translations[lang][key];
                }
            });
        }
    }


    menuBtn?.addEventListener('click', () => {
        body.classList.add('overflow-hidden');
        menuPage?.classList.remove('hidden');
        menuPage?.classList.add('flex');
    });

    closeMenu?.addEventListener('click', () => {
        body.classList.remove('overflow-hidden');
        menuPage?.classList.remove('flex');
        menuPage?.classList.add('hidden');
    });

    document.querySelectorAll('#reservationBtn, .reservation-btn').forEach(btn => {
        btn.addEventListener('click', openReservationModal);
    });

    document.getElementById('reservationBtnMenu')?.addEventListener('click', () => {
        menuPage?.classList.remove('flex');
        menuPage?.classList.add('hidden');
        openReservationModal();
    });

    reservationCloseBtn?.addEventListener('click', closeReservationModal);

    overlay?.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeReservationModal();
        }
    });

    reservationModal?.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    langDropdownBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        const isHidden = langMenu?.classList.contains('hidden');
        mobileLangMenu?.classList.add('hidden');
        mobileDropdownArrow?.classList.remove('rotate-180');

        langMenu?.classList.toggle('hidden');
        dropdownArrow?.classList.toggle('rotate-180', isHidden);
    });

    mobileLangDropdownBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        const isHidden = mobileLangMenu?.classList.contains('hidden');
        langMenu?.classList.add('hidden');
        dropdownArrow?.classList.remove('rotate-180');

        mobileLangMenu?.classList.toggle('hidden');
        mobileDropdownArrow?.classList.toggle('rotate-180', isHidden);
    });

    menuButtons?.addEventListener('click', (e) => {
        const btn = e.target.closest('.menu-btn');
        if (!btn) return;

        activeCategory = btn.getAttribute('data-category');

        document.querySelectorAll('.menu-btn').forEach(b => {
            b.classList.remove('border-b-2', 'border-[#B59571]', 'text-[#B59571]');
            b.classList.add('text-[#333]');
        });

        btn.classList.remove('text-[#333]');
        btn.classList.add('border-b-2', 'border-[#B59571]', 'text-[#B59571]');

        renderMenuItems(activeCategory);
    });

    document.addEventListener('click', (e) => {
        const option = e.target.closest('.lang-option, .mobile-lang-option');
        if (option) {
            const selectedLang = option.getAttribute('data-lang');
            changeLanguage(selectedLang);
            langMenu?.classList.add('hidden');
            mobileLangMenu?.classList.add('hidden');
            dropdownArrow?.classList.remove('rotate-180');
            mobileDropdownArrow?.classList.remove('rotate-180');
            return;
        }

        if (!e.target.closest('#langDropdownBtn') && !e.target.closest('#langMenu')) {
            langMenu?.classList.add('hidden');
            dropdownArrow?.classList.remove('rotate-180');
        }

        if (!e.target.closest('#mobileLangDropdownBtn') && !e.target.closest('#mobileLangMenu')) {
            mobileLangMenu?.classList.add('hidden');
            mobileDropdownArrow?.classList.remove('rotate-180');
        }
    });

    renderMenuButtons();
    loadTranslations();
});