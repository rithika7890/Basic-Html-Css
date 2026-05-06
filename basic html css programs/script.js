const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
const navLinkItems = document.querySelectorAll('.nav-links li');
navLinkItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    btn.style.backgroundColor = 'blue';
    alert('Button clicked!');
}); 
const images = [
    {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=675&fit=crop',
        title: 'Sky Paradise',
        description: 'Vibrant sunset clouds painting the heavens in brilliant oranges and purples, creating a dreamlike atmosphere.'
    },
    {
        url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=675&fit=crop',
        title: 'Mountain Serenity',
        description: 'Majestic snow-capped peaks rising above the clouds, offering a breathtaking view of nature\'s grandeur.'
    },
    {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=675&fit=crop',
        title: 'Alpine Meadow',
        description: 'Rolling green hills dotted with wildflowers, where nature\'s beauty blooms in endless splendor.'
    },
    {
        url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe3e?w=1200&h=675&fit=crop',
        title: 'Historic Landscapes',
        description: 'Weathered stone structures stand as silent witnesses to centuries of history and timeless beauty.'
    },
    {
        url: 'https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?w=1200&h=675&fit=crop',
        title: 'Cosmic Dreams',
        description: 'The night sky ablaze with stars, painting constellations that inspire wonder and cosmic dreams.'
    }
];