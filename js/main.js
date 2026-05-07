// ===================================
// WorkCulture - Main JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    initNavigation();
    initReviews();
    initCompanies();
    initModal();
    initRatingInput();
    initSearch();
    initFilterTabs();
    initScrollAnimations();
});

// ===================================
// Sample Data
// ===================================
const reviewsData = [
    {
        id: 1,
        company: "TechCorp Mongolia",
        industry: "IT & Технологи",
        logo: "T",
        logoClass: "tech",
        rating: 4.5,
        employmentStatus: "current",
        jobTitle: "Програм хангамжийн инженер",
        content: "Маш сайн багийн уур амьсгалтай, удирдлагууд нь ажилтнуудаа дэмждэг. Цалин салбартаа өрсөлдөхүйц түвшинд байдаг. Гэртээс ажиллах боломж олгодог нь том давуу тал. Хөгжих боломж элбэг, сургалтуудад хамруулдаг.",
        pros: "Уян хатан ажлын цаг, Сайн цалин, Хөгжих боломж",
        cons: "Заримдаа ачаалал ихсэх үе бий",
        helpful: 24,
        date: "2 долоо хоногийн өмнө"
    },
    {
        id: 2,
        company: "Trade & Development Bank",
        industry: "Банк & Санхүү",
        logo: "T",
        logoClass: "finance",
        rating: 3.5,
        employmentStatus: "former",
        jobTitle: "Санхүүгийн мэргэжилтэн",
        content: "Цалин сайн боловч ачаалал их, амралтын өдрүүдээр ажиллуулах тохиолдол бий. Удирдлагууд шаардлага өндөр тавьдаг ч сургалт муу. Даатгал, нийгмийн хангамж сайн.",
        pros: "Сайн цалин, Нийгмийн хангамж",
        cons: "Ачаалал их, Амралтын өдөр ажиллах",
        helpful: 18,
        date: "1 сарын өмнө"
    },
    {
        id: 3,
        company: "Oyu Tolgoi LLC",
        industry: "Уул уурхай",
        logo: "O",
        logoClass: "mining",
        rating: 4.8,
        employmentStatus: "current",
        jobTitle: "Уул уурхайн инженер",
        content: "Олон улсын түвшний компани, хөгжих боломж элбэг. Аюулгүй ажиллагаанд маш их анхаардаг. Цалин, урамшуулал салбартаа тэргүүлэгч. Англи хэл сурах боломж олгодог.",
        pros: "Олон улсын орчин, Өндөр цалин, Аюулгүй ажиллагаа",
        cons: "Хөдөө орон нутагт ажиллах шаардлагатай",
        helpful: 42,
        date: "3 долоо хоногийн өмнө"
    },
    {
        id: 4,
        company: "Unitel LLC",
        industry: "Харилцаа холбоо",
        logo: "U",
        logoClass: "tech",
        rating: 4.2,
        employmentStatus: "current",
        jobTitle: "Маркетингийн менежер",
        content: "Бүтээлч багаамжтай, шинэ санаачилгуудыг дэмждэг. Ажил-амьдралын тэнцвэрийг хадгалах боломжтой. Компанийн соёл эерэг, найзуудтайгаа адил харилцаатай.",
        pros: "Бүтээлч орчин, Тэнцвэртэй амьдрал, Найрсаг хамт олон",
        cons: "Шийдвэр гаргах процесс удаан",
        helpful: 15,
        date: "1 долоо хоногийн өмнө"
    },
    {
        id: 5,
        company: "Mongol Post",
        industry: "Ложистик",
        logo: "M",
        logoClass: "finance",
        rating: 3.8,
        employmentStatus: "former",
        jobTitle: "Гүйцэтгэх захирал",
        content: "Тогтвортой ажил, улсын байгууллага учраас ажил алдах эрсдэл бага. Гэхдээ цалин өсөлт удаан, технологи хуучирсан. Олон жил ажилласан хүмүүстэй бол зохицоход хялбар.",
        pros: "Тогтвортой ажил, Албан ёсоор бүртгэлтэй",
        cons: "Цалин бага, Хуучирсан технологи",
        helpful: 9,
        date: "2 сарын өмнө"
    },
    {
        id: 6,
        company: "G Mobile",
        industry: "Харилцаа холбоо",
        logo: "G",
        logoClass: "tech",
        rating: 4.0,
        employmentStatus: "current",
        jobTitle: "Хэрэглэгчийн үйлчилгээ",
        content: "Хэрэглэгчтэй шууд ажилладаг учраас стресс ихтэй ч багийнхан дэмжлэгтэй. Сормын систем сайн, урамшуулал авч болно. Шинэ залууст туршлага хуримтлуулахад сайн.",
        pros: "Багийн дэмжлэг, Урамшууллын систем",
        cons: "Стресс их, Хэрэглэгчийн гомдол",
        helpful: 12,
        date: "5 хоногийн өмнө"
    }
];

const companiesData = [
    {
        id: 1,
        name: "Oyu Tolgoi LLC",
        industry: "Уул уурхай",
        logo: "O",
        logoClass: "mining",
        rating: 4.8,
        reviewCount: 342,
        recommendation: 94
    },
    {
        id: 2,
        name: "TechCorp Mongolia",
        industry: "IT & Технологи",
        logo: "T",
        logoClass: "tech",
        rating: 4.5,
        reviewCount: 218,
        recommendation: 89
    },
    {
        id: 3,
        name: "Unitel LLC",
        industry: "Харилцаа холбоо",
        logo: "U",
        logoClass: "tech",
        rating: 4.3,
        reviewCount: 195,
        recommendation: 87
    },
    {
        id: 4,
        name: "Khan Bank",
        industry: "Банк & Санхүү",
        logo: "K",
        logoClass: "finance",
        rating: 4.1,
        reviewCount: 456,
        recommendation: 82
    },
    {
        id: 5,
        name: "G Mobile",
        industry: "Харилцаа холбоо",
        logo: "G",
        logoClass: "tech",
        rating: 4.0,
        reviewCount: 167,
        recommendation: 80
    },
    {
        id: 6,
        name: "Trade & Development Bank",
        industry: "Банк & Санхүү",
        logo: "T",
        logoClass: "finance",
        rating: 3.8,
        reviewCount: 289,
        recommendation: 75
    }
];

// ===================================
// Navigation
// ===================================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('nav-menu');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link
        updateActiveNavLink();
    });
    
    // Mobile menu toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }
    
    // Smooth scroll for nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===================================
// Reviews
// ===================================
function initReviews() {
    renderReviews(reviewsData);
    
    // Load more button
    const loadMoreBtn = document.getElementById('loadMoreReviews');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            // In a real app, this would fetch more reviews
            alert('Илүү олон сэтгэгдэл түргэн хугацаанд нэмэгдэнэ!');
        });
    }
}

function renderReviews(reviews) {
    const reviewsGrid = document.getElementById('reviewsGrid');
    if (!reviewsGrid) return;
    
    reviewsGrid.innerHTML = reviews.map(review => createReviewCard(review)).join('');
    
    // Add event listeners to helpful buttons
    document.querySelectorAll('.helpful-btn').forEach(btn => {
        btn.addEventListener('click', handleHelpfulClick);
    });
}

function createReviewCard(review) {
    const stars = generateStars(review.rating);
    const employmentBadge = review.employmentStatus === 'current' 
        ? '<span class="employment-badge current">Одоо ажиллаж байна</span>'
        : '<span class="employment-badge former">Өмнө нь ажиллаж байсан</span>';
    
    return `
        <div class="review-card" data-rating="${review.rating}">
            <div class="review-card-main">
                <div class="review-card-info">
                    <div class="review-company-logo ${review.logoClass}">${review.logo}</div>
                    <div class="review-details">
                        <h3>${review.company}</h3>
                        <div class="rating">
                            <div class="review-stars">${stars}</div>
                            <span class="review-score">${review.rating}</span>
                            ${employmentBadge}
                        </div>
                    </div>
                </div>
            </div>
            
            <p class="review-content">${review.content}</p>
            
            <div class="review-pros-cons">
                <div class="pros-item">
                    <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>${review.pros}</span>
                </div>
                <div class="cons-item">
                    <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    <span>${review.cons}</span>
                </div>
            </div>
            
            <div class="review-actions">
                <div class="review-helpful">
                    <button class="helpful-btn" data-id="${review.id}">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        Тус болсон
                    </button>
                    <span>${review.helpful}</span>
                </div>
                <span class="review-date">${review.date}</span>
            </div>
        </div>
    `;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<span class="star">★</span>';
    }
    
    if (hasHalfStar) {
        stars += '<span class="star">★</span>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<span class="star" style="color: var(--slate-300)">★</span>';
    }
    
    return stars;
}

function handleHelpfulClick(e) {
    const btn = e.currentTarget;
    const countSpan = btn.nextElementSibling;
    let count = parseInt(countSpan.textContent);
    
    if (btn.classList.contains('helpful')) {
        btn.classList.remove('helpful');
        count--;
    } else {
        btn.classList.add('helpful');
        count++;
    }
    
    countSpan.textContent = count;
}

// ===================================
// Companies
// ===================================
function initCompanies() {
    renderCompanies(companiesData);
}

function renderCompanies(companies) {
    const companiesGrid = document.getElementById('companiesGrid');
    if (!companiesGrid) return;
    
    companiesGrid.innerHTML = companies.map(company => createCompanyCard(company)).join('');
}

function createCompanyCard(company) {
    const stars = generateStars(company.rating);
    
    return `
        <div class="company-card">
            <div class="company-card-header">
                <div class="company-card-logo ${company.logoClass}">${company.logo}</div>
                <div class="company-card-info">
                    <h3>${company.name}</h3>
                    <p class="industry">${company.industry}</p>
                </div>
            </div>
            
            <div class="company-card-stats">
                <div class="company-rating-large">
                    <span class="score">${company.rating}</span>
                    <div class="stars">${stars}</div>
                </div>
                <div class="company-stat">
                    <div class="value">${company.reviewCount}</div>
                    <div class="label">Сэтгэгдэл</div>
                </div>
                <div class="company-stat">
                    <div class="value">${company.reviewCount > 100 ? '100+' : company.reviewCount}</div>
                    <div class="label">Ажилтан</div>
                </div>
            </div>
            
            <div class="recommendation-bar">
                <div class="recommendation-label">
                    <span class="text">Зөвлөх хувь</span>
                    <span class="percentage">${company.recommendation}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${company.recommendation}%"></div>
                </div>
            </div>
            
            <div class="company-card-footer">
                <a href="#" class="view-reviews-btn">
                    Сэтгэгдлүүдийг харах
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    `;
}

// ===================================
// Modal
// ===================================
function initModal() {
    const modal = document.getElementById('reviewModal');
    const openButtons = ['writeReviewBtn', 'ctaWriteReview'];
    const closeButton = document.getElementById('modalClose');
    const cancelButton = document.getElementById('cancelReview');
    const form = document.getElementById('reviewForm');
    
    // Open modal
    openButtons.forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.addEventListener('click', () => {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        }
    });
    
    // Close modal functions
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        form.reset();
        resetRating();
        updateCharCount();
    }
    
    // Close button
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }
    
    // Cancel button
    if (cancelButton) {
        cancelButton.addEventListener('click', closeModal);
    }
    
    // Close on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Form submission
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
    
    // Character count
    const reviewText = document.getElementById('reviewText');
    if (reviewText) {
        reviewText.addEventListener('input', updateCharCount);
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form values
    const formData = {
        companyName: document.getElementById('companyName').value,
        jobTitle: document.getElementById('jobTitle').value,
        employmentStatus: document.getElementById('employmentStatus').value,
        rating: document.getElementById('ratingValue').value,
        reviewText: document.getElementById('reviewText').value,
        pros: document.getElementById('pros').value,
        cons: document.getElementById('cons').value,
        anonymous: document.getElementById('anonymous').checked
    };
    
    // Validate rating
    if (!formData.rating) {
        alert('Үнэлгээ оруулна уу!');
        return;
    }
    
    // In a real app, this would send data to server
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Таны сэтгэгдлийг амжилттай илгээлээ! Баярлалаа.');
    
    // Close modal
    document.getElementById('reviewModal').classList.remove('active');
    document.body.style.overflow = '';
}

function updateCharCount() {
    const textarea = document.getElementById('reviewText');
    const charCount = document.getElementById('charCount');
    
    if (textarea && charCount) {
        const length = textarea.value.length;
        charCount.textContent = length;
        
        if (length > 450) {
            charCount.style.color = 'var(--error)';
        } else {
            charCount.style.color = 'var(--text-muted)';
        }
    }
}

// ===================================
// Rating Input
// ===================================
function initRatingInput() {
    const ratingStars = document.querySelectorAll('.rating-star');
    const ratingInput = document.getElementById('ratingValue');
    
    if (!ratingStars.length || !ratingInput) return;
    
    ratingStars.forEach(star => {
        star.addEventListener('click', () => {
            const value = parseInt(star.dataset.value);
            ratingInput.value = value;
            
            // Update star appearance
            ratingStars.forEach((s, index) => {
                if (index < value) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
        
        star.addEventListener('mouseenter', () => {
            const value = parseInt(star.dataset.value);
            ratingStars.forEach((s, index) => {
                if (index < value) {
                    s.style.color = '#fbbf24';
                } else {
                    s.style.color = 'var(--slate-300)';
                }
            });
        });
        
        star.addEventListener('mouseleave', () => {
            const currentValue = parseInt(ratingInput.value) || 0;
            ratingStars.forEach((s, index) => {
                if (index < currentValue) {
                    s.style.color = '#fbbf24';
                } else {
                    s.style.color = 'var(--slate-300)';
                }
            });
        });
    });
}

function resetRating() {
    const ratingStars = document.querySelectorAll('.rating-star');
    const ratingInput = document.getElementById('ratingValue');
    
    if (ratingInput) {
        ratingInput.value = '';
    }
    
    ratingStars.forEach(star => {
        star.classList.remove('active');
        star.style.color = 'var(--slate-300)';
    });
}

// ===================================
// Search
// ===================================
function initSearch() {
    const searchInput = document.getElementById('companySearch');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

function performSearch() {
    const query = document.getElementById('companySearch').value.trim().toLowerCase();
    
    if (!query) {
        alert('Компанийн нэр оруулна уу!');
        return;
    }
    
    // Filter companies
    const filteredCompanies = companiesData.filter(company => 
        company.name.toLowerCase().includes(query) ||
        company.industry.toLowerCase().includes(query)
    );
    
    if (filteredCompanies.length === 0) {
        alert(`"${query}" хайлтаар компани олдсонгүй.`);
        return;
    }
    
    // Scroll to companies section
    const companiesSection = document.getElementById('companies');
    if (companiesSection) {
        companiesSection.scrollIntoView({ behavior: 'smooth' });
        
        // Highlight matching companies (in real app, would filter the grid)
        alert(`${filteredCompanies.length} компани олдлоо!`);
    }
}

// ===================================
// Filter Tabs
// ===================================
function initFilterTabs() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active state
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Filter reviews
            const filter = tab.dataset.filter;
            filterReviews(filter);
        });
    });
}

function filterReviews(filter) {
    let filteredReviews = [...reviewsData];
    
    switch (filter) {
        case 'positive':
            filteredReviews = reviewsData.filter(r => r.rating >= 4);
            break;
        case 'neutral':
            filteredReviews = reviewsData.filter(r => r.rating >= 3 && r.rating < 4);
            break;
        case 'negative':
            filteredReviews = reviewsData.filter(r => r.rating < 3);
            break;
        default:
            filteredReviews = reviewsData;
    }
    
    renderReviews(filteredReviews);
}

// ===================================
// Scroll Animations
// ===================================
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.feature-card, .review-card, .company-card, .step').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);
