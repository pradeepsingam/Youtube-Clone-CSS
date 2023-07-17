let video = [{
    id: "001",
    title: 'TypeScript Crash Course 2023',
    image: '/img/01.webp',
    channelImage: '/img/01.webp',
    duration: '20.00',
    author: 'PradPixel',
    views: '3.4M',
    updatedTime: '6 months ago'
},
{
    id: "002",
    title: 'Asynchronous JavaScript Course (Async/Await, Promises, Callbacks)',
    image: '/img/02.webp',
    channelImage: '/img/01.webp',
    duration: '20.00',
    author: 'PradPixel',
    views: '3.4M',
    updatedTime: '6 months ago'
},
{
    id: "003",
    title: 'Create Animation with ChatGPt 2023',
    image: '/img/03.webp',
    channelImage: '/img/01.webp',
    duration: '20.00',
    author: 'PradPixel',
    views: '3.4M',
    updatedTime: '6 months ago'
},
{
    id: "004",
    title: 'Event Loop- Explaination video full',
    image: '/img/04.webp',
    channelImage: '/img/01.webp',
    duration: '20.00',
    author: 'PradPixel',
    views: '3.4M',
    updatedTime: '6 months ago'
},
{
    id: "005",
    title: 'Understand english in 07 steps simply',
    image: '/img/05.webp',
    channelImage: '/img/01.webp',
    duration: '20.00',
    author: 'PradPixel',
    views: '3.4M',
    updatedTime: '6 months ago'
},
{
    id: "006",
    title: 'Start up bubble bursts 2023',
    image: '/img/06.webp',
    channelImage: '/img/01.webp',
    duration: '20.00',
    author: 'PradPixel',
    views: '3.4M',
    updatedTime: '6 months ago'
},
{
    id: "007",
    title: 'Java full crash course ',
    image: '/img/07.jpg',
    channelImage: '/img/01.jpg',
    duration: '20.00',
    author: 'PradPixel',
    views: '3.4M',
    updatedTime: '6 months ago'
},
{
    id: "008",
    title: 'Dopamine mindset & Drive',
    image: '/img/08.jpg',
    channelImage: '/img/01.jpg',
    duration: '20.00',
    author: 'PradPixel',
    views: '3.4M',
    updatedTime: '6 months ago'
},
{
    id: "009",
    title: 'Node express Projects - Build 4',
    image: '/img/09.jpg',
    channelImage: '/img/01.webp',
    duration: '20.00',
    author: 'PradPixel',
    views: '3.4M',
    updatedTime: '6 months ago'
},
{
    id: "010",
    title: 'Fixing wordpress - Wordpress, PHP, React',
    image: '/img/10.jpg',
    channelImage: '/img/01.webp',
    duration: '20.00',
    author: 'PradPixel',
    views: '3.4M',
    updatedTime: '6 months ago'
},
{
    id: "011",
    title: 'Sanskrit Chant for Healthy Mind & Body | Healing Frequency',
    image: '/img/11.jpg',
    channelImage: '/img/01.webp',
    duration: '20.00',
    author: 'PradPixel',
    views: '3.4M',
    updatedTime: '6 months ago'
},
{
    id: "012",
    title: 'Figma Advanced Tutorial: A 2-hour Masterclass',
    image: '/img/12.jpg',
    channelImage: '/img/01.webp',
    duration: '20.00',
    author: 'PradPixel',
    views: '3.4M',
    updatedTime: '6 months ago'
},]

let videos = '';
video.forEach((item) => {
    videos = videos +
        `
    <div>
    <div class="video-preview">
        <img src="${item.image}" class="thumbnail" />
        <div class="video-time">${item.duration}</div>
    </div>
    <div class="video-data-grid">
        <div>
            <img class="profile-picture" src="/img/my-channel.jpg" />
        </div>
        <div>
            <p class="vd-title">${item.title}</p>
            <p class="vd-author">${item.author}</p>
            <p class="vd-stats">${item.views} views · ${item.updatedTime}</p>
        </div>

    </div>
</div>
    `
    document.querySelector('.grid-box').innerHTML = videos


})


document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.left-sidebar').className.replace('.left-sidebar-toggle')

})