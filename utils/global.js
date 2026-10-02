document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

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
    const productDetailCon = document.getElementById('productDetailCon');

    const flagMap = {
        en: 'fi-gb',
        ru: 'fi-ru',
        uz: 'fi-uz'
    };

    const MenuBtns = [
        { id: 1, key: 'Breakfast', labelKey: 'menuBtnBreakfast' },
        { id: 2, key: 'Raw', labelKey: 'menuBtnRaw' },
        { id: 3, key: 'Bruschetts', labelKey: 'menuBtnBruschetts' },
        { id: 4, key: 'Salads', labelKey: 'menuBtnSalads' },
        { id: 5, key: 'Meat', labelKey: 'menuBtnMeat' },
        { id: 6, key: 'Fish', labelKey: 'menuBtnFish' }
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

    function getTranslatedTitle(item) {
        return translations[currentLang]?.menuData?.[item.id]?.title || item.title;
    }

    function renderMenuItems(category) {
        if (!menuCon) return;
        const filterData = MenuData.filter(item => item.type === category);

        if (filterData.length === 0) {
            const notFoundText = translations[currentLang]?.notFound || "Ushbu kategoriyada taomlar topilmadi.";
            menuCon.innerHTML = `<p class="text-gray-500 py-10">${notFoundText}</p>`;
            return;
        }

        const btnText = translations[currentLang]?.addToCart || "Add to cart";

        menuCon.innerHTML = filterData.map(item => {
            const itemTitle = getTranslatedTitle(item);
            
            return `
                <div data-id="${item.id}" class="menu-card cursor-pointer w-[300px] max-sm:w-full border border-[#3333337c] flex flex-col items-center justify-between">
                    <img class="w-full h-[220px] object-cover" src="${item.url}" alt="${itemTitle}" />
                    <h5 class="py-[20px] text-[18px] font-bold text-[#333] text-center max-w-[90%]">${itemTitle}</h5>
                    <div class="w-[90%] flex justify-between items-center mb-[15px]">
                        <strong class="text-[24px] font-bold text-[#333]">${item.price}</strong>
                        <button class="add-to-cart-btn py-[8px] px-4 bg-[#B59571] font-bold text-[#fff] text-sm hover:opacity-90 transition-opacity">${btnText}</button>
                    </div>
                </div>
            `;
        }).join("");
    }

    function renderProductDetail(productId) {
        if (!productDetailCon) return;
        const product = MenuData.find(item => item.id === Number(productId));

        if (!product) {
            productDetailCon.innerHTML = `<p class="text-center text-red-500 text-xl py-10">Mahsulot topilmadi!</p>`;
            return;
        }

        const lang = translations[currentLang] || {};
        const productTitle = getTranslatedTitle(product);
        const btnText = lang.addToCart || "Add to cart";
        const portionText = lang.portion || "gramm";
        const portionsCountText = lang.portionsCount || "Number of portions:";
        const makeItTastierText = lang.makeItTastier || "Make it even tastier";
        const tigerPrawnsText = lang.tigerPrawns || "Tiger prawns 60 g";

        productDetailCon.innerHTML = `
        <div class="w-full flex justify-center gap-[134px] max-lg:flex-col max-lg:items-center">
            <div class="product-slider-wrapper">
                <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper mySwiper2 mb-4 max-w-[400px]">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img class="w-full h-[350px]" src="${product.url}" alt="${productTitle}" /></div>
                        <div class="swiper-slide"><img class="w-full h-[350px]" src="${product.url}" alt="${productTitle}" /></div>
                        <div class="swiper-slide"><img class="w-full h-[350px]" src="${product.url}" alt="${productTitle}" /></div>
                    </div>
                </div>

                <div thumbsSlider="" class="swiper mySwiper max-w-[400px]">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide cursor-pointer"><img class="w-full h-[80px]" src="${product.url}" alt="${productTitle}" /></div>
                        <div class="swiper-slide cursor-pointer"><img class="w-full h-[80px]" src="${product.url}" alt="${productTitle}" /></div>
                        <div class="swiper-slide cursor-pointer"><img class="w-full h-[80px]" src="${product.url}" alt="${productTitle}" /></div>
                    </div>
                </div>
            </div>

            <div class="w-[310px] max-sm:px-[5%] max-sm:mt-[-30px]">
                <h3 class="text-[32px] font-bold text-[#333]">${productTitle}</h3>
                <hr class="text-[#33333375] my-[35px]" />
                
                <div>
                    <b class="text-[32px] font-bold text-[#333]">${product.price}</b>
                    <span class="font-bold text-[#33333375]">/ 400 ${portionText}</span>
                </div>
                
                <p class="font-bold text-[#333] mt-6 mb-[30px]">${portionsCountText}</p>
                <div class="flex gap-5">
                    <input class="w-[84px] h-[58px] border-2 pl-6 text-[22px] outline-hidden text-[#000] border-[#33333375]" type="number" value="1" min="1">
                    <button class="px-[30px] py-[10px] text-[16px] max-sm:text-[14px] text-[#fff] font-bold bg-[#B59571] hover:opacity-90 transition-opacity">${btnText}</button>
                </div>
                
                <hr class="mt-11 mb-3 text-[#33333375]" />
                
                <div>
                    <b class="text-[32px] font-bold text-[#333]">${makeItTastierText}</b>
                    
                    <div class="flex justify-between items-center mt-5">
                        <div class="flex flex-col gap-[5px]">
                            <p class="text-[#33333375] font-bold">${tigerPrawnsText}</p>
                            <b class="text-[20px] font-bold">450 ₽</b>
                        </div>
                            <div class="checkbox-wrapper-33">
                                <label class="checkbox">
                                    <input class="checkbox__trigger visuallyhidden" type="checkbox" />
                                    <span class="checkbox__symbol">
                                    <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 14l8 7L24 7"></path>
                                    </svg>
                                    </span>
                                </label>
                            </div>
                    </div>

                    <div class="flex justify-between items-center mt-5">
                        <div class="flex flex-col gap-[5px]">
                            <p class="text-[#33333375] font-bold">${tigerPrawnsText}</p>
                            <b class="text-[20px] font-bold">450 ₽</b>
                        </div>
                         <div class="checkbox-wrapper-33">
                                <label class="checkbox">
                                    <input class="checkbox__trigger visuallyhidden" type="checkbox" />
                                    <span class="checkbox__symbol">
                                    <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 14l8 7L24 7"></path>
                                    </svg>
                                    </span>
                                </label>
                            </div>
                    </div>
                    <div class="flex justify-between items-center mt-5">
                        <div class="flex flex-col gap-[5px]">
                            <p class="text-[#33333375] font-bold">${tigerPrawnsText}</p>
                            <b class="text-[20px] font-bold">450 ₽</b>
                        </div>
                         <div class="checkbox-wrapper-33">
                                <label class="checkbox">
                                    <input class="checkbox__trigger visuallyhidden" type="checkbox" />
                                    <span class="checkbox__symbol">
                                    <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 14l8 7L24 7"></path>
                                    </svg>
                                    </span>
                                </label>
                            </div>
                    </div>
                    <div class="flex justify-between items-center mt-5">
                        <div class="flex flex-col gap-[5px]">
                            <p class="text-[#33333375] font-bold">${tigerPrawnsText}</p>
                            <b class="text-[20px] font-bold">450 ₽</b>
                        </div>
                         <div class="checkbox-wrapper-33">
                                <label class="checkbox">
                                    <input class="checkbox__trigger visuallyhidden" type="checkbox" />
                                    <span class="checkbox__symbol">
                                    <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 14l8 7L24 7"></path>
                                    </svg>
                                    </span>
                                </label>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        if (typeof Swiper !== 'undefined') {
            setTimeout(() => {
                const swiperThumb = new Swiper('.mySwiper', {
                    spaceBetween: 12,        
                    slidesPerView: 3,       
                    freeMode: true,
                    watchSlidesProgress: true,
                });

                new Swiper('.mySwiper2', {
                    spaceBetween: 10,
                    thumbs: {
                        swiper: swiperThumb,
                    },
                });
            }, 100);
        }
    }

    menuCon?.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            e.stopPropagation();
            return;
        }

        const card = e.target.closest('.menu-card');
        if (card) {
            const productId = card.getAttribute('data-id');
            window.location.href = `menuDetail.html?id=${productId}`;
        }
    });

    function renderMenuButtons() {
        if (!menuButtons) return;

        menuButtons.innerHTML = MenuBtns.map(item => {
            const isActive = item.key === activeCategory;
            const labelText = translations[currentLang]?.[item.labelKey] || item.key;

            return `
                <button 
                    data-category="${item.key}" 
                    data-i18n="${item.labelKey}"
                    class="menu-btn transition-colors duration-200 font-medium hover:text-[#b59571] pb-1 ${
                        isActive ? 'border-b-2 border-[#B59571] text-[#B59571]' : 'text-[#333]'
                    }"
                >
                    ${labelText}
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

            document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
                const key = element.getAttribute('data-i18n-placeholder');
                if (translations[lang][key]) {
                    element.placeholder = translations[lang][key];
                }
            });
        }

        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');

        if (productId && productDetailCon) {
            renderProductDetail(productId);
        } else if (menuCon) {
            renderMenuButtons();
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


async function initApp() {
    await loadTranslations();

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (menuButtons) {
        renderMenuButtons();
    }

    if (menuCon) {
        renderMenuItems(activeCategory);
    }

    if (productId && productDetailCon) {
        renderProductDetail(productId);
    }
}

initApp();
});


function resetForm() {
    const form = document.getElementById('myForm');
    if (form) {
        form.reset();
    }
}



// export function formatUzDigits(digits) {
//   const clean = digits.replace(/\D/g, "").slice(0, UZ_DIGITS_LENGTH);
//   const parts = [
//     clean.slice(0, 2),
//     clean.slice(2, 5),
//     clean.slice(5, 7),
//     clean.slice(7, 9),
//   ].filter(Boolean);

//   return parts.join(" ");
// }

const textVal = document.getElementById("textVal");
const formBtn = document.getElementById("formBtn");
const phoneInput = document.getElementById("phoneInput");
const guest = document.getElementById("guest");
const date = document.getElementById("date");

const UZ_DIGITS_LENGTH = 9;

function formatUzDigits(digits) {
    if (!digits) return "";
    const clean = digits.replace(/\D/g, "").slice(0, UZ_DIGITS_LENGTH);
    const parts = [
        clean.slice(0, 2),
        clean.slice(2, 5),
        clean.slice(5, 7),
        clean.slice(7, 9),
    ].filter(Boolean);
    return parts.join(" ");
}

if (phoneInput) {
    phoneInput.addEventListener("input", (e) => {
        e.target.value = formatUzDigits(e.target.value);
        phoneInput.classList.remove("border-red-400");
    });
}

[textVal, guest, date].forEach(input => {
    if (input) {
        input.addEventListener("input", () => {
            input.classList.remove("border-red-400");
        });
        if (input.type === "date") {
            input.addEventListener("change", () => {
                input.classList.remove("border-red-400");
            });
        }
    }
});

function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "fixed bottom-5 right-5 bg-white text-black px-6 py-3 rounded-lg shadow-lg text-sm font-medium transition-all duration-300 z-50";
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

if (formBtn) {
    formBtn.addEventListener("click", (e) => {
        e.preventDefault();

        [textVal, phoneInput, guest, date].forEach(input => input?.classList.remove("border-red-400"));

        let isValid = true;

        if (textVal.value === "") {
            textVal?.classList.add("border-red-400");
            isValid = false;
        }

        if (phoneInput.value.length < 12) {
            phoneInput?.classList.add("border-red-400");
            isValid = false;
        }

        if (guest.value === "") {
            guest?.classList.add("border-red-400");
            isValid = false;
        }

        if (date.value === "") {
            date?.classList.add("border-red-400");
            isValid = false;
        }

        if (isValid) {
            console.log("Yuborildi", {
                text: textVal.value,
                phone: phoneInput.value,
                guest: guest.value,
                date: date.value
            });

            showToast("Yuborildi");

            textVal.value = "";
            phoneInput.value = "";
            guest.value = "";
            date.value = "";
        }
    });
}